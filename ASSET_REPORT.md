# Source and asset report

## Discovery

The requested project initially contained `design.md`, `logo.jpg` and `dataset_instagram-scraper_2026-10-27_05-42-47-702.csv`. There was no existing app or Git repository to overwrite. The 150 × 150 supplied logo was visually inspected and copied unchanged to `public/assets/brand/logo.jpg`.

The CSV contains 21 posts. The safe extraction script resolved 29 unique per-post main/child image references. All 29 remote download attempts failed with Windows socket access error 10013 under the environment's outbound network restriction. The original CSV was preserved. Unneeded comments, profile pictures and raw CDN URLs are not shipped in the public content manifest.

A matching sibling project, `../Momos and stuff/`, contains the same CSV/post codes and previously downloaded restaurant media. Its `public/assets` contains 37 JPEG-named files and 18 reels. A contact sheet was generated and visually inspected to select authentic food, drinks, people and café photos. Four JPEG-named source files failed System.Drawing decoding during the audit and were excluded. Posters with predominantly promotional text were also excluded. No videos were copied or auto-played.

## Selected photographs

All paths below are relative to `../Momos and stuff/public/assets`. The public output is `public/assets/instagram/{id}-{480,960,1600}.jpg`.

| ID | Original file | Source dimensions | Use |
| --- | --- | --- | --- |
| momos | food/post_11_DQPayD4jMSw_main.jpg | 720 × 1280 | Hero, featured food |
| korean | food/post_6_carousel_1.jpg | 1254 × 1254 | Featured, menu, gallery |
| matcha | food/post_17_DYw8PC5M2be_main.jpg | 720 × 1280 | Featured drinks, menu, gallery |
| table | food/post_2_carousel_2.jpg | 1440 × 1920 | Gallery, visit panel |
| cafe | food/post_8_DeCDnbTCxvw_main.jpg | 720 × 1280 | Story, gallery |
| friends | food/post_0_carousel_1.jpg | 2028 × 2700 | Gallery |
| date | food/post_9_Debz-5WocUG_main.jpg | 720 × 1280 | Photo-story menu page, gallery |
| storefront | gallery/post_19_DdQTo9DtGsI_main.jpg | 640 × 1136 | Gallery |
| opening | gallery/post_5_DdRDMJrhfH4_main.jpg | 1215 × 2160 | Gallery |
| together | food/post_0_carousel_3.jpg | 2028 × 2700 | Story inset |

10 photographs, 30 generated JPEG variants, about 5.65 MB including provenance. No image was upscaled. Some target-named variants share the original width when that width is smaller than the requested target; `srcSet` declares their actual widths and avoids duplicate width descriptors. The supplied hero's resolution is 720 px wide; a higher-resolution food original would improve sharpness on high-density desktops. Original image color and aspect ratios were retained, with editorial object-fit crops in the UI.

`provenance.json` includes original paths, dimensions and SHA-256 hashes. The ten selected hashes are distinct. Original sibling media and source exports were not modified. The current page references nine of the ten selected photographs; `together` remains available in the typed manifest for content editing.

## Supported content

| Claim | Evidence |
| --- | --- |
| Instagram account `momosandstuff_` | Brand owner username in source posts and explicit mentions |
| Sikkim connection; Silvassa and Vapi | Brand caption on `DcbalGGsUu8`: “From Sikkim to Silvassa … Now, Sikkim to Vapi!” |
| Gunjan Road, Khau Gali, Vapi | Explicit brand location in `DdHS029IAt5` |
| Korean Spicy Momo; crispy, tangy, spicy sauce, sesame | Brand caption on `DeEQX2jDsU5` |
| Paneer Jhol Momos and Ube Latte | Café-date collaborator caption on `Debz-5WocUG` |
| BlueTea Matcha | Brand caption on `DYw8PC5M2be` |
| Chocolate strawberry seasonal launch | Brand Christmas caption on `DShqh29jBhH` |

The menu is explicitly presented as an Instagram discovery selection; current prices and availability must be confirmed with the café. There is no supplied complete menu, price list, reliable current opening schedule, phone number, ordering link or exact Silvassa street address. The Vapi directions link uses the caption-supported address in a Google Maps search; it is not represented as a verified place listing. Instagram is the verified social contact route. No ratings, testimonials or founder history were invented.

## Verification limits

The v3 production build, lint and TypeScript checks passed; the dev server returned HTTP 200. The final Chrome run passed at 320, 360, 375, 390, 768, 1024, 1440 and 1920px, plus a 200% zoom-equivalent layout and 844×390 landscape. It verified actual independent parallax, showcase selection, book index/category jumps/back cover/page fit/input locking/swipe/keyboard/close/reopen, gallery/focus restoration, mobile navigation, reduced motion and uncached dev-server React Strict Mode startup. There were no JavaScript exceptions or failed local assets. Actual desktop/tablet/mobile/full-page and book captures were saved and inspected. All 11 explicit post links in the content manifest matched the CSV. See `ASSET_AUDIT.md` for the v3 audit and `test-results/report.json` for results. Reference video frames were unavailable. GSAP's pinned CDN scripts were unavailable here; the functional native depth fallback was measured and verified instead. Actual GSAP network execution is not claimed as tested.
