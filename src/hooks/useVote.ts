import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { AxiosError } from "axios"
import { toast } from "sonner"
import { voteService } from "@/services/vote.service"
import type { ErrorResponse } from "@/types/axios-error"
import type { CreateVoteData } from "@/types/vote"

export const useCreateVote = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (voteData: CreateVoteData) => voteService.createVote(voteData),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data?.error || "Failed to create vote. Please try again.");
        }
    })
}

export const useTopVotedBooks = () => {
    return useQuery({
        queryKey: ['top-voted-books'],
        queryFn: () => voteService.getTopVotedBooks(),
    })
}

export const useToggleVote = () => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async ({ userId, bookId }: {
            userId: string;
            bookId: number;
        }) => {
            if (!userId) throw new Error("User not authenticated");
            console.log("Voting for book ID:", bookId, "by user ID:", userId);
            return voteService.vote(userId, bookId);
        },
        onSuccess: (_, variables) => {
            qc.invalidateQueries({ queryKey: ["books"], refetchType: "active" });
            qc.invalidateQueries({ queryKey: ["book", variables.bookId], refetchType: "active" });
            qc.invalidateQueries({ queryKey: ["stats"], refetchType: "active" });
        },
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data?.error || "Failed to vote the book. Please try again.");
        }
    })
}