import BookCardSkeleton from "@/components/BookCardSkeleton";
import BookPreview from "@/components/BookPreview";

interface BookData {
    title: string;
    author: string;
    imageUrl: string;
    color: string;
    description: string;
}

interface BookPreviewSectionProps {
    book: BookData | null;
    isLoading: boolean;
    selectedCategory: string;
}

export default function BookPreviewSection({ book, isLoading, selectedCategory }: BookPreviewSectionProps) {
    return (
        <div className="preview border p-4 bg-white rounded-4xl mb-6 col-span-5 relative overflow-y-hidden">
            <h4 className="text-center font-semibold absolute bg-white top-2 left-0 px-4 py-2 text-sm rounded-br-md z-10">
                Preview
            </h4>
            {!book || isLoading ? (
                <BookCardSkeleton />
            ) : (
                <BookPreview
                    title={book.title}
                    author={book.author}
                    category={selectedCategory || "Novel"}
                    imageUrl={book.imageUrl}
                    likes={1234}
                    color={book.color}
                />
            )}
        </div>
    );
}
