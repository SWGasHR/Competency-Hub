# Source mapping and content checks

Prepared from the three files supplied for the Competency Hub build. This is a repository review record, not an employee policy document.

## Source ownership

| Source | What it supplies | Treatment in the hub |
| --- | --- | --- |
| 2026 Competency Rubric v2(1).xlsx | Ten definitions, four behaviors for each applicable audience, rating anchors, contribution stages, draft personas | Current source for competency detail. Definitions remain separate from draft behaviors and scale design. |
| Director Champion Playbook FINAL(1).docx | Model structure, rollout status, finalized/in-design boundaries, stages, Director responsibilities, cascade agenda, FAQs, timeline | Current source for implementation messaging and leader guidance. |
| SWG Performance Review Hub Grouped Competency Navigation Revision 8(1).html | Visual system, pipeline motif, existing review feature, coaching examples and practice ideas | Design reference and functional starting point. Existing coaching examples remain suggestions; the supplied workbook replaces older embedded behavior anchors. |
| Two additional Korn Ferry documents | Expanded competency definitions and development guidance | Pending. Do not represent existing coaching suggestions as a quotation from Korn Ferry or invent contents for these sources. |

## Model and audience mapping

| Competency group | Included competencies | Applies to |
| --- | --- | --- |
| Five core | Action Oriented; Self-Development; Communicates Effectively; Customer Focus; Instills Trust | Everyone |
| Three additional People Leader competencies | Collaborates; Develops Talent; Ensures Accountability | People Leaders and Senior Leaders |
| Two additional Senior Leader competencies | Strategic Mindset; Drives Vision and Purpose | Senior Leaders |

| App audience | Workbook behavior block | Competencies | Behaviors |
| --- | --- | ---: | ---: |
| Non-Exempt Step | Non-Exempt Step / first two-point block | 5 | 20 |
| Non-Exempt Traditional | Exempt & Non-Exempt Traditional | 5 | 20 |
| Exempt | Exempt & Non-Exempt Traditional | 5 | 20 |
| People Leader | People Leader | 8 | 32 |
| Senior Leader | Senior Leader | 10 | 40 |

The workbook contains 112 unique audience/behavior records and 408 rating anchors. Exempt and NXT share one source block; displaying the same source for both audiences does not create a new independent source record.

The four contribution stages are Contributing to the Work, Contributing Through Ownership, Contributing Through Others, and Contributing Strategically. Non-Exempt Traditional and Step share the first stage even though their workbook behavior and rating blocks differ. Stages describe scope of contribution and must not be shown as performance ratings.

## Required messaging boundaries

The playbook says the model and definitions are finalized. Supporting behaviors, rating labels, performance scale design, evaluation process, appraisal experience, and system configuration remain in design. It also lists Exempt and Non-Exempt stage labels as still being designed while describing the overall stages framework as finalized; present the framework for development without asserting an immutable HR classification decision.

The 2026 evaluation cycle uses the existing process and competency model. The new model is scheduled for full implementation in November 2027 for Exempt and NXT, and April 2028 for NXS. Talent Acquisition has used the new model since January 2026. Additional training and readiness activity is planned during 2027. The performance-review feature should be identified as a preview/preparation experience and must not imply that it submits, saves to, or verifies Oracle or Microsoft records.

The playbook's October 30 cascade deadline is historical by this build date. Keep it in the implementation timeline or reference guidance, not as an upcoming task.

## Differences and source cautions

