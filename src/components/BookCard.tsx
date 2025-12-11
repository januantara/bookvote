'use client'

import { Eye, Sparkles, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const BookCard = () => {
    const [voteCount, setVoteCount] = useState(42);
    const [hasVoted, setHasVoted] = useState(false);

    const book = {
        title: "The Midnight Library",
        author: "Matt Haig",
        category: "Fiction",
        coverImage: "https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg",
        averageColor: "#14B8A6"
    };

    const handleUpvote = () => {
        if (!hasVoted) {
            setVoteCount(voteCount + 1);
            setHasVoted(true);
        } else {
            setVoteCount(voteCount - 1);
            setHasVoted(false);
        }
    };

    const handleSeeDetail = () => {
        alert(`Melihat detail untuk: ${book.title}`);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-emerald-50 p-4">
            <div className="w-full max-w-md">
                <div className="relative">
                    {/* Decorative blur circles */}
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-300 rounded-full blur-2xl opacity-50"></div>
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-300 rounded-full blur-2xl opacity-50"></div>

                    {/* Main Card */}
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-gray-100">
                        {/* Gradient Background Section */}
                        <div
                            className="relative p-8 pb-16"
                            style={{
                                background: `linear-gradient(135deg, ${book.averageColor} 0%, ${book.averageColor}dd 100%)`
                            }}
                        >
                            {/* Sparkle decoration */}
                            <Sparkles className="absolute top-4 right-4 text-white opacity-30" size={24} />

                            {/* Book Cover */}
                            <div className="flex justify-center">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-white rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                                    <Image
                                        fill
                                        sizes="(max-width: 768px) 100vw, 176px"
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="relative w-44 h-64 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="px-6 pb-6 -mt-8 relative">
                            {/* White card for content */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                {/* Category Badge */}
                                <div className="flex items-center justify-between mb-3">
                                    <span className="inline-flex items-center gap-1 bg-linear-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                                        <Sparkles size={12} />
                                        {book.category}
                                    </span>

                                    {/* Vote Count Badge */}
                                    <div className="flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-full">
                                        <ThumbsUp size={14} className="text-teal-600" />
                                        <span className="text-sm font-bold text-teal-700">{voteCount}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-bold text-gray-800 mb-2 leading-tight">
                                    {book.title}
                                </h2>

                                {/* Author */}
                                <p className="text-gray-500 mb-5 text-sm">
                                    by <span className="font-semibold text-gray-700">{book.author}</span>
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-3">

                                    <Button
                                        onClick={handleUpvote}
                                        className={cn(
                                            "flex-1 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 active:scale-95",
                                            hasVoted
                                                ? 'bg-linear-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-300'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        )}
                                    >
                                        <ThumbsUp size={18} className={hasVoted ? 'fill-current' : ''} />
                                        {hasVoted ? 'Voted' : 'Upvote'}
                                    </Button>

                                    <Button
                                        onClick={handleSeeDetail}
                                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 bg-linear-to-r from-teal-500 to-emerald-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-teal-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
                                    >
                                        <Eye size={18} />
                                        Detail
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;