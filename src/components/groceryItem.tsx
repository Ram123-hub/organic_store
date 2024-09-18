// File: components/GroceryItem.tsx

'use client'

import Image from "next/image";


interface GroceryItemProps {
  name: string;
  image: string;
  price: number;
  category: string;
}

const GroceryItem: React.FC<GroceryItemProps> = ({ name, image, price, category }) => {
  return (
    <div className="border rounded-lg p-6 text-center bg-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
      <Image
        src={image}
        alt={name}
        width={500} // Set appropriate width if known, replace with actual width if possible
        height={192} // This height corresponds to 48 * 4 (h-48 class), adjust if needed
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h4 className="font-normal text-black text-lg mb-2">{category}</h4>
      <h3 className="font-bold text-black text-lg mb-2">{name}</h3>
      <p className="text-gray-500 text-md mb-4">₹{price.toFixed(2)}</p>
    </div>

  );
};

export default GroceryItem;
