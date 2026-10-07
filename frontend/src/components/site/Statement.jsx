import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];
const rise = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
};

const FACETS = [
    { n: "01", label: "Film & TV", note: "Original scores & composition" },
    { n: "02", label: "Records", note: "100s of albums, EPs & singles produced" },
    { n: "03", label: "Sound", note: "Design, mix & voice recording" },
];

export default function Statement() {
    return (
        <section className="px-6 py-12 md:px-10 md:py-16">
            <div className="mx-auto max-w-[1500px]">
                <motion.p
                    {...rise}
                    transition={{ duration: 0.8, ease: EASE }}
                    className="mb-8 font-mono2 text-[11px] uppercase tracking-[0.28em] text-terra"
                >
                    The Work
                </motion.p>

                <motion.h2
                    {...rise}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                    className="max-w-5xl font-display text-3xl leading-[1.18] tracking-tight md:text-5xl md:leading-[1.15]"
                    data-testid="statement-heading"
                >
                    Producing records,{" "}
                    <em className="font-light italic text-terra">
                        scoring pictures
                    </em>{" "}
                    and shaping sound — music production and composition for
                    film, television and artists.
                </motion.h2>

                <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line md:mt-16 md:grid-cols-3">
                    {FACETS.map((f, i) => (
                        <motion.div
                            key={f.n}
                            {...rise}
                            transition={{ duration: 0.8, ease: EASE, delay: i * 0.12 }}
                            className="group bg-paper p-8 transition-colors duration-300 hover:bg-surface md:p-10"
                            data-testid={`statement-facet-${i}`}
                        >
                            <p className="font-mono2 text-[10px] tracking-[0.25em] text-terra">
                                ({f.n})
                            </p>
                            <p className="mt-4 font-display text-2xl italic md:text-3xl">
                                {f.label}
                            </p>
                            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                                {f.note}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
