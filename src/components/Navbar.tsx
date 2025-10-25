'use client'

import Link from "next/link"
import { Input } from "./ui/input"
import { SearchIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

export const LogoScriptura = () => (
    <div className="flex items-baseline space-x-3">
        <div className="logo flex text-xl rounded-md size-8 font-bold items-center justify-center text-white bg-primary">S</div>
        <span className="text-primary text-2xl font-black tracking-wide -mt-1">Scriptura</span>
    </div>
)

const NavLink = ({ className, active = '', href, children }: {
    className?: string,
    active?: string,
    href: string,
    children: React.ReactNode
}) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link
            className={cn(
                className,
                isActive && active
            )}
            href={href}>
            {children}
        </Link>
    )
}


const Navbar = () => {
    return (
        <header className="w-full border-b bg-white">
            <nav className="max-w-7xl mx-auto flex flex-wrap items-center px-6 py-4">
                <LogoScriptura />
                <div className="relative mx-auto flex-1 max-w-md">
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
                {/* <input type="text" className="max-w-xl border border-input flex-1 mx-auto px-6 py-2 rounded-md" placeholder="search" /> */}
                <ul className="flex gap-x-8 *:font-medium">
                    <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100" href="/">Home</NavLink></li>
                    <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100" href="/books">Browse Books</NavLink></li>
                    <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100" href="/top-voted">Top Books</NavLink></li>
                    <li><NavLink active="text-primary" className="text-neutral-500 hover:text-primary duration-100" href="/about">About</NavLink></li>
                    <li><NavLink active="text-primary" className="px-3 py-2 bg-primary hover:bg-primary/80 rounded-md text-white" href="/login">Login</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar