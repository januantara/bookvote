import { Eye, Sparkles, ThumbsUp, ThumbsUpIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

interface BookCardProps {
    likes: number
    title: string
    author: string
    category: string
}


const Card = ({ likes, title, author, category }: BookCardProps) => {
    return (
        <div className="card border bg-white rounded-3xl overflow-hidden">

            <div className="card-image bg-rose-300 p-10 pb-12">
                <div className="rounded-md overflow-hidden shadow-2xl">
                    <Image
                        src="https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg"
                        alt="Gambar"
                        width={400}
                        height={0}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="flex justify-between w-full px-6 my-6">
                <div className="inline-flex items-center gap-1 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xs font-bold px-4 py-2 rounded-full">
                    <Sparkles size={12} />
                    {category}
                </div>
                <div className="flex items-center gap-1 bg-teal-50 px-3 py-1.5 rounded-full">
                    <ThumbsUp size={14} className="text-teal-600" />
                    <span className="text-sm font-bold text-teal-700">{likes}</span>
                </div>
            </div>

            <div className="card-body pb-6 px-6 inline-flex flex-col items-start relative w-full">
                <h4 className="text-xl font-bold mb-2">{title}</h4>
                <h6 className="text-sm text-neutral-500">{author}</h6>
            </div>

            <div className="card-footer border-t border-border/50 flex gap-2 px-4 py-6 relative">
                <Button className="flex-1 py-6"><ThumbsUpIcon /> Upvote</Button>
                <Button className="flex-1 py-6 bg-background text-primary/80 border border-primary/30 hover:text-primary hover:bg-primary/3 hover:border-primary">
                    <Eye />
                    Details
                </Button>
            </div>
        </div>
    )
}

export default Card