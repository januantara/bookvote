import z from "zod";

export const CategorySchema = z.object({
    category: z.enum([
        "Novel",
        "Technology",
        "Management",
        "Accounting",
        "Communication",
        "Design",
        "Psychology"
    ], 'Please select a category'),
});

export const CreateVoteSchema = z.object({
    title: z.string().min(1, "Title is required"),
    author: z.string().min(1, "Author is required"),
    category: z.enum([
        "Novel",
        "Technology",
        "Management",
        "Accounting",
        "Communication",
        "Design",
        "Psychology"
    ], "Please select a category"),
    color: z.string().min(1, "Color is required"),
    imageUrl: z.string().min(1, "Book cover image URL is required"),
    requestedBy: z.string().min(1, "User ID is required"),
    description: z.string().min(1, "Description is required")
})

export const FetchBookSchema = z.object({
    url: z.string().min(1, "Link is required").url("Invalid URL format"),
});