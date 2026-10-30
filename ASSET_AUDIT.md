# Asset audit — cinematic brief v3

Audited 2026-10-30. Existing prepared assets were reused; original files were preserved.

| Source | Exact path | Findings |
| --- | --- | --- |
| Brand | `public/assets/brand/logo.jpg` | Actual supplied 150×150 cloud/dumpling logo, unchanged. |
| Metadata | `dataset_instagram-scraper_2026-10-27_05-42-47-702.csv` | 21 caption/post records, safely parsed as CSV. |
| Original media | `../Momos and stuff/public/assets/food/` and `gallery/` | Matching downloaded post IDs. Earlier contact-sheet audit found 37 JPEG-named files; four failed decoding and were excluded. Originals were not changed. |
| Prepared media | `public/assets/instagram/` | 10 selected photographs, 30 responsive JPEGs, 10 distinct original SHA-256 hashes; no upscaling. |
| Provenance | `public/assets/instagram/provenance.json` | Original relative paths, dimensions and hashes. |
| Typed content | `src/data/content.ts` | Photo IDs/dimensions/source filenames, verified post URLs, caption-supported dishes and business details. |
| Remote attempts | `media-source/records.json` | Earlier 29 public image download attempts were blocked; matching local originals supplied production media instead. |
| Reference HTML/video | Project HTML/MP4/archive search excluding dependencies/build output | Only the application's `index.html` was found. The saved Pinterest HTML and seven-second recording described in the brief were not found. |

Selections: `momos` for hero and menu intro; `momos`, `korean`, `matcha` for the selectable showcase; `cafe`, `together` for story; category photos plus `friends` for the book; eight real moments in the gallery; `table` for the visit scene. All ten selected photographs are used. The gallery lightbox links to the original verified Instagram post.

Responsive targets are 480/960/1600, capped at original dimensions. `srcSet` uses actual widths and removes duplicate descriptors. The hero source is 720×1280, about 217KB in its larger generated variant; it is not upscaled into fake high resolution. Below-fold images are lazy, the hero is eager/high priority. The exact logo is rendered at modest size. No Pinterest/stock art or Instagram CDN hotlinks are used as production photography.

Supported facts: Sikkim connection and expansion to Silvassa/Vapi (`DcbalGGsUu8`); Vapi address at Gunjan Road, Khau Gali (`DdHS029IAt5`); account `momosandstuff_`; Korean Spicy Momo and its description (`DeEQX2jDsU5`); Paneer Jhol Momos and Ube Latte (`Debz-5WocUG`); BlueTea Matcha (`DYw8PC5M2be`); seasonal chocolate-strawberry launch (`DShqh29jBhH`).

Missing: complete current menu/prices, permanent hours, phone/WhatsApp, ordering URL, exact Silvassa street address, founder/recipe history, awards, dietary certifications and reviews. None were invented. Navratri-specific hours are not represented as permanent opening hours. The book says it is an Instagram discovery selection and asks visitors to confirm availability/prices. Dessert availability is explicitly seasonal.

The maps button searches the caption-supported Vapi address. Scraped comments, tokens and unrelated personal data are not included in the public manifest. See `ASSET_REPORT.md` for the full filename/dimension table; use `scripts/prepare-local-assets.ps1` to regenerate copies separately from originals.
