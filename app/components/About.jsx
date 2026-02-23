"use client";

import Image from "next/image";
import { FadeIn, TextReveal, LineReveal } from "./Animations";

export default function About() {
    return (
        <section className="py-20 lg:py-30 bg-off-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column */}
                    <div>
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-primary" />
                                <span className="text-xs tracking-[0.3em] uppercase text-(--color-gray) font-body font-medium">
                                    Our Legacy
                                </span>
                            </span>
                        </FadeIn>

                        <div className="mb-8">
                            <TextReveal delay={0.1}>
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight leading-[1.1]">
                                    Crafting enduring
                                </h2>
                            </TextReveal>
                            <TextReveal delay={0.2}>
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold tracking-tight leading-[1.1]">
                                    <span className="text-primary">legacies</span>{" "}
                                    since day one.
                                </h2>
                            </TextReveal>
                        </div>

                        <FadeIn delay={0.3}>
                            <p className="text-base lg:text-lg text-gray-mid font-body leading-relaxed mb-8 max-w-lg">
                                Rishika Builders crafts enduring legacies through Vastu-compliant
                                foundations, refined engineering, and timeless aesthetics. From
                                luxury residences to premium estates, we focus on integrity,
                                growth, and redefining modern luxury living.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="text-base text-gray-mid font-body leading-relaxed mb-10 max-w-lg">
                                Every structure we build is a testament to our commitment to
                                excellence — where traditional wisdom meets contemporary design,
                                creating spaces that transcend generations.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.5}>
                            <div className="flex items-center gap-4">
                                <a
                                    href="/about"
                                    className="btn-primary"
                                >
                                    <span>Discover Our Story</span>
                                </a>
                                <LineReveal className="flex-1 max-w-20" delay={0.8} />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column — Image + Detail */}
                    <div className="relative">
                        <FadeIn delay={0.3} direction="right">
                            <div className="relative aspect-3/4 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                    alt="Luxury residence by Rishika Builders"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </FadeIn>

                        {/* Floating Detail Card */}
                        <FadeIn delay={0.6} direction="left">
                            <div className="absolute -bottom-8 -left-4 lg:-left-12 bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.06)]">
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className="text-5xl font-display font-bold text-primary">
                                        15
                                    </span>
                                    <span className="text-lg font-display font-medium text-dark">
                                        +
                                    </span>
                                </div>
                                <p className="text-sm text-(--color-gray) font-body tracking-wide uppercase">
                                    Years of Excellence
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
