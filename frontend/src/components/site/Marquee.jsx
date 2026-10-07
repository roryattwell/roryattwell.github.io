import { Asterisk } from "lucide-react";
import { MARQUEE_ITEMS } from "@/data/site";

const Strip = ({ hidden = false }) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
        {MARQUEE_ITEMS.map((item) => (
            <span key={item} className="flex items-center">
                <span className="whitespace-nowrap px-6 font-display text-2xl italic font-light md:px-10 md:text-4xl">
                    {item}
                </span>
                <Asterisk
                    className="h-5 w-5 shrink-0 text-terra md:h-7 md:w-7"
                    aria-hidden="true"
                />
            </span>
        ))}
    </div>
);

export default function Marquee() {
    return (
        <div
            className="marquee overflow-hidden border-y border-line bg-surface py-5 md:py-6"
            data-testid="marquee"
        >
            <div className="marquee-track">
                <Strip />
                <Strip hidden />
            </div>
        </div>
    );
}
