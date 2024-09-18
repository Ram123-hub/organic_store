'use client'

import Image from "next/image"

export default function Footer() {
    return (
        <div>
            <footer className="bg-black text-white py-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center md:text-left">
                            <Image src="/organicstore.svg" alt="Organic Store Logo" width={100} height={100} className="mx-auto md:mx-0 mb-4" />
                            <p className="italic">
                                Maecenas mi justo, interdum at consectetur vel, tristique et arcu. Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse quis faucibus urna. Suspendisse pellentesque.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:underline">About</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Cart</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Checkout</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Contact</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Home</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">My account</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Shop</a></li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-xl font-bold mb-4">Download Our Mobile App</h2>
                            <p className="mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam gravida sollicitudin. Praesent porta enim mi, non tincidunt libero interdum sit amet.
                            </p>
                            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                            <ul>
                                <li className="mb-2"><a href="#" className="hover:underline">Know More About Us</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Visit Store</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Let’s Connect</a></li>
                                <li className="mb-2"><a href="#" className="hover:underline">Locate Stores</a></li>
                            </ul>
                            <div className="flex justify-center md:justify-start mt-4">
                                <Image
                                    src="https://placehold.co/150x50"
                                    alt="Google Play Store"
                                    width={150}
                                    height={50}
                                    className="mr-2"
                                />
                                <Image
                                    src="https://placehold.co/150x50"
                                    alt="Apple App Store"
                                    width={150}
                                    height={50}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-4 text-center md:text-left">
                        <p>Copyright © 2024 | Organic Store</p>
                        <div className="flex justify-center md:justify-start mt-4">
                            <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="text-white mx-2"><i className="fab fa-instagram"></i></a>
                            <a href="#" className="text-white mx-2"><i className="fab fa-yelp"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}