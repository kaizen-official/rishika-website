"use client";

import { FadeIn, TextReveal, StaggerContainer, StaggerItem, LineReveal } from "./Animations";

const values = [
    {
        number: "01",
        title: "Vastu Compliance",
        description:
            "Every structure follows time-honoured Vastu principles, harmonizing space, energy, and purpose for enduring peace of mind.",
    },
    {
        number: "02",
        title: "Refined Engineering",
        description:
            "Precision-driven construction with premium materials and rigorous quality standards that stand the test of time.",
    },
    {
        number: "03",
        title: "Timeless Aesthetics",
        description:
            "Design philosophy rooted in elegance — where every detail is curated to create spaces that age with distinction.",
    },
    {
        number: "04",
        title: "Legacy of Trust",
        description:
            "Built on decades of integrity, transparency, and unwavering commitment to delivering beyond expectations.",
    },
];

export default function Philosophy() {
    return (
        <section className="py-20 lg:py-30 bg-off-white">
            <div className="mx-auto max-w-350 px-6 lg:px-12">
                {/* Header */}
                <div className="max-w-2xl mb-16 lg:mb-24">
                    <FadeIn delay={0}>
                        <span className="inline-flex items-center gap-3 mb-6">
                            <span className="block w-8 h-px bg-primary" />
                            <span className="text-xs tracking-[0.3em] uppercase text-(--color-gray) font-body font-medium">
                                Our Philosophy
                            </span>
                        </span>
                    </FadeIn>

                    <TextReveal delay={0.1}>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight mb-6">
                            What sets us apart
                        </h2>
                    </TextReveal>

                    <FadeIn delay={0.3}>
                        <p className="text-base lg:text-lg text-gray-mid font-body leading-relaxed">
                            Our approach combines ancient wisdom with modern innovation,
                            creating spaces that are not just built — they are believed in.
                        </p>
                    </FadeIn>
                </div>

                {/* Values Grid */}
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-0" staggerDelay={0.12}>
                    {values.map((value, i) => (
                        <StaggerItem key={value.number}>
                            <div
                                className={`group p-8 lg:p-12 relative transition-colors duration-500 hover:bg-white cursor-default ${i < 2 ? "border-b border-cream" : ""
                                    } ${i % 2 === 0 ? "md:border-r border-cream" : ""}`}
                            >
                                {/* Number */}
                                <span className="text-sm font-body font-medium text-primary tracking-wider mb-6 block">
                                    {value.number}
                                </span>

                                {/* Title */}
                                <h3 className="text-2xl lg:text-3xl font-display font-semibold text-dark tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                                    {value.title}
                                </h3>

                                {/* Line */}
                                <div className="w-10 h-px bg-cream mb-5 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />

                                {/* Description */}
                                <p className="text-sm lg:text-base text-gray-mid font-body leading-relaxed">
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