1. The latest workbook has two NXS rating anchors for each core behavior. The original HTML has older three-anchor non-exempt data and consequently suppresses unavailable scale matches. Replace that older block and remove unavailable-anchor messaging where the new source now supplies a valid match.
2. The current workbook groups Exempt and NXT behavior wording together. Do not preserve a stale split from an older HTML or prior discussion.
3. The Rating Scale worksheet labels four-point level 1 as **Needs Improvement**. Competency tabs and draft persona sheets label level 1 as **Developing**. Both are still draft according to the playbook. Preserve the mismatch in this record; do not imply the label has been finalized. The existing review preview's Needs Improvement scale can be retained, with the source anchors mapped by numerical value.
4. Customer Focus and Instills Trust label their first block only **Non-Exempt**, whereas the other core sheets say **Non-Exempt Step**. Their two-point columns and the separate shared Exempt/NXT block identify the intended NXS mapping. Retain the exact source header in data provenance.
5. The playbook's embedded definitions graphic abbreviates some wording, including Action Oriented and Communicates Effectively. The detailed hub uses the full definition from each workbook's B2 cell. The forthcoming Korn Ferry documents should be checked against these definitions before any replacement.
6. Seven persona tracks appear in worksheets explicitly named **draft**. Their examples may support development discussion if labeled as illustrative. The three individual-contributor tracks are parallel career tracks, not sequential promotion levels. Leadership personas describe broader scope, not a required promotion path or a finalized rating standard.
7. The workbook contains spelling and spacing issues in some anchor text. The extraction trims outer whitespace and preserves source text, including internal line breaks. It does not silently rewrite competency meaning.
8. The original HTML's ten development guides are authored coaching suggestions. Keep those distinct from the workbook's exact behavior statements and from future licensed Korn Ferry development content.

## Data files and schema

The browser data file is `dist/Competency Content Revision 1.js` and assigns `window.HUB_CONTENT`:

- `rubric.competencies`: ID, name, definition, group, and keyed role blocks. Each role contains exactly four behaviors with source cells and numerical anchors.
- `rubric.roleMapping`: UI audience to source block.
- `rubric.stages`: source stage names, employee levels, focus, and primary contribution.
- `rubric.ratingScaleSheet`: exact worksheet scale wording.
- `rubric.personas`: seven draft persona tracks plus architecture/leveling guidance.
- `playbook.sections`: source paragraphs and tables in document order.
- `playbook.faq`: twelve questions and answers.
- `playbook.timeline`: eight dated implementation entries.
- `playbook.cascadeAgenda`: four segments totaling 30 minutes.
- `playbook.responsibilities`: five Director responsibilities.
- `playbook.stages` and `playbook.keyBoundaries`: exact playbook distinctions.
- `development`: ten existing coaching guides with purpose, essentials, role examples, practice actions, questions, learning topics, and reflections.

## Content checks performed

- [x] All ten workbook definitions extracted from B2 and matched to their competency IDs.
- [x] Five core, three People Leader, and two Senior Leader competencies correctly grouped.
- [x] Four behavior records for every applicable source audience.
- [x] 112 behavior records and 408 nonempty anchors extracted.
- [x] NXS has two anchors per behavior; all other source blocks have four.
- [x] No blank definitions, behavior statements, or rating-anchor text in the extracted model.
- [x] Exempt and NXT share the latest workbook block.
- [x] All twelve playbook FAQs, eight timeline entries, five responsibilities, and four cascade segments extracted.
- [x] All ten existing development guides retained and identified as suggestions.
- [x] Draft persona status and parallel-track distinction retained.
- [x] Rating-label discrepancy and source-role header ambiguity documented.
- [x] Review actual rendered pages for accurate placement of draft/status language.
- [x] Verify browser selections show the exact applicable audience data.
- [x] Verify review export uses the refreshed anchors and current employee audience.
- [ ] Integrate the two additional Korn Ferry documents when supplied; compare definitions and retain source attribution.
- [ ] Obtain final business decisions on behaviors, ratings, scales, process, and production integrations before presenting them as final policy.

## Source file provenance

SHA-256 values identify the exact files supplied for this build; no raw uploads are required to run the repository checks.

| Source | SHA-256 |
| --- | --- |
| 2026 Competency Rubric v2(1).xlsx | `68707b05dec721e2fae1f6592560fe3a425155556330a4535d616ef372051ea9` |
| Director_Champion_Playbook FINAL(1).docx | `c4ff836f751ceac8fb4ae235bd560449cfa074bb2cebb231f91aa8def0eae354` |
| SWG Performance Review Hub Grouped Competency Navigation Revision 8(1).html | `271bdc46cd0136882e0e91b78b8b3076ae10827bf5484a1b2666d6354e8490ad` |

The dependency-free `npm run check` command validates source completeness, audience and group views, generated guide text, cross-feature source agreement, support content, JavaScript syntax, local assets, and the preserved review integrity suite. Rendering checks execute the production application with a minimal DOM harness; they verify generated content and route behavior, not pixel layout or browser accessibility. Browser QA remains a separate check.
