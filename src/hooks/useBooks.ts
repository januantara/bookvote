import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { bookService } from "@/services/book.service";
import type { ErrorResponse } from "@/types/axios-error";
import type { FetchBooksRequestData } from "@/types/book";

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

export const useBookDetails = (bookId: number) => {
    return useQuery({
        queryKey: ['book', bookId],
        queryFn: () => bookService.getBookById(Number(bookId)),
    });
}

export const usePurchasedBooks = () => {
    return useQuery({
        queryKey: ['books', 'purchased'],
        queryFn: () => bookService.getPurchasedBooks()
    })
}