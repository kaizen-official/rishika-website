"use client";

import Image from "next/image";
import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from "../../components/Animations";

const leaders = [
    {
        name: "Founder",
        role: "Chairman & Founder",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
        bio: "With a visionary approach to real estate and deep-rooted values of integrity, our founder laid the cornerstone of what Rishika Builders stands for today.",
    },
    {
        name: "Director",
        role: "Managing Director",
        image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
        bio: "Bringing modern business acumen and a passion for innovation, the Director drives Rishika's growth while upholding its legacy of quality and trust.",
    },
    {
        name: "Head Architect",
        role: "Chief Design Officer",
        image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80",
        bio: "An award-winning architect who blends Vastu principles with contemporary design, creating spaces that are both spiritually aligned and aesthetically stunning.",
    },
];

export default function Leadership() {
    return (
        <section className="py-20 lg:py-30 bg-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-6">
                    <div className="max-w-xl">
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span className="text-xs tracking-[0.3em] uppercase font-body font-medium" style={{ color: "#9E9E9E" }}>
                                    Leadership
                                </span>
                            </span>
                        </FadeIn>

                        <TextReveal delay={0.1}>
                            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight">
                                The people behind the promise
                            </h2>
                        </TextReveal>
                    </div>

                    <FadeIn delay={0.3}>
                        <p className="text-base font-body leading-relaxed max-w-md" style={{ color: "#4A4A4A" }}>
                            A team united by purpose — combining decades of experience in
                            architecture, engineering, and real estate development.
                        </p>
                    </FadeIn>
                </div>

                {/* Leadership Grid */}
                <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
                    staggerDelay={0.15}
                >
                    {leaders.map((leader) => (
                        <StaggerItem key={leader.name}>
                            <div className="group">
                                {/* Image */}
                                <div className="relative aspect-3/4 overflow-hidden mb-6">
                                    <Image
                                        src={leader.image}
                                        alt={leader.name}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 grayscale group-hover:grayscale-0"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>

                                {/* Info */}
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark tracking-tight mb-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-xs tracking-[0.2em] uppercase font-body font-medium text-primary mb-4">
                                        {leader.role}
                                    </p>
                                    <p className="text-sm font-body leading-relaxed" style={{ color: "#4A4A4A" }}>
                                        {leader.bio}
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
