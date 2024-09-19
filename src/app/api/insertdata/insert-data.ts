import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { groceries, juices, products, categories } from "@/lib/productListing";

const insertCategories = async () => {
  const query = `
    INSERT INTO categories (name , image , description)
    VALUES($1 , $2 , $3)
    ON CONFLICT DO NOTHING;
    `;

  for (const category of categories) {
    const { name, image, description } = category;
    await pool.query(query, [name, image, description]);
  }
};

const insertProducts = async () => {
  const query = `
    INSERT INTO products (name, category_id, image, price, rating, original_price, is_on_sale, description)
    VALUES ($1, (SELECT id FROM categories WHERE name = $2), $3, $4, $5, $6, $7, $8)
    ON CONFLICT DO NOTHING;
  `;

  const allProducts = [...groceries, ...juices, ...products];

  for (const product of allProducts) {
    const {
      name,
      category,
      image,
      price,
      rating,
      originalPrice,
      isOnSale,
      description,
    } = product;
    await pool.query(query, [
      name,
      category,
      image,
      price,
      rating,
      originalPrice,
      isOnSale,
      description,
    ]);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "only POST method is allowed" });
  }

  try {
    await insertCategories();

    await insertProducts();

    res.status(200).json({ message: "Data inserted Successfully!" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Failed to insert data" });
  }
}
