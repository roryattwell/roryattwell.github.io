import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import Statement from "@/components/site/Statement";
import Credits from "@/components/site/Credits";
import Studio from "@/components/site/Studio";
import About from "@/components/site/About";
import Footer from "@/components/site/Footer";

export default function Home() {
    return (
        <div className="relative">
            <div className="grain-overlay" aria-hidden="true" />
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <Statement />
                <Credits />
                <Studio />
                <About />
            </main>
            <Footer />
        </div>
    );
}
