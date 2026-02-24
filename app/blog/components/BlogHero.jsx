"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const textReveal = {
    hidden: { y: "100%" },
    visible: (i) => ({
        y: "0%",
        transition: {
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3 + i * 0.12,
        },
    }),
};

export default function BlogHero() {
    return (
        <section className="relative h-[80vh] overflow-hidden">
            {/* Background */}
            <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                alt="Rishika Builders - Insights & Stories"
                fill
                priority
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end pb-20 lg:pb-28">
                <div className="max-w-350 mx-auto w-full px-6 lg:px-12">
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="block w-8 h-px bg-primary" />
                        <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-white/50">
                            Insights & Stories
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <div className="space-y-1">
                        {["The Journal"].map((line, i) => (
                            <div key={i} className="overflow-hidden">
                                <motion.h1
                                    custom={i}
                                    variants={textReveal}
                                    initial="hidden"
                                    animate="visible"
                                    className="text-5xl md:text-6xl lg:text-[5.5rem] font-display font-bold text-white tracking-tight leading-[1.05]"
                                >
                                    {line}
                                </motion.h1>
                            </div>
                        ))}
                    </div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-6 text-base lg:text-lg text-white/50 font-body font-light max-w-xl leading-relaxed"
                    >
                        Perspectives on luxury living, architectural craft, market
                        intelligence, and the philosophy behind every Rishika home.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
