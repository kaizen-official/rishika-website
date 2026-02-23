"use client";

import { FadeIn, CountUp, LineReveal, StaggerContainer, StaggerItem } from "./Animations";

const stats = [
    { number: 15, suffix: "+", label: "Years of Excellence" },
    { number: 200, suffix: "+", label: "Projects Delivered" },
    { number: 5000, suffix: "+", label: "Happy Families" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function Stats() {
    return (
        <section className="py-20 lg:py-30 bg-dark relative overflow-hidden">
            {/* Subtle pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px),
                           repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)`,
                }}
            />

            <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-12">
                {/* Section Label */}
                <FadeIn delay={0}>
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-primary" />
                            <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-body font-medium">
                                Trust Built In
                            </span>
                            <span className="block w-8 h-px bg-primary" />
                        </span>
                    </div>
                </FadeIn>

                {/* Stats Grid */}
                <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12" staggerDelay={0.15}>
                    {stats.map((stat, i) => (
                        <StaggerItem key={stat.label}>
                            <div className="text-center">
                                <div className="text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-3">
                                    <CountUp end={stat.number} suffix={stat.suffix} duration={2.5} />
                                </div>
                                <LineReveal className="mx-auto max-w-10 mb-4" delay={0.3 + i * 0.1} />
                                <p className="text-sm tracking-[0.15em] uppercase text-white/50 font-body font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
