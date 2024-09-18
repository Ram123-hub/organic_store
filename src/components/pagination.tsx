'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation";


interface PaginationProps{
    totalPages : number;
}

export default function Pagination({totalPages}:PaginationProps)
{
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const currentPage = Number(searchParams.get('page')) || 1;

    const createPageURL = (pageNumber: number) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    };

    const handlePageChange = (pageNumber: number) => {
        router.replace(createPageURL(pageNumber));
      };

      return (
        <div className="flex justify-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-2 hover:text-lime-300 rounded-l-md text-thingreen"
          >
            Previous
          </button>
          <span className="px-3 py-2  border text-thingreen">{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-2  rounded-r-md text-thingreen hover:text-lime-300"
          >
            Next
          </button>
        </div>
      );
}