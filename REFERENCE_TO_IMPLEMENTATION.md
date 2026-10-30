# Cinematic reference-to-implementation map

The reference video was not watched; all features below come from `design.md` v3's original storyboard. There is no claim these are observed Pin frames. Actual source evidence is in `REFERENCE_AUDIT.md`.

| Written direction | Component / style | Actual movement / interaction |
| --- | --- | --- |
| Short branded arrival | `Arrival.tsx`, `.arrival` | Exact logo, sub-second fade, cached/session/reduced skips, Strict Mode cleanup. |
| Layered hero | `HeroParallax.tsx`, `MountainLayers.tsx` | Sky and three original mountain SVG planes, real food in cream halo; far/mid/near distances 85/170/270px over scene travel. |
| Editorial headline and food entrance | `.hero-line`, `.hero-arrival`, motion hook | Masked lines, food y/scale/rotation, late headline exit, capped food scale. |
| Scene bridge | `.signature-strip`, `.marquee` | 32-second ribbon; pause on hover/focus and offscreen. |
| Signature discovery | `SignatureShowcase.tsx` | Three real images, thumbnails, arrows/keyboard, 300ms directional crossfade and matching descriptions. |
| Dark story chapter | `SikkimStory.tsx` | Three depth planes, separate arch/inset photo motion, winding trail; reliable non-pinned scroll. |
| Paper-to-book transition | Menu intro in `Website.tsx` | Left editorial type and drawn arrow; closed book on right, perspective arrival and light sweep. |
| Real menu | `MenuBook.tsx`, `MenuPage.tsx` | Ten generated inner pages, front/index/categories/back, 900ms ±180° leaves, front/back faces, dynamic crease, category jumps, close, swipe/keyboard and readable text alternative. |
| Organic moments | `Gallery.tsx`, `.gallery-depth` | Eight real photos, masks, restrained opposing depth, hover lift, focus-safe lightbox and verified post link. |
| Brief manifesto | `Manifesto.tsx` | Three staggered lines, original dumpling/heart/cloud drawing, restrained underline. |
| Local visit | `VisitSection.tsx` | Real address/social/directions, quiet hills, reveal, arrow and hover outline. |
| Designed ending | `Footer.tsx` | Original horizon, actual logo, working anchors and current year. |
| Navigation/mobile | `Header.tsx`, cinematic responsive CSS | Compact sticky navigation, focus-safe mobile sheet, 44px controls, single-page menu, text-first hero. |
| Motion preference | `useCinematicMotion.ts`, CSS / MotionConfig | No large turns/parallax/loops under reduced motion; all functions remain available. |

GSAP + ScrollTrigger owns scroll timelines when available. In the restricted browser the CDN was unavailable, so the native fallback was actually tested: at a 300px hero scroll, far/mid/near offsets were 28.33/56.67/90px and food moved −25px. No fake GSAP API or unrelated reference media is used.

See `MOTION_REPORT.md` for register groups and limits. Source-derived facts and photo provenance live in the content manifest and asset audits.
