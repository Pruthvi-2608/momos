MOMOS & STUFF — CINEMATIC PARALLAX RESTAURANT WEBSITE
Complete Design + Motion + Engineering Specification for Codex CLI
Document version: 3.0 / 30 October 2026
Project: Momos & Stuff — Sikkim-based food store
Output required: A fully implemented, functional, deployable React + TypeScript + Tailwind CSS website. NOT a Figma-like static screenshot, a wireframe, or a single hero mockup.
Priority: Excellent art direction, genuine restaurant photography, cinematic parallax, real interactive book-style menu, polished performance/accessibility and strong mobile execution.
Reference supplied: a saved Pinterest HTML file titled Parralax Effect Website Design [2020].html, from https://in.pinterest.com/pin/415386765638087403/, and the short URL https://pin.it/675C66RwP.
0. READ THIS FIRST — EXACT INSTRUCTIONS TO CODEX CLI
You are the lead creative frontend engineer and motion designer for this repository. Implement, do not merely explain. Read ALL of design.md before editing, then inspect the current repository and any local assets. Work in the existing project unless it is empty; do not destroy existing unrelated files. Deliver a real site and run checks.

This is the user's direction: Create a premium, visually distinctive, animated landing page for Momos & Stuff, a Sikkim-based momos store. The user likes the parallax effect shown in their Pinterest reference, wants a whole site with motion rather than a boring single page, requires real Instagram-scraped photos from their project folder, and wants the menu to feel like opening and turning pages of a physical book. The website must harmonize with the provided sky-blue cloud-shaped mascot logo.
0.1 The visual reference: VERIFIED vs NOT VERIFIED
The supplied HTML is a Pinterest page capture, not the source code of a restaurant website. Inspection of the page establishes:
- It is titled “Parralax Effect Website Design [2020]” (original Pin spelling) and links to the canonical Pinterest Pin above.
- It shows a seven-second video (0:07 / 0:07) described as “Top Parallax Effect Web Designs.” It is inspiration consisting of parallax web-design clips, not a definitive multi-section design file.
- The saved HTML contains video metadata and remote media URLs, but the video frames themselves were not accessible for frame-by-frame viewing in the preparation environment. Thus exact images, colors, typography, page sequence and animation timestamps cannot honestly be asserted from this file.
Consequently: The spec below is an original Momos & Stuff art direction inspired by cinematic depth, layered parallax, scaling, scroll-led reveals, and smooth transitions — not a claim to reproduce exact frames of an inaccessible video. If local access to the video or a separate screen recording exists, inspect it first and add REFERENCE_AUDIT.md with observed motion. Do not use unrelated search images and pretend they are the original reference.

Do NOT use Pinterest assets, videos, or somebody else's screenshots as production restaurant assets. Recreate ideas with original CSS/SVG treatments and authorized store photos.
0.2 Action plan (execute all phases without stopping at a plan)
1. Audit repository: list file tree, package manager, existing framework, images, logo, Instagram scrape ZIP/JSON/CSV/photos; preserve existing work. Identify conflicts before changes.
2. Write ASSET_AUDIT.md: local paths, counts, metadata, verified business facts, selected hero/menu/gallery images, unsupported claims, and any missing data. Do not fabricate assets or facts.
3. Prepare media: safely extract local archives and build optimized assets / content manifest. Preserve originals. Generate clean web-ready names and alt text. Identify an actual photo appropriate for the hero.
4. Implement design system: fonts, semantic tokens, Tailwind configuration / @theme according to installed Tailwind major version, shell layout, site navigation, reusable controls, image handling.
5. Implement all sections following the storyboard in §3, starting with a stunning parallax hero and ending with a clear local visit/contact CTA.
6. Build the interactive book menu: functional front cover/open/close, page turns, keyboard and touch interaction, verified content, mobile adaptation; see §6.
7. Motion pass: implement the animation specification in §7–8. Motion should be layered and intentional, not random movement every two seconds.
8. Quality pass: a11y, prefers-reduced-motion, responsive, Core Web Vitals, image optimization, no layout jumping, no dead buttons.
9. Verify: run install/build/typecheck/lint if scripts exist; use browser screenshots at 1440×900 and 390×844 if browser tooling is available; test menu and navigation; fix regressions.
10. Report: completed components, real image sources, tests run and results, genuine missing material, and any provisional placeholders clearly identified.
Do not ask the owner to repeat requirements already in this document. If information such as address, prices, Instagram URL, or exact recipes is not in the repository, keep the relevant UI honest and non-deceptive; do not make details up. An unavailable scrape must not block implementation of the overall site.
0.3 One prompt the owner can paste in Codex CLI
Read ./design.md completely and implement it as the source of truth.
This is an implementation task, not a design brainstorming task.
Inspect my existing project, the Momos & Stuff logo, the Pinterest HTML
reference and all Instagram scrape archives/photos in the project folder.
Use real images only. Create the full cinematic Sikkim-inspired React +
TypeScript + Tailwind site with GSAP parallax and the working 3D book menu.
Implement every section, mobile layout and motion/accessibility fallback.
Do not invent prices, business address, contact details or reviews.
Run typecheck, lint, build and relevant interactive tests, fix errors,
and summarize the exact file changes. Do not stop after creating a plan.
0.4 Repo instructions
design.md must be explicitly given to Codex using the prompt above. If useful, create AGENTS.md with a short pointer to this file; do not replace a pre-existing AGENTS.md. Follow other existing repo instructions.
1. BRAND DNA — WHAT THE WEBSITE MUST FEEL LIKE
1.1 Brand positioning
Brand name: Momos & Stuff (preserve the logo spelling and casing where possible).
Origin/story context: Sikkim, India. Do not claim an exact address, founding year, awards, certifications, ingredients or family heritage unless verified from supplied materials.
Mood in five words: warm, playful, elevated, atmospheric, handcrafted.
Visual metaphor: “A little cloud of comfort, born in the mountains.” This is a proposed creative line, not an asserted historical fact.
Experience: A small but special Himalayan food destination presented with the visual quality of a boutique creative studio website, not a generic delivery app, fast-food franchise or template.

The supplied 150×150 JPG logo depicts a smiling dumpling character inside an irregular soft sky-blue cloud shape, with a navy hand-drawn face and the words “Momos & Stuff.” Its friendly, non-corporate character is the anchor of the system. Keep the exact logo unredrawn; use clear space around it. Derive shapes and colors from the cloud/dumpling motif without filling the whole page with clouds.
1.2 Color system — grounded in uploaded logo
Colors below are design tokens sampled/approximated from the small compressed logo, with secondary creative shades for depth, text and contrast. Adjust for accessibility without breaking its identity.
Token	Hex	Role
--sky	#A7D9E9	Main brand powder blue; hero sky, section bands, chips
--sky-soft	#DDF1F5	Background tint, light cards, mountain mist
--ice	#F2FAFB	Quiet blue-tinted areas
--navy	#174B68	Primary text, menu book cover, buttons, headings
--navy-deep	#102F43	Footer, dark contrast scenes and deep book spine
--paper	#FFF9F0	Warm ivory page background, menu pages
--cream	#F7E5C8	Food accent, dumpling illustration, warm cards
--peach	#F2B99B	Restrained CTA details, tags, sauce/broth accents
--line	#C3DDE4	Dividers and barely visible card borders
--muted	#607987	Supporting text only after contrast checks


