"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FadeIn } from "../../components/Animations";
import projectData from "../data.json";

const { categories, projects: allProjects } = projectData;

/* ─── Schedule Visit Form Popup ─── */
function ScheduleVisitForm({ projectName, onClose }) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-200 flex items-center justify-center px-4"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-md bg-white p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center hover:bg-off-white transition-colors duration-200 cursor-pointer"
                    aria-label="Close form"
                >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </button>

                <span className="inline-flex items-center gap-3 mb-4">
                    <span className="block w-6 h-px bg-[#A07558]" />
                    <span className="text-[10px] tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                        Book a Visit
                    </span>
                </span>

                <h4 className="text-xl lg:text-2xl font-display font-bold text-dark tracking-tight mb-6">
                    Schedule a site visit
                </h4>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Project Name — read-only */}
                    <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1.5">
                            Project
                        </label>
                        <input
                            type="text"
                            value={projectName}
                            readOnly
                            className="w-full bg-off-white border border-cream px-4 py-3 text-sm font-body text-dark/70 cursor-not-allowed outline-none"
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1.5">
                            Your Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Full name"
                            className="w-full bg-transparent border border-cream px-4 py-3 text-sm font-body text-dark outline-none transition-colors duration-300 focus:border-primary placeholder:text-gray-mid/40"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1.5">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full bg-transparent border border-cream px-4 py-3 text-sm font-body text-dark outline-none transition-colors duration-300 focus:border-primary placeholder:text-gray-mid/40"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1.5">
                            Message (optional)
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            placeholder="Preferred date, time, or any questions..."
                            className="w-full bg-transparent border border-cream px-4 py-3 text-sm font-body text-dark outline-none transition-colors duration-300 focus:border-primary resize-none placeholder:text-gray-mid/40"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-dark text-white text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary cursor-pointer"
                    >
                        Confirm Visit
                    </button>
                </form>
            </motion.div>
        </motion.div>
    );
}

