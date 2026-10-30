# Cinematic motion implementation

Original implementation of `design.md` v3. The reference video frames were not watched. The table maps implemented effects to the brief's register; it does not claim 48 independently verified animations or exact video timestamps.

| Register | Actual implementation |
| --- | --- |
| A01–A02 | Exact-logo arrival under one second, non-blocking fade, skipped for cached image/same session/reduced motion. Strict Mode cleanup handled in `Arrival.tsx`. |
| A03–A06 | Header entrance/compact state, link underline, CTA arrow shift and pill feedback. |
| A07–A11 | GSAP sky/hills/food/title/copy choreography. CSS supplies fallback hill, food and title entrances; fallback sky stays sharp and immediately visible. |
| A12 / A18–A20 | Scroll cue, phase-offset steam, cloud drift, 32-second marquee. Offscreen, hidden-tab, overlay and reduced-motion pauses; ticker hover/focus pause. |
| A13–A17 | Hero far/mid/near travel 85/170/270px over full scene travel; food −75px, text −35px, food scale capped at 1.05. Late headline exit. Mobile uses only food depth capped at −18px. |
| A21–A25 | Editorial showcase reveal, masked real photo, selectable thumbnails/arrows/keyboard, 300ms directional crossfade, subtle image hover. |
| A26–A29 | Navy story, three independent hill planes, separate photo depths, arch and SVG trail. Uses the explicitly permitted non-pinned form. |
| A30–A32 | Menu heading/arrow, perspective book arrival, cloth cover, hover/open light sweep. |
| A33–A36 | Controlled ±180° Motion leaves, 900ms cubic-bezier(.4,0,.2,1), hidden reverse faces, crease shadow peaking mid-turn. Completion callback commits pages. Index, categories, back cover, close/reopen and item ink feedback. |
| A37–A40 | Gallery masks, alternating gentle depth, hover lift/overlay, accessible lightbox and verified post link. |
| A41–A42 | Three manifesto lines, staggered rise, original dumpling/heart/cloud stroke drawings and underline. |
| A43–A45 | Visit title reveal, quiet hill movement, real directions/social links, arrow and hover outline expansion. |
| A46–A48 | Footer horizon, mobile sheet/link stagger, focus restoration and native smooth anchors with reduced-motion override. |

GSAP owns ScrollTrigger timelines and CSS depth variables when the pinned library loads. A scoped `gsap.context()` is reverted on cleanup. Crossing the mobile breakpoint rebuilds amplitudes; fonts/image completion refresh ScrollTrigger without per-paint refreshes.

If CDN access is blocked, one passive scroll listener schedules one requestAnimationFrame. The native fallback measures scenes once, skips offscreen work, writes transform variables and stops in hidden tabs. It does not impersonate GSAP. Native depth stops when actual GSAP takes ownership. CSS handles fallback entrances.

Motion owns book leaves and state transitions. CSS handles small ambient illustrations. Systems use separate wrapper layers/properties; no global wheel interception, scroll jacking, audio or automatic page turning is used.

Reduced motion removes parallax, animated drawing, autonomous loops, large rotations and smooth scrolling while retaining all content, navigation, category selection and gallery controls.

The recorded successful browser run measured far/mid/near offsets of 28.33/56.67/90px at a 300px hero scroll, and food at −25px. Engine: `native`, because the GSAP CDN was unavailable. Actual GSAP source integration is implemented; its network-dependent runtime is not claimed as verified.
