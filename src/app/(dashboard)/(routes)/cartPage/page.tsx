

'use client'

import { Navbar } from '@/components/navbar';
import { removeFromCart, selectCart, updateQuantity } from '@/sotre/cartSlice';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="container mx-auto p-6">
        <Link href='/grocery'>
          <h1 className="text-3xl font-bold text-green-700 mb-6">Your Cart</h1>
        </Link>
        {cart.items.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          <>
            <ul className="divide-y divide-gray-200">
              {cart.items.map((item) => (
                <li key={item.id} className="flex flex-col md:flex-row justify-between items-center py-4">
                  <div className="flex items-center mb-4 md:mb-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64} // Corresponds to w-16 (16 * 4 = 64px)
                      height={64} // Corresponds to h-16 (16 * 4 = 64px)
                      className="rounded-lg mr-4"
                    />
                    <span className="text-lg font-medium text-green-900">{item.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
                      }
                      className="w-16 px-2 py-1 text-center border border-gray-300 rounded-md"
                    />
                    <span className="text-green-700 font-semibold">{(item.price * item.quantity).toFixed(2)}</span>
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500 hover:bg-red-100 px-2 py-1 rounded transition-colors duration-200 ease-in-out"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <p className="text-xl font-semibold text-gray-700">Total Products: <span className="text-green-800">{cart.totalQuantity}</span></p>
              <p className="text-2xl font-bold text-green-800 mt-4">
                Total Price: <span className="text-green-900">₹{cart.totalPrice.toFixed(2)}</span>
              </p>

              <button className="bg-thingreen hover:bg-lime-500 text-white px-6 py-3 mt-6 rounded-lg w-full font-semibold transition duration-300 ease-in-out">
                Proceed to Payment
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
