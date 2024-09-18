'use client';

import ProductCard from "./productCard";
import { addToCart } from "@/sotre/cartSlice";
import { Product } from '@/lib/types';
import { useDispatch } from "react-redux"; // Import the useDispatch from react-redux

interface RelatedProductsProps {
  currentProductId: string;
  relatedProducts: Product[];
}

export default function RelatedProducts({ currentProductId, relatedProducts }: RelatedProductsProps) {
  const dispatch = useDispatch(); // Initialize the dispatch function

  // Filter related products that are not the current product
  const filteredProducts = relatedProducts.filter(product => product.id !== currentProductId);

  // Handle case when there are no related products
  if (filteredProducts.length === 0) {
    return <p className="text-center text-gray-500">No related products found.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold text-thingreen mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 border rounded-lg shadow hover:shadow-lg transition duration-300 ease-in-out">
            {/* Render the ProductCard component */}
            <ProductCard product={product} />

            {/* Add to Cart Button */}
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-thingreen hover:bg-lime-500 text-white px-4 py-2 rounded mt-4 w-full transition duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

