import { CountingNumber } from "@/components/ui/shadcn-io/counting-number";

interface StatisticsProps {
    stats?: {
        communityPicks: number;
        votesCount: number;
        totalUsers: number;
    };
}

const StatItem = ({ number, label }: { number: number; label: string }) => (
    <div className="book-count text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans">
            <CountingNumber
                number={number}
                transition={{ stiffness: 100, damping: 40 }}
            />
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg font-semibold">{label}</p>
    </div>
);

export default function Statistics({ stats }: StatisticsProps) {
    return (
        <section id="info-statistics" className="mt-20 max-w-7xl mx-auto px-6">
            <div className="w-full border bg-linear-to-r from-teal-500 to-cyan-500 text-white px-6 sm:px-8 md:px-10 py-12 sm:py-16 md:py-20 rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-10">
                    <StatItem number={stats?.communityPicks || 0} label="Book Purchased" />
                    <StatItem number={stats?.votesCount || 0} label="User Votes" />
                    <StatItem number={stats?.totalUsers || 0} label="Total Members" />
                </div>
            </div>
        </section>
    );
}
