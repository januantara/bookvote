"use client"

import PageHeader from "./PageHeader";
import FetchBookForm from "./FetchBookForm";
import CreateVoteForm from "./CreateVoteForm";
import BookPreviewSection from "./BookPreviewSection";
import ConfirmVoteDialog from "./ConfirmVoteDialog";
import SuccessVoteDialog from "./SuccessVoteDialog";
import { useCreateVoteForm } from "@/hooks/useCreateVoteForm";

export default function CreateVotePage() {
    const {
        book,
        fetchForm,
        voteForm,
        handleFetchBook,
        handleCreateVote,
        confirmCreateVote,
        handleCreateAnother,
        handleViewVotes,
        handleChangeBook,
        isLoading,
        isConfirmOpen,
        setIsConfirmOpen,
        isSuccessOpen,
        setIsSuccessOpen,
        pendingVoteData,
    } = useCreateVoteForm();

    return (
        <div className="min-h-screen bg-linear-to-br from-white to-secondary/20">
            <PageHeader />

            <section id="vote" className="px-6 py-12">
                <div className="grid grid-cols-12 items-start gap-6">
                    <div className="form-vote bg-white p-8 rounded-xl border col-span-7">
                        <FetchBookForm
                            form={fetchForm}
                            onSubmit={handleFetchBook}
                            isLoading={isLoading}
                            isBookFetched={!!book}
                            onChangeBook={handleChangeBook}
                        />

                        {book && (
                            <CreateVoteForm
                                form={voteForm}
                                onSubmit={handleCreateVote}
                            />
                        )}
                    </div>

                    <BookPreviewSection
                        book={book}
                        isLoading={isLoading}
                        selectedCategory={voteForm.watch("category")}
                    />
                </div>
            </section>

            <ConfirmVoteDialog
                open={isConfirmOpen}
                onOpenChange={setIsConfirmOpen}
                onConfirm={confirmCreateVote}
                bookTitle={book?.title}
                category={pendingVoteData?.category}
            />

            <SuccessVoteDialog
                open={isSuccessOpen}
                onOpenChange={setIsSuccessOpen}
                onCreateAnother={handleCreateAnother}
                onViewVotes={handleViewVotes}
                bookTitle={book?.title}
            />
        </div>
    );
}
