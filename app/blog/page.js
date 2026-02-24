import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogHero from "./components/BlogHero";
import BlogGrid from "./components/BlogGrid";
import BlogCTA from "./components/BlogCTA";

export const metadata = {
    title: "Journal — Insights on Luxury Living & Real Estate",
    description:
        "Explore expert perspectives on luxury home design, Vastu-compliant architecture, Sonipat real estate market insights, interior trends, and sustainable construction by Rishika Builders.",
    openGraph: {
        title: "The Journal — Rishika Builders Insights & Stories",
        description:
            "Perspectives on luxury living, architectural craft, market intelligence, and the philosophy behind every Rishika home.",
        images: [
            {
                url: "/og-blog.jpg",
                width: 1200,
                height: 630,
                alt: "Rishika Builders Journal",
            },
        ],
    },
    alternates: {
        canonical: "https://www.rishikabuilders.com/blog",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Rishika Builders Journal",
    description:
        "Insights on luxury living, Vastu-compliant architecture, market trends, and the craft of building premium homes in Sonipat.",
    url: "https://www.rishikabuilders.com/blog",
    publisher: {
        "@type": "Organization",
        name: "Rishika Builders",
        url: "https://www.rishikabuilders.com",
        logo: {
            "@type": "ImageObject",
            url: "https://www.rishikabuilders.com/logo-black.png",
        },
    },
};

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main>
                <BlogHero />
                <BlogGrid />
                <BlogCTA />
            </main>
            <Footer />
        </>
    );
}
