// File: components/GrocerySection.tsx
'use client';
import Link from "next/link";
import JuiceItem from "./juiceItem";
import { Button } from "./ui/button"; // Import Button component
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux
import { addToCart } from "@/sotre/cartSlice";

interface JuiceSectionProps {
  title: string;
  juices: {
    id: string;
    name: string;
    image: string;
    price: number;
    category: 'Fruits' | 'Vegetables' | 'Dairy' | 'Grocery'; // Remove extra quotes
  }[];
}

const JuicesSection: React.FC<JuiceSectionProps> = ({ title, juices }) => {
  const dispatch = useDispatch(); // Initialize the dispatch function

  return (
    <div className="mb-8">
      <h2 className="text-2xl text-thingreen font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {juices.map((juice) => (
          <div key={juice.id} className="bg-white border rounded-lg p-4 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer">
            {/* Link to product details */}
            <Link href={`/productDetails/${juice.id}`}>
              <div>
                <JuiceItem {...juice} /> {/* Pass juice details as props */}
              </div>
            </Link>

            {/* Add to Cart Button for each juice item */}
            <Button 
              onClick={() => dispatch(addToCart(juice))} // Add the juice item to the cart
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

export default JuicesSection;