/* ─── Project Detail Modal ─── */
function ProjectModal({ project, onClose }) {
    const [activeImage, setActiveImage] = useState(0);
    const [showVisitForm, setShowVisitForm] = useState(false);
    const autoSlideRef = useRef(null);
    const modalScrollRef = useRef(null);

    const totalImages = project?.gallery?.length || 1;

    // Lock body scroll & stop Lenis smooth scrolling
    useEffect(() => {
        const scrollY = window.scrollY;

        // Stop Lenis so it doesn't hijack scroll events
        if (window.__lenis) window.__lenis.stop();

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.left = "";
            document.body.style.right = "";
            document.body.style.overflow = "";
            window.scrollTo(0, scrollY);

            // Restart Lenis
            if (window.__lenis) window.__lenis.start();
        };
    }, []);

    // Close on Escape
    const handleKeyDown = useCallback(
        (e) => {
            if (e.key === "Escape") {
                if (showVisitForm) {
                    setShowVisitForm(false);
                } else {
                    onClose();
                }
            }
        },
        [onClose, showVisitForm]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    // Auto-slide gallery every 4 seconds
    useEffect(() => {
        if (totalImages <= 1) return;
        autoSlideRef.current = setInterval(() => {
            setActiveImage((prev) => (prev + 1) % totalImages);
        }, 4000);
        return () => clearInterval(autoSlideRef.current);
    }, [totalImages]);

    // Pause auto-slide on manual interaction, restart after 6s
    const handleManualSlide = useCallback(
        (newIndex) => {
            setActiveImage(newIndex);
            clearInterval(autoSlideRef.current);
            autoSlideRef.current = setInterval(() => {
                setActiveImage((prev) => (prev + 1) % totalImages);
            }, 6000);
        },
        [totalImages]
    );

    const goNext = useCallback(() => {
        handleManualSlide((activeImage + 1) % totalImages);
    }, [activeImage, totalImages, handleManualSlide]);

    const goPrev = useCallback(() => {
        handleManualSlide((activeImage - 1 + totalImages) % totalImages);
    }, [activeImage, totalImages, handleManualSlide]);

    if (!project) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-100 flex items-center justify-center"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal Container */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.97 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-[95vw] max-w-5xl max-h-[90vh] bg-white shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-dark hover:text-white transition-all duration-300 cursor-pointer"
                    aria-label="Close modal"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                </button>

                {/* Scrollable content wrapper */}
                <div
                    ref={modalScrollRef}
                    className="overflow-y-auto  flex-1"
                >
                    {/* Gallery with Arrows */}
                    <div className="relative aspect-video w-full overflow-hidden shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeImage}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={project.gallery?.[activeImage] || project.image}
                                    alt={`${project.title} - Image ${activeImage + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1200px) 95vw, 1024px"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Status + Year Overlays */}
                        <div className="absolute top-5 left-5 flex items-center gap-2 z-10">
                            <span
                                className={`text-[10px] tracking-[0.2em] uppercase font-body font-medium px-3 py-1.5 ${project.status === "Completed"
                                    ? "bg-dark text-white"
                                    : project.status === "Ongoing"
                                        ? "bg-primary text-white"
                                        : "bg-white text-dark"
                                    }`}
                            >
                                {project.status}
                            </span>
                            <span className="text-[10px] tracking-[0.15em] font-body font-medium px-2.5 py-1.5 bg-white/90 text-dark backdrop-blur-sm">
                                {project.year}
                            </span>
                        </div>

                        {/* Arrow Navigation */}
                        {totalImages > 1 && (
                            <>
                                <button
                                    onClick={goPrev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 cursor-pointer shadow-lg"
                                    aria-label="Previous image"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dark">
                                        <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    onClick={goNext}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all duration-300 cursor-pointer shadow-lg"
                                    aria-label="Next image"
                                >
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dark">
                                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </>
                        )}

                        {/* Dot Indicators */}
                        {totalImages > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {project.gallery.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => handleManualSlide(i)}
                                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${activeImage === i
                                            ? "bg-white w-6"
                                            : "bg-white/50 hover:bg-white/80 w-2"
                                            }`}
                                        aria-label={`View image ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Slide Counter */}
                        {totalImages > 1 && (
                            <div className="absolute top-5 right-5 z-10">
                                <span className="text-[10px] tracking-[0.15em] font-body font-medium px-2.5 py-1.5 bg-black/40 text-white backdrop-blur-sm">
                                    {activeImage + 1} / {totalImages}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12">
                        {/* Header */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8 pb-8 border-b border-cream/60">
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-body font-medium">
                                        {project.category}
                                    </span>
                                    <span className="block w-1 h-1 rounded-full bg-gray-mid/40" />
                                    <span className="text-[11px] tracking-[0.15em] uppercase text-gray-mid font-body">
                                        {project.location}
                                    </span>
                                </div>
                                <h3 className="text-3xl lg:text-4xl font-display font-bold text-dark tracking-tight">
                                    {project.title}
                                </h3>
                            </div>

                            <div className="flex gap-8 shrink-0">
                                <div>
                                    <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1">
                                        Price
                                    </p>
                                    <p className="text-xl font-display font-bold text-dark tracking-tight">
                                        {project.price}
                                    </p>
                                </div>
                                {project.config && (
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1">
                                            Config
                                        </p>
                                        <p className="text-lg font-display font-semibold text-dark">
                                            {project.config}
                                        </p>
                                    </div>
                                )}
                                {project.totalUnits && (
                                    <div>
                                        <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-1">
                                            Units
                                        </p>
                                        <p className="text-lg font-display font-semibold text-dark">
                                            {project.totalUnits}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Description + Details Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            {/* Left — Description */}
                            <div>
                                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-3">
                                    About This Project
                                </p>
                                <p className="text-sm lg:text-base font-body text-gray-mid leading-relaxed mb-6">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-body text-gray-mid">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="4" width="20" height="16" rx="2" />
                                        <path d="M2 10h20" />
                                    </svg>
                                    <span>{project.area}</span>
                                </div>
                            </div>

                            {/* Right — Highlights */}
                            <div>
                                <p className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mb-3">
                                    Key Highlights
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {project.highlights?.map((item, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="block w-1 h-1 rounded-full bg-primary shrink-0 mt-2" />
                                            <span className="text-sm font-body text-dark/80">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-10 pt-8 border-t border-cream/60 flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setShowVisitForm(true)}
                                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-dark text-white text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary cursor-pointer"
                            >
                                Schedule a Visit
                            </button>
                            <a
                                href="tel:+919876543210"
                                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-dark text-dark text-xs font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-dark hover:text-white"
                            >
                                Call for Details
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Schedule Visit Form Popup */}
            <AnimatePresence>
                {showVisitForm && (
                    <ScheduleVisitForm
                        projectName={project.title}
                        onClose={() => setShowVisitForm(false)}
                    />
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ─── Project Card ─── */
function ProjectCard({ project, index, onSelect }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            layout
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: 20 }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
            }}
            className="group cursor-pointer"
            onClick={() => onSelect(project)}
        >
            {/* Image */}
            <div className="relative overflow-hidden aspect-4/5 mb-5">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/30" />

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                    <span
                        className={`text-[10px] tracking-[0.2em] uppercase font-body font-medium px-3 py-1.5 ${project.status === "Completed"
                            ? "bg-dark text-white"
                            : project.status === "Ongoing"
                                ? "bg-primary text-white"
                                : "bg-white text-dark"
                            }`}
                    >
                        {project.status}
                    </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                    <span
                        className="text-[10px] tracking-[0.15em] font-body font-medium px-2.5 py-1.5 bg-white/90 text-dark backdrop-blur-sm"
                    >
                        {project.year}
                    </span>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="w-10 h-10 bg-white flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-dark">
                            <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Info */}
            <div>
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-primary font-body font-medium">
                        {project.category}
                    </span>
                    <span className="block w-1 h-1 rounded-full bg-gray-mid/40" />
                    <span className="text-[11px] tracking-[0.15em] uppercase text-gray-mid font-body">
                        {project.location}
                    </span>
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-dark group-hover:text-primary transition-colors duration-300 tracking-tight mb-2">
                    {project.title}
                </h3>
                <div className="flex items-center gap-4">
                    <span className="text-xs font-body text-gray-mid">{project.area}</span>
                    <span className="text-xs font-body font-medium text-dark">{project.price}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsGrid() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const filteredProjects =
        activeFilter === "All"
            ? allProjects
            : allProjects.filter((p) => p.category === activeFilter);

    return (
        <>
            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>

            <section ref={ref} className="py-24 lg:py-32 bg-white">
                <div className="mx-auto max-w-350 px-6 lg:px-12">
                    {/* Section Header */}
                    <div className="mb-12 lg:mb-16">
                        <FadeIn delay={0}>
                            <span className="inline-flex items-center gap-3 mb-6">
                                <span className="block w-8 h-px bg-[#A07558]" />
                                <span className="text-xs tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                                    Full Portfolio
                                </span>
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-dark tracking-tight leading-[1.1] mb-4">
                                Every project, a masterpiece.
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <p className="text-base font-body text-gray-mid leading-relaxed max-w-2xl">
                                From intimate luxury villas to expansive planned communities, each
                                Rishika project is a testament to our commitment to uncompromising quality.
                            </p>
                        </FadeIn>
                    </div>

                    {/* Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-2 mb-14 lg:mb-18"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase font-body font-medium border transition-all duration-400 cursor-pointer ${activeFilter === cat
                                    ? "bg-dark text-white border-dark"
                                    : "bg-transparent text-gray-mid border-cream hover:border-dark hover:text-dark"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                        >
                            {filteredProjects.map((project, i) => (
                                <ProjectCard key={project.title} project={project} index={i} onSelect={setSelectedProject} />
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Results Count */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="mt-14 pt-8 border-t border-cream/60"
                    >
                        <p className="text-xs font-body text-gray-mid tracking-widest">
                            Showing{" "}
                            <span className="text-dark font-medium">
                                {filteredProjects.length}
                            </span>{" "}
                            of{" "}
                            <span className="text-dark font-medium">{allProjects.length}</span>{" "}
                            projects
                        </p>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
