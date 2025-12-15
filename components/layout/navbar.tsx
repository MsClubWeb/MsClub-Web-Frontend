"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && !(event.target as Element).closest("header")) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${scrolled
                        ? "bg-background/90 backdrop-blur-md shadow-md"
                        : "bg-background/95 backdrop-blur-sm"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center min-w-0">
                        <Link href="/" className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://res.cloudinary.com/drkjmdgzs/image/upload/v1752345919/ms_club_long_gyfhua.png"
                                    alt="MS Club Logo"
                                    className="h-8 w-auto sm:h-10 transition-all duration-200"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors duration-200">
                            Home
                        </Link>
                        <Link href="/events" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors duration-200">
                            Events
                        </Link>
                        <Link href="/board" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors duration-200">
                            Board
                        </Link>
                        <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors duration-200">
                            Blog
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors duration-200">
                            About Us
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-accent rounded-md transition-colors duration-200"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 top-16 z-40 md:hidden">
                    <button
                        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsMenuOpen(false)}
                        onKeyDown={(e) => e.key === 'Escape' && setIsMenuOpen(false)}
                        aria-label="Close menu"
                        tabIndex={0}
                    />
                    <div className="relative bg-background/95 backdrop-blur-md border-b shadow-lg transform transition-transform duration-300 ease-out animate-in slide-in-from-top-2">
                        <nav className="container mx-auto px-4 py-6">
                            <div className="flex flex-col space-y-4">
                                <Link href="/" className="text-lg font-normal text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>
                                    Home
                                </Link>
                                <Link href="/events" className="text-lg font-normal text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>
                                    Events
                                </Link>
                                <Link href="/board" className="text-lg font-normal text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>
                                    Board
                                </Link>
                                <Link href="/blog" className="text-lg font-normal text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>
                                    Blog
                                </Link>
                                <Link href="/about" className="text-lg font-normal text-foreground hover:text-primary transition-colors duration-200 py-2" onClick={toggleMenu}>
                                    About Us
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
}