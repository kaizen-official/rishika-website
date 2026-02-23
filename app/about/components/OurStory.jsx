"use client";

import Image from "next/image";
import { FadeIn, TextReveal, LineReveal } from "../../components/Animations";

export default function OurStory() {
    return (
        <section className="pt-10 pb-20 lg:pt-10 lg:pb-30 bg-off-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Section Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mb-24 lg:mb-32">
                    {/* Left — Heading */}
                    <div className="lg:col-span-5">
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span className="text-xs tracking-[0.3em] uppercase font-body font-medium" style={{ color: "#9E9E9E" }}>
                                    Our Story
                                </span>
                            </span>
                        </FadeIn>

                        <TextReveal delay={0.1}>
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight leading-[1.1]">
                                Where it all
                                <span className="text-primary"> began</span>
                            </h2>
                        </TextReveal>
                    </div>

                    {/* Right — Story Copy */}
                    <div className="lg:col-span-7 lg:pt-4">
                        <FadeIn delay={0.2}>
                            <p className="text-lg lg:text-xl font-body leading-relaxed mb-6" style={{ color: "#4A4A4A" }}>
                                What started as a family&apos;s dream to build homes with soul
                                has grown into one of Sonipat&apos;s most trusted names in luxury
                                real estate. Rishika Builders was founded on a simple yet
                                powerful belief — that every family deserves a space built with
                                integrity, designed with purpose, and crafted to last
                                generations.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="text-base font-body leading-relaxed mb-8" style={{ color: "#4A4A4A" }}>
                                From our very first project, we chose to do things differently.
                                While others cut corners, we invested in Vastu-compliant
                                planning, premium materials, and the kind of attention to detail
                                that turns a house into a home. Every nail, every beam, every
                                finish — inspected, refined, and approved with the care of
                                someone building for their own family.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <p className="text-base font-body leading-relaxed" style={{ color: "#4A4A4A" }}>
                                Today, with over 200 projects delivered and 5,000+ families
                                trusting us with their most important investment, our mission
                                remains unchanged: to craft enduring legacies through refined
                                engineering and timeless aesthetics.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6">
                    {/* Large Image */}
                    <FadeIn delay={0.1} className="md:col-span-7">
                        <div className="relative aspect-4/3 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
                                alt="Luxury residence crafted by Rishika Builders"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 58vw"
                            />
                        </div>
                    </FadeIn>

                    {/* Stacked Images */}
                    <div className="md:col-span-5 flex flex-col gap-4 lg:gap-6">
                        <FadeIn delay={0.2}>
                            <div className="relative aspect-3/2 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                                    alt="Interior design details"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 42vw"
                                />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="relative aspect-3/2 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80"
                                    alt="Architectural excellence"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 42vw"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
