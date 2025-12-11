import { zodResolver } from "@hookform/resolvers/zod";
import type { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useFetchBook } from '@/hooks/useBooks';
import { CategorySchema, CreateVoteSchema, FetchBookSchema } from "@/schemas/vote.schema";
import { useAuthStore } from "@/store/authStore";
import type { ErrorResponse } from "@/types/axios-error";
import type { CategoryFormData, CreateVoteData, FetchBookData } from "@/types/vote";
import { useCreateVote } from "./useVote";

interface BookData {
    title: string;
    author: string;
    imageUrl: string;
    color: string;
    description: string;
}

export function useCreateVoteForm() {
    const userId = useAuthStore((state) => state.user?.id);
    const fetchBook = useFetchBook();
    const [book, setBook] = useState<BookData | null>(null);
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [pendingVoteData, setPendingVoteData] = useState<CategoryFormData | null>(null);
    const { mutate: createVote } = useCreateVote();
    const router = useRouter();

    const fetchForm = useForm<FetchBookData>({
        resolver: zodResolver(FetchBookSchema),
        mode: "onSubmit",
        defaultValues: {
            url: "",
        },
    });

    const voteForm = useForm<CategoryFormData>({
        resolver: zodResolver(CategorySchema),
        mode: "onSubmit",
    });

    const handleFetchBook = (data: FetchBookData) => {
        fetchBook.mutate(data, {
            onSuccess: (response) => {
                setBook(response.book);
            },
            onError: (error: AxiosError<ErrorResponse>) => {
                if (error.response?.status === 401) {
                    toast.error("Please login first to fetch book data");
                } else {
                    toast.error(error.response?.data?.error || "Failed to fetch book data");
                    console.error(error);
                }
            },
        });
    };

    const handleCreateVote = (data: CategoryFormData) => {
        setPendingVoteData(data);
        setIsConfirmOpen(true);
    };

    const confirmCreateVote = () => {
        if (!pendingVoteData) return;

        const newBook: CreateVoteData = {
            title: book?.title || "",
            author: book?.author || "",
            imageUrl: book?.imageUrl || "",
            color: book?.color || "",
            description: book?.description || "",
            requestedBy: userId || "",
            category: pendingVoteData.category,
        };

        const parsed = CreateVoteSchema.safeParse(newBook);

        if (!parsed.success) {
            toast.error("Invalid book data. Please try again.");
            return;
        }

        createVote(parsed.data, {
            onSuccess: () => {
                setIsConfirmOpen(false);
                setIsSuccessOpen(true);
            },
            onError: () => {
                setIsConfirmOpen(false);
            }
        });
    };

    const handleCreateAnother = () => {
        setIsSuccessOpen(false);
        setBook(null);
        setPendingVoteData(null);
        fetchForm.reset();
        voteForm.reset();
    };

    const handleViewVotes = () => {
        setIsSuccessOpen(false);
        router.push('/books');
    };

    const handleChangeBook = () => {
        setBook(null);
        setPendingVoteData(null);
        fetchForm.reset();
        voteForm.reset();
    };

    return {
        book,
        fetchForm,
        voteForm,
        handleFetchBook,
        handleCreateVote,
        confirmCreateVote,
        handleCreateAnother,
        handleViewVotes,
        handleChangeBook,
        isLoading: fetchBook.isPending,
        isConfirmOpen,
        setIsConfirmOpen,
        isSuccessOpen,
        setIsSuccessOpen,
        pendingVoteData,
    };
}
