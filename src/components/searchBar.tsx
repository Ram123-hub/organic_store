'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";




export default function SearchBar({ placeholder }: { placeholder: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (term) {
            params.set('query', term)
        } else {
            params.delete('query');
        }
        router.replace(`${pathname}?${params.toString()}`)
    }, 300);
    return (
        <div className="relative flex flex-1 flex-shrink-0 mb-4">
            <input
                className="peer block w-full sm:w-[50%] md:w-[25%] text-darkgreen rounded-md border border-thingreen py-[9px] pl-10 text-sm placeholder:text-darkgreen"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={searchParams.get('query') || ''}
            />
        </div>
    )
}