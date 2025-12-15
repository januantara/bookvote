
const SkeletonBook = () => {
    return (
        <div className="card rounded-3xl max-sm:border bg-white md:shadow-sm overflow-hidden">
            {/* Header Skeleton */}
            <div className="card-header grid place-items-center py-6 sm:py-8 md:py-10 h-[180px] sm:h-[280px] md:h-[400px] bg-neutral-100 animate-pulse">
                <div className="w-[80px] h-[110px] sm:w-[120px] sm:h-[180px] md:w-[150px] md:h-[260px] bg-neutral-200 rounded-md" />
            </div>

            <div className="card-content mt-auto md:p-6">
                <div className="card-info bg-white md:shadow-sm rounded-2xl md:-mt-12 p-4 md:p-6">

                    {/* Tags Skeleton */}
                    <div className="flex items-center justify-between">
                        <div className="h-6 w-20 bg-neutral-100 rounded-full animate-pulse" />
                        <div className="h-6 w-12 bg-neutral-100 rounded-full animate-pulse" />
                    </div>

                    {/* Title Skeleton */}
                    <div className="mt-4 h-5 md:h-6 w-3/4 bg-neutral-100 rounded animate-pulse" />

                    {/* Author Skeleton */}
                    <div className="mt-2 h-4 w-1/2 bg-neutral-100 rounded animate-pulse" />

                    {/* Footer Buttons Skeleton */}
                    <div className="card-footer flex mt-6 gap-3">
                        <div className="h-10 md:h-12 flex-1 bg-neutral-100 rounded-md animate-pulse p-4" />
                        <div className="h-10 md:h-12 flex-1 bg-neutral-100 rounded-md animate-pulse px-4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkeletonBook