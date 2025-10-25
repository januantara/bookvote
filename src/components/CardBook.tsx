import { Eye, Sparkles, ThumbsUp, ThumbsUpIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

interface CardBookProps {
    title: string
    author: string
    likes: number
    category: string
    imageUrl: string
}

const CardBook = (props: CardBookProps) => {


    return (
        <div className="card rounded-3xl bg-white shadow-sm overflow-hidden">

            <div className="card-header grid place-items-center bg-teal-500 py-10 h-[400px]">
                <div className="relative shadow-2xl">
                    <Image
                        src={props.imageUrl}
                        alt={props.title}
                        width={180}
                        height={0}
                        className='h-auto bg-cover'
                    />
                </div>
            </div>
            <div className="card-content p-6">
                <div className="card-info bg-white shadow-sm rounded-2xl -mt-12 p-6">

                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                            <Sparkles size={12} />
                            {props.category}
                        </span>

                        {/* Vote Count Badge */}
                        <div className="inline-flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-full">
                            <ThumbsUp size={14} className="text-teal-600" />
                            <span className="text-sm font-bold text-teal-700">{props.likes}</span>
                        </div>
                    </div>

                    <h4 className='mt-4 font-bold text-lg'>
                        {props.title.length >= 25
                            ? `${props.title.substring(0, 25)}...`
                            : props.title
                        }
                    </h4>
                    <h5 className='text-sm mt-2 text-neutral-400'>by <span className='text-neutral-500 font-semibold'>{props.author}</span></h5>

                    <div className="card-footer flex mt-6 gap-3">
                        <Button className="flex-1 py-6 font-semibold"><ThumbsUpIcon /> Upvote</Button>
                        <Link href="/books/:bookId" className="flex-1 inline-flex gap-2 rounded-md items-center justify-center bg-background text-primary/80 border border-primary/30 hover:text-primary hover:bg-primary/3 hover:border-primary">
                            <Eye />
                            Details
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardBook