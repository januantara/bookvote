import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface ConfirmVoteDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onConfirm: () => void;
    bookTitle?: string;
    category?: string;
}

export default function ConfirmVoteDialog({
    open,
    onOpenChange,
    onConfirm,
    bookTitle,
    category,
}: ConfirmVoteDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Vote Submission</AlertDialogTitle>
                    <AlertDialogDescription>
                        Are you sure you want to submit a vote for{" "}
                        <span className="font-semibold text-foreground">"{bookTitle}"</span> in the{" "}
                        <span className="font-semibold text-foreground">{category}</span> category?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm}>
                        Yes, Submit Vote
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
