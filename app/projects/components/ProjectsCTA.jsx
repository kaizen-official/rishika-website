"use client";

import Image from "next/image";
import { FadeIn, TextReveal } from "../../components/Animations";

export default function ProjectsCTA() {
    return (
        <section className="relative py-20 lg:py-30 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
                    alt="Luxury interior by Rishika Builders"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6 justify-center">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span
                                className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                                style={{ color: "rgba(255,255,255,0.5)" }}
                            >
                                Your Next Step
                            </span>
                            <span className="block w-8 h-px bg-[#A07558]" />
                        </span>
                    </FadeIn>

                    <TextReveal delay={0.1}>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Ready to find your perfect home?
                        </h2>
                    </TextReveal>

                    <FadeIn delay={0.3}>
                        <p
                            className="text-base lg:text-lg font-body leading-relaxed mb-10 max-w-xl mx-auto"
                            style={{ color: "rgba(255,255,255,0.45)" }}
                        >
                            Schedule a private consultation with our team. We&apos;ll help you
                            find the ideal property that matches your lifestyle, budget, and
                            aspirations.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-sm font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-dark"
                            >
                                Book a Site Visit
                            </a>
                            <a
                                href="tel:+919876543210"
                                className="group inline-flex items-center gap-3 text-white text-sm font-body font-medium tracking-[0.15em] uppercase py-4"
                            >
                                <span>Call +91 98765 43210</span>
                                <span className="block w-10 h-px bg-white/30 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
