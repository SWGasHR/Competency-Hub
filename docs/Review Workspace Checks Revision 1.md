# Performance review workspace checks

The supplied Revision 8 HTML is retained as the dedicated review feature, linked from the competency hub. Its existing star ratings, required competency comments, required Overall Summary, calculated competency ratings, overall override/reset, Word export, Oracle checklist, and memory-only preview remain intact.

## Source changes

- The authoritative `2026 Competency Rubric v2(1).xlsx` replaces the old behavior data in both the React review engine and its coaching/export layer.
- Non-Exempt Traditional uses the Exempt & NXT behaviors and four-point anchors. Non-Exempt Step uses the NXS behaviors and two-point anchors.
- All 10 competency definitions, 112 role-specific behavior statements, and 408 anchors match the supplied workbook, preserving text and punctuation. Existing behavior IDs are retained for compatibility.
- Generic four-point labels retain `Needs Improvement`, `Progressing`, `Practicing`, `Advancing`, matching the workbook's Rating Scale sheet and supplied HTML. Individual competency sheets call level 1 `Developing`; this source inconsistency still needs the content owner's confirmation before production use.
- The Director playbook identifies this as a future review design. The 2026 process remains the existing model. Full implementation is planned for November 2027 (Exempt/NXT) and April 2028 (NXS).
- Definitions from the two additional Korn Ferry files are pending. The supplied rubric definitions are used provisionally.

## Preservation and storage

- Repeated embedded CSS, fonts, and images are extracted byte-for-byte into `dist/review assets`. No branding images were regenerated or visually edited.
- The review HTML shrinks from about 17 MB to about 1.4 MB; extracted assets total about 4.1 MB.
- A return link opens the hub. The review page retains its future-design status and fictional profiles.
- Entries remain in the page's memory and clear when it reloads or closes. Microsoft identity/storage and Oracle submission are not connected.
- No production authorization is implied by the fictional profile selector. Host authentication and record storage remain separate production work.

## Automated verification

Run `node "tests/Review Integrity Revision 1.mjs"` from the repository root.

Verified:

- All 20 executable inline scripts parse.
- The React UI and coaching/export layer contain identical behavior data and definitions.
- 10 competencies, 112 behaviors, and 408 nonempty source anchors.
- Four behaviors per available competency/role.
- NXS has two anchors per behavior; Exempt/NXT/People Leader/Senior Leader have four.
- NXT/Exempt/NXS/People Leader/Senior Leader role mapping is correct.
- Assigned competency totals are 5, 8, and 10 by level.
- Selected NXS/NXT anchors return the corresponding source wording.
- Local extracted asset references resolve.
- The return route, future-preview wording, and truthful Microsoft storage wording exist.
- Obsolete text claiming that NXT/NXS anchors are missing is removed from the leader guide.

The parent hub's visual QA records browser interaction and export checks separately.

## Browser verification on November 4, 2026

Verified the preserved layout and extracted assets in the cloud browser. Completed a fictional NXT review through all 20 behavior ratings, five competency comments, and the Overall Summary. The final view showed 100% complete, five calculated competency ratings of 3/4, all comments, and matching source anchors.

Verified that an overall override to 4 leaves the calculated rating at 3, and that `Use calculated average` restores 3. The completed-review list showed the correct employee, and the final-review dialog included Word export plus Oracle entry, submission, approval/sharing, and coaching instructions. The coaching checkbox was disabled until Oracle submission is noted.

The return-to-hub strip survives React startup. In an iframe it sends the agreed return event to the parent origin; standalone it links to `index.html#home`.

The Word download link was prepared with a `.docx` filename and blob URL. The cloud browser's download waiter timed out and reset its automation session, so receipt of the downloaded file was not verified through that browser. The actual DOCX generator was then exercised directly: valid eight-part editable DOCX packages were generated for NXS, NXT, People Leader, and Senior Leader; XML escaping, comments, override labels, and incomplete-review status passed. No React application errors appeared in the final browser log check.
