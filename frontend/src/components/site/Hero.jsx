import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { IMAGES, SHOWREEL_MAILTO } from "@/data/site";
import { scrollToId } from "@/lib/scroll";

const EASE = [0.16, 1, 0.3, 1];

const MaskedLine = ({ children, delay = 0, className = "" }) => (
    <span className="block overflow-hidden">
        <motion.span
            className={`block ${className}`}
            initial={{ y: "115%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.1, ease: EASE, delay }}
        >
            {children}
        </motion.span>
    </span>
);

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const imgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section
            id="top"
            ref={ref}
            className="relative flex min-h-screen flex-col overflow-hidden px-6 pb-10 pt-24 md:px-10 md:pt-28"
        >
            <div className="mx-auto grid w-full max-w-[1500px] flex-1 gap-10 lg:grid-cols-12 lg:gap-8">
                {/* text column — anchored to the bottom baseline */}
                <div className="order-2 flex flex-col justify-end lg:order-1 lg:col-span-7 lg:pr-6">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mb-5 flex items-center gap-3 font-mono2 text-[11px] uppercase tracking-[0.28em] text-terra md:text-xs"
                        data-testid="hero-overline"
                    >
                        <span className="flex h-3 items-end gap-[3px]" aria-hidden="true">
                            {[0, 1, 2, 3].map((i) => (
                                <span
                                    key={i}
                                    className={`eq-bar w-[3px] rounded-sm ${i === 1 ? "bg-forest" : "bg-terra"}`}
                                    style={{
                                        height: "12px",
                                        animationDelay: `${i * 0.17}s`,
                                    }}
                                />
                            ))}
                        </span>
                        Producer · Composer · Sound
                    </motion.p>

                    <h1 className="font-display text-[clamp(3.5rem,10.5vw,9.5rem)] leading-[0.9] tracking-[-0.02em]">
                        <MaskedLine delay={0.25}>Rory</MaskedLine>
                        <MaskedLine
                            delay={0.4}
                            className="pr-[0.08em] font-light italic text-forest"
                        >
                            Attwell
                        </MaskedLine>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
                        className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg"
                    >
                        Music production &amp; composition for film,
                        television and records.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.9 }}
                        className="mt-8 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href={SHOWREEL_MAILTO}
                            data-testid="hero-cta-showreel"
                            className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-mono2 text-[11px] uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-terra"
                        >
                            Request Showreel
                        </a>
                        <button
                            onClick={() => scrollToId("#work")}
                            data-testid="hero-cta-work"
                            className="group inline-flex items-center gap-2 rounded-full border border-ink/25 px-7 py-3.5 font-mono2 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-cream"
                        >
                            Selected Work
                            <ArrowDown
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
                                aria-hidden="true"
                            />
                        </button>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.15 }}
                        className="mt-8 font-mono2 text-[10px] uppercase tracking-[0.2em] text-ink-muted md:text-[11px]"
                        data-testid="hero-latest"
                    >
                        Latest — “The Skin Will Tell You” · Official Selection,
                        SXSW London 2026
                    </motion.p>
                </div>

                {/* photo column — full height, edge to edge */}
                <motion.div
                    initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.4 }}
                    animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
                    transition={{ duration: 1.3, ease: EASE, delay: 0.5 }}
                    className="relative order-1 lg:order-2 lg:col-span-5"
                    data-testid="hero-image-card"
                >
                    <div className="relative aspect-[3/2] w-full overflow-hidden border border-line bg-surface lg:aspect-auto lg:h-full">
                        <motion.img
                            style={{ y: imgY, scale: 1.06 }}
                            src={IMAGES.hero}
                            alt="Rory Attwell in the studio"
                            className="h-full w-full object-cover object-[center_35%]"
                            loading="eager"
                        />
                        <div className="absolute bottom-4 left-4 bg-dark px-3.5 py-2 font-mono2 text-[9px] uppercase tracking-[0.2em] text-cream md:text-[10px]">
                            Fig. 01 — In the studio
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
