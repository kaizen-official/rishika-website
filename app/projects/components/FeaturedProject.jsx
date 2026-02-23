"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "../../components/Animations";

const features = [
    "Vastu-compliant architecture",
    "Italian marble flooring",
    "Private garden & terrace",
    "Smart home automation",
    "Triple-height entrance lobby",
    "24/7 concierge service",
];

export default function FeaturedProject() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="pt-10 pb-20 lg:pb-30 overflow-hidden">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Header */}
                <div className="mb-16 lg:mb-20">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                                Spotlight
                            </span>
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-dark tracking-tight leading-[1.1]">
                            Featured project.
                        </h2>
                    </FadeIn>
                </div>

                {/* Featured Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Large Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 relative aspect-4/3 lg:aspect-auto lg:h-150 overflow-hidden"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
                            alt="The Grand Residency by Rishika Builders"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 58vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

                        {/* Status Overlay */}
                        <div className="absolute top-6 left-6">
                            <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium px-4 py-2 bg-primary text-white">
                                Now Selling
                            </span>
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span
                                        className="text-[11px] tracking-[0.2em] uppercase font-body font-medium"
                                        style={{ color: "rgba(255,255,255,0.6)" }}
                                    >
                                        Luxury Villas
                                    </span>
                                    <span className="block w-1 h-1 rounded-full bg-white/40" />
                                    <span
                                        className="text-[11px] tracking-[0.15em] uppercase font-body"
                                        style={{ color: "rgba(255,255,255,0.6)" }}
                                    >
                                        Sector 5, Sonipat
                                    </span>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                                    The Grand Residency
                                </h3>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Details Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 bg-off-white p-8 lg:p-12 flex flex-col justify-between"
                    >
                        <div>
                            {/* Price & Area */}
                            <div className="flex items-start justify-between mb-8 pb-8 border-b border-cream/60">
                                <div>
                                    <p className="text-xs tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1">
                                        Starting Price
                                    </p>
                                    <p className="text-2xl lg:text-3xl font-display font-bold text-dark tracking-tight">
                                        &#x20B9;3.8 Cr
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1">
                                        Configuration
                                    </p>
                                    <p className="text-lg font-display font-semibold text-dark">
                                        4 &amp; 5 BHK
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm font-body text-gray-mid leading-relaxed mb-8">
                                Set across 8 acres of landscaped grounds, The Grand Residency
                                redefines villa living with expansive floor plans, private
                                gardens, and world-class amenities — all designed with strict
                                Vastu compliance.
                            </p>

                            {/* Features */}
                            <div className="mb-10">
                                <p className="text-xs tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-4">
                                    Key Highlights
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {features.map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: 10 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{
                                                duration: 0.4,
                                                delay: 0.6 + i * 0.06,
                                                ease: [0.16, 1, 0.3, 1],
                                            }}
                                            className="flex items-center gap-2"
                                        >
                                            <span className="block w-1 h-1 rounded-full bg-primary shrink-0" />
                                            <span className="text-sm font-body text-dark/80">
                                                {feature}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-dark text-white text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary"
                            >
                                Schedule a Visit
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-dark text-dark text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-dark hover:text-white"
                            >
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