Primary theme: 60% warm off-white/cream, 25% pastel sky, 10% navy, 5% peach.
Never: fluorescent blue, vivid purple, harsh black blocks, high-saturation rainbow gradients, glassmorphism everywhere, cheap orange-red fast-food palettes, generic gradient cards on every section.
Use dark navy with warm ivory where necessary for visual drama and readability. Keep the logo supplied, not CSS-generated.
Suggested CSS tokens
:root {
  --color-sky: #A7D9E9;
  --color-sky-soft: #DDF1F5;
  --color-ice: #F2FAFB;
  --color-navy: #174B68;
  --color-navy-deep: #102F43;
  --color-paper: #FFF9F0;
  --color-cream: #F7E5C8;
  --color-peach: #F2B99B;
  --color-line: #C3DDE4;
  --radius-card: 1.5rem;
  --radius-pill: 999px;
  --shadow-soft: 0 20px 60px rgb(16 47 67 / 0.10);
}
1.3 Typography
- Display / editorial: Fraunces variable serif (or a similarly excellent licensed serif if unavailable). Large, playful-curved forms give a welcoming food editorial personality. Use selectively in hero, story and major statements.
- Body / navigation: DM Sans or Manrope, with fallback system-ui, sans-serif for crisp interface clarity.
- Micro labels: uppercase geometric sans, weight 600, tracking 0.12em–0.20em. Very small amounts of microcopy; not walls of letterspaced text.
- Desktop H1: responsive clamp(4.2rem, 9.2vw, 9.5rem) in hero; line height around 0.88–0.98; preserve legibility with photo.
- Section titles: clamp(2.9rem, 5vw, 5.6rem), controlled line lengths.
- Body: 16–18px desktop, 15–17px mobile; max prose width 55–65 characters.
- AVOID Poppins everywhere, thin pale text on cream, fake handwritten fonts on all sections, oversized text in every card.
1.4 Spacing, grid and shapes
- Desktop content max-width 1320px, outer gutter clamp(20px, 4vw, 80px).
- 12-column desktop grid with intentional asymmetry. Mobile 4-column conceptual grid, 20px page margin.
- Section padding around 104–160px desktop and 72–100px mobile, with visual overlap in parallax sections.
- Use large breathing spaces, editorial text blocks, occasional generous full-bleed imagery.
- Cloud edge, dumpling pleats, loose contour lines, wavy bottom dividers and layered hills are signature accents, NOT repetitive decorations on every card.
- Photos should look tactile and appetizing: steam, dumpling folds, sauce, handmade texture, environment when supplied. Prioritize actual restaurant imagery over artificial illustration.
2. CORE CREATIVE CONCEPT — “FROM THE HILLS TO YOUR PLATE”
This is a long-form single-page website with connected cinematic scenes. It must feel as if the visitor is moving through the landscape and closer to the food while scrolling. A highly art-directed food photograph occupies the visual spotlight; the background is a soft Himalayan-inspired scene with three independently moving visual layers. Sections transition with deliberate visual continuity (a mountain line becomes a ribbon; steam becomes a text mask; a paper sheet becomes the menu book).
Required recognizable signatures
1. Layered, scroll-driven hero: a sky, distant mountain silhouettes, nearer mountain shapes and huge, real momo food photo/transparent cutout (if an authentic cutout is feasible). They move at different rates creating true depth.
2. Oversized editorial text with elegant staggered reveal and short, playful microcopy.
3. Section-to-section visual continuity rather than isolated rectangular cards.
4. Real physical menu-book simulation, not cards merely called a menu.
5. Ambient food motion: gentle steam wisps, soft grain, tiny sauce-colored sparkle accents or illustration movements, and occasional floating cloud shapes, restrained to keep focus.
6. Real Instagram images curated into a refined organic gallery with image reveals and meaningful linking where verified.
The visitor journey
Loading moment → Sikkim-in-the-clouds hero → Editorial transition → Signature favourites → A little Sikkim story → Menu-book reveal → Instagram photo gallery → Visit/Contact → Footer

Use a clear information hierarchy despite the motion; users must find Menu and Visit immediately.
3. COMPLETE PAGE STORYBOARD — SCREEN BY SCREEN
Every section below must be implemented. Detailed motion numbers correspond to §7.
Scene 00 — Arrival / loading moment
Goal: A refined 0.5–1.0 second transition when content is actually ready. Show logo centered over pale blue/cream canvas while critical imagery becomes ready. Use a quick logo scale-in + opacity entrance followed by two halves/curtains of soft-blue layer receding to reveal the hero. Do not use a fake fixed 3-second loading screen or prevent users from interacting unnecessarily. If image is cached or reduced-motion is on, load immediately with simple fade or no transition.

Visuals: exact mascot logo at reasonable size (not huge), clean color blocks, maybe tiny text A LITTLE COMFORT FROM THE HILLS beneath. This text is creative editorial copy, not historical fact.

Motion: A01 + A02. Keep total short and non-blocking.
Scene 01 — Navbar (present from first frame)
Desktop: slim, elegant nav floating across the hero: logo/wordmark left, centered or right-aligned links Home, Our Story, Menu, Moments, Visit, plus a distinct pill Explore Menu. Use warm paper surface at first; can become a compact frosted light cream/navy-bordered sticky bar after scroll.

Mobile: logo left, burger button right; open a fullscreen or large off-canvas cream navigation with giant editorial link typography, close button, focus trap/return focus, body-scroll lock, keyboard support. Menu link must navigate to the actual book menu. Avoid a giant blocking nav on desktop.

Motion: Navbar entrance after loading; on scroll compress height by 10–15px and subtly add shadow. Link underline tracks pointer; CTA shifts arrow icon 4px. No giant elastic bounce.
Scene 02 — Hero: “A little cloud of comfort.”
This is the most important visual and must feel like a premium parallax project.

