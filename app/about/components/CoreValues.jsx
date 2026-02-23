"use client";

import { FadeIn, TextReveal, StaggerContainer, StaggerItem } from "../../components/Animations";

const values = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
            </svg>
        ),
        title: "Vastu-First Approach",
        description:
            "We don't treat Vastu as an afterthought. It's the foundation of every design — aligning energy, space, and purpose from the very first blueprint.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Uncompromising Quality",
        description:
            "From the steel in our foundations to the polish on our marble, every material is hand-selected and rigorously tested for endurance and beauty.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: "On-Time Delivery",
        description:
            "We honour timelines as we honour our word. Transparent scheduling, regular updates, and a track record of delivering when promised.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
            </svg>
        ),
        title: "Client-Centric",
        description:
            "Every decision is made with the homeowner in mind. Personalized consultations, flexible floor plans, and dedicated post-delivery support.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Absolute Transparency",
        description:
            "No hidden costs, no surprises. Full visibility into pricing, materials, and progress at every stage of your home's journey.",
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.29 7 12 12 20.71 7" />
                <line x1="12" y1="22" x2="12" y2="12" />
            </svg>
        ),
        title: "Innovation & Precision",
        description:
            "Modern construction techniques, 3D planning tools, and sustainable practices — because building the future requires thinking ahead.",
    },
];

export default function CoreValues() {
    return (
        <section className="py-20 lg:py-30 bg-off-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6 justify-center">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span className="text-xs tracking-[0.3em] uppercase font-body font-medium" style={{ color: "#9E9E9E" }}>
                                What We Stand For
                            </span>
                            <span className="block w-8 h-px bg-[#A07558]" />
                        </span>
                    </FadeIn>

                    <TextReveal delay={0.1}>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight mb-6">
                            Our core values
                        </h2>
                    </TextReveal>

                    <FadeIn delay={0.3}>
                        <p className="text-base lg:text-lg font-body leading-relaxed" style={{ color: "#4A4A4A" }}>
                            Principles that guide every decision, every design, and every
                            handshake at Rishika Builders.
                        </p>
                    </FadeIn>
                </div>

                {/* Values Grid */}
                <StaggerContainer
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-cream"
                    staggerDelay={0.08}
                >
                    {values.map((value) => (
                        <StaggerItem key={value.title}>
                            <div className="bg-off-white p-8 lg:p-10 group cursor-default hover:bg-white transition-colors duration-500 h-full">
                                {/* Icon */}
                                <div className="w-14 h-14 border border-cream flex items-center justify-center mb-6 text-primary group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-400">
                                    {value.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-display font-semibold text-dark tracking-tight mb-3 group-hover:text-primary transition-colors duration-300">
                                    {value.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm font-body leading-relaxed" style={{ color: "#4A4A4A" }}>
                                    {value.description}
                                </p>
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerContainer>
            </div>
        </section>
    );
}
