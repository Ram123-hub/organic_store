'use client'
import { selectCart } from '@/sotre/cartSlice';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function CartIcon() {
  const cart = useSelector(selectCart);

  return (
    <Link href="/cartPage"
      className="flex items-center bg-thingreen text-skin px-4 py-2 rounded-full space-x-2">
      {/* Shopping Cart SVG Icon */}
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3h16.5l-1.5 10.5H5.25L3.75 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 13.5h13.5M10.5 17.25a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
      </svg>
      {/* Cart Quantity */}
      <span className="text-lg font-medium">
         <span className="text-red-600 font-bold bg-red-100 px-1 rounded">{cart.totalQuantity}</span>
   </span>
    </Link>
  );
}
