"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "../../components/Animations";
import blogData from "../data.json";

const { posts, categories } = blogData;

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

/* ─── Featured Post Card ─── */
function FeaturedCard({ post }) {
    return (
        <FadeIn>
            <Link href={`/blog/${post.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-4/3 lg:aspect-auto overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute top-5 left-5 z-10">
                            <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium px-3 py-1.5 bg-primary text-white">
                                Featured
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-primary">
                                {post.category}
                            </span>
                            <span className="block w-1 h-1 rounded-full bg-gray-mid/40" />
                            <span className="text-[10px] tracking-[0.15em] uppercase font-body text-gray-mid">
                                {post.readTime}
                            </span>
                        </div>

                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-dark tracking-tight leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                        </h2>

                        <p className="text-sm lg:text-base font-body text-gray-mid leading-relaxed mb-6 line-clamp-3">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="text-xs font-body text-gray-mid/60">
                                {formatDate(post.date)}
                            </span>
                            <span className="inline-flex items-center gap-2 text-xs font-body font-medium tracking-widest uppercase text-dark group-hover:text-primary transition-colors duration-300">
                                Read Article
                                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </FadeIn>
    );
}

/* ─── Blog Post Card ─── */
function BlogCard({ post, index }) {
    return (
        <StaggerItem>
            <Link href={`/blog/${post.slug}`} className="group block h-full">
                <article className="bg-white h-full flex flex-col overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-3/2 overflow-hidden">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-4 left-4 z-10">
                            <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium px-3 py-1.5 bg-white/90 text-dark backdrop-blur-sm">
                                {post.category}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 lg:p-8 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-[10px] tracking-[0.15em] uppercase font-body text-gray-mid">
                                {formatDate(post.date)}
                            </span>
                            <span className="block w-1 h-1 rounded-full bg-gray-mid/40" />
                            <span className="text-[10px] tracking-[0.15em] uppercase font-body text-gray-mid">
                                {post.readTime}
                            </span>
                        </div>

                        <h3 className="text-lg lg:text-xl font-display font-bold text-dark tracking-tight leading-snug mb-3 group-hover:text-primary transition-colors duration-300">
                            {post.title}
                        </h3>

                        <p className="text-sm font-body text-gray-mid leading-relaxed mb-6 line-clamp-2 flex-1">
                            {post.excerpt}
                        </p>

                        <span className="inline-flex items-center gap-2 text-[11px] font-body font-medium tracking-widest uppercase text-dark group-hover:text-primary transition-colors duration-300 mt-auto">
                            Read More
                            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </div>
                </article>
            </Link>
        </StaggerItem>
    );
}

/* ─── Blog Grid with Filter ─── */
export default function BlogGrid() {
    const [activeCategory, setActiveCategory] = useState("All");

    const featured = posts.filter((p) => p.featured);
    const filtered =
        activeCategory === "All"
            ? posts.filter((p) => !p.featured)
            : posts.filter((p) => p.category === activeCategory && !p.featured);

    // If a non-All category is selected, also include featured posts from that category
    const allFiltered =
        activeCategory === "All"
            ? posts.filter((p) => !p.featured)
            : posts.filter((p) => p.category === activeCategory);

    return (
        <section className="py-20 lg:py-30 bg-off-white">
            <div className="max-w-350 mx-auto px-6 lg:px-12">
                {/* Featured Posts — only on "All" */}
                {activeCategory === "All" && featured.length > 0 && (
                    <div className="mb-16 lg:mb-20">
                        <FadeIn>
                            <div className="flex items-center gap-3 mb-8">
                                <span className="block w-6 h-px bg-primary" />
                                <span className="text-[10px] tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                                    Featured Stories
                                </span>
                            </div>
                        </FadeIn>

                        <div className="space-y-8">
                            {featured.map((post) => (
                                <FeaturedCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Category Filter */}
                <FadeIn>
                    <div className="flex items-center gap-3 mb-8">
                        <span className="block w-6 h-px bg-primary" />
                        <span className="text-[10px] tracking-[0.3em] uppercase font-body font-medium text-gray-mid">
                            {activeCategory === "All" ? "All Articles" : activeCategory}
                        </span>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase font-body font-medium transition-all duration-300 cursor-pointer ${activeCategory === cat
                                    ? "bg-dark text-white"
                                    : "bg-white text-gray-mid hover:bg-dark hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Posts Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                            {(activeCategory === "All" ? filtered : allFiltered).map((post, i) => (
                                <BlogCard key={post.id} post={post} index={i} />
                            ))}
                        </StaggerContainer>

                        {(activeCategory === "All" ? filtered : allFiltered).length === 0 && (
                            <div className="text-center py-20">
                                <p className="text-sm font-body text-gray-mid">
                                    No articles found in this category yet.
                                </p>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