Desktop composition at 1440×900:
- Full-viewport hero (min-height: 100svh, enough padding under nav; allow content growth).
- Background: base powder-blue gradient that stays close to logo blue, warm soft mist centered behind food. Very subtle grain/noise at opacity <5%.
- 3 mountain layers made with lightweight original inline SVG or accessible decorative images: distant pastel pale-blue at the back, midground blue-grey at middle, foreground darker blue curves at bottom. Do not misrepresent a real photo as a specific Sikkim mountain.
- Large food image (~42–50% hero width) in right-middle / center-right, thoughtfully cropped, with a pale cream irregular circle/halo and soft real-world shadow. If a photo has a busy rectangular background, frame it beautifully as a tall rounded image; do not generate a fake transparent cutout and leave ragged edges.
- Left: small eyebrow SIKKIM-INSPIRED • MADE FOR MOMO LOVERS; giant display headline across 2–3 lines, e.g. A little cloud / of comfort.; short supporting line Good food. Mountain mood. Momo love.; two functioning CTAs Explore our menu → book section and Our story → story scene.
- Tiny vertical or bottom-right SCROLL TO DISCOVER with delicate arrow and progress indicator. Logo remains legible on light backdrop.
- Small decorative steam strokes above food (CSS/SVG, no fake food depiction), hand-drawn pleat squiggle, cloud accents behind not over text.
Choreography on first load (before user scrolls):
1. Sky appears with faint blur → sharp (0–0.45s).
2. Mountain layers reveal bottom-up, staggered 100ms (0.15–1.1s).
3. Real food image moves from y: 56, scale: .89, rotate: -4 to resting position (0.35–1.5s).
4. Eyebrow, H1 lines and body rise with mask/reveal using a stagger of 90ms; avoid each individual letter animating forever (0.45–1.7s).
5. CTAs and scroll hint enter last (1.25–1.9s).
6. Once settled, very gentle steam loop runs 4–7s, and a cloud drifts slowly; no perpetual giant food spinning.
On scroll: implement true parallax: sky very slow, far mountains at 8–12% of section travel, middle mountains 17–24%, hero food at 10–18%, foreground at 30–40%, hero headline at slight opposite/independent rate, all linked to scroll progress using GSAP ScrollTrigger scrub. Fade into the next scene before edges expose empty space. Keep effect contained so text never disappears before users have read it.

Mobile (390px): text first/over image arrangement, carefully art-directed; no unusably wide heading. Use one or two mountain layers with lower amplitude; max one subtle object parallax if device performance allows. CTAs remain visible without excessive scrolling.
Scene 03 — Running editorial ticker / shape morph transition
Visual: A warm-cream ribbon or slightly wavy navy/sky strip bridging hero and content. Text loops: MOMOS • GOOD MOOD • LITTLE BIT OF SIKKIM • interspersed with tiny dumpling/flower icons. The phrase is playful copy, not factual claim. Ribbon should create an intentional visual bridge from hero mountain shape.

Motion: one tasteful slow marquee (25–40 seconds loop) running at one consistent speed; on hover/focus it pauses. Optionally animate a 2–3px vertical wave with CSS SVG transform, not a giant moving banner. Maintain contrast and hide duplicate copies from screen readers.
Scene 04 — Signature favourites / editorial dish showcase
Goal: Show actual restaurant food before users reach the menu.

Layout: cream background with asymmetrical editorial split; left headline The little things / we crave. Right/center shows 3–5 large photographic items in sculptural shapes and different sizes, not identical cards. One selected image larger; supporting image stack beside it. Under each show real, verified item title and category if present in scrape/menu. If item names are absent, use neutral labels like From our kitchen / A closer look — do not invent precise filling flavours or prices.

Interactive: selecting a thumbnail updates featured image and contextual description with a soft crossfade; arrow buttons and keyboard controls. Can use content-driven scroll reveal and a subtle horizontal movement for images. Do not force users to play a carousel before seeing food.

Motion: gallery photo masks reveal with soft shape clip, image scale from 1.08→1, text enters after images, hover ~1.03 scale and 3–6px y, tiny decorative hand-drawn circle rotates slowly only around a focused item. Scroll-linked lateral translation not more than 80px.
Scene 05 — Brand origin / “A little Sikkim in every scroll”
Goal: Ground the brand geographically without invented heritage claims.

Layout: a deep navy chapter section with warm paper text and a beautiful blue layered mountain silhouette. Editorial two-column storytelling: short ROOTED IN SIKKIM label, large headline A taste of the hills., brief owner-approved restaurant story when available. Without verified story, use safe creative wording such as Inspired by the warmth, comfort and food culture of the hills. Do not claim “authentic secret family recipes”, “established in 1998”, “locally farmed”, or “organic” without actual evidence.

Scroll narrative: behind the headline, large contour-like hills drift at different depths; one supplied genuine interior/store photo appears within a rounded arch crop if available, otherwise food photograph; fine line art draws itself along a winding trail. The typography remains readable, even while scenery moves.

Motion: ScrollTrigger pins a scene briefly only on desktop and only if accessible, enough to let mountain layers move 1–1.5 viewport equivalents. As visitors scroll, foreground shape slides up, midground slides at half speed and photo enters; headline stays fixed briefly then releases. If pinning causes jumps or bugs, use non-pinned layered parallax. Mobile: no pinning, only elegant reveal.
Scene 06 — Transition into menu / “Turn a page. Find your favourite.”
Visual: warm ivory scene. Huge type aligned left, a drawn curved arrow pointing to a beautiful 3D book on right. The book itself should first appear closed, with navy cloth/leather-like matte cover (created via CSS, not actual leather texture image) and cream-foil style title MOMOS & STUFF / THE MENU, dumpling/cloud insignia, narrow decorative border, drop shadow and visible spine.

Scroll-trigger: the closed book approaches from below with perspective; as the section enters, it tips slightly toward camera. Click Open the menu to open it. Do not auto-flip pages repeatedly while a person is trying to read. Auto-opening the cover once on first entry is optional on desktop only if it does not prevent interaction; default to a clear user-triggered opening.

Motion: book cover appears with subtle light sweep, 3D rotateY/rotateX settling, surrounding hand-drawn accent line unfolds. Focus state prominent.
Scene 07 — The MAIN feature: real interactive menu-book
This is not optional. See §6 for complete book behavior/spec.

On desktop: an open two-page paper spread with central spine, thickness/shadows, slightly irregular page edges and small page numbers. One spread may show large real photo on left and category/item names/prices (only verified) on right. Navigation arrows beside the book, Previous, Next, accessible page status Pages 2–3 of 10, category jump controls above, Close menu control.

Menu categories must come from source data (or use generic structural placeholders without inventing actual inventory). Possible schema groups can include Momos, More bites, Drinks, etc. Treat category labels as an editable example, never a claim of current offerings.

On mobile: one page at a time. Smooth swipe left/right plus visible tap arrows, with readable text; no microscopic two-page spread. If book flip library cannot implement this reliably, use a mobile-specific CSS single-page stack with rotateY animation and true state navigation.

Practical conversion: user can find offerings, see prices when verified, and go to a real Instagram/WhatsApp/order URL only if verified from repo. A fake checkout flow is forbidden.
Scene 08 — Instagram moments: “From our little corner of the internet”
Goal: Let genuine store content establish trust.

Visual: soft sky-blue and off-white editorial gallery, 6–9 high-quality source images with real aspect ratios. A staggered but controlled masonry/collage arrangement: large portrait, landscape, square, small corner clip. Preserve recognizable food and avoid aggressive color editing.

