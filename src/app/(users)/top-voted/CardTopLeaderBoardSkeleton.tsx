import { cn } from "@/lib/utils"

interface CardTopLeaderBoardSkeletonProps {
    rank: number;
}

const rankVariant = {
    1: {
        border: "border-yellow-500",
        rankBadge: "from-amber-500 to-yellow-500",
        voteCount: "bg-yellow-500",
        category: "bg-yellow-100"
    },
    2: {
        border: "border-gray-500",
        rankBadge: "from-gray-500 to-gray-300",
        voteCount: "bg-gray-500",
        category: "bg-gray-100"
    },
    3: {
        border: "border-amber-800",
        rankBadge: "from-amber-800 to-amber-600",
        voteCount: "bg-amber-800",
        category: "bg-amber-100"
    },
    default: {
        border: "border-gray-300",
        rankBadge: "from-teal-500 to-teal-300",
        voteCount: "bg-teal-500",
        category: "bg-teal-100"
    }
}

const CardTopLeaderBoardSkeleton = ({ rank }: CardTopLeaderBoardSkeletonProps) => {
    const variant = rank >= 1 && rank <= 3
        ? rankVariant[rank as 1 | 2 | 3]
        : rankVariant["default"];

    return (
        <div className={cn("border p-6 flex rounded-lg relative animate-pulse", variant.border)}>
            {/* Rank Badge */}
            <div className={cn(
                "flex absolute top-1 left-1 z-10 size-12 bg-linear-to-br text-white items-center justify-center rounded-full font-bold",
                variant.rankBadge
            )}>
                #{rank}
            </div>

            {/* Vote Count Skeleton */}
            <div className={cn(
                "absolute top-0 right-0 mt-3 mr-3 rounded-full px-4 py-2 h-9 w-24",
                variant.voteCount, "opacity-50"
            )} />

            {/* Book Cover Skeleton */}
            <div className="relative">
                <div className="w-[150px] h-[220px] bg-neutral-200 rounded-md" />
            </div>

            <div className="flex flex-1 flex-col items-start ps-6">
                {/* Category Skeleton */}
                <div className={cn("h-8 w-24 rounded-full", variant.category)} />

                {/* Title Skeleton */}
                <div className="mt-4 space-y-2 w-full">
                    <div className="h-7 bg-neutral-200 rounded w-3/4" />
                </div>

                {/* Author Skeleton */}
                <div className="mt-2 h-4 bg-neutral-200 rounded w-32" />

                {/* Description Skeleton */}
                <div className="mt-2 space-y-2 w-full">
                    <div className="h-4 bg-neutral-200 rounded w-full" />
                    <div className="h-4 bg-neutral-200 rounded w-full" />
                    <div className="h-4 bg-neutral-200 rounded w-2/3" />
                </div>
            </div>
        </div>
    )
}

export default CardTopLeaderBoardSkeleton
