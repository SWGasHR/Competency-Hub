# Southwest Gas Competency Hub

A competency-first hub built from the supplied Revision 8 performance-review HTML, current competency rubric, and Director Champion Playbook. The original HR logo, Inter font, navy/cyan/yellow palette, curved selection marker, and pipeline motif are retained.

## Use the preview

No dependency installation or build is required. With Python 3 installed:

```sh
npm start
```

Open `http://localhost:8000`. Alternatively, serve the `dist` directory with any static web server. Use a server instead of opening individual files directly so the embedded review's return navigation works consistently.

The home page leads with the five core competencies, development, and implementation. Performance reviews appear at the bottom of the home page and navigation. The review workspace is loaded only when opened.

## Included

- Ten competency definitions, searchable by name, definition, and behavior.
- Role views for Non-Exempt Step, Non-Exempt Traditional, Exempt, People Leader, and Senior Leader.
- 112 unique source behavior statements and 408 matching draft rating anchors.
- Practical development ideas from the original hub, clearly identified as suggestions.
- Session-only development plans with downloadable printable HTML copies.
- Contribution stages, Director conversation agenda, implementation timeline, FAQs, and full accessible playbook text.
- Original review interactions: behavior ratings, required competency comments, Overall Summary, calculated scores, Word export, and manual Oracle steps.

## Preview boundaries

The playbook identifies the model and definitions as final, while behaviors, rating design, and evaluation mechanics remain in development. The 2026 evaluation cycle uses the existing process. Future implementation is planned for November 2027 for Exempt/NXT and April 2028 for NXS.

This is a static preview. It does not authenticate employees, enforce production role permissions, save records to Microsoft, or submit to Oracle. Fictional review profiles demonstrate the design. Drafts exist only in the current page session and clear on refresh or close. Download any plan or completed review you want to retain. In-hub navigation preserves the embedded review; standalone page navigation does not.

Two additional Korn Ferry documents remain pending. Their content has not been fabricated or attributed to the current coaching suggestions. The workbook's first four-point label differs between its summary and detailed tabs; see the source mapping record.

## Verification

```sh
npm run check
```

The dependency-free checks validate syntax, competency/role mappings, exact agreement between hub and review source blocks, counts, source renderers, and local assets. Browser checks and limitations are recorded in `docs`.

## Files

- `dist/index.html` — hub shell.
- `dist/Hub Application Revision 1.js` — navigation, guides, search, plans, and review integration.
- `dist/Hub Resources Revision 1.js` — source-based leader and implementation guidance.
- `dist/Competency Content Revision 1.js` — structured source content and provenance.
- `dist/Performance Review Workspace Revision 1.html` — preserved and refreshed review feature.
- `docs/Competency Hub Build Plan Revision 1.md` — plan and quality gates.
- `docs/Source Mapping and Content Checks Revision 1.md` — current sources, mappings, and open decisions.

Keep this repository private. No public deployment or production integration is included in this change.
