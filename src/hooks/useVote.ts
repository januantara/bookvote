import { voteService } from "@/services/vote.service"
import { ErrorResponse } from "@/types/axios-error"
import { CreateVoteData } from "@/types/vote"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { AxiosError } from "axios"
import { toast } from "sonner"

export const useVote = () => {
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