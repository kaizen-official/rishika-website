import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectsHero from "./components/ProjectsHero";
import FeaturedProject from "./components/FeaturedProject";
import ProjectsGrid from "./components/ProjectsGrid";
import ProjectStats from "./components/ProjectStats";
import ProjectsCTA from "./components/ProjectsCTA";

export const metadata = {
  title: "Projects",
  description:
    "Explore the complete portfolio of Rishika Builders — luxury villas, premium apartments, independent floors, and plotted developments across Sonipat and Delhi NCR.",
  openGraph: {
    title: "Projects — Rishika Builders Portfolio",
    description:
      "Browse our collection of luxury villas, premium apartments, and thoughtfully planned communities. Every Rishika project is a masterpiece of craftsmanship.",
    images: [
      {
        url: "/og-projects.jpg",
        width: 1200,
        height: 630,
        alt: "Rishika Builders Projects Portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://www.rishikabuilders.com/projects",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Rishika Builders — Projects Portfolio",
  description:
    "Explore luxury villas, premium apartments, independent floors, and plotted developments by Rishika Builders in Sonipat.",
  url: "https://www.rishikabuilders.com/projects",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "RealEstateListing",
          name: "The Grand Residency",
          description: "Luxury 4 & 5 BHK Villas in Sector 5, Sonipat",
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "RealEstateListing",
          name: "The Royal Enclave",
          description: "Premium Luxury Villas in Sector 12, Sonipat",
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "RealEstateListing",
          name: "Rishika Heights",
          description: "Premium Apartments in Sector 7, Sonipat",
        },
      },
    ],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <ProjectsHero />
        <FeaturedProject />
        <ProjectsGrid />
        <ProjectStats />
        <ProjectsCTA />
      </main>
      <Footer />
    </>
  );
}
