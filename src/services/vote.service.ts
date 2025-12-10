import { api } from "@/lib/axios";
import { CreateVoteData } from "@/types/vote";

export const voteService = {
    createVote: async (data: CreateVoteData) => {
        const response = await api.post('/books', data);
        return response.data;
    },

    getTopVotedBooks: async () => {
        const response = await api.get('/books/top');
        return response.data;
    }
}