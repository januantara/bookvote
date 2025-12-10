import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface NewArrivalCardProps {
    title: string;
    author: string;
    category: string;
    imageUrl: string;
    dateAdded: string;
}

const NewArrivalCard = ({
    title,
    author,
    category,
    imageUrl,
    dateAdded,
}: NewArrivalCardProps) => {
    return (
        <div className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-neutral-50 h-56 p-3">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-teal-500">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-contain group-hover:scale-105 transition-transform p-8 duration-300"
                    />
                </div>
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                    <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {category}
                    </span>
                </div>
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
                <Button className="w-full text-sm py-2.5 h-auto font-medium">
                    Baca Sekarang
                </Button>
            </div>
        </div>
    );
};

export default NewArrivalCard;
