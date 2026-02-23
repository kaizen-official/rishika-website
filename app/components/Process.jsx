"use client";

import { FadeIn, TextReveal } from "./Animations";
import Image from "next/image";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We begin with understanding your vision, requirements, and aspirations through a detailed one-on-one consultation.",
    },
    {
      number: "02",
      title: "Design & Planning",
      description:
        "Our architects craft Vastu-compliant designs with meticulous attention to aesthetics, functionality, and spatial harmony.",
    },
    {
      number: "03",
      title: "Construction",
      description:
        "Premium materials meet precision engineering. Every phase is monitored with rigorous quality control standards.",
    },
    {
      number: "04",
      title: "Handover",
      description:
        "A seamless handover process with complete documentation, walk-through, and dedicated post-delivery support.",
    },
  ];

  return (
    <section className="py-20 lg:py-30 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 lg:mb-24 gap-6">
          <div className="max-w-xl">
            <FadeIn delay={0}>
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-primary" />
                <span className="text-xs tracking-[0.3em] uppercase text-(--color-gray) font-body font-medium">
                  Our Process
                </span>
              </span>
            </FadeIn>

            <TextReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight">
                From vision to reality
              </h2>
            </TextReveal>
          </div>

          <FadeIn delay={0.3}>
            <p className="text-base text-gray-mid font-body leading-relaxed max-w-md">
              A transparent, step-by-step journey ensuring your dream home is
              delivered with precision and care.
            </p>
          </FadeIn>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={0.1 + i * 0.12}>
              <div
                className={`relative p-8 lg:p-10 group ${
                  i < steps.length - 1
                    ? "lg:border-r border-cream"
                    : ""
                }`}
              >
                {/* Step Number */}
                <span className="text-6xl lg:text-7xl font-display font-bold text-cream absolute top-4 right-6 select-none pointer-events-none transition-colors duration-300 group-hover:text-primary/20">
                  {step.number}
                </span>

                <div className="relative z-10 pt-16">
                  <div className="w-8 h-px bg-primary mb-6" />
                  <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark tracking-tight mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-mid font-body leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
