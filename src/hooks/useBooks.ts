import { bookService } from "@/services/book.service";
import { ErrorResponse } from "@/types/axios-error";
import { FetchBooksRequestData } from "@/types/book";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useBooks = (params?: {
    search?: string;
    category?: string;
    sort?: string;
    isPurchased?: boolean;
}) => {
    return useQuery({
        queryKey: ['books', params],
        queryFn: () => bookService.getBooks(params),
    });
};

export const useFetchBook = () => {
    return useMutation({
        mutationFn: (url: FetchBooksRequestData) => bookService.fetchBook(url),
        onSuccess: () => toast.success("Book data fetched successfully!"),
        onError: (error: AxiosError<ErrorResponse>) => {
            toast.error(error.response?.data.error || "Failed to fetch book data. Please check the link and try again.");
        }
    })
}

