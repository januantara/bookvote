import z from "zod";

export const FetchBooksRequestSchema = z.object({
    url: z
        .string()
        .min(1, "Link is required")
        .url("Invalid URL format"),
})