Interaction: hover photo lifts 6–10px and reveals a subtle View on Instagram icon; open a verified post URL if available. If no URL, use an accessible local lightbox with next/prev controls rather than pretending it links to a post. If photo captions exist, optionally show a short clipped preview; avoid displaying personal data from scrape commenters/profiles.

Motion: scroll-entry stagger 100–140ms; image reveal via clipPath or masked scale; 2–3 items move at slightly different low parallax rates. No auto-scrolling carousel that steals touch interaction or hides content.
Scene 09 — Values / playful food manifesto (optional content, required design scene)
Layout: a bold, very short editorial phrase on warm paper: Good food. / Good company. / Very good mood. With three decorative original line-drawing icons — dumpling pleat, simple heart, cloud — and small service-minded microcopy that does not make factual claims.

Motion: words reveal in three steps as scrolled into view; illustrations draw their paths via SVG stroke-dashoffset; final word receives a small animated underline. Keep this section brief, ~60–80vh desktop; not filler copy or gigantic generic cards.
Scene 10 — Visit / find us / final CTA
Visual: large navy-to-powder-blue transition with a cream card or sweeping cloud-shaped footer top. Title Come for the momos. Stay for the mood. Clear contact or location information ONLY if present in files. Buttons Get directions, Instagram, Contact should appear only with verified URLs; otherwise a factual text Visit details coming soon and verified available CTA.

If exact address exists: render a small map link (external Google Maps with actual encoded address), opening hours verified from assets, and phone/WhatsApp with valid formats; do not imply open now unless live verified. If no details exist, do not fabricate a location or embed a random map of Sikkim.

Motion: CTA draws attention through one soft border expansion and icon translation on hover, and scroll-into-view title. Background drifting hill silhouette moves subtly; do not auto-pulse CTA endlessly.
Scene 11 — Footer
Style: deep navy or warm cream, warm typography, small real logo, minimal navigation, Instagram link when verified, brand wordmark with a playful baseline, optional Made with love for the hills artistic copy. Use current year dynamically; avoid fabricated copyright or business registration details. A quiet original mountain-horizon SVG settles into view as footer appears.
4. DETAILED RESPONSIVE ART DIRECTION
Viewport	Hero	Navigation	Signature section	Menu book	Motion
≥1440px desktop	Large split editorial text/food, 3+ layered mountains	Wide transparent→sticky	Asymmetric photo cluster	Two-page 3D spread up to ~1050px wide	Full tasteful scroll scrubbing and optional scene pin
1024–1439px	Balanced split, smaller type	Standard nav	Adapt image cluster	Two-page scaled proportionally	Preserve main parallax with smaller translations
768–1023px tablet	Stacked/offset art direction	Compact nav or drawer	2-column images	Two pages only if readable; else one-page	Avoid long pinned scroll scenes
≤767px mobile	Text-first hero + strong food photograph, controlled mountain shape	Accessible drawer	Swipe/stacked gallery	One readable page with swipe and arrows	Very low-intensity parallax, no heavy 3D/pinning
≤390px narrow	H1 wraps naturally, no clipped text/CTAs	44px min targets	Single column	Single-page layout	Prefer transforms with restrained distance


Must test: 320, 375, 390, 768, 1024, 1440, 1920px; portrait and landscape where practical. Respect 100svh mobile browser bars. Never cause accidental horizontal page scrolling. SVG backgrounds should have pointer-events:none, aria-hidden for decoration.
5. ASSETS & INSTAGRAM SCRAPE — EXACT LOCAL WORKFLOW
The Instagram scrape is claimed by the owner to be in their local project folder, not necessarily in this chat. Codex runs locally and should inspect it. The assistant preparing this document did not find that scrape among the accessible conversation uploads, so no menu items/photos/captions can be truthfully enumerated here.
5.1 Discover assets
Search project tree for:
- *.zip, *.tar, *.json, *.jsonl, *.csv, *.html, *.jpg, *.jpeg, *.png, *.webp, *.heic, *.mp4
- Typical names: instagram, posts, scrape, media, images, posts.json, captions.csv, profile, menu, momos, logo.
- Check user-provided logo first: the one with powder-blue cloud and smiling dumpling mascot. There may be a 150×150 JPG in the project; use the highest-quality verified logo version available.
Create an ASSET_AUDIT.md containing exact paths, source types, useful candidate images, verified facts, and asset availability. If local files are inaccessible, do NOT claim they were extracted. Prepare file naming/manifest so later drop-in images work.
5.2 Extract safely
- Never unpack archives over originals or outside a dedicated ./tmp/media-extract location. Reject archive entries with absolute paths or ../ traversal. Skip unusual symlinks/executables.
- Do not delete source ZIPs, originals, or downloaded Instagram JSON.
- Identify duplicate images by hash and group near duplicates manually or perceptually if helpful.
- For content images choose highest natural resolution. Reject tiny thumbnails, blurred collages, screenshots of Instagram UI, and memes unless those are the only relevant assets and explicitly useful.
- Map actual captions, post IDs and dates to media where present. Do not infer post URLs from random filenames. Do not put private scraped personal information into the website.
- Choose photos: hero (1), signature food (3–5), menu (as many verified items as possible), gallery (6–9), store/interior (optional).
- Do not invent product names from mere image appearance. Captions can contain hype/campaign language; use factual names only if supported and check ambiguous cases.
5.3 Prepare production media
- Copy selected, permitted photos to public/media/ (or import under src/assets/ if bundler convention requires); preserve source filenames in manifest, use clean stable public filenames.
- Use Sharp or other compatible image tooling to create WebP/AVIF versions and reasonable responsive sizes (480, 768, 1200, 1600 as appropriate). Save original aspect ratio, no stretching. Do not upscale small files.
- Hero candidate: aim ~120–300 KB WebP at visually acceptable quality if possible; larger if necessary to avoid visibly poor food image. Use srcSet/`sizes`, width/height, fetch priority for LCP hero. Lazy load below-fold images.
- Never accidentally optimize the logo until it loses sharpness; if tiny original only, render at a modest crisp size and use CSS text beside it as needed.
- Avoid remote requests to Instagram at every visitor load; use local preprocessed content, not a brittle unofficial live-scraping frontend.
- Rights: use store-owned or approved imagery from the folder; if rights unclear, flag it and do not publish illegally scraped third-party content.
5.4 Content schema and origin tracing
Generate src/data/content.ts or JSON with a clean structure, e.g.:
export type MediaAsset = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  sourceFile: string;
  instagramUrl?: string; // only verified links
};

export type MenuItem = {
  id: string;
  name: string;          // verified, never guessed
  category: string;      // verified or editorially neutral
  description?: string;  // only established facts or clearly marketing prose
  priceINR?: number;     // undefined when price not confirmed
  imageId?: string;
  sourceEvidence?: string;
};

export type RestaurantInfo = {
  displayName: 'Momos & Stuff';
  region: 'Sikkim';
  instagramUrl?: string;
  address?: string;
  mapsUrl?: string;
  hours?: string;
  phone?: string;
  whatsappUrl?: string;
};
When price is missing: do not show ₹0, ₹99 or guessed rates. Use Ask in store only if that call to action is supported, or omit price entirely. Content structure still works.

