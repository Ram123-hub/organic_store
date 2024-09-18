'use client';
import { useEffect, useState } from 'react';
import RelatedProducts from '@/components/relatedProductInfo';
import { products } from '@/lib/productListing';
import { Product } from '@/lib/types';
import { addToCart } from '@/sotre/cartSlice';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Navbar } from '@/components/navbar';
import CartIcon from '@/components/cartIcon';
import Link from 'next/link';

export default function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams(); // This may differ between server and client
  const [product, setProduct] = useState<Product | undefined>(undefined);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) {
    return <p className="text-center text-red-500">Product not found.</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6 relative">
        {/* Fixed CartIcon at the right side */}
        <div className="absolute top-4 right-4">
          <CartIcon />
        </div>

        {/* Product Details */}
        <h1 className="text-2xl font-bold text-thingreen">{product.name}</h1>
        <p className="mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>

        {/* Add to Cart Button */}
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-thingreen hover:bg-lime-500 text-white px-4 py-2 rounded-xl"
        >
          Add to Cart
        </button>

        {/* Related Products Section */}
        <Link href="">
        <RelatedProducts
          currentProductId={product.id}
          relatedProducts={products.filter(
            (p) => p.category === product.category && p.id !== product.id
          )}
        />
        </Link>
      </div>
    </div>
  );
}
