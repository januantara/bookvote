import { Button } from "@/components/ui/button";
import { ArrowRightIcon, SearchIcon, TrendingUp } from "lucide-react";
import NewArrivalCard from "@/components/NewArrivalCard";
import { Input } from '@/components/ui/input';

const NewArrivalsPage = () => {
    // Sample data untuk buku-buku terbaru
    const newBooks = [
        {
            id: 1,
            title: "Atomic Habits",
            author: "James Clear",
            category: "Self-Help",
            likes: 2345,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "3 hari yang lalu"
        },
        {
            id: 2,
            title: "The Midnight Library",
            author: "Matt Haig",
            category: "Fiction",
            likes: 1890,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "1 minggu yang lalu"
        },
        {
            id: 3,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            category: "History",
            likes: 2156,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "2 minggu yang lalu"
        },
        {
            id: 4,
            title: "Educated",
            author: "Tara Westover",
            category: "Memoir",
            likes: 1765,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "3 minggu yang lalu"
        },
        {
            id: 5,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            category: "Thriller",
            likes: 1543,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "2 bulan yang lalu"
        },
        {
            id: 6,
            title: "Dune",
            author: "Frank Herbert",
            category: "Science Fiction",
            likes: 2087,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "2 bulan yang lalu"
        },
        {
            id: 7,
            title: "Project Hail Mary",
            author: "Andy Weir",
            category: "Science Fiction",
            likes: 1923,
            imageUrl: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
            dateAdded: "3 bulan yang lalu"
        },
        {
            id: 8,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            category: "Finance",
            likes: 2234,
            imageUrl: "https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg",
            dateAdded: "3 bulan yang lalu"
        },
    ];

    return (
        <div className="font-sans w-full">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg">
                            <TrendingUp className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-primary font-semibold">Koleksi Terbaru</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Buku-Buku Terbaru</h1>
                    <p className="text-neutral-600 text-lg max-w-4xl">
                        Buku-buku di halaman ini adalah pilihan kamu dan pengguna lainnya yang kini sudah tersedia di perpustakaan. Setelah melalui proses request dan voting, judul yang mendapatkan suara terbanyak dibeli dan sekarang bisa kamu temukan di sini.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6">
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
                            <Button variant="outline" className="text-sm">Terbaru</Button>
                            <Button variant="outline" className="text-sm">Paling Populer</Button>
                            <Button variant="outline" className="text-sm">Rating Tertinggi</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Books Grid */}
            <section className="py-16 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {newBooks.map((book) => (
                        <NewArrivalCard
                            key={book.id}
                            title={book.title}
                            author={book.author}
                            category={book.category}
                            imageUrl={book.imageUrl}
                            dateAdded={book.dateAdded}
                        />
                    ))}
                </div>                {/* Load More Button */}
                <div className="flex justify-center mt-16">
                    <Button variant="outline" className="py-6 px-10 text-base">
                        Muat Lebih Banyak <ArrowRightIcon className="ml-2 w-4 h-4" />
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default NewArrivalsPage;
