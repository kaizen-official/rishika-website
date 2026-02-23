"use client";

import Image from "next/image";
import { FadeIn, TextReveal } from "../../components/Animations";

export default function AboutCTA() {
    return (
        <section className="relative py-20 lg:py-30 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80"
                    alt="Luxury living space"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-12">
                <div className="max-w-2xl">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span className="text-xs tracking-[0.3em] uppercase font-body font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
                                Start Your Journey
                            </span>
                        </span>
                    </FadeIn>

                    <TextReveal delay={0.1}>
                        <h2 className="text-4xl lg:text-5xl xl:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Let&apos;s build something extraordinary together.
                        </h2>
                    </TextReveal>

                    <FadeIn delay={0.3}>
                        <p className="text-base lg:text-lg font-body leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
                            Whether you&apos;re looking for your dream home or a premium
                            investment, our team is ready to guide you every step of the way.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.4}>
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-sm font-body font-medium tracking-[0.15em] uppercase transition-colors duration-300 hover:bg-dark"
                            >
                                Schedule a Consultation
                            </a>
                            <a
                                href="/projects"
                                className="group inline-flex items-center gap-3 text-white text-sm font-body font-medium tracking-[0.15em] uppercase py-4"
                            >
                                <span>View Projects</span>
                                <span className="block w-10 h-px bg-white/30 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
