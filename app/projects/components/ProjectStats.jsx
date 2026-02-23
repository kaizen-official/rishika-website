"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp, FadeIn } from "../../components/Animations";

const stats = [
    {
        value: 15,
        suffix: "+",
        label: "Projects Delivered",
        description: "Across residential & commercial segments",
    },
    {
        value: 500,
        suffix: "+",
        label: "Happy Families",
        description: "Trusted us with their dream home",
    },
    {
        value: 2,
        suffix: "M+",
        label: "Sq. Ft. Developed",
        description: "Of premium living \u0026 commercial spaces",
    },
    {
        value: 98,
        suffix: "%",
        label: "On-Time Delivery",
        description: "Consistent track record since 2009",
    },
];

const awards = [
    { year: "2024", title: "Best Luxury Developer \u2014 Haryana" },
    { year: "2023", title: "Excellence in Vastu-Compliant Design" },
    { year: "2022", title: "Top Real Estate Developer \u2014 NCR" },
    { year: "2021", title: "Green Building Innovation Award" },
];

export default function ProjectStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-dark py-24 lg:py-32 overflow-hidden">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-20 lg:mb-24">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.1 + i * 0.12,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="p-6 lg:p-10 border-r border-white/6 last:border-0"
                        >
                            <p className="text-3xl lg:text-5xl font-display font-bold text-white tracking-tight mb-2">
                                <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                            </p>
                            <p className="text-sm font-body font-medium text-white mb-1">
                                {stat.label}
                            </p>
                            <p
                                className="text-xs font-body leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.35)" }}
                            >
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Recognition Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-4">
                        <FadeIn delay={0.2}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span
                                    className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                                    style={{ color: "rgba(255,255,255,0.5)" }}
                                >
                                    Recognition
                                </span>
                            </span>
                            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white tracking-tight mb-4">
                                Awards &amp; accolades.
                            </h3>
                            <p
                                className="text-sm font-body leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                Our commitment to excellence has been recognized by industry
                                peers and institutions across the country.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-8">
                        {awards.map((award, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4 + i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex items-center justify-between py-5 border-b border-white/6 group"
                            >
                                <div className="flex items-center gap-6">
                                    <span
                                        className="text-xs font-body font-medium min-w-11"
                                        style={{ color: "rgba(255,255,255,0.3)" }}
                                    >
                                        {award.year}
                                    </span>
                                    <span className="text-base font-body text-white font-light group-hover:text-primary transition-colors duration-300">
                                        {award.title}
                                    </span>
                                </div>
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ color: "rgba(255,255,255,0.4)" }}
                                >
                                    <path
                                        d="M4 12L12 4M12 4H5M12 4V11"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                    />
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
