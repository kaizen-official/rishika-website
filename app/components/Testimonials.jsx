"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn, TextReveal } from "./Animations";

const testimonials = [
    {
        quote:
            "Rishika Builders didn't just build our home — they built our dream. The attention to detail and the respect for Vastu principles made all the difference.",
        author: "Rajesh Sharma",
        designation: "Homeowner, The Royal Enclave",
        location: "Sonipat",
    },
    {
        quote:
            "From start to finish, the process was transparent and professional. The quality of construction is exceptional — you can feel the difference in every corner.",
        author: "Priya Gupta",
        designation: "Homeowner, Rishika Heights",
        location: "Sonipat",
    },
    {
        quote:
            "What impressed us most was their commitment to timelines and quality. Every promise was kept, every detail was perfect. Truly a builder you can trust.",
        author: "Anil Verma",
        designation: "Investor",
        location: "Delhi NCR",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-20 lg:py-30 bg-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left Column */}
                    <div className="lg:col-span-4">
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-primary" />
                                <span className="text-xs tracking-[0.3em] uppercase text-(--color-gray) font-body font-medium">
                                    Testimonials
                                </span>
                            </span>
                        </FadeIn>

                        <TextReveal delay={0.1}>
                            <h2 className="text-4xl lg:text-5xl font-display font-semibold text-dark tracking-tight mb-8">
                                Words from those who trust us
                            </h2>
                        </TextReveal>

                        <FadeIn delay={0.3}>
                            <div className="flex gap-3 mt-8">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`w-12 h-0.5 transition-all duration-500 ${active === i
                                            ? "bg-primary w-16"
                                            : "bg-cream hover:bg-(--color-gray)"
                                            }`}
                                        aria-label={`View testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column — Testimonial */}
                    <div className="lg:col-span-8 lg:pl-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="relative"
                            >
                                {/* Quote Mark */}
                                <div className="absolute -top-4 -left-2 text-[120px] leading-none font-display text-cream select-none pointer-events-none font-bold">
                                    &ldquo;
                                </div>

                                <blockquote className="relative z-10 pt-12">
                                    <p className="text-2xl lg:text-3xl xl:text-4xl font-display font-medium text-dark leading-[1.3] tracking-tight mb-10">
                                        {testimonials[active].quote}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-px bg-primary" />
                                        <div>
                                            <p className="text-sm font-body font-semibold text-dark tracking-wide">
                                                {testimonials[active].author}
                                            </p>
                                            <p className="text-xs font-body text-(--color-gray) tracking-wider uppercase mt-1">
                                                {testimonials[active].designation} &mdash;{" "}
                                                {testimonials[active].location}
                                            </p>
                                        </div>
                                    </div>
                                </blockquote>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