When no images exist: do not fetch random stock as if it belongs to the restaurant. Use designed gradient/collage shapes with clearly labeled editorial placeholders or locally permitted generic imagery identified as such, and report that authentic images must be supplied. The site must still compile.
6. THE INTERACTIVE BOOK MENU — MOST IMPORTANT FUNCTIONAL FEATURE
6.1 Visual design
- A realistic hardback restaurant menu with soft-rounded cover corners, 3D perspective, navy exterior, warm-cream interior paper, spine and page thickness.
- Cover typography: small serif THE MENU, larger MOMOS & STUFF, understated dumpling mascot/logo in center, small decorative flourishes. Do not recolor the original logo to unreadable navy-on-navy.
- Open book: 2 pages on desktop, 1 on mobile; individual page backgrounds pale ivory #FFF9F0 with subtle paper texture (CSS noise if appropriate), thin page border, slightly darker inner gutter; realistic depth from box shadows and independent flipping layer.
- Each page has intentional editorial hierarchy: top section label, dish category heading, numbered food items, verified prices, one large actual image or a carefully arranged collage. Avoid clutter, tiny fonts and excessive faux handwriting.
- Page numbers lower outer corners; current page status visible outside book.
- Top category tabs outside the book: accessible buttons; selecting one turns or jumps to the first corresponding page and updates the status.
6.2 Real behavior — mandatory
State model:
type BookState = {
  isOpen: boolean;
  spreadIndex: number;
  isTurning: boolean;
  direction: 'forward' | 'backward' | null;
};
Required actions: Open, Close, Next, Previous, Jump to category, keyboard ArrowRight/`ArrowLeft` while book is focused, click or tap arrows, and swipe left/right on touch. Disable incompatible overlapping turns while an animation runs; allow a clean end transition and never trap the user.
- Page flip should use transform-style: preserve-3d, a visible moving page, perspective 1400–2200px, rotation around inner spine, shadow that changes with rotation, underside that resembles the reverse page, and front/back content not mirrored.
- backface-visibility: hidden is essential. Use a tested library like react-pageflip only if compatible with existing React version and meets SSR/mobile requirements. If incompatible, implement a controlled CSS/GSAP 3D page turn. Do not add a broken dependency solely to claim a 3D book.
- Page turning duration: 700–1000ms desktop. Easing: power2.inOut or cubic-bezier(.4,0,.2,1). Make shadow peak near mid-flip and settle on resting spread. Page content must not unexpectedly change midway in a way that reveals the wrong side.
- Desktop book page count must be based on actual generated menu data. Add a cover, one intro/index spread, and actual categories; no fabricated “Best sellers” without source data.
- Avoid automatically flipping pages every 2 seconds. That makes the menu impossible to read.
- If source menu contains no items: show a beautifully designed authentic Menu details being updated page and an existing verified contact/social CTA, not made-up products.
6.3 Interaction and accessibility
- Use real <button> elements with accessible names Next menu page, Previous menu page, Open menu, Close menu. Visible focus rings and 44×44px minimum touch targets.
- Page status is aria-live="polite" but avoid announcing every animation frame.
- Do not expose hidden backside text to screen readers. Keep a semantic accessible DOM list of the current item(s), independent of visual 3D layers if necessary.
- Limit focus to interactive controls; do not create dozens of focusable purely decorative pages.
- Disable arrows at true edges and communicate visually and semantically.
- Test mouse, touch, keyboard and zoom at 200%.
- Deep link #menu must scroll to the book reliably and not trigger a confusing flip on arrival.
- With prefers-reduced-motion: reduce, switch to immediate page swap or ≤150ms fade; retain functional navigation.
6.4 Desktop and mobile implementations
- Desktop width about min(90vw, 1080px), spread aspect ratio visually around 1.55–1.85, maximum comfortable readable text. Book may sit over a cream oval shadow.
- Below around 820px if two-page spread becomes cramped, switch to a single-page book rather than scaling text tiny. No horizontal overflow; a focused one-page design with page border and index still looks book-like.
- Use swipe thresholds around 45–70px with horizontal-dominant gesture; do not hijack vertical page scroll. Ignore tiny accidental diagonal drags.
- Scroll-trigger reveal belongs to book container; page turn itself remains user-triggered, so real content is readable.
6.5 Example page content architecture (structure only)
1. Cover — MOMOS & STUFF / THE MENU.
2. Intro/index — one-line brand statement + verified categories.
3. Category spread — actual dishes / photo(s) / verified prices and optional descriptions.
4. Subsequent category spreads, if source supports them.
5. Back cover — verified social/contact links, and logo.
Do NOT hardcode invented dish names just to populate these pages.
7. ANIMATION DESIGN — FULL MOTION SYSTEM
7.1 Philosophy and “animation every 2 seconds”
The owner wants the site to feel alive all the way through. Interpret this as no long lifeless screen and frequent meaningful feedback during exploration, not a global setInterval making every element jump every 2 seconds. There should be tasteful ambient loops in hero/decor, and new story-driven motion every time someone scrolls into a scene, plus immediate feedback on interactions. Users who are reading static content must not be distracted by constant large movements.

