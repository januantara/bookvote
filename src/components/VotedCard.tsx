import { BookCheck, Calendar, ThumbsDown, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NewArrivalCardProps {
    title: string;
    author: string;
    category: string;
    imageUrl: string;
    dateAdded: string;
    voted: boolean;
    isPurchased: boolean;
}

const VotedCard = ({
    title,
    author,
    category,
    imageUrl,
    dateAdded,
    voted,
    isPurchased
}: NewArrivalCardProps) => {
    return (
        <div className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Image Container */}
            <div className="relative flex overflow-hidden bg-neutral-50 h-56 p-3">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-teal-500 flex items-center justify-center">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={200}
                        height={200}
                        className="object-contain max-h-full p-4"
                    />
                </div>

                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>

                {/* Purchased Badge */}
                {isPurchased && (
                    <div className="absolute top-6 right-6 bg-primary text-white p-1.5 rounded-full shadow-sm">
                        <BookCheck size={16} strokeWidth={2.5} />
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-5">
                {/* Date Added */}
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span className="font-medium">{dateAdded}</span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-sm line-clamp-2 mb-2 text-neutral-900 group-hover:text-primary transition-colors leading-tight">
                    {title}
                </h3>

                {/* Author */}
                <p className="text-xs text-neutral-600 mb-4 line-clamp-1">
                    <span className="font-semibold">{author}</span>
                </p>

                {/* Action Button */}
                <Button className={cn(
                    "w-full text-sm py-3 h-auto font-medium cursor-pointer",
                    { "bg-white border-primary hover:bg-primary transition-colors duration-300": voted }
                )}>
                    {voted ? (
                        <>
                            Vote
                            <ThumbsUp className="size-4 inline-block" />
                        </>
                    ) : (
                        <>
                            Voted
                            <ThumbsDown className="size-4 inline-block" />
                        </>
                    )}
                </Button>
            </div>
        </div >
    );
};

export default VotedCard;
