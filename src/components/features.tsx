'use client'

export default function Features() {
    return (
      <div className="bg-black py-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Free Shipping */}
          <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md">
            <div className="text-green-500 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12h16m-1.5 6h-13l-1.528-3.837A2 2 0 014.045 12H20m-5 0V9a2 2 0 012-2h1.5a2 2 0 012 2v3m0 0l-1.5 6.75"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Free Shipping</h3>
              <p className="text-gray-400">Above $5 Only</p>
            </div>
          </div>
  
          {/* Certified Organic */}
          <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md">
            <div className="text-green-500 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.104 0 2-.896 2-2 0-1.105-.896-2-2-2s-2 .895-2 2c0 1.104.896 2 2 2zm0 6c-4.418 0-8 1.791-8 4v1h16v-1c0-2.209-3.582-4-8-4z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Certified Organic</h3>
              <p className="text-gray-400">100% Guarantee</p>
            </div>
          </div>
  
          {/* Huge Savings */}
          <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md">
            <div className="text-green-500 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-6.364 6.364-3.657 1.465 1.465-3.657 6.364-6.364a2 2 0 112.828 2.828zM4.25 19.75a7.5 7.5 0 11-3-3l3 3z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Huge Savings</h3>
              <p className="text-gray-400">At Lowest Price</p>
            </div>
          </div>
  
          {/* Easy Returns */}
          <div className="flex items-center justify-center bg-gray-800 p-4 rounded-md">
            <div className="text-green-500 mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l-3 3m0 0l3 3m-3-3h12m-3 3l3-3m-3-3l3 3"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">Easy Returns</h3>
              <p className="text-gray-400">No Questions Asked</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  