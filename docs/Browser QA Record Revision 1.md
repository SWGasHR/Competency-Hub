# Browser QA record

Checked the built static hub in Chromium through the managed preview. The home page uses the exact original HR logo, Inter font, pipeline motif and navy/cyan/yellow palette. Reviews appear last in navigation and as the bottom home feature. The preserved review opens in a focused full-window workspace; its return link takes the user back to the hub without reloading the review.

## Observed checks

| Check | Result |
| --- | --- |
| Desktop home, library, individual guide, development plan, leader guidance and resources | Visually inspected; hierarchy, spacing and brand styling preserved |
| Full model / group display | 10 cards organized into five core, three People Leader and two Senior Leader additions |
| Role filters | NXS/NXT/Exempt show 5; People Leader 8; Senior Leader 10; chosen role carries into guide |
| Search | “communication” returns Communicates Effectively; zero-results/reset and escaped search covered by automated suite |
| Guide role selection | NXT wording shown from current Exempt & NXT source; NXS and Senior Leader checks verified separately |
| Development draft | Action/support entered in a guide remain after navigating to My development |
| Development download | Browser action succeeded and displayed the downloaded confirmation; printable HTML copy includes escaped entries |
| Review entry | Opens original styled review, fictional roster, current anchors and review controls |
| Review return/resume | Selected 3/4 on Cameron Brooks's first behavior; returned to hub; reopened review; rating and active review retained |
| Complete review | NXT 20 ratings, five comments, required summary, calculated 3/4, override to4, reset to3, completed-review list and Oracle checklist verified by independent reviewer |
| Phone 390px container | Home, menu, catalog and review inspected; review document client/scroll width both 380px; no horizontal overflow |
| Tablet 768px container | Senior Leader guide inspected; responsive menu, heading, role selector and behaviors fit |
| Short laptop 1024×650 container | Main document client/scroll width both 1009px; sidebar 514px tall with internal scroll (795px content) |
| Keyboard | Skip link preserves current route and focuses main; focus outlines and native labeled controls; mobile menu Escape behavior implemented |
| Motion | Immediate navigation, short press feedback, no ambient animation, reduced-motion and keyboard motion suppression in CSS |
| Data integrity | Dependency-free automated checks pass; source behavior/anchor agreement verified between hub and review/export |

## Corrections made during review

- Normalized raw competency group keys so all ten competencies display.
- Carried role selection from catalog into the selected guide.
- Reflowed resource cards and section headings to eliminate crowded multi-column text.
- Added scrollable short-screen navigation and an accessible name to the compact help link.
- Fixed skip-link handling, page-heading focus and the contribution-stage source section reference.
- Kept the review iframe mounted throughout navigation, then presented it at full-window size to avoid duplicate visible sidebars.
- Arranged the phone 5/3/2 summary into three stable columns.

## Verification limits

Phone/tablet/short-laptop checks used real nested browser viewport containers, not physical devices. Native touch, screen-reader speech, 200% browser zoom and cross-browser compatibility were not directly tested. No production authentication, shared saving, or Oracle integration is implemented or claimed.

The native Word-download event timed out in the browser automation tool. The button generated the expected blob link; the actual DOCX generator was independently tested for NXS, NXT, People Leader and Senior Leader, including ZIP/OOXML structure, required content, escaping and override values. Receipt in a user's Downloads folder remains a manual check.

The two additional Korn Ferry files remain pending. Final rating labels and other draft business rules remain content-owner decisions.
