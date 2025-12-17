'use client'

import VotedCard from '@/components/VotedCard';
import type { Book } from '@/types/user';

interface RequestedBooksProps {
    requestedBooks: Book[];
    isLoading: boolean;
}

export default function RequestedBooks({ requestedBooks, isLoading }: RequestedBooksProps) {
    if (isLoading) {
        return (
            <div className="col-span-4 text-center py-10">
                Loading...
            </div>
        );
    }

    if (!requestedBooks || requestedBooks.length === 0) {
        return (
            <div className="col-span-4 text-center py-10 text-gray-500">
                No requested books found.
            </div>
        );
    }

    return (
        <>
            {requestedBooks.map((book) => (
                <VotedCard
                    key={book.id}
                    title={book.title}
                    author={book.author}
                    category={book.category}
                    imageUrl={book.imageUrl}
                    color={book.color}
                    dateAdded={new Date(book.createdAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                    isPurchased={book.isPurchased}
                    voted={false}
                />
            ))}
        </>
    );
}
