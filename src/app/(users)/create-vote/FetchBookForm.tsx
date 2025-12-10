import { RefreshCw } from "lucide-react";
import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from "@/components/ui/input";
import type { FetchBookData } from "@/types/vote";

interface FetchBookFormProps {
    form: UseFormReturn<FetchBookData>;
    onSubmit: (data: FetchBookData) => void;
    isLoading: boolean;
    isBookFetched: boolean;
    onChangeBook?: () => void;
}

export default function FetchBookForm({ form, onSubmit, isLoading, isBookFetched, onChangeBook }: FetchBookFormProps) {
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex gap-4 w-full">
                    <FormField
                        name="url"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel>Gramedia Book Link</FormLabel>
                                <div className="flex gap-4 items-start">
                                    <div className="flex-1">
                                        <FormControl>
                                            <Input
                                                id="url"
                                                type="url"
                                                placeholder="Paste Gramedia book link here..."
                                                {...field}
                                                disabled={isBookFetched}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </div>
                                    {isBookFetched ? (
                                        <Button type="button" variant="outline" onClick={onChangeBook} className="shrink-0">
                                            <RefreshCw className="w-4 h-4 mr-2" />
                                            Change Book
                                        </Button>
                                    ) : (
                                        <Button type="submit" disabled={isLoading} className="shrink-0">
                                            {isLoading ? "Fetching..." : "Fetch Book"}
                                        </Button>
                                    )}
                                </div>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    );
}
