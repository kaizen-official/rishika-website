"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FadeIn, TextReveal } from "./Animations";

const projects = [
  {
    title: "The Royal Enclave",
    category: "Luxury Villas",
    location: "Sonipat",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    status: "Completed",
  },
  {
    title: "Rishika Heights",
    category: "Premium Apartments",
    location: "Sonipat",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    status: "Ongoing",
  },
  {
    title: "The Heritage Floors",
    category: "Independent Floors",
    location: "Sonipat",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    status: "Completed",
  },
  {
    title: "Rishika Greens",
    category: "Plotted Development",
    location: "Sonipat",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    status: "Upcoming",
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-4/5 mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`text-[10px] tracking-[0.2em] uppercase font-body font-medium px-3 py-1.5 ${
              project.status === "Completed"
                ? "bg-dark text-white"
                : project.status === "Ongoing"
                ? "bg-primary text-white"
                : "bg-white text-dark"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Arrow on Hover */}
        <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <div className="w-10 h-10 bg-white flex items-center justify-center">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-dark"
            >
              <path
                d="M4 12L12 4M12 4H5M12 4V11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-body font-medium">
            {project.category}
          </span>
          <span className="block w-1 h-1 rounded-full bg-(--color-gray)" />
          <span className="text-[11px] tracking-[0.15em] uppercase text-(--color-gray) font-body">
            {project.location}
          </span>
        </div>
        <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark group-hover:text-primary transition-colors duration-300 tracking-tight">
          {project.title}
        </h3>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section className="py-20 lg:py-30 bg-white">
      <div className="mx-auto max-w-350 px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20 gap-6">
          <div>
            <FadeIn delay={0}>
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="block w-8 h-px bg-primary" />
                <span className="text-xs tracking-[0.3em] uppercase text-(--color-gray) font-body font-medium">
                  Portfolio
                </span>
              </span>
            </FadeIn>

            <TextReveal delay={0.1}>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-semibold text-dark tracking-tight">
                Featured Projects
              </h2>
            </TextReveal>
          </div>

          <FadeIn delay={0.3}>
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 text-dark text-sm font-body font-medium tracking-[0.15em] uppercase"
            >
              <span>View All Projects</span>
              <span className="block w-10 h-px bg-dark/30 transition-all duration-500 group-hover:w-16 group-hover:bg-primary" />
            </a>
          </FadeIn>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
