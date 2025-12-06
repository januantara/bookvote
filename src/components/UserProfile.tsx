'use client'

import { BoltIcon, LogOutIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { signOut, useSession } from '@/lib/auth-client'
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { Button } from '@/components/ui/button'

const UserProfile = ({ className, showCreateVote = true }: { className?: string, showCreateVote?: boolean }) => {
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()
    const router = useRouter()

    if (!session) {
        return (
            <Link
                className={cn("order-3 px-3 py-2 bg-primary hover:bg-primary/80 rounded-lg text-white text-center text-sm font-medium", className)}
                href="/login"
            >
                Login
            </Link>
        )
    }

    const initialName = session.user.name.split(' ').map(n => n[0]).join('').toUpperCase()

    const handleLogout = async () => {
        setLoading(true)
        await signOut({
            fetchOptions: {
                onSuccess: () => router.push('/login')
            }
        })
        setLoading(false)
    }

    return (
        <>
            {showCreateVote && (
                <Link href="/create-vote">
                    <Button className="px-4 py-5">Create Vote</Button>
                </Link>
            )}
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar className={cn("order-3 cursor-pointer", className)} aria-label="Open account menu">
                        <AvatarImage src={session.user.image || undefined} alt={session.user.name} />
                        <AvatarFallback>{initialName}</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-64" align="end">
                    <DropdownMenuLabel className="flex items-start gap-3">
                        <Avatar>
                            <AvatarImage src={session.user.image || undefined} alt={session.user.name} />
                            <AvatarFallback>{initialName}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                            <span className="truncate text-sm font-medium text-foreground">
                                {session.user.name}
                            </span>
                            <span className="truncate text-xs font-normal text-muted-foreground">
                                {session.user.email}
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
                        {loading ? 'Signing Out' : 'Logout'}
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default UserProfile