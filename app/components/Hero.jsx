"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
    const videoRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const textVariants = {
        hidden: { y: "100%" },
        visible: (i) => ({
            y: "0%",
            transition: {
                duration: 0.9,
                delay: 0.8 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 1.4 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
            },
        }),
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="h-full w-full object-cover"
                    onLoadedData={() => setIsLoaded(true)}
                >
                    <source src="/hero.mp4" type="video/mp4" />
                </video>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />
                {/* Bottom vignette */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[40%]"
                    style={{
                        background:
                            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-end pb-20 lg:pb-28 px-6 lg:px-12 mx-auto max-w-350">
                {/* Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-3">
                        <span className="block w-8 h-px bg-primary" />
                        <span className="text-xs tracking-[0.3em] uppercase text-white/70 font-body font-medium">
                            Purpose with Precision
                        </span>
                    </span>
                </motion.div>

                {/* Main Headline */}
                <div className="mb-8 max-w-4xl">
                    {["Not just spaces.", "Statements of legacy."].map((line, i) => (
                        <div key={i} className="overflow-hidden">
                            <motion.h1
                                custom={i}
                                variants={textVariants}
                                initial="hidden"
                                animate={isLoaded ? "visible" : "hidden"}
                                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-display font-bold text-white leading-[1.05] tracking-tight"
                            >
                                {line}
                            </motion.h1>
                        </div>
                    ))}
                </div>

                {/* Subtitle + CTA */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
                    <motion.p
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        className="text-base lg:text-lg text-white/60 font-body max-w-md leading-relaxed font-light"
                    >
                        Luxury redefined through Vastu-compliant foundations, refined
                        engineering, and timeless aesthetics.
                    </motion.p>

                    <motion.div
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        className="flex items-center gap-6"
                    >
                        <a
                            href="/projects"
                            className="group inline-flex items-center gap-3 text-white text-sm font-body font-medium tracking-[0.15em] uppercase"
                        >
                            <span>Explore Projects</span>
                            <span className="block w-10 h-px bg-white/40 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                        </a>

                        <a
                            href="/contact"
                            className="text-xs font-medium tracking-[0.15em] uppercase px-7 py-3.5 border border-white/30 text-white hover:bg-white hover:text-dark transition-all duration-300 font-body"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isLoaded ? { opacity: 1 } : {}}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-body">
                        Scroll
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-px h-8 bg-white/30"
                    />
                </motion.div>
            </div>
        </section>
    );
}
