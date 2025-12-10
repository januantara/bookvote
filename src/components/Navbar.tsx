'use client'

import { SearchIcon, Menu, X, BoltIcon, LogOutIcon } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import UserProfile from './UserProfile'
import { useAuthStore } from "@/store/authStore"
import { authService } from "@/services/auth.service"

const NAV_LINKS = [
    { href: "/", label: "Home" },
    { href: "/books", label: "Browse Books" },
    { href: "/top-voted", label: "Top Books" },
    { href: "/new-arrivals", label: "New Arrivals" },
] as const

export const LogoScriptura = ({ className }: { className?: string }) => (
    <Link href="/" className={cn("flex items-baseline space-x-3", className)}>
        <div className="logo flex text-xl rounded-md size-8 font-bold items-center justify-center text-white bg-primary">
            B
        </div>
        <span className="text-primary text-2xl font-black tracking-wide -mt-1">BookVote</span>
    </Link>
)

const NavLink = ({ className, active = '', href, children, onClick }: {
    className?: string
    active?: string
    href: string
    children: React.ReactNode
    onClick?: () => void
}) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            className={cn(className, isActive && active)}
            href={href}
            onClick={onClick}
        >
            {children}
        </Link>
    )
}

const SearchInput = ({ id, className }: { id: string, className?: string }) => (
    <div className={cn("relative", className)}>
        <Input
            id={id}
            className="peer ps-10 pe-9 rounded-md focus:border-none focus-visible:ring-2 w-full"
            placeholder="Search Books..."
            type="search"
        />
        <div className="pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3.5 text-muted-foreground/80 peer-disabled:opacity-50">
            <SearchIcon size={16} />
        </div>
    </div>
)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const { user, clearUser } = useAuthStore()
    const router = useRouter()

    const handleLogout = async () => {
        setLoading(true)
        await authService.logout()
        clearUser()
        setLoading(false)
        setIsOpen(false)
        router.refresh()
    }

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Desktop */}
                <div className="hidden lg:flex lg:items-center lg:gap-8 w-full">
                    <LogoScriptura />
                    <SearchInput id="search-books" className="flex-1" />
                    <ul className="flex gap-x-8 *:font-medium">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <NavLink
                                    active="text-primary"
                                    className="text-neutral-500 hover:text-primary duration-100"
                                    href={href}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <UserProfile />
                </div>

                {/* Mobile & Tablet */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <LogoScriptura className="lg:hidden" />
                <UserProfile className="lg:hidden" showAvatar={false} />

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeInOut" }}
                            className="lg:hidden absolute top-full left-0 right-0 px-4 pt-4 pb-6 bg-white space-y-4 border-b"
                        >
                            <SearchInput id="search-books-mobile" />
                            <ul className="space-y-3 *:font-medium">
                                {NAV_LINKS.map(({ href, label }) => (
                                    <li key={href}>
                                        <NavLink
                                            active="text-primary bg-primary/10"
                                            className="block px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100"
                                            href={href}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                            {user && (
                                <>
                                    <div className="border-t pt-3" />
                                    <ul className="space-y-3 *:font-medium">
                                        <li>
                                            <Link
                                                href="/profile"
                                                className="flex items-center gap-3 px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <BoltIcon size={16} />
                                                Profile
                                            </Link>
                                        </li>
                                        <li>
                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                                className="flex items-center gap-3 px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100 w-full text-left"
                                            >
                                                <LogOutIcon size={16} />
                                                {loading ? 'Signing Out...' : 'Logout'}
                                            </button>
                                        </li>
                                    </ul>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    )
}

export default Navbar