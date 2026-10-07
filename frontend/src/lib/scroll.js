import Lenis from "lenis";

let lenis = null;

export function initLenis() {
    if (!lenis) {
        lenis = new Lenis({
            duration: 1.15,
            smoothWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        const raf = (time) => {
            if (lenis) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
        };
        requestAnimationFrame(raf);
    }
    return lenis;
}

export function destroyLenis() {
    if (lenis) {
        lenis.destroy();
        lenis = null;
    }
}

export function scrollToId(selector) {
    if (lenis) {
        lenis.scrollTo(selector, { offset: -72, duration: 1.4 });
    } else {
        document
            .querySelector(selector)
            ?.scrollIntoView({ behavior: "smooth" });
    }
}
