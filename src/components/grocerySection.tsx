// File: components/GrocerySection.tsx
'use client';
import Link from "next/link";
import GroceryItem from "./groceryItem";
import { Product } from '@/lib/types';
import { Button } from "./ui/button";
import { addToCart } from "@/sotre/cartSlice";
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux

interface GrocerySectionProps {
  title: string;
  groceries: Product[];
}

const GrocerySection: React.FC<GrocerySectionProps> = ({ title, groceries }) => {
  const dispatch = useDispatch(); // Initialize the dispatch function
  return (
    <div className="mb-8">
      <h2 className="text-2xl text-thingreen font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {groceries.map((grocery) => (
          <div key={grocery.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            {/* Link to product details */}
            <Link href={`/productDetails/${grocery.id}`}>
              <div>
                <GroceryItem {...grocery} /> {/* Pass grocery as props */}
              </div>
            </Link>

            {/* Add to Cart Button for each item */}
            <Button 
              onClick={() => dispatch(addToCart(grocery))} // Add the grocery item to the cart
              className="bg-thingreen hover:bg-lime-500 text-white px-4 py-2 rounded mt-2 w-full"
            > 
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrocerySection;
