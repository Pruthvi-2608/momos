# Reference audit — cinematic brief v3

Date: 2026-10-30. Status: **REFERENCE_VIDEO_FRAMES_UNVERIFIED** / **PINTEREST_REFERENCE_UNVERIFIED**.

The current `design.md` supersedes the earlier request to reproduce an unknown static Pin. It reports a saved Pinterest HTML page titled “Parralax Effect Website Design [2020]”, canonical URL https://in.pinterest.com/pin/415386765638087403/, and a seven-second “Top Parallax Effect Web Designs” video. These are metadata reported by the supplied brief, not independently watched video frames.

Project searches found no owner-identified saved Pinterest HTML or parallax recording; only the application's own `index.html` was present among matching project HTML files. The restaurant contact sheet is not reference evidence.

The canonical page was opened with the available web tool and was inaccessible. Earlier HTTPS/HTTP short-link attempts were also inaccessible. Direct Chrome navigation to https://pin.it/675C66RwP returned `net::ERR_NETWORK_ACCESS_DENIED`; the evidence is retained in `test-results/reference-browser-evidence.json`. No login, account gate or network restriction was bypassed, and no unrelated Pin was substituted.

Actually watched: **No**. Legitimate reference frame captures: **none**. Exact video imagery, palette, typography, sequence, mobile layout and timestamps: **unknown**. The saved HTML described in the brief is not assumed to be source code for a complete restaurant website.

The website therefore follows the original v3 storyboard: three landscape planes, oversized editorial type, real food photography, connected cream/navy scenes, restrained scroll depth, interactive menu and mobile-safe motion. These are the written art direction, not observations about inaccessible frames. No Pinterest artwork/video is used as a production restaurant asset.

Actual local implementation screenshots and interaction reports are retained under `test-results/`, including 1440×900 desktop and 390×844 mobile. They establish the local implementation, not frame-for-frame Pinterest fidelity. `REFERENCE_TO_IMPLEMENTATION.md` maps the written cinematic direction to actual code.
