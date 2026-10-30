# Momos & Stuff — cinematic website

Complete React + TypeScript + Tailwind 4 implementation of `design.md` v3: layered mountain hero, editorial ticker, selectable food showcase, navy Sikkim story, physical menu book, photo gallery, manifesto, visit scene and footer.

## Run

Requires Node 22.12+.

```sh
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run typecheck
npm run test:browser
```

Development: http://127.0.0.1:5173/. Production output: `dist/`. Vite uses its native config loader to avoid denied ancestor-directory scans on this Windows host. Existing dependencies were reused; outbound package installation is restricted here. `scripts/bootstrap-local.mjs` is a workstation recovery helper, not required for ordinary installation.

## Files and editing

- `src/app/Website.tsx`: scene order and shell.
- `src/components/HeroParallax.tsx`, `MountainLayers.tsx`, `SikkimStory.tsx`: original landscape and independent photo/text layers.
- `SignatureShowcase.tsx`: real-image thumbnails, arrows, keyboard and matching descriptions.
- `src/components/menu/`: cover, index, category spreads, back matter/back cover, next/previous, category jumps, swipe/drag, keyboard, close/reopen and semantic text menu. Ten data-driven inner pages, desktop spreads and a readable portrait folio below 1024px. State commits on actual animation completion; repeated input is locked.
- `Gallery.tsx`, `Manifesto.tsx`, `VisitSection.tsx`, `Footer.tsx`: remaining scenes.
- `src/hooks/useCinematicMotion.ts`: scoped GSAP, native fallback and motion lifecycle.
- `src/styles/index.css`: base styles; `src/styles/cinematic.css`: v3 scene design.
- `src/data/content.ts`: edit factual restaurant details, categories, dishes, photo descriptions, original filenames and verified post links here. Prices are optional and omitted until verified.

The Sikkim connection is supported by captions; the actual supplied location data includes Silvassa and Vapi. The directions link uses the verified Vapi address. No prices, current hours, phone numbers, ratings or founder history were invented. The menu is explicitly an Instagram discovery selection, including a seasonal dessert whose availability must be checked.

## Assets

The exact logo is at `public/assets/brand/logo.jpg`. All ten selected photographs are used. Their 30 local responsive JPEGs and provenance are under `public/assets/instagram/`; dimensions are never upscaled, width descriptors are accurate, the hero is priority-loaded and secondary images are lazy. Original hashes, filenames and caption-supported post URLs are traceable.

See `ASSET_AUDIT.md` and `ASSET_REPORT.md`. Original downloaded media is in `../Momos and stuff/public/assets/food/` and `gallery/`, tied to the same 21-record CSV. Regenerate copies with `scripts/prepare-local-assets.ps1`, adjusting its source path when moving the project. The Python pipeline separately supports safe public-image URL downloads, which are blocked in this environment. Original media and exports are preserved. Pinterest/stock imagery and Instagram CDN hotlinks are not used in the page.

## Motion

GSAP 3.13.0 and ScrollTrigger load from pinned jsDelivr distribution files in `src/lib/load-gsap.ts`. If network access is unavailable, a native requestAnimationFrame fallback still produces actual independent depth and CSS supplies entrances. It does not impersonate GSAP; the fallback stops when real GSAP takes ownership. To run the GSAP engine itself offline, vendor the licensed distribution files and update the loader paths.

Motion owns book leaves, image selection and overlays; CSS owns small ambient illustrations. Layers/properties are separated, observers pause offscreen/hidden/overlay work, and reduced motion removes parallax, large turns and loops while retaining all content and controls. The story intentionally uses the permitted non-pinned form. Read `MOTION_REPORT.md` for actual mappings and verification limits.

## Reference

The v3 brief reports a saved Pinterest page titled “Parralax Effect Website Design [2020]”, a seven-second inspiration video and canonical Pin `415386765638087403`. That HTML/recording was not found locally; the canonical page was inaccessible and direct short-link navigation returned `ERR_NETWORK_ACCESS_DENIED`. The video was not watched. This is an original, brief-driven cinematic interpretation, not a reproduction of unseen frames. See `REFERENCE_AUDIT.md` and `REFERENCE_TO_IMPLEMENTATION.md`.

## Checks

Build, lint and TypeScript checks passed during implementation. The successful browser report covers widths 320, 360, 375, 390, 768, 1024, 1440 and 1920px; no horizontal overflow or broken local images; independent hero depth; showcase selection; book index/category jumps/back cover/input locking/keyboard/swipe/close/reopen; gallery/Escape/focus restoration; navigation and reduced motion. Actual desktop/mobile/full-page and book screenshots were inspected.

The dependency-free Chrome CDP runner serves the production build and uses a fresh temporary profile with an isolated `--no-sandbox` process on this restricted Windows host. Run a build first. `CHROME_BIN` selects another Chromium binary. `CHECK_DEV=1` adds uncached development-server Strict Mode startup; `INSPECT_REFERENCE=1` attempts the Pin and records evidence. Reports and captures go to `test-results/`. The runner also checks 720 CSS pixels at 2x scale as a 200% zoom-equivalent layout and 844×390 landscape.

The restricted browser could not load GSAP's CDN. Native parallax was measured and verified; actual GSAP network execution is not falsely reported as tested. Chrome startup can be intermittent here.

Final run: `npm run build`, `npm run lint`, `npm run typecheck`, and `CHECK_DEV=1 npm run test:browser` all passed. The browser run also passed the zoom-equivalent and landscape checks and uncached React Strict Mode startup. On Windows, set the flag with `$env:CHECK_DEV='1'` before running the browser command. All 11 explicit content post URLs were separately checked against the supplied CSV.
