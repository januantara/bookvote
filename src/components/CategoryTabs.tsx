import { Tabs } from "radix-ui";
import { cn } from "@/lib/utils";

function CategoryTabs({
    className,
    ...props
}: React.ComponentProps<typeof Tabs.Root>) {
    return (
        <Tabs.Root
            data-slot="tabs"
            className={cn("tabs-categories", className)}
            {...props}
        />
    )
}

function CategoryTabsList({
    className,
    ...props
}: React.ComponentProps<typeof Tabs.List>) {
    return (
        <Tabs.List
            data-slot="tabs-list"
            className={cn(
                "list-categories flex flex-wrap mt-4 max-sm:justify-center gap-2",
                className
            )}
            {...props}
        />
    )
}

function CategoryTab({
    className,
    ...props
}: React.ComponentProps<typeof Tabs.Trigger>) {
    return (
        <Tabs.Trigger
            data-slot="tabs-trigger"
            className={cn(
                "px-3 md:px-6 py-2 md:py-2.5 font-medium text-xs md:text-sm rounded-full hover:text-primary hover:border-primary data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:border-none border",
                className
            )}
            {...props}
        />
    )
}

function CategoryTabContent({
    className,
    ...props
}: React.ComponentProps<typeof Tabs.Content>) {
    return (
        <Tabs.Content
            data-slot="tabs-content"
            className={cn("grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 mt-10", className)}
            {...props}
        />
    )
}

export { CategoryTabs, CategoryTabsList, CategoryTab, CategoryTabContent }