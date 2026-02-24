import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BlogPostContent from "../components/BlogPostContent";
import blogData from "../data.json";

const { posts } = blogData;

/* ─── Static Params for SSG ─── */
export function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

/* ─── Dynamic Metadata ─── */
export function generateMetadata({ params }) {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) return {};

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: `${post.title} — Rishika Builders`,
            description: post.excerpt,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        alternates: {
            canonical: `https://www.rishikabuilders.com/blog/${post.slug}`,
        },
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        image: post.image,
        datePublished: post.date,
        author: {
            "@type": "Organization",
            name: post.author,
            url: "https://www.rishikabuilders.com",
        },
        publisher: {
            "@type": "Organization",
            name: "Rishika Builders",
            logo: {
                "@type": "ImageObject",
                url: "https://www.rishikabuilders.com/logo-black.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://www.rishikabuilders.com/blog/${post.slug}`,
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main>
                <BlogPostContent post={post} />
            </main>
            <Footer />
        </>
    );
}
