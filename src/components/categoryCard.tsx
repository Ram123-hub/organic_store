'use client'

import Image from 'next/image';
import React from 'react';

interface CategoryCardProps {
  name: string;          // Use 'name' instead of 'title'
  description: string;   // Optional field for category description
  image: string;         // Use 'image' instead of 'imageUrl'
  buttonText: string;    // Static or dynamic button text
  buttonLink: string;    // Link to explore the category
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  name,
  description,
  image,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="bg-gray-500 p-6 shadow-md rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center max-w-xs mx-auto">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
      />
      <h2 className="text-xl sm:text-2xl text-black font-bold mb-2">{name}</h2>
      <p className="text-gray-900 text-sm sm:text-base mb-4">{description}</p>
      <a
        href={buttonLink}
        className="bg-thingreen text-white py-2 px-4 rounded-full inline-block hover:bg-green-700 transition-colors duration-300 ease-in-out"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default CategoryCard;
