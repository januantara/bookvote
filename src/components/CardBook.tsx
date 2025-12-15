import { Eye, Sparkles, ThumbsUp, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { useToggleVote } from '@/hooks/useVote';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import he from 'he';

interface CardBookProps {
    id: number;
    title: string;
    author: string;
    votes: number;
    category: string;
    imageUrl: string;
    color?: string;
}

const CardBook = (props: CardBookProps) => {
    const router = useRouter();
    const userId = useAuthStore.getState().user?.id;
    const toggleVote = useToggleVote();

    const handleVote = () => {
        if (!userId) return router.push('/login');
        toggleVote.mutate({ userId, bookId: props.id });
    }

    return (
        <div className="card rounded-3xl max-sm:border bg-white md:shadow-sm overflow-hidden">

            <div
                className="card-header grid place-items-center py-6 sm:py-8 md:py-10 h-[180px] sm:h-[280px] md:h-[400px]"
                style={{ backgroundColor: props.color || '#14b8a6' }}
            >
                <div className="relative shadow-lg md:shadow-2xl">
                    <Image
                        src={props.imageUrl}
                        alt={props.title}
                        width={180}
                        height={240}
                        loading='lazy'
                        className='w-auto h-[110px] sm:h-[180px] md:h-[260px] object-cover'
                    />
                </div>
            </div>
            <div className="card-content mt-auto md:p-6">
                <div className="card-info bg-white md:shadow-sm rounded-2xl md:-mt-12 p-4 md:p-6">

                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-linear-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-2 py-1 md:px-4 md:py-2 rounded-full">
                            <Sparkles size={12} />
                            {props.category}
                        </span>

                        {/* Vote Count Badge */}
                        <div className="inline-flex items-center gap-1.5 bg-teal-50 px-2 md:px-3 py-1 md:py-1.5 rounded-full">
                            <ThumbsUp size={16} className="text-teal-600" />
                            <span className="text-xs md:text-sm font-bold text-teal-700">{props.votes}</span>
                        </div>
                    </div>

                    <h4 className='mt-4 font-bold text-sm md:text-base line-clamp-1'>
                        {he.decode(props.title)}
                    </h4>

                    <h5 className='text-xs md:text-sm mt-2 text-neutral-400'>by <span className='text-neutral-500 font-semibold'>{he.decode(props.author)}</span></h5>

                    <div className="card-footer flex mt-6 gap-3">
                        <Button onClick={handleVote} disabled={toggleVote.isPending} className="md:flex-1 p-4 max-sm:text-sm font-semibold sm:text-xs">
                            {toggleVote.isPending
                                ? <div className="border-b size-4 rounded-full animate-spin border-black"></div>
                                : <>
                                    <ThumbsUpIcon />
                                    <span className='hidden md:block'>Upvote</span>
                                </>
                            }
                        </Button>
                        <Button asChild className="flex flex-1 px-4 max-sm:text-sm gap-2 rounded-md items-center justify-center bg-background text-primary/80 border border-primary/30 hover:text-primary hover:bg-primary/3 hover:border-primary shadow-none font-semibold">
                            <Link href={`/books/${props.id}`} >
                                <Eye className='hidden lg:inline-flex' />
                                Details
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CardBook