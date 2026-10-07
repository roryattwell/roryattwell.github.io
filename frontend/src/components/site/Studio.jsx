import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];
const rise = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
};

const FACTS = [
    "Recording studio aboard a 1930s steel lightship hull",
    "Trinity Buoy Wharf — London E14, on the River Thames",
    "Live room & control room on the water",
    "Home of Brattwell Recordings",
];

export default function Studio() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const yMain = useTransform(scrollYProgress, [0, 1], [40, -40]);
    const ySmall = useTransform(scrollYProgress, [0, 1], [70, -50]);

    return (
        <section
            id="studio"
            ref={ref}
            className="border-y border-line bg-surface px-6 py-24 md:px-10 md:py-36"
        >
            <div className="mx-auto grid max-w-[1500px] items-center gap-14 lg:grid-cols-2 lg:gap-20">
                <div>
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="mb-6 font-mono2 text-[11px] uppercase tracking-[0.28em] text-terra"
                    >
                        The Studio
                    </motion.p>
                    <motion.h2
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                        className="font-display text-4xl tracking-tight md:text-6xl"
                    >
                        Lightship 95<span className="text-terra">.</span>
                    </motion.h2>
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.18 }}
                        className="mt-6 max-w-md text-base leading-relaxed text-ink-muted md:text-lg"
                    >
                        A recording studio on a 1930s lightship, moored on the
                        Thames — where film scores are written, records are cut
                        and hundreds of releases have been produced, engineered
                        and mixed.
                    </motion.p>

                    <div className="mt-10 border-t border-line">
                        {FACTS.map((f, i) => (
                            <motion.p
                                key={f}
                                {...rise}
                                transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
                                className="border-b border-line py-4 font-mono2 text-[11px] uppercase tracking-[0.16em] text-ink md:text-xs"
                                data-testid={`studio-fact-${i}`}
                            >
                                {f}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <div className="relative pb-14 pl-6 md:pb-20 md:pl-10" data-testid="studio-images">
                    <motion.div
                        style={{ y: yMain }}
                        className="relative aspect-[4/3] w-full overflow-hidden border border-line"
                    >
                        <img
                            src={IMAGES.ship}
                            alt="Lightship 95 moored on the Thames"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-4 left-4 bg-dark px-3 py-1.5 font-mono2 text-[9px] uppercase tracking-[0.2em] text-cream">
                            Fig. 02 — On the water
                        </div>
                    </motion.div>
                    <motion.div
                        style={{ y: ySmall }}
                        className="absolute -bottom-2 left-0 aspect-[4/3] w-1/2 overflow-hidden border-4 border-paper shadow-xl md:-bottom-8 md:w-[46%]"
                    >
                        <img
                            src={IMAGES.river}
                            alt="Boats moored on the River Thames, London"
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
