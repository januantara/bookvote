import z from "zod";
import { FetchBooksRequestSchema } from "@/schemas/book.schema";

export type FetchBooksRequestData = z.infer<typeof FetchBooksRequestSchema>;

export interface FetchBookResponse {
    message: string;
    book: {
        title: string;
        author: string;
        imageUrl: string;
        color: string;
        description: string;
    }
}

export type BookCategory =
    | "Novel"
    | "Technology"
    | "Management"
    | "Accounting"
    | "Communication"
    | "Design"
    | "Psychology";

export interface Book {
    id: number;
    title: string;
    imageUrl: string;
    author: string;
    description: string;
    category: string;
    isPurchased: boolean;
    purchasedAt: string | null;
    voteCount: number;
    color: string;
    shelfPosition: string | null;
    requestedBy: string;
    createdAt: string;
}