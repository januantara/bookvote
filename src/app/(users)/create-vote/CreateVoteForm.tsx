import type { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { CategoryFormData } from "@/types/vote";

interface CreateVoteFormProps {
    form: UseFormReturn<CategoryFormData>;
    onSubmit: (data: CategoryFormData) => void;
}

const CATEGORIES = [
    "Novel",
    "Technology",
    "Management",
    "Accounting",
    "Communication",
    "Design",
    "Psychology"
] as const;

export default function CreateVoteForm({ form, onSubmit }: CreateVoteFormProps) {
    return (
        <>
            <div className="my-6 border-t" />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex flex-col items-end gap-4 w-full">
                        <FormField
                            name="category"
                            control={form.control}
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Choose Category</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select a category" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {CATEGORIES.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Create Vote
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );
}
