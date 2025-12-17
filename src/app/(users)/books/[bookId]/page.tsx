'use client'

import { ArrowLeft, StarsIcon, ThumbsUpIcon, SearchX } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import he from 'he';
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';
import { useBookDetails } from '@/hooks/useBooks';
import { useToggleVote } from '@/hooks/useVote';
import { useAuthStore } from '@/store/authStore';
import { cn } from '@/lib/utils';

const BookDetails = () => {
    const { bookId } = useParams();
    const { data, isLoading } = useBookDetails(Number(bookId));
    const userId = useAuthStore(state => state.user?.id);
    const toggleVote = useToggleVote();
    const router = useRouter();
    const book = data?.book || data;

    if (isLoading) return <BookLoadingSkeleton />
    if (!book?.title) return <BookNotFound />

    const handleVote = () => {
        if (!userId) return router.push('/login');
        toggleVote.mutate({ userId, bookId: book.id });
    }

    return (
        <div className="max-w-7xl px-6 mx-auto">

            <Link href="/" className="flex gap-x-2 items-center text-primary font-semibold mt-10 hover:opacity-80">
                <ArrowLeft size={16} />
                Back to Books
            </Link>

            <div className="flex flex-col md:flex-row mt-10 gap-8">

                <div className="books-cover flex size-100 p-6 rounded-2xl max-md:w-full bg-teal-500">
                    <div className="relative m-auto shadow-2xl">
                        <Image
                            src={book.imageUrl}
                            alt={book.title}
                            width={180}
                            height={0}
                            className='h-auto bg-cover'
                        />
                    </div>
                </div>

                <div className="book-information flex flex-1 flex-col items-start">
                    <Link href={`/books?category=${book.category}`} className="bg-teal-50 text-teal-500 text-sm font-semibold rounded-full px-4 py-2">{book.category}</Link>
                    <h1 className='text-3xl font-bold mt-6'>{he.decode(book.title)}</h1>
                    <h4 className='mt-4 text-neutral-500'>by <span className='font-semibold text-neutral-800'>{he.decode(book.author)}</span></h4>
                    <div className="mt-6">
                        <strong className='antialiased'>Description</strong>
                        <p className='text-neutral-500 mt-4 text-justify whitespace-pre-line'>
                            {he.decode(book.description)}
                        </p>
                    </div>
                    <div className="vote flex justify-between items-center p-4 mt-6 rounded-2xl border border-primary/10 bg-teal-50 w-full relative">
                        <StarsIcon className='absolute text-primary bottom-0 left-0 opacity-5 z-0' size={64} />
                        <div className="vote-count">
                            <h4 className='text-neutral-400 font-semibold'>Total Votes</h4>
                            <h2 className='font-bold text-xl text-primary'>{book.voteCount}</h2>
                        </div>
                        <Button
                            onClick={handleVote}
                            className={cn(
                                'flex gap-x-2 px-6 text-md py-5 transition-all duration-300',
                                book.isVoted ? 'opacity-50 hover:opacity-75' : ''
                            )}
                        >
                            <ThumbsUpIcon className={book.isVoted ? 'fill-current' : ''} />
                            {book.isVoted ? 'Voted' : 'Vote'}
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

const BookLoadingSkeleton = () => (
    <div className="max-w-7xl px-6 mx-auto">
        <div className="h-6 w-20 bg-neutral-200 animate-pulse mt-10 rounded-md" />
        <div className="flex mt-10 gap-8">
            <div className="size-100 rounded-2xl bg-neutral-200 animate-pulse" />
            <div className="flex flex-1 flex-col items-start">
                <div className="bg-neutral-200 rounded-full w-1/12 h-5 animate-pulse" />
                <div className='w-4/12 h-6 mt-6 bg-neutral-200 animate-pulse rounded-full' />
                <div className='mt-4 w-2/12 h-5 bg-neutral-200 animate-pulse rounded-full' />
                <div className="mt-10 w-full space-y-4">
                    <div className='w-full h-4 bg-neutral-200 animate-pulse rounded-full' />
                    <div className='w-full h-4 bg-neutral-200 animate-pulse rounded-full' />
                    <div className='w-full h-4 bg-neutral-200 animate-pulse rounded-full' />
                    <div className='w-full h-4 bg-neutral-200 animate-pulse rounded-full' />
                </div>
                <div className="flex justify-between items-center mt-10 rounded-2xl w-full bg-neutral-100 p-6">
                    <div className="w-24 h-6 bg-neutral-200 animate-pulse rounded-full" />
                    <div className="w-24 h-10 inline-flex bg-neutral-200 animate-pulse rounded-lg" />
                </div>
            </div>
        </div>
    </div>
)

const BookNotFound = () => (
    <div className="max-w-7xl px-6 mx-auto mt-20 py-10">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
            <div className="bg-teal-50 p-6 rounded-full ring-4 ring-teal-50/50">
                <SearchX className="size-16 text-teal-500" />
            </div>
            <div className="space-y-2">
                <h2 className="text-2xl font-bold text-neutral-800">Oops! Book Not Found</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                    It seems the book you are searching for doesn't exist.
                </p>
            </div>

            <Button asChild className="gap-x-2 mt-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full px-8 py-6 text-lg">
                <Link href="/">
                    <ArrowLeft size={20} />
                    Back to Library
                </Link>
            </Button>
        </div>
    </div>
)

export default BookDetails