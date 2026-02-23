"use client";

import Image from "next/image";
import { FadeIn, TextReveal, CountUp, LineReveal } from "../../components/Animations";

export default function Commitment() {
    return (
        <section className="py-20 lg:py-30 bg-dark relative overflow-hidden">
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px),
                           repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 80px)`,
                }}
            />

            <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Column */}
                    <div>
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span className="text-xs tracking-[0.3em] uppercase font-body font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    Our Commitment
                                </span>
                            </span>
                        </FadeIn>

                        <TextReveal delay={0.1}>
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-white tracking-tight leading-[1.1] mb-8">
                                Numbers that speak for
                                <span className="text-primary"> themselves</span>
                            </h2>
                        </TextReveal>

                        <FadeIn delay={0.3}>
                            <p className="text-base lg:text-lg font-body leading-relaxed mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
                                Behind every number is a family that trusted us, a promise we
                                kept, and a legacy we helped build. These aren&apos;t just
                                statistics — they&apos;re proof of purpose.
                            </p>
                        </FadeIn>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { end: 15, suffix: "+", label: "Years of Experience" },
                                { end: 200, suffix: "+", label: "Projects Delivered" },
                                { end: 5000, suffix: "+", label: "Happy Families" },
                                { end: 98, suffix: "%", label: "Client Retention" },
                            ].map((stat, i) => (
                                <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
                                    <div>
                                        <div className="text-4xl lg:text-5xl font-display font-bold text-white mb-2">
                                            <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} />
                                        </div>
                                        <LineReveal className="max-w-7.5 mb-3" delay={0.6 + i * 0.1} />
                                        <p className="text-xs tracking-[0.15em] uppercase font-body font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>
                                            {stat.label}
                                        </p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Image */}
                    <FadeIn delay={0.3} direction="right">
                        <div className="relative aspect-3/4 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                                alt="Premium estate by Rishika Builders"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
