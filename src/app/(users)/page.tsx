'use client'

import { useState } from "react";
import HeroSection from "@/components/sections/home/HeroSection";
import TopRatedBooks from "@/components/sections/home/TopRatedBooks";
import Statistics from "@/components/sections/home/Statistics";
import HowItWorks from "@/components/sections/home/HowItWorks";
import { useStats } from "@/hooks/useStats";

const GENRES = ["All Genres", "Novel", "Technology", "Management", "Accounting", "Communication", "Design", "Psychology"];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>(GENRES[0]);
  const categoryParam = selectedCategory === "All Genres" ? null : selectedCategory;
  const { data: stats, isFetching } = useStats({ category: categoryParam });
  const topBooks = stats?.topBooks || [];
  const statsData = stats?.stats;

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  return (
    <div className="font-sans w-full">
      <HeroSection />
      <TopRatedBooks
        topBooks={topBooks}
        isFetching={isFetching}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Statistics stats={statsData} />
      <HowItWorks />
    </div>
  );
}
