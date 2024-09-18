
'use client'

import Image from "next/image";

interface JuiceItemProps {
  name: string;
  image: string;
  price: number;
  category:string;
}

const JuiceItem: React.FC<JuiceItemProps> = ({ name, image, price , category }) => {
  return (
    <div className="border rounded-lg p-6 text-center bg-white hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
    <Image
      src={image}
      alt={name}
      width={500}  // Example width, adjust according to your image size
      height={192} // Corresponds to h-48 (48 * 4), adjust if necessary
      className="w-full h-48 object-cover rounded-md mb-4"
    />
    <h4 className="font-normal text-black text-lg mb-2">{category}</h4>
    <h3 className="font-bold text-black text-lg mb-2">{name}</h3>
    <p className="text-gray-500 text-md mb-4">₹{price.toFixed(2)}</p>
  </div>
  );
};

export default JuiceItem;
