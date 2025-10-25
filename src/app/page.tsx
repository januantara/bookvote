import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import CardBook from '../components/CardBook';

export default function Home() {
  const GENRES = ["All Genres", "Fiction", "Non-Fiction", "Science", "History", "Technology", "Education", "Literature"];

  return (
    <div className="font-sans w-full">

      <section id="hero-section" className="w-full py-8 md:pt-20 md:h-[calc(100dvh-69px)] items-center flex flex-col relative bg-gradient-to-br from-white to-secondary/30">
        <div className="badge bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">Community-Driven Reading 📚</div>
        <h1 className="text-5xl font-bold mt-6 text-center leading-snug">Scriptura, Where <br /> <span className="text-primary">Readers Decide What’s Next</span></h1>
        <p className="mt-2 max-w-[43rem] text-neutral-500 text-center">Scriptura adalah platform bagi mahasiswa untuk mengusulkan dan memilih buku baru di perpustakaan. Kami percaya, pengetahuan berkembang dari mereka yang membacanya.</p>
        <div className="flex space-x-6 mt-10">
          <Button className="w-40 py-5">Browse Books <ArrowRightIcon /></Button>
          <Button variant="outline" className="w-40 px-6 py-5">Request Books</Button>
        </div>
      </section>

      <section id="monthly-top-rated" className="pt-20">
        <div className="max-w-7xl px-6 mx-auto  ">
          <h3 className="text-2xl font-semibold">This Month's Top-Rated Books</h3>

          <ul className="list-genres flex mt-4 space-x-2">
            <li className="px-6 py-2.5 font-medium rounded-full bg-primary text-white text-sm">{GENRES[0]}</li>
            {GENRES.slice(1, GENRES.length).map((genre) => (
              <li
                key={genre}
                className={cn(
                  "px-6 py-2.5 font-medium rounded-full bg-white border text-sm",
                )}
              >
                {genre}
              </li>
            ))}
          </ul>

          <div id="books" className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
            <CardBook
              title="James Humility Consert Higghiels"
              author="Jamse Arthur"
              category="Horror"
              likes={1245}
              imageUrl="https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg"
            />
            <CardBook
              title="James Humility Consert"
              author="Jamse Arthur"
              category="Horror"
              likes={1245}
              imageUrl="https://cdn.gramedia.com/uploads/picture_meta/2023/10/30/debsfyx6tcwnvbwdteeakv.jpg"
            />
            <CardBook
              title="James Humility Consert"
              author="Jamse Arthur"
              category="Horror"
              likes={1245}
              imageUrl="https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg"
            />
            <CardBook
              title="James Humility Consert"
              author="Jamse Arthur"
              category="Horror"
              likes={1245}
              imageUrl="https://cdn.gramedia.com/uploads/products/a-d-i2ia-n.jpg"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
