import { BookCheck, Calendar, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import he from "he";
import { cn } from "@/lib/utils";

interface NewArrivalCardProps {
    title: string;
    author: string;
    category: string;
    imageUrl: string;
    dateAdded: string;
    voted: boolean;
    color: string;
    isPurchased: boolean;
}

const VotedCard = ({
    title,
    author,
    category,
    imageUrl,
    dateAdded,
    voted,
    color,
    isPurchased
}: NewArrivalCardProps) => (
    <div className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-sm transition-all duration-300">
        {/* Image Container */}
        <div className="relative flex overflow-hidden bg-neutral-50 h-62 p-3">
            <div
                className="relative w-full h-full rounded-md overflow-hidden flex items-center justify-center p-4"
                style={{ backgroundColor: color || "#d1d5db" }}
            >
                <Image
                    src={imageUrl}
                    alt={title}
                    width={200}
                    height={200}
                    className="object-contain max-h-full p-4" />
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
            <h3 className="font-bold text-sm line-clamp-1 mb-2 text-neutral-900 group-hover:text-primary transition-colors leading-tight">
                {he.decode(title)}
            </h3>

            {/* Author */}
            <p className="text-xs text-neutral-600 mb-4 line-clamp-1">
                <span className="font-semibold">{he.decode(author)}</span>
            </p>

            {/* Action Button */}
            <div className="flex *:flex-1 gap-2">
                <Button className={cn(
                    "text-sm font-medium cursor-pointer",
                    { "bg-primary/50": voted }
                )}>
                    Vote
                    <ThumbsUp className="size-4 inline-block" />
                </Button>
                <Button variant="outline" className="cursor-pointer shadow-none">Detail</Button>
            </div>
        </div>
    </div>
);

export default VotedCard;