Order of importance: interaction response > scroll storytelling > subtle ambient decoration. Always prioritize readability, comfort, battery life and performance.
Motion vocabulary
- Reveal: opacity 0→1 with translateY 18–48px; 0.65–1.0s; power3.out.
- Editorial split-text: mask/clipped line y=110%→0%; 0.9–1.2s; stagger 0.08–0.12s.
- Image reveal: wipe with clip-path or overflow mask; 0.95–1.4s; scale 1.08→1.
- Parallax: GSAP ScrollTrigger scrub ~0.8–1.5; independent near/far distances. Never animate layout properties on scroll.
- Float: 4–8px range over 4–7s; ease-in-out, alternate.
- Steam: curved line rise 25–50px, blurred, opacity 0→.55→0, 4–6s loop, varied start times; only 2–3 wisps.
- Hover: 160–300ms ease-out; 2–6px translation, very small scale or icon move; respect focus-visible.
- Menu page turn: 700–1000ms, perspective, easing and shadows.
- Marquee: 25–40s continuous movement, not 2s jarring repetition.
- Scene/section transitions: soft overlapping background transitions; no ubiquitous fade for everything.
7.2 Precise animation register
The Axx IDs below are the implementation and QA contract. Values are creative targets; tune them based on real imagery and measured performance. All scroll triggers should clean up correctly, and all animated elements must settle to readable states.
ID	Element / scene	Trigger	Keyframes / transformation	Timing / easing	Implementation
A01	Intro logo	First meaningful render	opacity 0→1; scale .94→1	0.5s power2.out	GSAP/CSS
A02	Loading panels	Hero ready	translateY 0→-100% (or short fade)	0.65s power3.inOut	GSAP; skip when cached/reduced
A03	Navbar	On hero entrance	y -24→0; opacity 0→1	0.65s power3.out	GSAP/Motion
A04	Nav compact state	ScrollY > threshold	padding/height reduces modestly; shadow adds	220ms ease	CSS with state
A05	Nav links	Hover/focus	underline draws left→right	220ms ease	CSS
A06	CTA arrow	Hover/focus	x 0→5px	180ms ease-out	CSS/Motion
A07	Hero sky	First load	blur 6→0; opacity 0→1	600ms	GSAP
A08	Hero far hills	First load	y 45→0; opacity 0→1	950ms, stagger .1	GSAP
A09	Hero photo	First load	y 56→0, scale .89→1, rotate -4→0	1.15s power3.out	GSAP
A10	Hero title lines	First load	masked y 110%→0	.9–1.1s, .1 stagger	Split by line not per-character
A11	Hero body & buttons	After H1	y 20→0, opacity 0→1	.6s stagger .1	GSAP
A12	Scroll hint arrow	Idle	y 0→5→0	2.4s loop	CSS, reduced disabled
A13	Hero far layer parallax	Scroll hero	y by ~8–12% travel	scrub:1.2	ScrollTrigger
A14	Hero middle hills	Scroll hero	y by ~17–24% travel	scrub:1	ScrollTrigger
A15	Hero foreground hills	Scroll hero	y by ~30–40% travel	scrub:0.8	ScrollTrigger
A16	Hero food depth	Scroll hero	y -30 to -90px; scale 1→1.07 max	scrub:1	ScrollTrigger; viewport-tuned
A17	Hero H1 exit	Scroll hero exit	y 0→-35px, opacity 1→0.1 near end	scrub:0.7	ScrollTrigger
A18	Steam wisps	Idle on visible hero	rise 25–50px, opacity 0→.55→0	4–6s repeated with offset	CSS/SVG or GSAP
A19	Decorative cloud drift	Idle visible	x -8→8px, y 0→-5px	7–11s alternate	CSS
A20	Transition marquee	In viewport	x 0→-50% seamless	30s linear infinite	CSS/Motion; pause hover
A21	Editorial title	Enter Scene 04	line reveal y 105%→0	900ms stagger .1	GSAP
A22	Signature main photo	Enter Scene 04	masked wipe, scale 1.08→1	1.15s power3.out	GSAP
A23	Signature thumbnails	Enter Scene 04	opacity 0→1; y 30→0	0.75s, stagger .12	GSAP
A24	Signature photo hover	Hover	scale 1→1.025, y -4	240ms ease	CSS
A25	Signature selection	Click	content crossfade & directional y ±10	300–450ms	Motion AnimatePresence
A26	Story heading	Enter Scene 05	split lines slide up	1.0s, stagger .1	GSAP
A27	Story mountains	Scroll Scene 05	three independent y transforms ±40–160px	scrub 1–1.3	ScrollTrigger
A28	Story photo	Scroll Scene 05	scale 1.12→1; soft reveal	1.0s	ScrollTrigger
A29	Story trail	Enter story	SVG stroke draw 0→100%	1.5s	GSAP draw via dash
A30	Book section title	Enter Scene 06	opacity + y with mask	0.95s	GSAP
A31	Book closed reveal	Enter Scene 06	rotateX 10→0; y 75→0; scale .9→1	1.2s power3.out	GSAP
A32	Book cover light sweep	Hover/open	narrow highlight across cover	0.65s	CSS gradient pseudo-element
A33	Book open	User click	cover rotateY 0→-160/180deg; paper exposes	0.8–1.1s	Pageflip library or controlled 3D
A34	Book next page	User click/swipe	3D rotateY plus moving crease shadow	.7–1.0s power2.inOut	Pageflip component
A35	Book previous page	User click/swipe	reverse of A34	.7–1.0s	Pageflip component
A36	Menu item highlight	Hover/focus	subtle underline/ink emphasis	180ms	CSS; not card wobble
A37	Gallery images	Enter Scene 08	staggered mask reveal, scale 1.06→1	.9s, .12 stagger	GSAP
A38	Gallery photo depth	Slow scroll	y ±20–50px	scrub:1	ScrollTrigger
A39	Gallery hover	Hover/focus	y -8px; shadow increase; overlay info appears	.22–.3s	CSS/Motion
A40	Image lightbox	User action	backdrop fade; image scale .97→1	.25–.4s	Motion with focus trap
A41	Manifesto words	Enter Scene 09	one line at a time opacity+y	0.8s, stagger .2	GSAP
A42	SVG doodles	Enter Scene 09	stroke-dashoffset draw	1.2–1.8s	CSS/GSAP
A43	CTA heading	Enter Scene 10	headline mask slide	0.9–1.1s	GSAP
A44	CTA background hills	Scroll scene	slow y depth ±30px	scrub 1.2	ScrollTrigger
A45	CTA button	Hover/focus	arrow +5px, outline subtle brighten	200ms	CSS
A46	Footer decorative horizon	Footer entering	soft y 20→0, opacity 0→1	.9s	GSAP
A47	Mobile menu overlay	Tap burger	overlay slide/clip into view, stagger links	.35–.6s	Motion; restore focus
A48	In-page anchor	Click nav	smooth movement within motion preference	native scroll / lenis optional	Browser/CSS


Do not claim “48 animations” unless all IDs are actually implemented; if a source-dependent section is suppressed, note which animation was not applicable in final implementation report. Ensure not all scroll elements animate with the same fade — use motion vocabulary to create actual cinematic range.
7.3 GSAP code architecture and lifecycle
Prefer GSAP + ScrollTrigger for scroll-tied motion and timelines; Motion for React for small state transitions such as nav/lightbox/active carousel; CSS keyframes for inexpensive ambient effects. Do not layer multiple animation systems on the same transform property of the same DOM element; wrap nested DOM nodes so one owns GSAP transform and the inner owns Motion if necessary.

Use gsap.context scoped to component root and call .revert() on cleanup. Register ScrollTrigger once. Avoid registering dozens of observers per item and memory-leaking event listeners. Use matchMedia desktop/mobile and reduced-motion conditions. Ref-refresh after all critical images and fonts, but don't run refresh on every paint.

