import { statsService } from "@/services/stats.service";
import { useQuery } from "@tanstack/react-query";

export const useStats = ({ category }: { category: string | null }) => {
    return useQuery({
        queryKey: ["stats", category],
        queryFn: async () => statsService.getStats(category),
    })
}