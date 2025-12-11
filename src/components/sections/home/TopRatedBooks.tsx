// biome-ignore-all lint/suspicious/noArrayIndexKey: Suppressing array index key warning as keys are derived from unique genre names

import BookCardSkeleton from "@/components/BookCardSkeleton";
import CardBook from "@/components/CardBook";
import { CategoryTab, CategoryTabContent, CategoryTabs, CategoryTabsList } from "@/components/CategoryTabs";
import type { Book } from "@/types/book";

const GENRES = ["All Genres", "Novel", "Technology", "Management", "Accounting", "Communication", "Design", "Psychology"];

interface TopRatedBooksProps {
    topBooks: Book[];
    isLoading: boolean;
    selectedCategory: string;
    onCategoryChange: (value: string) => void;
}

export default function TopRatedBooks({ topBooks, isLoading, selectedCategory, onCategoryChange }: TopRatedBooksProps) {

    return (
        <section id="monthly-top-rated" className="pt-20">
            <div className="max-w-7xl px-6 mx-auto">
                <h3 className="text-2xl max-sm:text-center font-semibold">This Month's Top-Rated Books</h3>
                <CategoryTabs value={selectedCategory} onValueChange={onCategoryChange}>
                    <CategoryTabsList>
                        {GENRES.map(genre => <CategoryTab key={genre} value={genre}>{genre}</CategoryTab>)}
                    </CategoryTabsList>
                    <CategoryTabContent value={selectedCategory}>
                        {isLoading && (
                            Array.from({ length: 6 }).map((_, index) => (
                                <BookCardSkeleton key={`skeleton-${index}`} />
                            ))
                        )}

                        {!isLoading && topBooks.length === 0 && (
                            <div className="text-center text-neutral-500 py-40 col-span-3 bg-red-50/20 rounded-md border">No books found in this category.</div>
                        )}

                        {!isLoading && topBooks.map((book: Book) => (
                            <CardBook
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                category={book.category}
                                votes={book.voteCount}
                                imageUrl={book.imageUrl}
                                color={book.color}
                            />
                        ))}
                    </CategoryTabContent>
                </CategoryTabs>
            </div>
        </section>
    );
}
