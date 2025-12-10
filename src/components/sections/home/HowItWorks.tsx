import { BookOpen, ThumbsUp, CheckCircle, Users } from "lucide-react";

const steps = [
    {
        icon: BookOpen,
        number: 1,
        title: "Create Vote",
        description: "Cari buku favorit Anda dan pastikan bukunya tersedia di <strong>Gramedia</strong>, salin link bukunya, lalu <strong>create vote</strong>"
    },
    {
        icon: Users,
        number: 2,
        title: "Komunitas Memilih",
        description: "Pengguna lain memberikan suara untuk buku yang paling ingin mereka baca"
    },
    {
        icon: ThumbsUp,
        number: 3,
        title: "Vote & Ranking",
        description: "Lihat ranking buku yang anda voting pada menu <strong>top books</strong>"
    },
    {
        icon: CheckCircle,
        number: 4,
        title: "Buku Ditambahkan",
        description: "Buku dengan vote terbanyak akan ditambahkan ke koleksi perpustakaan"
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">How It Works?</h2>
                <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                    Empat langkah mudah untuk membuat buku pilihan Anda menjadi koleksi buku perpustakaan
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {steps.map((step) => {
                    const Icon = step.icon;
                    return (
                        <div key={step.number} className="relative">
                            <div className="bg-white border border-neutral-200 rounded-lg p-6 h-full flex flex-col items-center text-center hover:border-primary/50 hover:shadow-lg transition-all">
                                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <div className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-sm font-bold rounded-full mb-3">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                                <p
                                    className="text-sm text-neutral-600"
                                    dangerouslySetInnerHTML={{ __html: step.description }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