Example implementation blueprint (adapt to actual code):
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroParallax() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.to('[data-layer="far"]', {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1.2 },
        });
        gsap.to('[data-layer="mid"]', {
          yPercent: 22,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 1 },
        });
        gsap.to('[data-layer="near"]', {
          yPercent: 35,
          ease: 'none',
          scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: 0.8 },
        });
      });
      return () => mm.revert();
    }, root);
    return () => ctx.revert();
  }, []);

  return <section ref={root} id="home">{/* real layered hero DOM */}</section>;
}
Important: yPercent is based on the individual element's height; tune perceived travel visually and prevent transformed child layers from exposing background seams. Do not blindly paste values if visual behavior is wrong. Some effects may work better with pixel-based interpolation. CSS overflow: clip is useful for scene bounds.
7.4 Scroll smoothness / inertia
- Native scroll is acceptable and most reliable. An optional smooth-scrolling solution (e.g. Lenis) may be added if compatible, accessible and tested with ScrollTrigger; avoid if it introduces browser history/anchor glitches.
- Do not implement scroll-jacking or force-scroll users through every section. Users must be able to scroll backward naturally, click anchors and use keyboard navigation.
- Pinned sequences are short, not several screens of content trapped behind an animation.
- All scroll animations on first load must set meaningful initial state and recover if scripts fail. Content must not remain invisible forever due to untriggered observers.
7.5 CSS ambient example
@keyframes steam-rise {
  0%   { transform: translate3d(0, 8px, 0) scale(.86); opacity: 0; }
  20%  { opacity: .48; }
  68%  { opacity: .30; }
  100% { transform: translate3d(12px, -45px, 0) scale(1.2); opacity: 0; }
}
@keyframes gentle-cloud {
  0%, 100% { transform: translate3d(-7px, 2px, 0); }
  50%      { transform: translate3d(9px, -5px, 0); }
}
.steam-wisp { animation: steam-rise 5.2s ease-out infinite; }
.cloud-drift { animation: gentle-cloud 8s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .steam-wisp, .cloud-drift { animation: none !important; }
}
Only animate decorative SVG layers/pseudo-elements. Real content and clickable controls must not become continually displaced.
8. MOTION SAFETY, QUALITY AND PERFORMANCE BUDGET
Animation isn't quality by itself. Add movement only where it guides reading, demonstrates interaction or conveys depth. Many continuously moving large elements will look amateurish and can cause nausea or poor LCP.
- prefers-reduced-motion: reduce: no complex parallax, 3D flips, unbounded marquees or autonomous steam motion; use immediate state transitions and stable scenes. Keep buttons, book navigation, content access fully functional.
- Prefer GPU-composited transform and opacity; avoid animating top, left, width, height, filter: blur(40px) on large raster photos continuously.
- Limit active ambient loops to few decorative objects within visible section; pause when offscreen, hidden tab or menu overlay is open where practical.
- Avoid will-change on every image/section; apply only to actively animated elements and remove when no longer necessary.
- Limit fixed, full-viewport backdrops and expensive blend modes; no full-screen particles/canvas unless truly necessary (not requested).
- Keep hero LCP photo optimized and not blocked by a heavy intro. Avoid massive animation bundle growth for tiny effects.
- Aim at least perceived 60fps on modern desktop and smooth enough on mobile; degrade gracefully on slower devices.
- Never hijack native wheel / touchmove globally; book swipe handlers should ignore vertical scrolling.
- Avoid superfluous audio, autoplay videos, flashing effects and constant CTA pulsing.
9. TECHNOLOGY STACK & FILE ORGANIZATION
9.1 Preferred stack
- Vite + React + TypeScript unless the existing repository already uses Next.js or another compatible React build. Preserve an existing framework and adapt rather than replacing.
- Tailwind CSS — detect installed v3 vs v4 and configure appropriately; don't mix incompatible setup instructions.
- GSAP + ScrollTrigger — main scroll-linked parallax, entrance sequences and book interactions as needed.
- Motion for React (motion package / motion/react) — state transitions, nav drawer, lightbox, carousel.
- Lucide React — tasteful icons, sparingly used.
- react-pageflip optional only if React version/library compatibility is confirmed; otherwise implement 3D book directly.
- Sharp or equivalent development-time image optimization tool as available.
- Playwright for visual/browser checks if installed or installable without disrupting project.
Install only dependencies that are necessary. Check current API versions using local documentation/package versions. Never force-install with --legacy-peer-deps merely to silence conflicts; choose a working implementation.
9.2 Suggested directory structure (adjust to existing repo)
project-root/
├── design.md                         # THIS contract
├── AGENTS.md                         # optional short pointer; preserve if existing
├── ASSET_AUDIT.md                    # generated local asset evidence
├── REFERENCE_AUDIT.md                # actual reference visibility status
├── README.md                         # dev commands and source notes
├── public/
│   ├── branding/momos-logo.jpg       # supplied actual logo
│   └── media/                       # approved optimized Instagram imagery
├── scripts/
│   └── prepare-media.(mjs|ts|py)     # optional safe preprocessing
├── src/
│   ├── app/App.tsx
│   ├── components/
│   │   ├── ui/PrimaryButton.tsx
│   │   ├── ui/SectionLabel.tsx
│   │   ├── ui/SplitReveal.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileNav.tsx
│   │   ├── Loader.tsx
│   │   ├── HeroParallax.tsx
│   │   ├── MountainLayers.tsx
│   │   ├── SteamWisps.tsx
│   │   ├── EditorialMarquee.tsx
│   │   ├── SignatureShowcase.tsx
│   │   ├── SikkimStory.tsx
│   │   ├── MenuIntro.tsx
│   │   ├── menu/MenuBook.tsx
│   │   ├── menu/MenuCover.tsx
│   │   ├── menu/MenuPage.tsx
│   │   ├── menu/MenuControls.tsx
│   │   ├── InstagramGallery.tsx
│   │   ├── PhotoLightbox.tsx
│   │   ├── Manifesto.tsx
│   │   ├── VisitSection.tsx
│   │   └── Footer.tsx
│   ├── data/content.ts
│   ├── hooks/usePrefersReducedMotion.ts
│   ├── hooks/useGsapSection.ts
│   ├── styles/globals.css
│   └── main.tsx
└── tests/                            # if test stack supported
    ├── menu.spec.ts
    └── responsive.spec.ts
