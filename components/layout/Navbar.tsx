"use client";

import Link from "next/link";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/utils";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About us", href: "/about-us" },
        { name: "Activities", href: "/activities" },
        { name: "Team Of ABBM", href: "/members" },
        { name: "Membership", href: "/registrationForm" },
        { name: "Events", href: "/events" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact-us" },
    ];

    return (
        <header className="w-full flex flex-col">

            {/* Main Navbar - Ditto Copy */}
            <nav className="absolute top-0 w-full z-50 py-4 px-4 sm:px-12 flex flex-wrap justify-between items-center bg-transparent">
                <Link href="/" className="flex items-center gap-4 group">
                    <div className="relative">
                        <div className="absolute -inset-1 bg-yellow-400 rounded-full opacity-0 blur-sm group-hover:opacity-40 transition-opacity"></div>
                        <img
                            src="https://abbm.in/wp-content/uploads/2021/11/abbmlogof.png"
                            alt="ABBM Logo"
                            className="h-20 w-20 sm:h-32 sm:w-32 relative drop-shadow-md"
                        />
                    </div>
                </Link>

                {/* navLinks - Uppercase, Quicksand, Font size 14px approx */}
                <div className="flex gap-4 mt-4 lg:mt-0 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "px-2 py-2 text-[13px] font-bold uppercase tracking-wider transition-all duration-300 relative group text-white hover:text-yellow-200",
                                pathname === link.href ? "text-yellow-400" : ""
                            )}
                        >
                            {link.name}
                            {/* Bottom Line Indicator */}
                            <span className={cn(
                                "absolute bottom-0 left-2 right-2 h-0.5 bg-yellow-400 transition-all duration-300",
                                pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            )}></span>
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
