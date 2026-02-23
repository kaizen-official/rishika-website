"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CountUp } from "../../components/Animations";

const highlights = [
    { value: 15, suffix: "+", label: "Projects Delivered" },
    { value: 500, suffix: "+", label: "Happy Families" },
    { value: 2, suffix: "M+", label: "Sq. Ft. Developed" },
];

export default function ProjectsHero() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const textReveal = {
        hidden: { y: "100%" },
        visible: (i) => ({
            y: "0%",
            transition: {
                duration: 0.9,
                delay: 0.4 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    return (
        <section className="relative h-[80vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
                    alt="Luxury residential project by Rishika Builders"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="absolute inset-0 bg-black/55" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-12 mx-auto max-w-350">
                {/* Breadcrumb */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-3">
                        <span className="block w-8 h-px bg-[#A07558]" />
                        <span
                            className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                            style={{ color: "rgba(255,255,255,0.6)" }}
                        >
                            Our Portfolio
                        </span>
                    </span>
                </motion.div>

                {/* Headline */}
                <div className="mb-8 max-w-4xl">
                    {["Crafted spaces,", "enduring value."].map((line, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.h1
                                custom={i}
                                variants={textReveal}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] tracking-tight"
                            >
                                {line}
                            </motion.h1>
                        </div>
                    ))}
                </div>

                {/* Subtitle + Stats Row */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base lg:text-lg font-body max-w-xl leading-relaxed font-light"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                        Explore our portfolio of luxury residences, premium apartments, and
                        thoughtfully planned communities across Sonipat.
                    </motion.p>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex gap-10 lg:gap-14"
                    >
                        {highlights.map((stat, i) => (
                            <div key={i} className="text-center lg:text-right">
                                <p className="text-2xl lg:text-3xl font-display font-bold text-white">
                                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                                </p>
                                <p
                                    className="text-[10px] tracking-[0.2em] uppercase font-body font-medium mt-1"
                                    style={{ color: "rgba(255,255,255,0.4)" }}
                                >
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
