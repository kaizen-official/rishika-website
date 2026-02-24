"use client";

import Image from "next/image";
import Link from "next/link";
import { FadeIn, TextReveal } from "../../components/Animations";

export default function BlogCTA() {
    return (
        <section className="relative py-20 lg:py-30 overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1600&q=80"
                alt="Rishika Builders - Start Your Journey"
                fill
                className="object-cover"
                sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/65" />

            {/* Content */}
            <div className="relative z-10 max-w-350 mx-auto px-6 lg:px-12 text-center">
                {/* Label */}
                <FadeIn>
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="block w-8 h-px bg-primary" />
                        <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-white/50">
                            Let Us Talk
                        </span>
                        <span className="block w-8 h-px bg-primary" />
                    </div>
                </FadeIn>

                {/* Headline */}
                <div className="mb-6">
                    <TextReveal>
                        <h2 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold text-white tracking-tight leading-[1.05]">
                            Ready to build your legacy?
                        </h2>
                    </TextReveal>
                </div>

                {/* Subtitle */}
                <FadeIn delay={0.3}>
                    <p className="text-base lg:text-lg text-white/50 font-body font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                        From reading about luxury to living it — take the next step
                        with Rishika Builders.
                    </p>
                </FadeIn>

                {/* CTA Buttons */}
                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-dark"
                        >
                            <span>Get in Touch</span>
                            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        <Link
                            href="/projects"
                            className="inline-flex items-center gap-3 px-10 py-4 border border-white/25 text-white text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-dark"
                        >
                            <span>View Projects</span>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