Avoid a monolithic 2000-line App.tsx. Split state, data, animation lifecycle and presentational structure into maintainable components. Avoid importing photos dynamically from filesystem at runtime in the browser.
9.3 Semantic content and SEO
- Use one real H1 in hero. Hierarchical headings for scenes. Landmarks <header>, <main>, <nav>, <footer>.
- Set <title> to Momos & Stuff | Sikkim-Inspired Comfort Food or another fact-safe title; meta description should be warm and truthful. Use appropriate OG image from owned photos if available.
- Images have meaningful alt text; purely decorative mountains/clouds use alt="" or aria-hidden="true".
- Buttons remain button, links remain anchor elements, and all destination anchors exist (#menu, #story, #moments, #visit).
- No fake five-star ratings/testimonials, fabricated opening hours, clickbait copy, fake ordering checkout, or inaccessible navigational placeholders.
- Fonts load with display:swap and robust fallback sizing to reduce layout shifting.
10. CONTENT COPY & MICRO-INTERACTION RULES
The following is creative placeholder copy approved as design direction, not sourced evidence of menu or store history. Keep or refine according to verified brand tone.
Placement	Sample editorial copy
Hero eyebrow	SIKKIM-INSPIRED • MOMO-LOVING
Hero H1	A little cloud of comfort.
Hero subline	Good food. Mountain mood. Momo love.
Hero CTA 1	Explore our menu
Hero CTA 2	Our story
Marquee	MOMOS • GOOD MOOD • A LITTLE BIT OF SIKKIM •
Signature header	The little things we crave.
Story header	A taste of the hills.
Menu reveal	Turn a page. Find your favourite.
Gallery header	Little moments, big cravings.
Manifesto	Good food. Good company. Very good mood.
Final CTA	Come for the momos. Stay for the mood.
Footer subline	A little comfort from the hills.


No arbitrary emojis everywhere, no lorem ipsum in final builds, no incorrect Sikkim place names or false statements of local sourcing. Actual menu captions/copy from Instagram can replace editorial descriptions, subject to verification and length editing.
11. DETAILED INTERACTION CONTRACT
User action	Expected behavior	Must not happen
Click Explore menu	Scroll to menu section; visible book controls, readable content	Broken # link or auto-flipping out of control
Click logo	Scroll to top smoothly (or instant in reduced motion)	Full page reload unless necessary
Click nav item	Go to exact scene; account for sticky header offset	Land under header / wrong section
Open mobile nav	Reveal navigable overlay, lock body appropriately	Trap keyboard / impossible close
Close mobile nav	Restore previous focus and scroll state	Leave scroll locked
Click signature image	Feature selected real photo and text	Image source mismatch or fabricated dish
Open menu book	Smooth visible 3D cover transition or reduced fallback	Decorative fake book with no contents
Flip menu page	Update real category/items and page numbers	Show mirrored text or jump to random spread
Swipe menu on mobile	Horizontal-dominant gesture changes one page	Block page's vertical scrolling
Open gallery item	Lightbox (if no verified post link) or verified Instagram post	Dead or guessed external URL
Press Escape	Close modal/lightbox/menu overlay when appropriate	Lose focus or trap navigation
Enable reduced motion	Keep fully usable page with little/no motion	Hide content or disable menu controls


Use scroll-margin-top for anchored sections. Hide layout-only duplicate marquees from AT. Use meaningful button focus outlines and respect prefers-contrast where possible.
12. ACCEPTANCE CHECKLIST — CODEX MUST VERIFY
A. Reference and source integrity
- [ ] Read and acknowledge actual Pinterest HTML is a video page, not a website template.
- [ ] REFERENCE_AUDIT.md accurately states whether any frames were viewable; no fabricated frame analysis.
- [ ] Original logo visibly used and colors harmonized with it.
- [ ] Instagram scrape search documented; images extracted and mapped when present.
- [ ] No invented products, prices, business address, reviews, hours, social links or dietary claims.
B. Visual presentation
- [ ] Hero visibly has depth: background, at least two mountain planes, foreground food/photographic focus and distinct parallax rates on desktop.
- [ ] Typography has an editorial display style and readable body style; not template-default.
- [ ] Every required scene from §3 exists and transitions coherently to the next.
- [ ] Site uses actual restaurant photography where available, with attractive but natural color grading.
- [ ] No generic repeated three-column grid used for every section.
- [ ] At 1440px hero looks deliberately composed, not empty or overstuffed.
- [ ] At 390px text and buttons are readable without sideways scrolling.
C. Functional interactivity
- [ ] All nav/CTA controls go to real targets.
- [ ] Fully interactive menu cover, next/previous, category jumps, controls, edge disabling, touch and keyboard.
- [ ] Page numbers and content remain synchronized across page turns.
- [ ] Gallery controls work and destination links are verified.
- [ ] Mobile navigation opens/closes and restores focus correctly.
D. Motion/accessibility
- [ ] Every scene has a deliberate transition or interaction, not identical generic fade-only animation.
- [ ] Main hero has smooth scroll-linked depth; no harsh jitters.
- [ ] Steam/decorative loops are subtle and pause/disable appropriately.
- [ ] prefers-reduced-motion substantially disables parallax/3D/repeating animation without removing functionality.
- [ ] No keyboard traps, broken Escape behavior, hidden focus, motion-triggered unreadable content or WCAG-contrast failures.
E. Engineering
- [ ] No console errors, broken image URLs, missing imports, dependency incompatibility or React key warnings.
- [ ] Production build succeeds using existing package scripts.
- [ ] Typecheck and lint succeed if present; if no scripts, explain rather than falsely claiming they ran.
- [ ] Images below fold lazy load; hero uses optimized priority image; layout shifts are controlled by dimensions/aspect ratios.
- [ ] Test screenshots: 1440×900 and 390×844 when tooling available; inspect and fix actual issues.
- [ ] No permanent full-screen preloader or overly aggressive scroll pinning.
- [ ] README documents run/build commands and where to replace/add menu/source data.
13. BUILD AND VALIDATION EXECUTION ORDER
Before installing anything: read package.json, lockfile and existing code to avoid clobbering the project. Run commands supported by the actual repo, with package manager matched to lockfile (npm, pnpm, yarn, etc.).
Suggested development loop
# Only in an appropriate Node project, using the repository's package manager:
npm install
npm run dev
npm run build

# If defined by package.json:
npm run lint
npm run typecheck
npm run test
Do not fabricate results from unrun commands. Check the local browser if available for actual appearance. Page flip controls should be tested specifically in desktop/touch viewport. Read terminal/compiler output and fix errors rather than declaring completion after generating files.
Quality review passes
Pass 1 — source: verify logo, media paths and genuine copy.
Pass 2 — design: compare overall scene rhythm, whitespace, color balance, image scaling, type contrast and typography at 1440×900.
Pass 3 — motion: inspect scroll into/through/out of each section, check no stacking/unwanted sticky overlap, test reversing scroll, check hover and reduced-motion.
Pass 4 — interaction: book page flips, category jump, mobile swipe, nav, overlays, keyboard.
Pass 5 — responsive: 390×844 and 768/1024; no clipped hero/flipbook or too-small CTAs.
Pass 6 — production: run build, check no broken media, make final README and report.
Success definition
A viewer should land on a site and immediately understand “This is a charming, high-quality Momos & Stuff experience with Sikkim personality.” They should notice polished, layered movement as they scroll, see genuine food imagery, feel the book-menu interaction is physical and functional, and quickly find the information needed to visit or inquire. A 2-minute demo should show both the cinematic parallax hero and the real page-turning menu, not just generic scroll fades.
14. FINAL CODEX HANDOFF FORMAT
After implementation, Codex should respond with:
1. Implemented: one short paragraph listing actual completed scenes and interactive features.
2. Assets: source folders inspected, images used and anything missing.
3. Reference: whether the 7-second Pinterest video was actually watched, and if not, explain that this is a brief-driven parallax interpretation.
4. Verification: the exact command(s) run and whether each passed; viewport screenshots and interactive tests if available.
5. How to run: exact dev/build commands, and clear next step to add missing verified menu/address/source content.
Definition of done: An actual, accessible, performant React/Tailwind landing page fulfilling the complete storyboard, with authentic imagery wherever supplied and a working book-style menu. DO NOT STOP AT A MOCKUP.