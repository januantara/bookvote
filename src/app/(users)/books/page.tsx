"use client"

import { SearchIcon } from 'lucide-react'
import { useState } from "react"
import CardBook from "@/components/CardBook"
import SkeletonBook from "@/components/SkeletonBook"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useBooks } from "@/hooks/useBooks"
import type { Book } from '@/types/book'

const categories = ["Novel", "Technology", "Management", "Accounting", "Communication", "Design", "Psychology"] as const

const sortOptions = [
    { value: "most_voted", label: "Most Voted" },
    { value: "newest", label: "Newest" },
    { value: "oldest", label: "Oldest" },
] as const

export interface BookFilterProps {
    search?: string
    category?: (typeof categories)[number]
    sort?: (typeof sortOptions)[number]["value"]
    isPurchased?: boolean
}

const BrowseBooks = () => {
    const [filters, setFilters] = useState<BookFilterProps>({
        search: "",
        sort: "most_voted",
    })

    const { data: books, isLoading } = useBooks(filters);

    return (
        <div className="w-full">
            <div className="max-w-7xl px-6 mx-auto mt-10">
                <FilterBooks filters={filters} setFilters={setFilters} />
                <section id="books" className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
                    {isLoading ? (
                        Array.from({ length: 6 }).map((_, i) => (
                            <SkeletonBook key={i} />
                        ))
                    ) : books?.length > 0 ? (
                        books.map((book: Book) => (
                            <CardBook
                                key={book.id}
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                category={book.category}
                                votes={book.voteCount || 0}
                                color={book.color}
                                imageUrl={book.imageUrl}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-muted-foreground">No books found</p>
                    )}
                </section>
            </div>
        </div>
    )
}

const FilterBooks = ({ filters, setFilters }: {
    filters: BookFilterProps,
    setFilters: React.Dispatch<React.SetStateAction<BookFilterProps>>
}) => (
    <section id="filter">
        <div className="relative items-center flex">
            <SearchIcon size={16} className="absolute ml-4 text-primary" />
            <Input
                type="search"
                placeholder="Search Books"
                className="border border-primary py-6 ps-10 rounded-full"
                value={filters.search}
                onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            />
        </div>
        <div className="flex w-full items-center mt-6 gap-3">
            <Select
                value={filters.category}
                onValueChange={(value) => setFilters({ ...filters, category: value === "all" ? undefined : value as BookFilterProps["category"] })}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="All Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Category</SelectItem>
                    {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>
                            {cat}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>

            <Select
                value={filters.sort}
                onValueChange={(value) => setFilters({ ...filters, sort: value as BookFilterProps["sort"] })}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                    {sortOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    </section>
)

export default BrowseBooks