import { CreateVoteSchema, FetchBookSchema, CategorySchema } from "@/schemas/vote.schema";
import z from "zod";

export type FetchBookData = z.infer<typeof FetchBookSchema>;
export type CreateVoteData = z.infer<typeof CreateVoteSchema>;
export type CategoryFormData = z.infer<typeof CategorySchema>;

export interface TopVotedBook {
    id: number;
    title: string;
    imageUrl: string;
    author: string;
    description: string;
    category: string;
    isPurchased: boolean;
    purchasedAt: string | null;
    color: string;
    shelfPosition: string | null;
    requestedBy: string;
    createdAt: string;
    voteCount: number;
}