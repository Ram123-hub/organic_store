'use client'
import { Navbar } from "@/components/navbar";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchBar";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";

import CartIcon from "@/components/cartIcon";
import ProductCard from "@/components/productCard";
import { Product } from "@/lib/types";

const ITEMS_PER_PAGE = 6;

export default function EverythingPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [sortBy, setSortBy] = useState("relevance");

  
  const [products, setProducts] = useState<Product[]>([]); // Hold fetched groceries
  const [isLoading, setIsLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch groceries');
        }
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Error fetching products');  // Set error message
        setIsLoading(false);                  // Ensure loading state is updated
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading...</div>;  // Display loading state
  if (error) return <div>{error}</div>;         // Display error message


  const handleCategoryToggle = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const allCategories = Array.from(new Set(products.map((product) => product.category)));

  const filteredGroceries = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedCategories.length === 0 || selectedCategories.includes(product.category))
    )
    .sort((a, b) => {
      if (sortBy === 'price-low-high') return a.price - b.price;
      if (sortBy === 'price-high-low') return b.price - a.price;
      return 0;
    });

  const totalPages = Math.ceil(filteredGroceries.length / ITEMS_PER_PAGE);
  const displayedGroceries = filteredGroceries.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-skin">
      <Navbar />
      <div className="absolute top-12 py-3 right-4">
        <CartIcon />
      </div>
      <div className="container mx-auto p-4">
        <Link href="/dashboard">
          <h1 className="text-3xl text-thingreen font-serif font-bold mb-4">Everything</h1>
        </Link>
        <div className="flex justify-between items-center mb-4">
          <SearchBar placeholder="Search groceries..." />
        </div>

        <main className="container mx-auto flex flex-col md:flex-row mt-6 px-6">
          <aside className="md:w-1/4 pt-6 bg-skin p-4 rounded-lg shadow-md mb-8 md:mb-0">
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2 text-green-600">Filter by Category:</h2>
              <div className="flex gap-2 flex-wrap">
                {allCategories.map((category) => (
                  <label key={category} className="flex items-center text-green-600">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-lg text-green-600 font-semibold mb-2">Filter by Price:</h2>
              <Slider
                defaultValue={priceRange}
                max={1000}
                step={50}
                onValueChange={(value: [number, number]) => setPriceRange(value)}
                className="w-full bg-green-500 rounded-lg"
              />
              <p className="mt-2 text-green-600">Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg text-green-600 font-semibold mb-2">Sort by:</h2>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg w-full text-green-600"
              >
                <option value="relevance">Relevance</option>
                <option value="price-low-high">Price: Low to High</option>
                <option value="price-high-low">Price: High to Low</option>
              </select>
            </div>
            <div className="py-15 mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-9">
              <Image
                src="/tree.png"
                width={300}
                height={300}
                alt="Tree image"
                className="w-full max-w-xs md:max-w-sm h-auto object-contain"
              />
            </div>
          </aside>

          <section className="md:w-3/4 pl-0 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedGroceries.map((product) => (
                <Link  href={`/productDetails/${product.id}`}   key={product.id}>
                <ProductCard product={product} />
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <Pagination totalPages={totalPages} />
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
