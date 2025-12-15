import { api } from "@/lib/axios"
import { FetchBookResponse, FetchBooksRequestData } from "@/types/book";

export const bookService = {
    getBooks: async (params?: {
        search?: string;
        category?: string;
        sort?: string;
        isPurchased?: boolean;
    }) => {
        const response = await api.get('/books', { params });
        return response.data;
    },

    fetchBook: async (url: FetchBooksRequestData): Promise<FetchBookResponse> => {
        const response = await api.post('/books/fetch-info', url);
        return response.data;
    },

    getBookById: async (bookId: number) => {
        const response = await api.get(`/books?bookId=${bookId}`);
        console.log(response.data);
        return response.data;
    }

}