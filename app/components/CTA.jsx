"use client";

import Image from "next/image";
import { FadeIn, TextReveal } from "./Animations";

export default function CTA() {
    return (
        <section className="relative py-20 lg:py-30 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=80"
                    alt="Luxury interior"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-350 px-6 lg:px-12 text-center">
                <FadeIn delay={0}>
                    <span className="inline-flex items-center gap-3 mb-6 justify-center">
                        <span className="block w-8 h-px bg-primary" />
                        <span className="text-xs tracking-[0.3em] uppercase text-white/50 font-body font-medium">
                            Begin Your Legacy
                        </span>
                        <span className="block w-8 h-px bg-primary" />
                    </span>
                </FadeIn>

                <TextReveal delay={0.1}>
                    <h2 className="text-4xl lg:text-6xl xl:text-7xl font-display font-bold text-white tracking-tight max-w-3xl mx-auto leading-[1.1] mb-6">
                        Ready to build your legacy?
                    </h2>
                </TextReveal>

                <FadeIn delay={0.3}>
                    <p className="text-base lg:text-lg text-white/50 font-body max-w-lg mx-auto mb-10 leading-relaxed">
                        Schedule a private consultation with our team and discover how we can
                        transform your vision into an enduring masterpiece.
                    </p>
                </FadeIn>

                <FadeIn delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/contact"
                            className="relative inline-flex items-center gap-3 px-10 py-4 bg-primary text-white text-sm font-body font-medium tracking-[0.15em] uppercase overflow-hidden group transition-colors duration-300 hover:bg-dark"
                        >
                            <span className="relative z-10">Schedule a Visit</span>
                        </a>
                        <a
                            href="tel:+911234567890"
                            className="inline-flex items-center gap-3 px-10 py-4 border border-white/25 text-white text-sm font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-white hover:text-dark"
                        >
                            <span>Call Us</span>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
