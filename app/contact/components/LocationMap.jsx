"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "../../components/Animations";

const nearbyLandmarks = [
    { name: "Sonipat Railway Station", distance: "3.2 km" },
    { name: "Delhi\u2013Chandigarh Highway (NH-44)", distance: "1.5 km" },
    { name: "Indira Gandhi International Airport", distance: "52 km" },
    { name: "Rajiv Chowk, Delhi", distance: "48 km" },
];

export default function LocationMap() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="py-20 lg:py-30 overflow-hidden">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Section Header */}
                <div className="mb-16 lg:mb-20 max-w-2xl">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                                Our Location
                            </span>
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-dark tracking-tight leading-[1.1] mb-4">
                            Strategically located in the heart of Sonipat.
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-base font-body text-gray-mid leading-relaxed">
                            Our office is easily accessible from major highways and transit
                            points, making it convenient for clients from Delhi NCR and beyond.
                        </p>
                    </FadeIn>
                </div>

                {/* Map & Info Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Map Embed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-8 relative aspect-16/10 lg:aspect-auto lg:h-125 overflow-hidden"
                    >
                        {/* Styled Map Placeholder — replace with actual Google Maps embed */}
                        <div className="absolute inset-0 bg-cream/30">
                            <Image
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1400&q=80"
                                alt="Aerial view of Sonipat area"
                                fill
                                className="object-cover opacity-90"
                                sizes="(max-width: 1024px) 100vw, 66vw"
                            />
                            <div className="absolute inset-0 bg-dark/20" />

                            {/* Pin Marker */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full z-10">
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={isInView ? { y: 0, opacity: 1 } : {}}
                                    transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col items-center"
                                >
                                    <div className="bg-white px-4 py-2 shadow-xl mb-2">
                                        <p className="text-xs font-body font-medium text-dark whitespace-nowrap">
                                            Rishika Builders HQ
                                        </p>
                                    </div>
                                    <div className="w-3 h-3 bg-primary rounded-full shadow-lg relative">
                                        <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-40" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Directions CTA */}
                        <div className="absolute bottom-6 left-6 z-10">
                            <a
                                href="https://maps.google.com/?q=Sonipat+Haryana+India"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-dark text-xs font-body font-medium tracking-[0.15em] uppercase shadow-xl transition-all duration-300 hover:bg-primary hover:text-white"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M3 11l19-9-9 19-2-8-8-2z" />
                                </svg>
                                Get Directions
                            </a>
                        </div>
                    </motion.div>

                    {/* Nearby Landmarks */}
                    <div className="lg:col-span-4 bg-off-white p-8 lg:p-10 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h3 className="text-lg font-display font-bold text-dark tracking-tight mb-6">
                                Nearby Landmarks
                            </h3>

                            <div className="space-y-0">
                                {nearbyLandmarks.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.6 + i * 0.1,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="flex items-center justify-between py-4 border-b border-cream/60 last:border-0"
                                    >
                                        <span className="text-sm font-body text-dark/80 pr-4">
                                            {item.name}
                                        </span>
                                        <span className="text-xs font-body font-medium text-primary whitespace-nowrap">
                                            {item.distance}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Address Card */}
                            <div className="mt-8 pt-6 border-t border-cream/60">
                                <p className="text-xs tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-3">
                                    Full Address
                                </p>
                                <p className="text-sm font-body text-dark leading-relaxed">
                                    Rishika Builders Pvt. Ltd.
                                    <br />
                                    Sector 12, Near Main Market
                                    <br />
                                    Sonipat, Haryana 131001
                                    <br />
                                    India
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
