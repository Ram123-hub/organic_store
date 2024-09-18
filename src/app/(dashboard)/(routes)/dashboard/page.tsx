'use client'
import Features from '@/components/features'
import React from 'react'
import Image from 'next/image'
import CustomerReviews from '@/components/customerReviews';
import Footer from '@/components/footer';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';
import { categories, products } from '@/lib/productListing';
import TrendingCard from '@/components/trendingProducts';
import ProductCard from '@/components/productCard';
import CategoryCard from '@/components/categoryCard';


const Dashboard = () => {

    const featuredCategories = categories.slice(0, 3);
    const sellingProduct = products.slice(0,8);
    const trendingProduct = products.slice(0,4);
    return (
        <div className='bg-skin'>
            <Navbar />
            <div className='bg-white py-5 mt-5 flex items-center justify-center space-x-8'>
                {/* Image */}
                <div className='flex-shrink-0'>
                    <Image
                        src="/dashboard1.png"
                        alt="logo"
                        width={500}
                        height={500}
                        className='py-3'
                    />
                </div>

                {/* Content */}
                <div className='max-w-lg'>
                    <h2 className='text-2xl font-bold text-green-600 mb-4'>Welcome to Our Organic Store</h2>
                    <p className='text-gray-700'>
                        At our organic store, we are committed to providing you with the freshest and highest quality organic products. From farm-fresh produce to sustainable household goods, we ensure that all our items meet the highest standards of organic certification. Explore our wide range of products and enjoy the benefits of a healthier and more eco-friendly lifestyle.
                    </p>
                    <Link href="/everything">
                        <button className='mt-4 px-4 py-2 bg-thingreen  text-white rounded-xl shadow-md hover:bg-lime-500'>
                            Shop Now
                        </button>
                    </Link>
                </div>
            </div>

            <Features />
            <div className="container mx-auto py-8 mt-5">
                <h1 className="text-4xl font-bold text-black text-center mb-8">Best Selling Products</h1>
                <div className='flex items-center justify-center mb-12 pb-2'>
                    <Image src="/logo_leaf.jpg" alt="log" width={80} height={80} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-bold text-black">
                    {sellingProduct.map((product, idx) => (
                        <Link href={`/productDetails/${product.id}`} key={idx}>
                            <ProductCard product={product} />
                        </Link>
                    ))}
                </div>

            </div>
            <div className='relative flex items-center justify-center border-b-2 py-8'>
                <div className='absolute -bottom-4 bg-white z-10 px-2'>
                    <Image src="/leaf.png" width={100} height={100} alt="logo" />
                </div>
            </div>
            <div className="bg-amber-50 py-14">
                <div className="container mx-auto px-6">

                    <Link href="/everything">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {featuredCategories.map((category, idx) => (
                                <CategoryCard
                                    key={idx}
                                    name={category.name}
                                    description={category.description || 'Explore our wide range of products'}  // Default description
                                    image={category.image}
                                    buttonText="Explore Now"  // Static button text
                                    buttonLink={`/categories/${category.id}`}  // Dynamic link based on category id
                                />
                            ))}
                        </div>
                    </Link>
                </div>
            </div>
            <div className="container mx-auto py-8 mt-5">
                <h1 className="text-4xl font-bold text-black text-center mb-8">Treding Products</h1>
                <div className='bg-skin flex items-center justify-center mb-12 pb-2'>
                    <Image src="/logo_leaf.jpg" alt="log" width={80} height={80} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 font-bold text-black">
                    {trendingProduct.map((product, idx) => (
                        <Link href={`/productDetails/${product.id}`} key={idx} >
                            <TrendingCard  {...product} />
                        </Link>
                    ))}
                </div>

            </div>
            <div className='py-5 pt-8 mt-4'>
                <h1 className="text-4xl font-bold text-black text-center mb-5">Customer Reviews</h1>
                <div className='flex items-center justify-center mb-12  pb-2'>
                    <Image src="/logo_leaf.jpg" alt="log" width={80} height={80} />
                </div>
                <CustomerReviews />
            </div>
            <div className='pt-5 mt-8 '>
                <Footer />
            </div>
        </div>
    )
}

export default Dashboard