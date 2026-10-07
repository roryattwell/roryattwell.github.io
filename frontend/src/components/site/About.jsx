import { motion } from "framer-motion";
import { IMAGES } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];
const rise = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
};

const ROSTER = [
    "The Vaccines",
    "Yuck",
    "Veronica Falls",
    "Male Bonding",
    "S.C.U.M.",
];

export default function About() {
    return (
        <section id="about" className="px-6 py-24 md:px-10 md:py-36">
            <div className="mx-auto grid max-w-[1500px] gap-12 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="mb-6 font-mono2 text-[11px] uppercase tracking-[0.28em] text-terra"
                    >
                        Background
                    </motion.p>
                    <motion.h2
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                        className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl"
                    >
                        Before &amp; behind{" "}
                        <em className="font-light italic text-terra">
                            the desk
                        </em>
                    </motion.h2>
                    <motion.div
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                        className="mt-10 hidden max-w-[240px] md:block"
                    >
                        <img
                            src={IMAGES.about}
                            alt="Archive — live session"
                            loading="lazy"
                            className="aspect-[3/4] w-full border border-line object-cover grayscale"
                        />
                    </motion.div>
                </div>

                <div className="md:col-span-8">
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                        className="max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg"
                        data-testid="about-text"
                    >
                        Rory began in bands — formerly of Test Icicles, he
                        records solo as Warm Brains. Alongside composition for
                        film and television, he has produced, engineered and
                        mixed hundreds of records, working with artists across
                        the UK's independent scene.
                    </motion.p>

                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                        className="mt-12 font-mono2 text-[10px] uppercase tracking-[0.22em] text-ink-muted md:text-[11px]"
                    >
                        Production, engineering &amp; mixing credits include
                    </motion.p>
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
                        className="mt-4 max-w-2xl font-display text-2xl italic leading-snug md:text-3xl"
                        data-testid="about-roster"
                    >
                        {ROSTER.map((r, i) => (
                            <span key={r} className="transition-colors duration-300 hover:text-terra">
                                {r}
                                {i < ROSTER.length - 1 && (
                                    <span className="not-italic text-terra"> · </span>
                                )}
                            </span>
                        ))}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
