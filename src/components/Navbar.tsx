'use client'

import { SearchIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import UserProfile from './UserProfile'

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
    className?: string,
    active?: string,
    href: string,
    children: React.ReactNode,
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

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4 max-sm:flex items-center max-sm:justify-between">
                {/* Desktop Layout */}
                <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
                    <LogoScriptura />
                    <SearchInput id="search-books" className="flex-1" />
                    <ul className="flex gap-x-6 lg:gap-x-8 *:font-medium">
                        {NAV_LINKS.map(({ href, label }) => (
                            <li key={href}>
                                <NavLink
                                    active="text-primary"
                                    className="text-neutral-500 hover:text-primary duration-100 text-sm lg:text-base"
                                    href={href}
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <UserProfile />
                </div>

                <LogoScriptura className="md:hidden max-sm:order-2" />

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition order-1 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ ease: "easeInOut" }}
                            className="md:hidden absolute top-full left-0 right-0 px-4 pt-4 pb-6 bg-white space-y-4 border-b"
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
                        </motion.div>
                    )}
                </AnimatePresence>

                <UserProfile className="md:hidden" showCreateVote={false} />
            </nav>
        </header>
    )
}

export default Navbar