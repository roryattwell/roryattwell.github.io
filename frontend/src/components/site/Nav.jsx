import { scrollToId } from "@/lib/scroll";
import Mark from "./Mark";
import { SHOWREEL_MAILTO } from "@/data/site";

const LINKS = [
    { label: "Work", target: "#work", id: "work" },
    { label: "About", target: "#about", id: "about" },
    { label: "Contact", target: "#contact", id: "contact" },
];

export default function Nav() {
    const go = (e, target) => {
        e.preventDefault();
        scrollToId(target);
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3.5 md:px-10">
                <a
                    href="#top"
                    data-testid="nav-logo"
                    onClick={(e) => go(e, "#top")}
                    className="flex items-center gap-2.5"
                >
                    <Mark className="h-6 w-6" />
                    <span className="font-display text-lg leading-none tracking-tight">
                        Rory&nbsp;Attwell
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.id}
                            href={l.target}
                            data-testid={`nav-link-${l.id}`}
                            onClick={(e) => go(e, l.target)}
                            className="u-sweep font-mono2 text-[11px] uppercase tracking-[0.22em] text-ink-muted transition-colors hover:text-ink"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <a
                    href={SHOWREEL_MAILTO}
                    data-testid="nav-cta-showreel"
                    className="rounded-full bg-ink px-4 py-2 font-mono2 text-[10px] uppercase tracking-[0.18em] text-cream transition-colors duration-300 hover:bg-terra md:px-5 md:py-2.5 md:text-[11px]"
                >
                    Request Showreel
                </a>
            </div>
        </header>
    );
}
