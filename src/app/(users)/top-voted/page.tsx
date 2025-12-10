"use client"

import { Trophy } from 'lucide-react';
import CardTopLeaderBoard from './CardTopLeaderBoard';
import CardTopLeaderBoardSkeleton from './CardTopLeaderBoardSkeleton';
import { useTopVotedBooks } from '@/hooks/useVote';
import type { TopVotedBook } from '@/types/vote';
import he from 'he';

const TopVoted = () => {
    const { data: topVotedBooks, isLoading } = useTopVotedBooks();

    return (
        <div className="w-full">
            <div className="w-full h-70 flex flex-col items-center justify-center relative">
                <OrnamentBackground />
                <Trophy size={32} className="z-10" />
                <h1 className="text-5xl z-10 font-bold text-center leading-snug">Top Voted Books</h1>
                <p className="mt-2 z-10">The most loved books by our community. See what books students are most excited to read</p>
            </div>

            <div className="max-w-5xl mx-auto px-6 flex flex-col gap-6">
                {isLoading ?

                    [1, 2, 3, 4, 5].map((rank) => (
                        <CardTopLeaderBoardSkeleton key={rank} rank={rank} />
                    ))

                    : (
                        topVotedBooks?.map((book: TopVotedBook, index: number) => (
                            <CardTopLeaderBoard
                                key={book.id}
                                rank={index + 1}
                                title={he.decode(book.title)}
                                author={book.author}
                                category={book.category}
                                voteCount={book.voteCount}
                                imageUrl={book.imageUrl}
                                description={he.decode(book.description)}
                            />
                        ))
                    )}
            </div>
        </div>
    )
}

const OrnamentBackground = () => (
    <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
            backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
    />
)

export default TopVoted