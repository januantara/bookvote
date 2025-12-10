export default function BookCardSkeleton() {
    return (
        <div className="card group rounded-2xl bg-white shadow-sm overflow-hidden border border-neutral-100 animate-pulse">
            {/* Image Skeleton */}
            <div className="card-header relative grid place-items-center py-8 md:py-12 h-[220px] sm:h-[300px] md:h-[420px] bg-neutral-200">
                <div className="w-auto h-[140px] sm:h-[200px] md:h-[280px] bg-neutral-300 rounded-md" />

                {/* Vote Badge Skeleton */}
                <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-neutral-100 px-3 py-2 rounded-full">
                    <div className="w-4 h-4 bg-neutral-300 rounded-full" />
                    <div className="w-8 h-4 bg-neutral-300 rounded" />
                </div>
            </div>

            <div className="card-content p-5 md:p-6">
                {/* Category Badge Skeleton */}
                <div className="flex items-center gap-2 mb-3">
                    <div className="h-6 w-24 bg-neutral-200 rounded-full" />
                </div>

                {/* Title Skeleton */}
                <div className="space-y-2 mb-2 min-h-[3rem] md:min-h-[3.5rem]">
                    <div className="h-5 bg-neutral-200 rounded w-full" />
                    <div className="h-5 bg-neutral-200 rounded w-3/4" />
                </div>

                {/* Author Skeleton */}
                <div className="h-4 bg-neutral-200 rounded w-32 mb-5" />

                {/* Buttons Skeleton */}
                <div className="card-footer flex flex-col sm:flex-row gap-2.5">
                    <div className="flex-1 h-10 md:h-11 bg-neutral-200 rounded-md" />
                    <div className="flex-1 h-10 md:h-11 bg-neutral-200 rounded-md" />
                </div>
            </div>
        </div>
    );
}
