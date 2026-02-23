"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn, TextReveal } from "../../components/Animations";

const milestones = [
    {
        year: "2009",
        title: "The Foundation",
        description:
            "Rishika Builders was established with a vision to bring integrity and precision to real estate in Sonipat.",
    },
    {
        year: "2012",
        title: "First 25 Projects",
        description:
            "Completed our first 25 residential projects, earning a reputation for quality construction and timely delivery.",
    },
    {
        year: "2015",
        title: "Premium Expansion",
        description:
            "Entered the luxury segment with our flagship villa community, setting new benchmarks for premium living in the region.",
    },
    {
        year: "2018",
        title: "100+ Projects Milestone",
        description:
            "Crossed the 100-project mark with a portfolio spanning independent floors, villas, and premium apartments.",
    },
    {
        year: "2021",
        title: "Vastu Centre of Excellence",
        description:
            "Established an in-house Vastu consultancy wing, ensuring every project aligns with time-honoured spatial principles.",
    },
    {
        year: "2024",
        title: "200+ Projects & Growing",
        description:
            "Over 200 projects delivered, 5,000+ families served, and a steadfast commitment to redefining modern luxury.",
    },
];

function MilestoneItem({ milestone, index, isLast }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="grid grid-cols-12 gap-4 lg:gap-8 group"
        >
            {/* Year */}
            <div className="col-span-3 lg:col-span-2">
                <span className="text-3xl lg:text-4xl font-display font-bold text-cream group-hover:text-primary transition-colors duration-500">
                    {milestone.year}
                </span>
            </div>

            {/* Timeline Line */}
            <div className="col-span-1 flex flex-col items-center">
                <div className="w-3 h-3 border-2 border-primary bg-off-white rounded-full shrink-0 group-hover:bg-primary transition-colors duration-300" />
                {!isLast && (
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="w-px flex-1 bg-cream origin-top"
                    />
                )}
            </div>

            {/* Content */}
            <div className={`col-span-8 lg:col-span-9 ${!isLast ? "pb-12 lg:pb-16" : "pb-0"}`}>
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                    {milestone.title}
                </h3>
                <p className="text-sm lg:text-base font-body leading-relaxed" style={{ color: "#4A4A4A" }}>
                    {milestone.description}
                </p>
            </div>
        </motion.div>
    );
}

export default function Timeline() {
    return (
        <section className="py-20 lg:py-30 bg-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-2xl mb-16 lg:mb-24">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span className="text-xs tracking-[0.3em] uppercase font-body font-medium" style={{ color: "#9E9E9E" }}>
                                Our Journey
                            </span>
                        </span>
                    </FadeIn>

                    <TextReveal delay={0.1}>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight mb-6">
                            Milestones that define us
                        </h2>
                    </TextReveal>

                    <FadeIn delay={0.3}>
                        <p className="text-base lg:text-lg font-body leading-relaxed" style={{ color: "#4A4A4A" }}>
                            Every milestone is a chapter in our story — a testament to the
                            trust placed in us by thousands of families.
                        </p>
                    </FadeIn>
                </div>

                {/* Timeline */}
                <div className="max-w-3xl mx-auto lg:ml-[16%]">
                    {milestones.map((m, i) => (
                        <MilestoneItem
                            key={m.year}
                            milestone={m}
                            index={i}
                            isLast={i === milestones.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
