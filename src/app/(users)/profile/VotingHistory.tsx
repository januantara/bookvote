'use client'

import VotedCard from '@/components/VotedCard';
import type { VotedBook } from '@/types/user';

interface VotingHistoryProps {
    votedBooks: VotedBook[];
    isLoading: boolean;
}

export default function VotingHistory({ votedBooks, isLoading }: VotingHistoryProps) {
    if (isLoading) {
        return (
            <div className="col-span-4 text-center py-10">
                Loading...
            </div>
        );
    }

    if (!votedBooks || votedBooks.length === 0) {
        return (
            <div className="col-span-4 text-center py-10 text-gray-500">
                No voting history found.
            </div>
        );
    }

    return (
        <>
            {votedBooks.map((vote) => (
                <VotedCard
                    key={vote.id}
                    title={vote.book.title}
                    author={vote.book.author}
                    category={vote.book.category}
                    imageUrl={vote.book.imageUrl}
                    color={vote.book.color}
                    dateAdded={new Date(vote.votedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                    })}
                    isPurchased={vote.book.isPurchased}
                    voted={false}
                />
            ))}
        </>
    );
}
