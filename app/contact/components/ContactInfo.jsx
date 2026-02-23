"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeIn } from "../../components/Animations";

const contactDetails = [
    {
        label: "Visit Our Office",
        lines: ["Rishika Builders Pvt. Ltd.", "Sector 12, Sonipat", "Haryana 131001, India"],
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        label: "Call Us",
        lines: ["+91 98765 43210", "+91 01onal 12345 67890"],
        href: "tel:+919876543210",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
        ),
    },
    {
        label: "Email Us",
        lines: ["info@rishikabuilders.com", "sales@rishikabuilders.com"],
        href: "mailto:info@rishikabuilders.com",
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
];

const officeHours = [
    { day: "Monday \u2013 Friday", time: "9:00 AM \u2013 7:00 PM" },
    { day: "Saturday", time: "10:00 AM \u2013 5:00 PM" },
    { day: "Sunday", time: "By Appointment" },
];

export default function ContactInfo() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section ref={ref} className="bg-dark py-20 lg:py-30 overflow-hidden">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Section Header */}
                <div className="mb-16 lg:mb-20">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-[#A07558]" />
                            <span
                                className="text-xs tracking-[0.3em] uppercase font-body font-medium"
                                style={{ color: "rgba(255,255,255,0.5)" }}
                            >
                                Reach Out
                            </span>
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-white tracking-tight leading-[1.1]">
                            Multiple ways to connect.
                        </h2>
                    </FadeIn>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/6 mb-20">
                    {contactDetails.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.7,
                                delay: 0.2 + i * 0.15,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="group bg-dark p-8 lg:p-10 border border-white/6 transition-all duration-500 hover:bg-white/3"
                        >
                            {/* Icon */}
                            <div
                                className="mb-6 transition-colors duration-500"
                                style={{ color: "rgba(160,117,88,0.7)" }}
                            >
                                {item.icon}
                            </div>

                            {/* Label */}
                            <h3
                                className="text-xs tracking-[0.2em] uppercase font-body font-medium mb-4"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                {item.label}
                            </h3>

                            {/* Lines */}
                            <div className="space-y-1">
                                {item.lines.map((line, j) => (
                                    <p
                                        key={j}
                                        className="text-base font-body font-light"
                                        style={{ color: "rgba(255,255,255,0.8)" }}
                                    >
                                        {item.href && j === 0 ? (
                                            <a
                                                href={item.href}
                                                className="transition-colors duration-300 hover:text-primary"
                                                style={{ color: "rgba(255,255,255,0.8)" }}
                                            >
                                                {line}
                                            </a>
                                        ) : (
                                            line
                                        )}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Office Hours */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-4">
                        <FadeIn delay={0.2}>
                            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white tracking-tight mb-4">
                                Office Hours
                            </h3>
                            <p
                                className="text-sm font-body leading-relaxed"
                                style={{ color: "rgba(255,255,255,0.4)" }}
                            >
                                We welcome walk-in consultations during office hours.
                                For after-hours meetings, please schedule an appointment.
                            </p>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-8">
                        {officeHours.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 30 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.5 + i * 0.1,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="flex items-center justify-between py-5 border-b border-white/6"
                            >
                                <span
                                    className="text-base font-body font-light"
                                    style={{ color: "rgba(255,255,255,0.6)" }}
                                >
                                    {item.day}
                                </span>
                                <span className="text-base font-body font-medium text-white">
                                    {item.time}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
