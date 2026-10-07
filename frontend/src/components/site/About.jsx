import { motion } from "framer-motion";
import { ArrowUpRight, AudioLines } from "lucide-react";
import { COVERS, SPOTIFY_PLAYLIST, SPOTIFY_PLAYLIST_TITLE } from "@/data/site";

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
        <section id="about" className="px-6 py-12 md:px-10 md:py-16">
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
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
                        className="mt-8 max-w-md text-base leading-relaxed text-ink-muted md:text-lg"
                        data-testid="about-text"
                    >
                        Rory began in bands — formerly of Test Icicles, he
                        records solo as Warm Brains. Alongside composition for
                        film and television, he has produced, engineered and
                        mixed hundreds of records, working with artists across
                        the UK's independent scene.
                    </motion.p>

                    <motion.a
                        {...rise}
                        transition={{ duration: 0.9, ease: EASE, delay: 0.28 }}
                        href={SPOTIFY_PLAYLIST}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="about-spotify-link"
                        className="group mt-10 flex items-center justify-between gap-4 border border-line bg-surface p-5 transition-colors duration-300 hover:border-terra hover:bg-surface-hover md:p-6"
                    >
                        <span className="flex items-center gap-4">
                            <AudioLines
                                className="h-6 w-6 shrink-0 text-terra"
                                aria-hidden="true"
                            />
                            <span>
                                <span className="block font-mono2 text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                                    On the stereo — Spotify
                                </span>
                                <span className="mt-1.5 block font-display text-lg italic leading-tight md:text-xl">
                                    {SPOTIFY_PLAYLIST_TITLE}
                                </span>
                            </span>
                        </span>
                        <ArrowUpRight
                            className="h-5 w-5 shrink-0 text-ink-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-terra"
                            aria-hidden="true"
                        />
                    </motion.a>
                </div>

                <div className="flex flex-col justify-center md:col-span-7">
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                        className="font-mono2 text-[10px] uppercase tracking-[0.22em] text-ink-muted md:text-[11px]"
                    >
                        Production, engineering &amp; mixing credits include
                    </motion.p>
                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.28 }}
                        className="mt-5 font-display text-3xl italic leading-snug md:text-4xl"
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

                    <motion.p
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
                        className="mt-12 hidden font-mono2 text-[10px] uppercase tracking-[0.22em] text-ink-muted md:block md:text-[11px]"
                        data-testid="about-covers-label"
                    >
                        A selection of records — tap through to listen
                    </motion.p>
                    <motion.div
                        {...rise}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.38 }}
                        className="mt-8 grid grid-cols-4 gap-3 md:mt-5 md:gap-4"
                        data-testid="about-covers-grid"
                    >
                        {COVERS.map((c) => (
                            <a
                                key={c.n}
                                href={SPOTIFY_PLAYLIST}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={`${c.artist} — ${c.title}`}
                                data-testid={`about-cover-${c.n}`}
                                className="group block overflow-hidden border border-line"
                            >
                                <img
                                    src={c.file}
                                    alt={`${c.artist} — ${c.title}`}
                                    loading="lazy"
                                    className="aspect-square w-full object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
