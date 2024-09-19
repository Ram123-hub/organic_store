'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";


export default function CustomerReviews() {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center mb-4">
                        <div className="text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mb-4">
                        Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://res.cloudinary.com/dojpvlfnu/image/upload/v1726659386/tcgcs4nzneb9gyfcl7mh.jpg"
                            alt="Profile picture of Geeta"
                            width={50}
                            height={50}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <span className="text-gray-800">Geeta</span>
                    </div>

                </div>
                <div className="bg-cover bg-center p-6 rounded-lg shadow-lg" style={{ backgroundImage: "url('https://res.cloudinary.com/dojpvlfnu/image/upload/v1726642459/ykiigc2m8trpovntjhlu.jpg')" }}>
                    <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Deal Of The Day</h2>
                        <h3 className="text-white text-xl font-bold mb-4">15% Off On All Vegetables!</h3>
                        <p className="text-white mb-4">I am text block. Click edit button to change this text.</p>
                    <Link  href="/everything">
                        <Button className="bg-thingreen text-skin px-4 py-2 rounded-xl hover:bg-lime-500  ">Shop Now</Button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center mb-4">
                        <div className="text-yellow-500">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                        </div>
                    </div>
                    <p className="text-center text-gray-600 mb-4">
                        Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="flex justify-center items-center">
                        <Image
                            src="https://res.cloudinary.com/dojpvlfnu/image/upload/v1726659389/jj37qlvwuo7lylevsuuh.jpg"
                            alt="Profile picture of Ramesh"
                            width={50}
                            height={50}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <span className="text-gray-800">Ramesh</span>
                    </div>
                </div>
            </div>
        </div>
    )
}