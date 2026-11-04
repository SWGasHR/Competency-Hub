# Independent design review — Revision 1

Reviewed the competency shell, shared styles, guide/development interactions, and resource pages against the supplied Revision 8 HTML and Emil Kowalski’s design engineering guidance. This review does not replace the separate full review-workspace regression checks.

## Findings and completed corrections

| Before | After | Why |
| --- | --- | --- |
| A role-filtered NXS catalog opens Action Oriented with Exempt selected. Confirmed in the browser. | Synchronize the selected catalog role and role-route parameter with the guide role. | The employee should see the behaviors for the role they just selected. Locations: `dist/Hub Application Revision 1.js`, `pageForRoute()` and the `catalog-role` change handler. |
| Resource links lay out the title, description, and “Opens in a new tab” in three narrow columns inside each card. Confirmed in desktop screenshot. | Stack resource-card content vertically, align left, and render descriptions at normal body weight. | Short titles and descriptions should scan naturally. Location: `dist/Hub Styles Revision 1.css`, `.resource-link`. |
| Resource section headings put the eyebrow, title, and description beside each other with no gap above the section. Confirmed in desktop screenshot. | Match the main application’s heading wrapper and add consistent section spacing. | The heading hierarchy and spacing must be shared across the hub. Location: `dist/Hub Resources Revision 1.js`, `sectionHeading()`. |
| The skip link targets `#main`, which is also interpreted by the hash router. | Prevent route handling for the skip action and focus the existing main landmark. | Skip navigation must not change the current page or reset work. Location: `dist/index.html` and the root click handler. Root independently identified this issue. |
| The icon-only header help link loses its visible text at 801–1100px; its SVG is hidden from assistive technology. | Add an explicit `aria-label="Resources & help"`. | The responsive icon needs a stable accessible name. Location: `dist/index.html`, `.header-help`. |
| Home’s hero H1 has no tabindex while route rendering tries to focus H1. | Add `tabindex="-1"` to the home H1. | Keyboard navigation back home should place focus at the content heading. Location: `dist/Hub Application Revision 1.js`, `home()`. |
| Contribution-stage source note cites Playbook Section 3. | Cite Section 6, “Understanding the New Competency Model.” | Section 6 contains the stage framework; verified against the extracted supplied source. Location: `dist/Hub Application Revision 1.js`, `stages()`. |
| The sticky desktop sidebar has no height limit, while its full content nearly fills a 927px viewport. | Set a viewport-relative maximum height with vertical scrolling, and reset it for the static mobile menu. | The last review navigation entry must remain reachable on smaller-height laptops. This is a CSS inference, not a resized-browser observation. Location: `.sidebar`. |
| Raw content group keys were `people`/`senior` while the shell expected `people_leader`/`senior_leader`. | Normalize group keys at the application boundary without rewriting source data. | All ten competencies must render, not only the core group. Root independently identified this issue; the normalized catalog now renders all ten competencies. |

The implementation owner corrected every finding above. The reviewer did not edit `dist` during parallel browser testing and independently rechecked the corrected build.

## What holds up

- The visual identity is recognizable: exact Southwest Gas HR wordmark and Inter font, navy/cyan/yellow palette, rounded white navigation, curved yellow selected marker, and the original pipeline in key surfaces.
- The information architecture now leads with competencies, contribution levels, development, and conversations. Performance reviews are the final main navigation item and the lowest home feature.
- Source boundaries are unusually clear: workbook definitions and behaviors are identified; practical suggestions are identified separately; pending Korn Ferry material is disclosed; the playbook’s finalized model is separated from supporting behaviors and review design still in development.
- The 2026 cycle is described as using the existing process. The review tool is labeled a future design preview with fictional employees, session-only entries, and no connected Microsoft/Oracle services.
- Forms have explicit labels. Dynamic user text is escaped before rendering or exporting. Empty download attempts prompt an action. No false cloud-save message is present.
- Search exposes a result count, the empty state has a reset action, and related competency links use stable routes.
- Motion is restrained: exact transition properties, 140ms press feedback with a strong ease-out curve, hover effects behind fine-pointer media queries, no ambient pipeline animation, reduced-motion overrides, and immediate keyboard interactions.
- The source includes responsive one/two-column layouts, minimum-width safeguards on important containers, mobile navigation, visible focus states, and scrollable tables/tabs.

## Verification evidence and boundaries

Read the four implementation files in full. Inspected the initial and corrected desktop resource page (corrected viewport width: 1363px). The corrected screenshot shows readable vertically stacked support links, consistent section heading hierarchy/spacing, and the original pipeline restored in the header. No horizontal page overflow was measured.

Reopened the NXS-specific catalog and clicked Action Oriented: Non-Exempt Step remained selected, and the four expected NXS behaviors were displayed. Activated the skip link with Enter while inside the guide: focus moved to `main` while `#competency/action-oriented` remained unchanged. Opened the Senior Leader role catalog: ten cards and 5/3/2 groups were present. Verified the header link aria-label and viewport-relative sidebar maximum height plus `overflow-y:auto` through rendered DOM/CSS. Source review confirms the home H1 focus target and Section 6 source correction.

This review did not resize the shared browser, execute an automated accessibility audit, or exercise the full embedded review workflow. The implementation owner owns mobile/zoom checks. Separate review-workspace checks cover rating calculations and export behavior.

## Applied review sources

- [Emil Kowalski — Design Engineering](https://github.com/emilkowalski/skills/blob/main/skills/emil-design-eng/SKILL.md)
- [Emil Kowalski — Reviewing Animations](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/SKILL.md)
- [Animation Standards Reference](https://github.com/emilkowalski/skills/blob/main/skills/review-animations/STANDARDS.md)

Motion verdict: **Approve.** Independent desktop design/source verdict: **Approve the corrected shell.** No remaining issue was found within this review scope. Mobile/zoom and embedded review workflow validation are recorded by their respective owners; this review does not claim those checks.
