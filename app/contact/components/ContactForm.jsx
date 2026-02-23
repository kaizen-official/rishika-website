"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectTypes = [
    "Luxury Villa",
    "Independent Floors",
    "Premium Apartments",
    "Commercial Space",
    "Investment Consultation",
];

const budgetRanges = [
    "Under \u20B950 Lakhs",
    "\u20B950 Lakhs \u2013 1 Crore",
    "\u20B91 \u2013 2 Crore",
    "\u20B92 \u2013 5 Crore",
    "Above \u20B95 Crore",
];

export default function ContactForm() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
    });

    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic
    };

    const inputClasses =
        "w-full bg-transparent border-b border-[#D9C3AB]/40 py-4 text-dark font-body text-base outline-none transition-all duration-500 placeholder:text-gray-mid/50 focus:border-[#A07558]";

    const labelClasses =
        "block text-xs tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-2";

    return (
        <section ref={ref} className="pt-10 pb-20 lg:pb-30">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column — Heading */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                                    Enquiry Form
                                </span>
                            </span>

                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-dark tracking-tight leading-[1.1] mb-6">
                                Tell us about your vision.
                            </h2>

                            <p className="text-base font-body text-gray-mid leading-relaxed mb-8">
                                Share your requirements and our team will get back to you within
                                24 hours with a personalized consultation plan.
                            </p>

                            {/* Trust indicators */}
                            <div className="space-y-4">
                                {[
                                    { number: "24hr", text: "Response Time" },
                                    { number: "Free", text: "Initial Consultation" },
                                    { number: "100%", text: "Confidential" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.3 + i * 0.1,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="flex items-center gap-4"
                                    >
                                        <span className="text-xl font-display font-bold text-primary min-w-15">
                                            {item.number}
                                        </span>
                                        <span className="text-sm font-body text-gray-mid">
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column — Form */}
                    <div className="lg:col-span-8">
                        <motion.form
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.8,
                                delay: 0.2,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="space-y-0"
                        >
                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                <div className="relative py-2">
                                    <label htmlFor="name" className={labelClasses}>
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("name")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Your full name"
                                        required
                                        className={inputClasses}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-px bg-primary origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedField === "name" ? 1 : 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className="relative py-2">
                                    <label htmlFor="email" className={labelClasses}>
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("email")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="your@email.com"
                                        required
                                        className={inputClasses}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-px bg-primary origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedField === "email" ? 1 : 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>

                            {/* Phone & Project Type Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                                <div className="relative py-2">
                                    <label htmlFor="phone" className={labelClasses}>
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("phone")}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="+91 XXXXX XXXXX"
                                        className={inputClasses}
                                    />
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-px bg-primary origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: focusedField === "phone" ? 1 : 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div className="relative py-2">
                                    <label htmlFor="projectType" className={labelClasses}>
                                        I&apos;m Interested In
                                    </label>
                                    <select
                                        id="projectType"
                                        name="projectType"
                                        value={formData.projectType}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField("projectType")}
                                        onBlur={() => setFocusedField(null)}
                                        className={`${inputClasses} appearance-none cursor-pointer`}
                                    >
                                        <option value="" disabled>
                                            Select project type
                                        </option>
                                        {projectTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-0 top-1/2 translate-y-1 pointer-events-none">
                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 12 12"
                                            fill="none"
                                            className="text-gray-mid"
                                        >
                                            <path
                                                d="M2.5 4.5L6 8L9.5 4.5"
                                                stroke="currentColor"
                                                strokeWidth="1.2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <motion.div
                                        className="absolute bottom-0 left-0 h-px bg-primary origin-left"
                                        initial={{ scaleX: 0 }}
                                        animate={{
                                            scaleX: focusedField === "projectType" ? 1 : 0,
                                        }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        style={{ width: "100%" }}
                                    />
                                </div>
                            </div>

                            {/* Budget Range */}
                            <div className="py-6">
                                <span className={labelClasses}>Budget Range</span>
                                <div className="flex flex-wrap gap-3 mt-3">
                                    {budgetRanges.map((range) => (
                                        <button
                                            key={range}
                                            type="button"
                                            onClick={() =>
                                                setFormData((prev) => ({ ...prev, budget: range }))
                                            }
                                            className={`px-5 py-2.5 border text-sm font-body transition-all duration-300 cursor-pointer ${formData.budget === range
                                                ? "bg-dark text-white border-dark"
                                                : "bg-transparent text-gray-mid border-cream hover:border-primary hover:text-dark"
                                                }`}
                                        >
                                            {range}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative py-2">
                                <label htmlFor="message" className={labelClasses}>
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedField("message")}
                                    onBlur={() => setFocusedField(null)}
                                    placeholder="Tell us about your requirements, preferred location, timeline..."
                                    rows={4}
                                    className={`${inputClasses} resize-none`}
                                />
                                <motion.div
                                    className="absolute bottom-0 left-0 h-px bg-primary origin-left"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: focusedField === "message" ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    style={{ width: "100%" }}
                                />
                            </div>

                            {/* Submit */}
                            <div className="pt-10">
                                <button type="submit" className="group relative inline-flex items-center gap-4 cursor-pointer">
                                    <span className="relative overflow-hidden inline-flex items-center gap-3 px-12 py-5 bg-dark text-white text-sm font-body font-medium tracking-[0.15em] uppercase transition-all duration-500 hover:bg-primary">
                                        <span className="relative z-10">Send Enquiry</span>
                                    </span>
                                    <span className="block w-12 h-px bg-dark transition-all duration-500 group-hover:w-20 group-hover:bg-primary" />
                                </button>

                                <p className="mt-4 text-xs font-body text-gray-mid/60">
                                    By submitting this form, you agree to our privacy policy.
                                    We&apos;ll never share your information with third parties.
                                </p>
                            </div>
                        </motion.form>
                    </div>
                </div>
            </div>
        </section>
    );
}
