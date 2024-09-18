'use client'
import React from 'react';
import Image from 'next/image';

interface ProductCardProps {
  image: string;
  category: string;
  name: string;
  price: number;
  originalPrice?: number;
  isOnSale?: boolean;
  rating?: number;
}

const TrendingCard: React.FC<ProductCardProps> = ({
  image,
  category,
  name,
  price,
  originalPrice,
  isOnSale,
  rating = 0, // Provide a default value for rating
}) => {
  return (
    <div className="relative p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
      {/* Sale Badge */}
      {isOnSale && (
        <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Sale!
        </span>
      )}
      {/* Product Image */}
      
<Image
  src={image}
  alt={name}
  width={500} // Set appropriate width based on your design, this is a placeholder
  height={192} // The h-48 class corresponds to 192px (48 * 4)
  className="w-full h-48 object-cover rounded-md mb-4"
/>
      {/* Category */}
      <p className="text-sm text-gray-500">{category}</p>
      {/* Product Name */}
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      {/* Star Rating */}
      <div className="flex items-center mb-2">
        {Array(5)
          .fill('')
          .map((_, idx) => (
            <span
              key={idx}
              className={idx < rating ? 'text-yellow-300' : 'text-gray-300'}
            >
              ★
            </span>
          ))}
      </div>
      {/* Price */}
      <div className="text-lg font-bold">
        {isOnSale && originalPrice ? (
          <span className="line-through text-gray-500 mr-2">₹{originalPrice}</span>
        ) : null}
        ₹{price}
      </div>
    </div>
  );
};

export default TrendingCard;
