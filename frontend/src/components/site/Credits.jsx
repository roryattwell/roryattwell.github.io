import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { Plus } from "lucide-react";
import { CREDITS, FILTERS } from "@/data/site";

const EASE = [0.16, 1, 0.3, 1];

export default function Credits() {
    const [filter, setFilter] = useState("All");
    const [openId, setOpenId] = useState(null);
    const [spot, setSpot] = useState(null);

    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const sx = useSpring(mx, { stiffness: 140, damping: 20, mass: 0.4 });
    const sy = useSpring(my, { stiffness: 140, damping: 20, mass: 0.4 });

    const rows =
        filter === "All"
            ? CREDITS
            : CREDITS.filter((c) => c.category === filter);

    return (
        <section
            id="work"
            className="px-6 py-24 md:px-10 md:py-36"
            onMouseMove={(e) => {
                mx.set(e.clientX + 28);
                my.set(e.clientY - 130);
            }}
        >
            <div className="mx-auto max-w-[1500px]">
                <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.8, ease: EASE }}
                            className="mb-6 font-mono2 text-[11px] uppercase tracking-[0.28em] text-terra"
                        >
                            Selected Work
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                            className="font-display text-4xl tracking-tight md:text-6xl"
                        >
                            Credits<span className="text-terra">.</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                        className="flex flex-wrap gap-2"
                        data-testid="credits-filters"
                    >
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                data-testid={`filter-pill-${f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                onClick={() => setFilter(f)}
                                className={`rounded-full border px-4 py-2 font-mono2 text-[10px] uppercase tracking-[0.16em] transition-colors duration-300 md:text-[11px] ${
                                    filter === f
                                        ? "border-ink bg-ink text-cream"
                                        : "border-line bg-transparent text-ink-muted hover:border-ink hover:text-ink"
                                }`}
                            >
                                {f}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="mt-14 border-b border-line md:mt-20">
                    <AnimatePresence mode="popLayout">
                        {rows.map((c, i) => {
                            const open = openId === c.id;
                            return (
                                <motion.div
                                    key={c.id}
                                    layout
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.45, ease: EASE, delay: i * 0.03 }}
                                    className="border-t border-line"
                                >
                                    <button
                                        data-testid={`credit-row-${c.id}`}
                                        onClick={() => setOpenId(open ? null : c.id)}
                                        onMouseEnter={() => setSpot(c.img)}
                                        onMouseLeave={() => setSpot(null)}
                                        className="group grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 py-5 text-left md:grid-cols-[3.5rem_1fr_auto_2rem] md:gap-8 md:py-7"
                                        aria-expanded={open}
                                    >
                                        <span className="font-mono2 text-[10px] tracking-[0.2em] text-ink-muted md:text-xs">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <span>
                                            <span
                                                className={`block font-display text-xl leading-tight transition-colors duration-300 md:text-3xl ${
                                                    open ? "italic text-terra" : "group-hover:italic group-hover:text-terra"
                                                }`}
                                            >
                                                {c.title}
                                            </span>
                                            <span className="mt-1 block font-mono2 text-[10px] uppercase tracking-[0.16em] text-ink-muted md:text-[11px]">
                                                {c.role}
                                            </span>
                                            {c.badge && (
                                                <span className="mt-2 inline-block bg-terra/10 px-2.5 py-1 font-mono2 text-[9px] uppercase tracking-[0.16em] text-terra md:text-[10px]">
                                                    {c.badge}
                                                </span>
                                            )}
                                        </span>
                                        <span className="hidden font-mono2 text-[10px] uppercase tracking-[0.16em] text-ink-muted md:block">
                                            {c.category}
                                        </span>
                                        <Plus
                                            className={`h-5 w-5 justify-self-end transition-transform duration-300 ${
                                                open ? "rotate-45 text-terra" : "text-ink-muted"
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {open && (
                                            <motion.div
                                                key="detail"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: EASE }}
                                                className="overflow-hidden"
                                                data-testid={`credit-detail-${c.id}`}
                                            >
                                                <div className="flex flex-col gap-5 pb-8 md:flex-row md:items-start md:justify-between md:pl-24">
                                                    <p className="max-w-xl text-sm leading-relaxed text-ink-muted md:text-base">
                                                        {c.desc}
                                                    </p>
                                                    {c.img && (
                                                        <img
                                                            src={c.img}
                                                            alt={c.title}
                                                            loading="lazy"
                                                            className="h-36 w-full max-w-xs border border-line object-cover md:h-40"
                                                        />
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>

                <p className="mt-8 font-mono2 text-[10px] uppercase tracking-[0.2em] text-ink-muted md:text-[11px]">
                    {rows.length} of {CREDITS.length} projects
                </p>
            </div>

            {/* desktop hover spotlight */}
            <AnimatePresence>
                {spot && (
                    <motion.div
                        key={spot}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        style={{ x: sx, y: sy, top: 0, left: 0 }}
                        className="pointer-events-none fixed z-30 hidden h-48 w-64 overflow-hidden border border-ink/10 lg:block"
                        data-testid="credits-spotlight"
                    >
                        <img src={spot} alt="" className="h-full w-full object-cover" />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
