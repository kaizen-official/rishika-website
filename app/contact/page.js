import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactHero from "./components/ContactHero";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import LocationMap from "./components/LocationMap";
import FAQ from "./components/FAQ";

export const metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Rishika Builders for luxury home consultations, site visits, and investment opportunities in Sonipat. Our team responds within 24 hours.",
    openGraph: {
        title: "Contact Rishika Builders — Schedule a Consultation",
        description:
            "Reach out to our team for personalized consultations on luxury villas, premium apartments, and investment opportunities in Sonipat, Haryana.",
        images: [
            {
                url: "/og-contact.jpg",
                width: 1200,
                height: 630,
                alt: "Contact Rishika Builders",
            },
        ],
    },
    alternates: {
        canonical: "https://www.rishikabuilders.com/contact",
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
        "@type": "RealEstateAgent",
        name: "Rishika Builders",
        telephone: "+91-98765-43210",
        email: "info@rishikabuilders.com",
        address: {
            "@type": "PostalAddress",
            streetAddress: "Sector 12, Near Main Market",
            addressLocality: "Sonipat",
            addressRegion: "Haryana",
            postalCode: "131001",
            addressCountry: "IN",
        },
        openingHoursSpecification: [
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "19:00",
            },
            {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Saturday",
                opens: "10:00",
                closes: "17:00",
            },
        ],
    },
};

export default function ContactPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main>
                <ContactHero />
                <ContactForm />
                <ContactInfo />
                <LocationMap />
                <FAQ />
            </main>
            <Footer />
        </>
    );
}
