'use client'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-white min-h-screen'>
      {/* Welcome Section */}
      <div className='py-10 mt-5 flex items-center justify-center'>
        <h1 className='font-bold font-serif text-3xl'>Welcome to the organic store!</h1>
      </div>

      {/* Main Section with Image and Text */}
      <div className='mt-5 flex flex-col lg:flex-row items-center justify-center px-4 lg:px-10'>
        {/* Image */}
        <Image
          src="/dashbaord.jpg"
          alt="dashboard"
          width={600}
          height={600}
          className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto"
        />

        {/* Background with Text and Buttons */}
        <div
          className="relative flex flex-col items-center justify-center h-[300px] sm:h-[400px] md:h-[500px] w-full bg-cover bg-top mt-10 lg:mt-0 lg:ml-8"
          style={{
            backgroundImage: 'url(/backgroundleaf.jpg)',
            backgroundSize: '80%',
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-white opacity-30"></div>

          {/* Text and Buttons */}
          <div className="relative z-10 text-center lg:text-left px-4 md:px-6">
            <p className="text-sm sm:text-lg font-semibold text-gray-700">Best Quality Products</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black my-4">Join The Organic Movement!</h1>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-3 lg:space-y-0 lg:space-x-4">
              <Link href="/dashboard">
                <button className="bg-thingreen hover:bg-lime-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-xl flex items-center justify-center lg:justify-start">
                  <svg className="h-4 w-4 md:h-5 md:w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 20l5-5h-3v-7h-4v7h-3l5 5z"></path>
                  </svg>
                  Shop Now
                </button>
              </Link>

              {/* Sign Up Button */}
              <Link href="/signup">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-xl flex items-center justify-center lg:justify-start">
                  <svg className="h-4 w-4 md:h-5 md:w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                  </svg>
                  Sign Up
                </button>
              </Link>

              {/* Sign In Button */}
              <Link href="/signin">
                <button className="bg-thingreen hover:bg-lime-500 text-white font-semibold py-2 px-4 md:py-3 md:px-6 rounded-xl flex items-center justify-center lg:justify-start">
                  <svg className="h-4 w-4 md:h-5 md:w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10 17v-2h4v2h5v2H5v-2h5zm0-12v6H6v4h12v-4h-4v-6h2V3H8v2h2z"></path>
                  </svg>
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
