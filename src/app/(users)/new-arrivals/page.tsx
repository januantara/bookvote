'use client';

import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SearchIcon, TrendingUp } from "lucide-react";
import NewArrivalCard from "@/components/NewArrivalCard";
import { Input } from '@/components/ui/input';
import { usePurchasedBooks } from "@/hooks/useBooks";
import BookCardSkeleton from "@/components/BookCardSkeleton";
import * as he from 'he';


const NewArrivalsPage = () => {
    const { data: books, isLoading, isError } = usePurchasedBooks();

    return (
        <div className="font-sans w-full">
            {/* Hero Section */}
            <HeaderSection />

            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="relative items-center flex flex-1">
                        <SearchIcon
                            size={16}
                            className="absolute ml-4 text-primary"
                        />

                        <Input
                            type="search"
                            placeholder="Search Books"
                            className="border border-primary py-5 ps-10 rounded-full"
                        />
                    </div>
                    <div className="flex gap-3 flex-wrap">
                        <Button variant="outline" className="text-sm">Newest</Button>
                        <Button variant="outline" className="text-sm">Most Popular</Button>
                        <Button variant="outline" className="text-sm">Highest Rated</Button>
                    </div>
                </div>
            </div>

            {/* Books Grid */}
            <section className="py-8 mt-4 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {isLoading ? (
                        Array.from({ length: 8 }).map((_, index) => (
                            <BookCardSkeleton key={index} />
                        ))
                    ) : isError ? (
                        <div className="col-span-full text-center py-12 text-red-500">
                            Failed to load books. Please try again later.
                        </div>
                    ) : (
                        books?.map((book: any) => (
                            <NewArrivalCard
                                key={book.id}
                                title={he.decode(book.title)}
                                author={book.author}
                                category={book.category}
                                imageUrl={book.imageUrl}
                                dateAdded={book.purchasedAt} />
                        ))
                    )}
                </div>                {/* Load More Button */}
                <div className="flex justify-center mt-16">
                    <Button variant="outline" className="py-6 px-10 text-base">
                        Load More <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

const HeaderSection = () => (
    <section id="header" className="w-full py-12 md:py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary text-4xl md:text-5xl font-bold">New Arrivals</span>
            </div>
            <p className="text-neutral-400 max-w-5xl mt-8">
                Buku-buku di halaman ini adalah pilihan kamu dan pengguna lainnya yang kini sudah tersedia di perpustakaan. Setelah melalui proses request dan voting, judul yang mendapatkan suara terbanyak dibeli dan sekarang bisa kamu temukan di sini.
            </p>
        </div>
    </section>
)

export default NewArrivalsPage;
