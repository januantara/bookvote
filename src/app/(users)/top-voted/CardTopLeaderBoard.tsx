import { Award, Crown, Medal, ThumbsUpIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { cn } from "@/lib/utils"

interface CardLeaderBoardProps {
    rank: number;
    voteCount: number;
    title: string;
    author: string;
    category: string;
    description: string;
    imageUrl: string;
}

const rankVariant = {
    1: {
        icon: Crown,
        iconClass: "text-yellow-500 -top-5 -left-5 -rotate-45",
        border: "border-yellow-500 hover:bg-yellow-50",
        rankBadge: "from-amber-500 to-yellow-500",
        voteCount: "bg-yellow-500",
        category: "bg-yellow-50 text-yellow-500"
    },
    2: {
        icon: Medal,
        iconClass: "text-gray-500 -top-5 -right-5 rotate-45",
        border: "border-gray-500 hover:bg-gray-50",
        rankBadge: "from-gray-500 to-gray-300",
        voteCount: "bg-gray-500",
        category: "bg-gray-50 text-gray-500"
    },
    3: {
        icon: Award,
        iconClass: "text-amber-800 -top-5 -left-5 -rotate-45",
        border: "border-amber-800 hover:bg-amber-50",
        rankBadge: "from-amber-800 to-amber-600",
        voteCount: "bg-amber-800",
        category: "bg-amber-50 text-amber-500"
    },
    default: {
        icon: Award,
        iconClass: "hidden",
        border: "border-gray-300 hover:bg-gray-50",
        rankBadge: "from-teal-500 to-teal-300",
        voteCount: "bg-teal-500",
        category: "bg-teal-50 text-teal-500"
    }
}


const CardTopLeaderBoard = ({ rank, imageUrl, voteCount, category, title, author, description }: CardLeaderBoardProps) => {
    const variant = rank >= 1 && rank <= 3
        ? rankVariant[rank as 1 | 2 | 3]
        : rankVariant["default"];

    return (
        <div className={cn("border p-6 flex rounded-lg relative", variant.border)}>
            <variant.icon className={cn("font-bold absolute", variant.iconClass)} strokeWidth={2.5} />

            {/* Rank Badge */}
            <div className={cn(
                "flex absolute top-1 left-1 z-10 size-12 bg-linear-to-br text-white items-center justify-center rounded-full font-bold",
                variant.rankBadge
            )}>
                #{rank}
            </div>

            {/* Vote Count */}
            <div className={cn(
                "absolute top-0 right-0 mt-3 mr-3 font-bold text-sm text-white flex items-center gap-x-2 rounded-full px-4 py-2",
                variant.voteCount
            )}>
                <ThumbsUpIcon size={16} strokeWidth={2.5} />
                {voteCount} Votes
            </div>

            {/* Book Cover */}
            <div className="relative">
                <Image
                    src={imageUrl}
                    width={150}
                    height={0}
                    alt="image-book"
                    className="h-auto rounded-md"
                />
            </div>

            <div className="description flex flex-1 flex-col items-start ps-6">

                {/* Category */}
                <span className={cn(
                    "text-sm font-semibold rounded-full px-4 py-2",
                    variant.category
                )}>{category}</span>

                <h3 className="text-2xl font-bold mt-4">{title}</h3>
                <h4 className="mt-2 text-sm text-neutral-500">by <strong>{author}</strong></h4>
                <div className="mt-2 text-justify relative">
                    <p className="line-clamp-3">{description}</p>
                    <span className="absolute bottom-0 right-0 flex items-center bg-linear-to-r from-transparent via-white via-30% to-white pl-12">
                        <Link
                            className="text-sm underline text-gray-500 hover:text-primary"
                            href={'/'}
                        >
                            See Details
                        </Link>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default CardTopLeaderBoard