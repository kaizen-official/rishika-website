import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import Stats from "./components/Stats";
import Philosophy from "./components/Philosophy";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Projects />
        <Stats />
        <Philosophy />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
