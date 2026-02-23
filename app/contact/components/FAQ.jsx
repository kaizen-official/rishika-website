"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn } from "../../components/Animations";

const faqs = [
    {
        question: "What types of properties does Rishika Builders offer?",
        answer:
            "We specialize in luxury villas, independent floors, premium apartments, and select commercial spaces across Sonipat and the greater Delhi NCR region. Every project is designed with Vastu-compliant principles and premium-grade materials.",
    },
    {
        question: "How long does the home buying process typically take?",
        answer:
            "From initial consultation to handover, the timeline varies by project. For ready-to-move properties, the process can be completed in 4\u20136 weeks. For under-construction projects, we provide clear milestone timelines and regular progress updates throughout.",
    },
    {
        question: "Do you offer site visits and property tours?",
        answer:
            "Absolutely. We offer complimentary site visits with our dedicated relationship managers who walk you through every detail of the property, neighbourhood infrastructure, and future development plans. Weekend visits can be arranged by appointment.",
    },
    {
        question: "What financing options are available?",
        answer:
            "We have tie-ups with leading banks and financial institutions offering competitive home loan rates. Our in-house team assists with documentation, loan processing, and ensures a smooth financing experience from start to finish.",
    },
    {
        question: "Are your properties Vastu compliant?",
        answer:
            "Yes, all Rishika Builders projects are designed in consultation with certified Vastu experts. From plot orientation to room placement, every aspect is carefully planned to ensure harmonious living spaces that respect traditional principles while embracing modern design.",
    },
    {
        question: "What after-sales support do you provide?",
        answer:
            "We offer comprehensive after-sales support including a dedicated maintenance team, warranty coverage on structural and finishing elements, and a homeowner concierge service for the first year. Our relationship with homeowners extends well beyond the handover.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section ref={ref} className="py-20 lg:py-30 bg-off-white overflow-hidden">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="lg:col-span-4">
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                                    Common Questions
                                </span>
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-dark tracking-tight leading-[1.1] mb-6">
                                Frequently asked questions.
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-base font-body text-gray-mid leading-relaxed mb-8">
                                Can&apos;t find what you&apos;re looking for? Reach out to our
                                team directly and we&apos;ll be happy to help.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center gap-3 text-sm font-body font-medium text-dark tracking-widest uppercase group"
                            >
                                <span>Call us directly</span>
                                <span className="block w-8 h-px bg-dark transition-all duration-500 group-hover:w-14 group-hover:bg-primary" />
                            </a>
                        </FadeIn>
                    </div>

                    {/* Right Column — Accordion */}
                    <div className="lg:col-span-8">
                        <div className="divide-y divide-cream">
                            {faqs.map((faq, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{
                                        duration: 0.6,
                                        delay: 0.2 + i * 0.08,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                >
                                    <button
                                        onClick={() => toggle(i)}
                                        className="w-full flex items-start justify-between py-6 text-left cursor-pointer group"
                                    >
                                        <span
                                            className={`text-base lg:text-lg font-body font-medium pr-8 transition-colors duration-300 ${openIndex === i ? "text-primary" : "text-dark"
                                                } group-hover:text-primary`}
                                        >
                                            {faq.question}
                                        </span>

                                        <span className="relative shrink-0 w-6 h-6 mt-1">
                                            <motion.span
                                                className="absolute top-1/2 left-1/2 block w-4 h-px bg-dark -translate-x-1/2 -translate-y-1/2"
                                                animate={{ rotate: openIndex === i ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                            <motion.span
                                                className="absolute top-1/2 left-1/2 block w-4 h-px bg-dark -translate-x-1/2 -translate-y-1/2"
                                                animate={{ rotate: openIndex === i ? 180 : 90 }}
                                                transition={{ duration: 0.3 }}
                                            />
                                        </span>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {openIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{
                                                    duration: 0.4,
                                                    ease: [0.16, 1, 0.3, 1],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pb-6 pr-12 text-sm lg:text-base font-body text-gray-mid leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
