import Nav from "@/components/site/Nav";
import Divider from "@/components/site/Divider";
import Hero from "@/components/site/Hero";
import Statement from "@/components/site/Statement";
import Credits from "@/components/site/Credits";
import About from "@/components/site/About";
import Footer from "@/components/site/Footer";

export default function Home() {
    return (
        <div className="relative">
            <div className="grain-overlay" aria-hidden="true" />
            <Nav />
            <main>
                <Hero />
                <Divider idx={1} />
                <Statement />
                <Divider idx={2} />
                <Credits />
                <Divider idx={3} />
                <About />
                <Divider idx={4} />
            </main>
            <Footer />
        </div>
    );
}
