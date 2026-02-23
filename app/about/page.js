import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import Timeline from "./components/Timeline";
import CoreValues from "./components/CoreValues";
import Leadership from "./components/Leadership";
import Commitment from "./components/Commitment";
import AboutCTA from "./components/AboutCTA";

export const metadata = {
    title: "About Us",
    description:
        "Discover the legacy of Rishika Builders — a story rooted in Vastu-compliant craftsmanship, refined engineering, and an unwavering commitment to building enduring luxury homes in Sonipat.",
    openGraph: {
        title: "About Rishika Builders — Our Legacy, Our Promise",
        description:
            "From humble beginnings to redefining luxury real estate in Sonipat. Learn about our journey, values, and the people behind every Rishika home.",
        images: [
            {
                url: "/og-about.jpg",
                width: 1200,
                height: 630,
                alt: "About Rishika Builders",
            },
        ],
    },
};

export default function AboutPage() {
    return (
        <>
            <Navbar />
            <main>
                <AboutHero />
                <OurStory />
                <Timeline />
                <CoreValues />
                <Leadership />
                <Commitment />
                <AboutCTA />
            </main>
            <Footer />
        </>
    );
}
