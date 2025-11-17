'use client'

import { SearchIcon, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Input } from "./ui/input"
import { useState } from "react"

export const LogoScriptura = () => (
    <div className="flex items-baseline space-x-3">
        <div className="logo flex text-xl rounded-md size-8 font-bold items-center justify-center text-white bg-primary">
            B
        </div>
        <span className="text-primary text-2xl font-black tracking-wide -mt-1">BookVote</span>
    </div>
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
            className={cn(
                className,
                isActive && active
            )}
            href={href}
            onClick={onClick}>
            {children}
        </Link>
    )
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="w-full border-b bg-white sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-6 py-4">
                {/* Desktop Layout */}
                <div className="hidden md:flex md:items-center md:gap-6 lg:gap-8">
                    <LogoScriptura />
                    <div className="relative flex-1 ">
                        <Input
                            id="search-books"
                            className="peer ps-10 pe-9 rounded-md focus:border-none focus-visible:ring-2"
                            placeholder="Search Books..."
                            type="search"
                        />
                        <div className="pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3.5 text-muted-foreground/80 peer-disabled:opacity-50">
                            <SearchIcon size={16} />
                        </div>
                    </div>
                    <ul className="flex gap-x-6 lg:gap-x-8 *:font-medium">
                        <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100 text-sm lg:text-base" href="/">Home</NavLink></li>
                        <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100 text-sm lg:text-base" href="/books">Browse Books</NavLink></li>
                        <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100 text-sm lg:text-base" href="/top-voted">Top Books</NavLink></li>
                        <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100 text-sm lg:text-base" href="/new-arrivals">New Arrivals</NavLink></li>
                        <li><NavLink className="px-3 py-2 bg-primary hover:bg-primary/80 rounded-md text-white text-sm" href="/login">Login</NavLink></li>
                    </ul>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-center justify-between">
                    <LogoScriptura />
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="p-2 hover:bg-neutral-100 rounded-lg transition"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 pb-4 space-y-4">
                        <div className="relative">
                            <Input
                                id="search-books-mobile"
                                className="peer ps-10 pe-9 rounded-md focus:border-none focus-visible:ring-2 w-full"
                                placeholder="Search Books..."
                                type="search"
                            />
                            <div className="pointer-events-none absolute inset-y-0 flex items-center justify-center ps-3.5 text-muted-foreground/80 peer-disabled:opacity-50">
                                <SearchIcon size={16} />
                            </div>
                        </div>

                        <ul className="space-y-3 *:font-medium">
                            <li><NavLink active="text-primary bg-primary/10" className="block px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100" href="/" onClick={closeMenu}>Home</NavLink></li>
                            <li><NavLink active="text-primary bg-primary/10" className="block px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100" href="/books" onClick={closeMenu}>Browse Books</NavLink></li>
                            <li><NavLink active="text-primary bg-primary/10" className="block px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100" href="/top-voted" onClick={closeMenu}>Top Books</NavLink></li>
                            <li><NavLink active="text-primary bg-primary/10" className="block px-4 py-2 text-neutral-600 hover:text-primary hover:bg-primary/5 rounded-lg duration-100" href="/new-arrivals" onClick={closeMenu}>New Arrivals</NavLink></li>
                            <li><NavLink className="block px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg text-white text-center font-medium" href="/login" onClick={closeMenu}>Login</NavLink></li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    )
}

export default Navbar