import { BookOpen } from "lucide-react";
import OrnamentBackground from "./OrnamentBackground";

export default function PageHeader() {
    return (
        <section
            id="header"
            className="py-15 px-6 flex flex-col items-center border-b relative overflow-hidden bg-white"
        >
            <OrnamentBackground />
            <div className="p-3 bg-primary z-10 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary stroke-white" />
            </div>
            <h1 className="font-semibold text-2xl mt-3">Create Vote</h1>
            <p className="text-neutral-600 mt-2 mb-6 max-w-lg">
                Drop the Gramedia link, choose the category, and cast your vote
            </p>
        </section>
    );
}
