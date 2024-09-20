// File: pages/groceries.tsx
'use client'
import GrocerySection from "@/components/grocerySection";
import { Navbar } from "@/components/navbar";
import Pagination from "@/components/pagination";
import SearchBar from "@/components/searchBar";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";

import CartIcon from "@/components/cartIcon";
import { Product } from "@/lib/types";

//Data comes only from grocery section 

const ITEMS_PER_PAGE = 8;

export default function GroceriesPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const [sortBy] = useState("relevance");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]); // State to track price range


  const [groceries, setGroceries] = useState<Product[]>([]); // Hold fetched groceries
  const [isLoading, setIsLoading] = useState<boolean>(true);  // Loading state
  const [error, setError] = useState<string | null>(null);    // Error state

  // Fetch groceries data from the API
  useEffect(() => {
    const fetchGroceries = async () => {
      try {
        const response = await fetch('/api/groceries');
        if (!response.ok) {
          throw new Error('Failed to fetch groceries');
        }
        const data = await response.json();
        setGroceries(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching groceries:', error);
        setError('Error fetching groceries');  // Set error message
        setIsLoading(false);                  // Ensure loading state is updated
      }
    };
    fetchGroceries();
  }, []);

  if (isLoading) return <div>Loading...</div>;  // Display loading state
  if (error) return <div>{error}</div>;         // Display error message


  // Filter the groceries based on search query and price range
  const filteredGroceries = groceries.filter((grocery) =>
    grocery.name.toLowerCase().includes(query.toLowerCase()) &&
    grocery.price >= priceRange[0] &&
    grocery.price <= priceRange[1]
  ).sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price;
    if (sortBy === "price-high-low") return b.price - a.price;
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
          <h1 className="text-3xl text-thingreen font-serif font-bold mb-4">Groceries</h1>
        </Link>
        <SearchBar placeholder="Search groceries..." />

        {/* Price Slider */}
        <h1 className="text-thingreen font-bold font-serif text-lg">Filter by price</h1>
        <div className="flex items-center w-[200px] py-3 mb-3">
          <Slider
            defaultValue={priceRange}
            max={1000}
            step={50}
            onValueChange={(value: [number, number]) => setPriceRange(value)} // Update the price range state
            className={cn("w-full", "bg-green-700 rounded-lg")}  // Use full width for slider
          />
        </div>

        {/* Display Groceries directly without categories */}
        <GrocerySection title="All Groceries" groceries={displayedGroceries} />

        <div className="mt-5">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
