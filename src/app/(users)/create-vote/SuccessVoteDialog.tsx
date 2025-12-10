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
import { CheckCircle2 } from "lucide-react";

interface SuccessVoteDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onCreateAnother: () => void;
    onViewVotes: () => void;
    bookTitle?: string;
}

export default function SuccessVoteDialog({
    open,
    onOpenChange,
    onCreateAnother,
    onViewVotes,
    bookTitle,
}: SuccessVoteDialogProps) {
    return (
        <AlertDialog open={open} onOpenChange={onOpenChange}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex flex-col items-center gap-4 mb-2">
                        <div className="p-3 bg-green-100 rounded-full">
                            <CheckCircle2 className="w-10 h-10 text-green-600" />
                        </div>
                        <AlertDialogTitle className="text-center text-2xl">
                            Vote Created Successfully!
                        </AlertDialogTitle>
                    </div>
                    <AlertDialogDescription className="text-center">
                        Your vote for{" "}
                        <span className="font-semibold text-foreground">"{bookTitle}"</span>{" "}
                        has been submitted successfully.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-col sm:flex-row gap-2">
                    <AlertDialogCancel onClick={onCreateAnother} className="m-0">
                        Create Another Vote
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onViewVotes}>
                        View All Votes
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
