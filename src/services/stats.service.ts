import { api } from "@/lib/axios";

export const statsService = {
    getStats: async (category: string | null) => {
        const response = await api.get('/stats', { params: { category } });
        return response.data;
    }
}