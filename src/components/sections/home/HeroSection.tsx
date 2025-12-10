import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section id="hero-section" className="w-full py-8 max-sm:mt-20 md:pt-20 md:h-[calc(100dvh-69px)] items-center flex flex-col relative bg-[#fdfdfd]">
            <div className="badge bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium whitespace-pre-wrap">
                Community-Driven Reading  📚
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 text-center leading-snug">
                BookVote, Where <br /> <span className="text-primary">Readers Decide What's Next</span>
            </h1>
            <p className="mt-2 max-w-172 text-neutral-500 text-center px-6 text-sm md:text-base">
                BookVote adalah platform bagi mahasiswa untuk mengusulkan dan memilih buku baru di perpustakaan. Kami percaya, pengetahuan berkembang dari mereka yang membacanya.
            </p>
            <div className="flex space-x-6 mt-10">
                <Button className="w-40 py-5 group" asChild>
                    <Link href="/create-vote">
                        Create Vote <ArrowRightIcon className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out" />
                    </Link>
                </Button>
                <Button variant="outline" className="w-40 px-6 py-5" asChild>
                    <Link href="/books">Browse Books</Link>
                </Button>
            </div>
        </section>
    );
}
