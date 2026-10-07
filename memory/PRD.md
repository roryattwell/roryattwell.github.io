# PRD — Rory Attwell, Producer & Composer

## Original Problem Statement
"I need a website for my production and composition work. You can base the content on my current website www.roryattwell.com also you might want to draw from more recent work on my Instagram Instagram.com username: roryattwell. I just want to be one page ideally I think, and to look good on web and mobile."

## User Choices (from Q&A)
- Lead content: balanced mix, one combined credits wall
- Design mood: light editorial — off-white, big serif type, magazine feel
- Media: text + imagery, links out (no audio/video embeds)
- New credit added by user: scored + sound design + mix on Lucy Brydon's short film "The Skin Will Tell You", selected for SXSW London
- Contact: email + "Request Showreel" mailto (as current site)

## Architecture
- Single-page React frontend (React 19, CRA + craco), no backend routes used — static content in `/app/frontend/src/data/site.js`
- framer-motion for reveals/micro-interactions; lenis for momentum scrolling; sonner for copy-email toast
- Original SVG equalizer-bars logo mark, reused as favicon
- Fonts: Fraunces (display serif), IBM Plex Mono (labels), Archivo (body)

## Sections
1. Fixed nav (anchor scroll via Lenis, Request Showreel CTA)
2. Kinetic hero — masked line-by-line reveal, animated EQ bars, parallax studio image card
3. Slow editorial marquee
4. Statement + three facet cards
5. Combined credits wall — 13 projects, filterable pills, expandable rows, desktop cursor-follow image spotlight
6. Lightship 95 studio spotlight (parallax imagery)
7. Background (Test Icicles, Warm Brains, production roster)
8. Dark footer — big serif CTA, copy-email with toast, showreel mailto, Instagram, IMDb

## Content Integrity
All credits/roles/descriptions from roryattwell.com verbatim; SXSW London credit from user. Years deliberately omitted except user-stated / well-established ('Old Volcanoes', 2011). External links limited to Instagram + IMDb (real profiles).

## Revisions (user feedback, 2026-10-07)
- Removed all Lightship95 emphasis per user ("I don't work there anymore"): deleted dedicated Studio section + nav link, rewrote statement/marquee/footer copy, trimmed credit descriptions. Credit titles remain factual.
- Replaced all stock studio-equipment photos with the real project stills from roryattwell.com (downloaded to /app/frontend/public/images/, served locally). 
- 2026-10-07 (later): "The Skin Will Tell You" still supplied by user via SXSW London page screenshot — cropped to clean film still, added to its credit row. Badge/hero updated to "SXSW London 2026" (dates 1-6 June 2026 confirmed on the festival page).
- 2026-10-07 (later): Hero photo replaced with user-supplied studio shot (Rory with mug, preferred main photo); previous hero shot reassigned to Brattwell Recordings credit. Colour scheme warmed up per user feedback (referencing their "Music Therapy" logo): blush paper, rose accent, cobalt secondary, midnight-indigo footer; mark + favicon = pink circle with cobalt equalizer bars.
- 2026-10-07 (later): Polish pass per user notes — removed editorial marquee ribbon, removed "13 of 13 projects" counter, removed Test Icicles/Warm Brains archive rows (kept the summary paragraph), footer headline changed to "Let's shape the sound."
- 2026-10-07 (later): About spread rework into a fuller two-column editorial (approved paragraph + Spotify "On the stereo" playlist card on the left; large archive image with caption + roster list on the right). User Spotify playlist "A Few Of The Things I've Produced" linked from About card + footer (clean URL, tracking params stripped).
- 2026-10-07 (later): User tweaks — Brattwell Recordings moved to credit #03; Body of Water description now credits BBC Films / BFI (Lucy Brydon name removed from this credit at user request); About archive image ("So Young sessions") removed at user request — roster column re-centred.
- 2026-10-07 (later): Section-gap fix (user-reported with annotated screenshot) — section paddings reduced (py-24/36 → py-12/16, hero/footer trimmed) AND brand pattern strips placed at all four section joins, per user's "show me both" request.
- 2026-10-07 (later): Pattern family per user request — each join has its own motif in the rose/cobalt palette; final order: eq-bars (hero→statement), folk block-print bold (statement→credits), wave ribbon light (credits→about), shell swirls bold last (about→footer). SVG tiles live in /app/frontend/src/assets/patterns/. Bold set = swirls + ethnic (32px, 0.62 opacity, chunky strokes); bars + waves stay light.
- 2026-10-07 (later): Hero overline trimmed to "Producer · Composer · Sound" (London removed); footer Spotify link removed — playlist stays linked only via the About "On the stereo" card.
- 2026-10-07 (later): "London, UK" removed from the footer bottom bar (bar now: © year · Producer · Composer · Sound).
- 2026-10-07 (later): About right column filled per user request — 8 real record covers pulled from the user's Spotify playlist "A Few Of The Things I've Produced" (Big Deal, Palma Violets, Wesley Gonzalez, H. Grimace, Veronica Falls, Wylderness, TRAAMS, PROM), downloaded to /app/frontend/public/images/covers/. Grayscale by default, colour + zoom on hover, each links to the playlist.

## Done
- 2026-10-07: Full one-page site built, verified desktop (1440) + mobile (390), no overflow, filters/expand/copy verified.

## Backlog (P2)
- Embedded showreel section if user supplies video
- CMS-ish data source for credits if user wants self-editing
