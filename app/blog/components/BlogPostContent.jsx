"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, TextReveal, LineReveal } from "../../components/Animations";
import blogData from "../data.json";

const { posts } = blogData;

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

/* ─── Share Buttons ─── */
function ShareButtons({ title, slug }) {
    const url = `https://www.rishikabuilders.com/blog/${slug}`;

    return (
        <div className="flex items-center gap-4">
            <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid">
                Share
            </span>
            <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-off-white hover:bg-dark hover:text-white transition-all duration-300 text-gray-mid"
                aria-label="Share on Twitter"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            </a>
            <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-off-white hover:bg-dark hover:text-white transition-all duration-300 text-gray-mid"
                aria-label="Share on LinkedIn"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            </a>
            <a
                href={`https://wa.me/?text=${encodeURIComponent(title + " " + url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center bg-off-white hover:bg-dark hover:text-white transition-all duration-300 text-gray-mid"
                aria-label="Share on WhatsApp"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>
    );
}

/* ─── Related Posts Sidebar ─── */
function RelatedPosts({ currentSlug, currentCategory }) {
    const related = useMemo(() => {
        // Same category first, then others, exclude current
        const sameCategory = posts.filter(
            (p) => p.slug !== currentSlug && p.category === currentCategory
        );
        const others = posts.filter(
            (p) => p.slug !== currentSlug && p.category !== currentCategory
        );
        return [...sameCategory, ...others].slice(0, 3);
    }, [currentSlug, currentCategory]);

    if (related.length === 0) return null;

    return (
        <div>
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-body font-medium text-gray-mid mb-6">
                Related Articles
            </h4>
            <div className="space-y-6">
                {related.map((post) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-4"
                    >
                        <div className="relative w-20 h-20 shrink-0 overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="80px"
                            />
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="text-[9px] tracking-[0.2em] uppercase font-body text-primary mb-1 block">
                                {post.category}
                            </span>
                            <h5 className="text-sm font-display font-semibold text-dark leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300">
                                {post.title}
                            </h5>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

/* ─── Blog Post Content ─── */
export default function BlogPostContent({ post }) {
    if (!post) return null;

    return (
        <article className="py-16 lg:py-24 bg-off-white">
            <div className="max-w-350 mx-auto px-6 lg:px-12">
                {/* Breadcrumb */}
                <FadeIn>
                    <nav className="flex items-center gap-2 text-xs font-body text-gray-mid mb-10">
                        <Link
                            href="/blog"
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Journal
                        </Link>
                        <span>/</span>
                        <span className="text-dark/60 truncate max-w-60 sm:max-w-none">
                            {post.title}
                        </span>
                    </nav>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Header */}
                        <FadeIn>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-primary">
                                    {post.category}
                                </span>
                                <span className="block w-1 h-1 rounded-full bg-gray-mid/40" />
                                <span className="text-[10px] tracking-[0.15em] uppercase font-body text-gray-mid">
                                    {post.readTime}
                                </span>
                            </div>
                        </FadeIn>

                        <div className="mb-6">
                            <TextReveal>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark tracking-tight leading-[1.1]">
                                    {post.title}
                                </h1>
                            </TextReveal>
                        </div>

                        <FadeIn delay={0.2}>
                            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-cream/60">
                                <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
                                    <span className="text-xs font-display font-bold text-primary">
                                        RB
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-body font-medium text-dark">
                                        {post.author}
                                    </p>
                                    <p className="text-xs font-body text-gray-mid">
                                        {formatDate(post.date)}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Featured Image */}
                        <FadeIn delay={0.25}>
                            <div className="relative aspect-video w-full overflow-hidden mb-10">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 66vw"
                                />
                            </div>
                        </FadeIn>

                        {/* Article Body */}
                        <FadeIn delay={0.3}>
                            <div className="prose-rishika">
                                {post.content.map((block, i) => {
                                    if (block.type === "heading") {
                                        return (
                                            <h2
                                                key={i}
                                                className="text-xl lg:text-2xl font-display font-bold text-dark tracking-tight mt-10 mb-4"
                                            >
                                                {block.text}
                                            </h2>
                                        );
                                    }
                                    return (
                                        <p
                                            key={i}
                                            className="text-base font-body text-gray-mid leading-[1.85] mb-5"
                                        >
                                            {block.text}
                                        </p>
                                    );
                                })}
                            </div>
                        </FadeIn>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <FadeIn delay={0.1}>
                                <div className="mt-10 pt-8 border-t border-cream/60">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-[10px] tracking-[0.2em] uppercase font-body font-medium text-gray-mid mr-2">
                                            Tags
                                        </span>
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 text-[10px] tracking-widest uppercase font-body text-gray-mid bg-white border border-cream/40"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        )}

                        {/* Share + Divider */}
                        <FadeIn delay={0.1}>
                            <div className="mt-8 pt-8 border-t border-cream/60 flex items-center justify-between">
                                <ShareButtons title={post.title} slug={post.slug} />
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-2 text-[11px] font-body font-medium tracking-widest uppercase text-dark hover:text-primary transition-colors duration-300"
                                >
                                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="rotate-180">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    All Articles
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-28 space-y-10">
                            {/* Newsletter Mini */}
                            <FadeIn delay={0.3}>
                                <div className="bg-white p-8">
                                    <h4 className="text-[10px] tracking-[0.3em] uppercase font-body font-medium text-gray-mid mb-3">
                                        Stay Informed
                                    </h4>
                                    <p className="text-lg font-display font-bold text-dark tracking-tight mb-4">
                                        Get insights delivered to your inbox
                                    </p>
                                    <p className="text-sm font-body text-gray-mid mb-6 leading-relaxed">
                                        Curated perspectives on luxury living, market trends, and
                                        architectural craft. No spam, ever.
                                    </p>
                                    <form
                                        className="space-y-3"
                                        onSubmit={(e) => e.preventDefault()}
                                    >
                                        <input
                                            type="email"
                                            placeholder="Your email address"
                                            className="w-full bg-transparent border border-cream px-4 py-3 text-sm font-body text-dark outline-none transition-colors duration-300 focus:border-primary placeholder:text-gray-mid/40"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-dark text-white text-[11px] font-body font-medium tracking-[0.15em] uppercase transition-all duration-300 hover:bg-primary cursor-pointer"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </FadeIn>

                            {/* Related Posts */}
                            <FadeIn delay={0.4}>
                                <RelatedPosts
                                    currentSlug={post.slug}
                                    currentCategory={post.category}
                                />
                            </FadeIn>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
