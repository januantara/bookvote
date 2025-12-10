'use client'

import { BoltIcon, LogOutIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { useAuthStore } from "@/store/authStore"
import { useLogout } from "@/hooks/useAuth"

const UserProfile = ({ className, showCreateVote = true, showAvatar = true }: {
    className?: string
    showCreateVote?: boolean
    showAvatar?: boolean
}) => {
    const user = useAuthStore((s) => s.user);
    const logout = useLogout();
    const router = useRouter();

    if (!user) {
        return (
            <Link
                className={cn("order-3 px-3 py-2 bg-primary hover:bg-primary/80 rounded-lg text-white text-center text-sm font-medium", className)}
                href="/login"
            >
                Login
            </Link>
        )
    }

    const initialName = user.fullname.split(' ').slice(0, 2).map(n => n.at(0)).join('').toUpperCase()

    const handleLogout = async () => {
        logout.mutate();
        router.refresh();
    }

    return (
        <>
            {showCreateVote && (
                <Link href="/create-vote" className={className}>
                    <Button className="px-4 py-5">Create Vote</Button>
                </Link>
            )}
            {showAvatar && (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar className={cn("order-3 cursor-pointer", className)} aria-label="Open account menu">
                            <AvatarFallback>{initialName}</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="max-w-64" align="end">
                        <DropdownMenuLabel className="flex items-start gap-3">
                            <Avatar>
                                {/* <AvatarImage src={session.user.image || undefined} alt={session.user.name} /> */}
                                <AvatarFallback>{initialName}</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span className="truncate text-sm font-medium text-foreground">
                                    {user.fullname}
                                </span>
                                <span className="truncate text-xs font-normal text-muted-foreground">
                                    {user.email}
                                </span>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem asChild>
                                <Link href="/profile">
                                    <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
                                    Profile
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
                            {logout.isPending ? 'Signing Out' : 'Logout'}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </>
    )
}

export default UserProfile