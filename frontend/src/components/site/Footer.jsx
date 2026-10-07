import { toast } from "sonner";
import { ArrowUpRight, Copy } from "lucide-react";
import Mark from "./Mark";
import { EMAIL, IMDB, INSTAGRAM, INSTAGRAM_HANDLE, SHOWREEL_MAILTO, SPOTIFY_PLAYLIST } from "@/data/site";

export default function Footer() {
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            toast.success("Email copied to clipboard");
        } catch {
            toast.error("Couldn't copy — email is " + EMAIL);
        }
    };

    return (
        <footer
            id="contact"
            className="bg-dark px-6 pb-10 pt-24 text-cream md:px-10 md:pt-36"
            data-testid="footer-contact"
        >
            <div className="mx-auto max-w-[1500px]">
                <p className="font-mono2 text-[11px] uppercase tracking-[0.28em] text-cream/50">
                    Get in touch
                </p>
                <h2 className="mt-6 font-display text-5xl leading-[1.02] tracking-tight md:text-8xl">
                    Let's shape
                    <br />
                    <em className="font-light italic">the sound</em>
                    <span className="text-terra">.</span>
                </h2>

                <div className="mt-14 flex flex-col gap-10 border-t border-cream/15 pt-10 md:mt-20 md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center gap-4">
                        <a
                            href={`mailto:${EMAIL}`}
                            data-testid="footer-email"
                            className="u-sweep font-display text-2xl italic md:text-4xl"
                        >
                            {EMAIL}
                        </a>
                        <button
                            onClick={copyEmail}
                            data-testid="footer-copy-email"
                            aria-label="Copy email address"
                            className="rounded-full border border-cream/25 p-2.5 transition-colors duration-300 hover:border-terra hover:bg-terra"
                        >
                            <Copy className="h-4 w-4" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={SHOWREEL_MAILTO}
                            data-testid="footer-showreel"
                            className="rounded-full bg-cream px-7 py-3.5 font-mono2 text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-terra hover:text-cream"
                        >
                            Request Showreel
                        </a>
                        <a
                            href={INSTAGRAM}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-instagram"
                            className="group inline-flex items-center gap-1.5 font-mono2 text-[11px] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-cream"
                        >
                            {INSTAGRAM_HANDLE}
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                        <a
                            href={IMDB}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-imdb"
                            className="group inline-flex items-center gap-1.5 font-mono2 text-[11px] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-cream"
                        >
                            IMDb
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                        <a
                            href={SPOTIFY_PLAYLIST}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-spotify"
                            className="group inline-flex items-center gap-1.5 font-mono2 text-[11px] uppercase tracking-[0.18em] text-cream/70 transition-colors hover:text-cream"
                        >
                            Spotify
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-3 border-t border-cream/15 pt-6 font-mono2 text-[9px] uppercase tracking-[0.2em] text-cream/40 md:flex-row md:items-center md:justify-between md:text-[10px]">
                    <span>© {new Date().getFullYear()} Rory Attwell</span>
                    <span className="flex items-center gap-2">
                        <Mark className="h-4 w-4" />
                        London, UK
                    </span>
                    <span>Producer · Composer · Sound</span>
                </div>
            </div>
        </footer>
    );
}
