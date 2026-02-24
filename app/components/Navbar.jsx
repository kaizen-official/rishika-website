"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    // { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 80);

            if (currentScrollY > lastScrollY.current && currentScrollY > 400) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileOpen]);

    return (
        <>
            <motion.header
                initial={{ y: 0 }}
                // animate={{ y: hidden ? "-100%" : "0%" }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                    : "bg-transparent"
                    }`}
            >
                <div className="mx-auto max-w-350 px-6 lg:px-12">
                    <nav className="flex items-center justify-between h-20 lg:h-24">
                        {/* Logo */}
                        <Link href="/" className="relative z-10">
                            <Image
                                src={isScrolled ? "/full-logo-black.png" : "/full-logo-white.png"}
                                alt="Rishika Builders"
                                width={140}
                                height={48}
                                className="h-10 lg:h-12 w-auto transition-all duration-300"
                                priority
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-300 font-body group ${isScrolled
                                        ? "text-dark hover:text-primary"
                                        : "text-white hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-primary" : "bg-white"}`} />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Link
                                href="/contact"
                                className={`text-xs font-medium tracking-[0.15em] uppercase px-7 py-3.5 border transition-all duration-300 font-body ${isScrolled
                                    ? "border-dark text-dark hover:bg-dark hover:text-white"
                                    : "border-white/40 text-white hover:bg-white hover:text-dark"
                                    }`}
                            >
                                Schedule a Visit
                            </Link>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="relative z-50 lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={
                                    isMobileOpen
                                        ? { rotate: 45, y: 7, backgroundColor: "#333" }
                                        : {
                                            rotate: 0,
                                            y: 0,
                                            backgroundColor: isScrolled ? "#333" : "#fff",
                                        }
                                }
                                className="block w-6 h-[1.5px] origin-center transition-colors"
                            />
                            <motion.span
                                animate={
                                    isMobileOpen
                                        ? { opacity: 0, scaleX: 0 }
                                        : { opacity: 1, scaleX: 1 }
                                }
                                className={`block w-6 h-[1.5px] ${isScrolled ? "bg-dark" : "bg-white"
                                    }`}
                            />
                            <motion.span
                                animate={
                                    isMobileOpen
                                        ? { rotate: -45, y: -7, backgroundColor: "#333" }
                                        : {
                                            rotate: 0,
                                            y: 0,
                                            backgroundColor: isScrolled ? "#333" : "#fff",
                                        }
                                }
                                className="block w-6 h-[1.5px] origin-center transition-colors"
                            />
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-white"
                    >
                        <div className="flex flex-col justify-center items-start h-full px-8 pt-24">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -30 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: i * 0.08,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="border-b border-gray-100 w-full"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMobileOpen(false)}
                                        className="block py-5 text-3xl font-display font-semibold text-dark tracking-tight"
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="mt-10"
                            >
                                <Link
                                    href="/contact"
                                    onClick={() => setIsMobileOpen(false)}
                                    className="btn-primary"
                                >
                                    <span>Schedule a Visit</span>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-auto pb-10 flex gap-6 text-sm text-(--color-gray) font-body"
                            >
                                <a
                                    href="https://instagram.com/rishika_builders"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-dark transition-colors"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://twitter.com/rishika_builders"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-dark transition-colors"
                                >
                                    Twitter
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
