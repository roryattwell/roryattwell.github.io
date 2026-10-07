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
- Replaced all stock studio-equipment photos with the real project stills from roryattwell.com (downloaded to /app/frontend/public/images/, served locally). "The Skin Will Tell You" has no still yet — row expands without image; awaiting user asset.

## Done
- 2026-10-07: Full one-page site built, verified desktop (1440) + mobile (390), no overflow, filters/expand/copy verified.

## Backlog (P2)
- Embedded showreel section if user supplies video
- CMS-ish data source for credits if user wants self-editing
