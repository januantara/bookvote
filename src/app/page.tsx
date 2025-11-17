import { Button } from "@/components/ui/button";
import { ArrowRightIcon, BookOpen, ThumbsUp, CheckCircle, Users } from "lucide-react";
import CardBook from "@/components/CardBook";
import { CategoryTabs, CategoryTabsList, CategoryTab, CategoryTabContent } from "@/components/CategoryTabs";
import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";

export default function Home() {
  const GENRES = ["All Genres", "Fiction", "Non-Fiction", "Science", "History", "Technology", "Education", "Literature"];

  return (
    <div className="font-sans w-full">

      <section id="hero-section" className="w-full py-8 max-sm:mt-20 md:pt-20 md:h-[calc(100dvh-69px)] items-center flex flex-col relative bg-[#fdfdfd]">
        <div className="badge bg-primary/10 px-4 py-2 rounded-full text-primary text-sm font-medium">Community-Driven Reading 📚</div>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-6 text-center leading-snug">BookVote, Where <br /> <span className="text-primary">Readers Decide What’s Next</span></h1>
        <p className="mt-2 max-w-[43rem] text-neutral-500 text-center px-6 text-sm md:text-base">BookVote adalah platform bagi mahasiswa untuk mengusulkan dan memilih buku baru di perpustakaan. Kami percaya, pengetahuan berkembang dari mereka yang membacanya.</p>
        <div className="flex space-x-6 mt-10">
          <Button className="w-40 py-5 group">Create Vote <ArrowRightIcon className="group-hover:translate-x-3 transition-transform duration-300 ease-in-out" /></Button>
          <Button variant="outline" className="w-40 px-6 py-5">Browse Books</Button>
        </div>
      </section>

      <section id="monthly-top-rated" className="pt-20">
        <div className="max-w-7xl px-6 mx-auto  ">
          <h3 className="text-2xl max-sm:text-center font-semibold">This Month's Top-Rated Books</h3>
          <CategoryTabs defaultValue={GENRES[0]}>
            <CategoryTabsList>
              {GENRES.map(genre => <CategoryTab key={genre} value={genre}>{genre}</CategoryTab>)}
            </CategoryTabsList>
            <CategoryTabContent value={GENRES[0]}>
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
            </CategoryTabContent>
          </CategoryTabs>
        </div>
      </section>

      <section id="info-statistics" className="mt-20 max-w-7xl mx-auto px-6">
        <div className="w-full border bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-10 py-20 rounded-2xl">
          <div className="m-auto flex justify-evenly px-10  gap-x-20 text-center">
            <div className="book-count text-center">
              <h2 className="text-4xl font-bold font-sans">
                <CountingNumber number={250} />
                +
              </h2>
              <p className="mt-2 text-lg font-semibold">Book Listed</p>
            </div>
            <div className="book-count text-center">
              <h2 className="text-4xl font-bold font-sans">
                <CountingNumber
                  transition={{ stiffness: 50, damping: 100 }}
                  number={3000}
                />
                <span>+</span>
              </h2>
              <p className="mt-2 text-lg font-semibold">Community Votes</p>
            </div>
            <div className="book-count text-center">
              <h2 className="text-4xl font-bold font-sans">
                <CountingNumber
                  number={300}
                />
                <span>+</span>
              </h2>
              <p className="mt-2 text-lg font-semibold">Active Reader</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works?</h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">Empat langkah mudah untuk membuat buku pilihan Anda menjadi koleksi buku perpustakaan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-sm font-bold rounded-full mb-3">1</div>
              <h3 className="text-lg font-semibold mb-3">Create Vote</h3>
              <p className="text-sm text-neutral-600">Cari buku favorit Anda dan pastikan bukunya tersedia di <strong>Gramedia</strong>, salin link bukunya, lalu <strong>create vote</strong></p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-sm font-bold rounded-full mb-3">2</div>
              <h3 className="text-lg font-semibold mb-3">Komunitas Memilih</h3>
              <p className="text-sm text-neutral-600">Pengguna lain memberikan suara untuk buku yang paling ingin mereka baca</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="bg-white border border-neutral-200 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <ThumbsUp className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-sm font-bold rounded-full mb-3">3</div>
              <h3 className="text-lg font-semibold mb-3">Vote & Ranking</h3>
              <p className="text-sm text-neutral-600">Lihat ranking buku yang anda voting pada menu <strong>top books</strong></p>
            </div>
          </div>

          {/* Step 4 */}
          <div>
            <div className="bg-white border border-neutral-200 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                <CheckCircle className="w-7 h-7 text-primary" />
              </div>
              <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-sm font-bold rounded-full mb-3">4</div>
              <h3 className="text-lg font-semibold mb-3">Buku Ditambahkan</h3>
              <p className="text-sm text-neutral-600">Buku dengan vote terbanyak akan ditambahkan ke koleksi perpustakaan</p>
            </div>
          </div>
        </div>
        {/* 
        <div className="text-center">
          <Button className="py-6 px-10 text-base">Mulai Ajukan Buku Sekarang</Button>
        </div> */}
      </section>

    </div>
  );
}
