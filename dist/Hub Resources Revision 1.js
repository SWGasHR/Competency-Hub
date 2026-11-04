(() => {
  'use strict';

  const escape = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
  const source = () => window.HUB_CONTENT.playbook;
  const list = (items, ordered = false) => `<${ordered ? 'ol' : 'ul'} class="${ordered ? 'numbered-list' : ''}">${items.map(item => `<li>${escape(item)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
  const heading = (eyebrow, title, description) => `<header class="page-heading"><span class="eyebrow">${escape(eyebrow)}</span><h1 tabindex="-1">${escape(title)}</h1><p>${escape(description)}</p></header>`;
  const sectionHeading = (eyebrow, title, description = '') => `<header class="section-heading resource-section-heading"><div><span class="eyebrow">${escape(eyebrow)}</span><h2>${escape(title)}</h2>${description ? `<p>${escape(description)}</p>` : ''}</div></header>`;
  const external = (url, title, description) => `<a class="resource-link" href="${url}" target="_blank" rel="noopener noreferrer"><strong>${escape(title)} <span aria-hidden="true">↗</span></strong><span>${escape(description)}</span><small>Opens in a new tab</small></a>`;
  const support = () => `<div class="three-columns">${external('https://swgas.sharepoint.com/sites/TalentDevelopment','Talent Development','Competency learning, development resources, and implementation questions.')}${external('https://swgas.sharepoint.com/sites/HR/SitePages/HRSS%20Homepage.aspx','Ask HR','HR services and support.')}${external('https://swgas.sharepoint.com/sites/HR/SitePages/HRBP.aspx','Your HR Business Partner','Guidance for your team and specific employee situations.')}</div>`;
  const boundaries = () => `<div class="two-columns"><section class="panel"><span class="pill">Finalized</span><h3>What we can share</h3>${list(source().keyBoundaries.finalized)}</section><section class="panel"><span class="pill">Still in design</span><h3>What needs further decisions</h3>${list(source().keyBoundaries.stillInDesign)}</section></div>`;
  const sourceNote = () => '<p class="source-note">Source: Director Champion Playbook. The timing and implementation status shown here follow the supplied playbook.</p>';

  function renderLeader() {
    const playbook = source();
    const discussion = playbook.sections.find(section => section.title.startsWith('7.'));
    const prompts = discussion.blocks.filter(block => block.style === 'List Paragraph').map(block => block.text);
    const checklist = playbook.sections.find(section => section.title.startsWith('10.'));
    const monthly = checklist.blocks.filter(block => block.type === 'paragraph' && block.text.startsWith('☐') && !block.text.includes('October 30')).map(block => block.text.replace(/^☐\s*/, ''));
    return `${heading('Leadership & coaching', 'Make the model part of the conversation.', 'Use a common language, connect it to real work, and agree on one practical next step.')}
      <section class="panel"><span class="pill">The message to reinforce</span><h2>Build understanding before evaluation.</h2><p>The new competency model and definitions are finalized. Supporting behaviors are still being refined. Use the model to build awareness, discuss work, and support development as the organization prepares for formal implementation.</p><a class="button secondary" href="#implementation">See what is finalized <span aria-hidden="true">→</span></a></section>
      ${sectionHeading('A conversation you can use', 'Bring the model to your team', 'The Director Champion Playbook provides this 30-minute cascade agenda.')}
      <div class="two-columns"><section class="panel"><h3>30-minute discussion</h3><ol class="numbered-list">${playbook.cascadeAgenda.map(item => `<li><span class="pill">${escape(item.time)}</span><h4>${escape(item.segment)}</h4><p>${escape(item.focus)}</p></li>`).join('')}</ol></section><section class="panel"><h3>Questions that connect to the work</h3>${list(prompts)}<div class="note"><strong>Close with a commitment.</strong><p>Identify one way each leader will reinforce adoption of the new competencies.</p></div></section></div>
      ${sectionHeading('From a meeting to everyday practice', 'Five ways leaders support the change')}
      <section class="panel"><dl class="stack">${playbook.responsibilities.map(item => `<div><dt><strong>${escape(item.name)}</strong></dt><dd>${escape(item.approach)}</dd></div>`).join('')}</dl></section>
      <div class="two-columns"><section class="panel"><h2>Keep the conversation going</h2><p>Monthly actions through 2027, from the playbook:</p>${list(monthly)}</section><section class="panel"><h2>When a question goes beyond the model</h2><p>Acknowledge the question and explain what is still being designed. Contact Erin Henlin or Rusty Goodwill so answers stay consistent across the company.</p><details class="disclosure"><summary>Which topics are still being designed?</summary>${list(playbook.keyBoundaries.stillInDesign)}</details><details class="disclosure"><summary>Director cascade milestone</summary><p>The playbook asked Directors to complete cascade discussions with their leadership teams and managers by October 30, 2026. Reporting back to HR was not required; follow-up with the Vice President was encouraged.</p></details><a class="button secondary" href="#competencies">Choose a competency to discuss <span aria-hidden="true">→</span></a></section></div>
      ${sectionHeading('Help when you need it', 'Keep questions moving')}${support()}${sourceNote()}`;
  }

  function renderImplementation() {
    const playbook = source();
    return `${heading('The path ahead', 'Understand the change.', 'A focused model, time to learn it, and a phased move into formal talent processes.')}
      <div class="note"><strong>The 2026 review cycle uses the existing process and competency model.</strong><p>The new competencies are for awareness and development now. The future review workspace in this hub is a design preview.</p></div>
      ${sectionHeading('Clear boundaries', 'What is decided—and what is being developed')}${boundaries()}
      ${sectionHeading('Implementation timeline', 'Build familiarity, then put it into practice', 'Milestones below are from the Director Champion Playbook.')}
      <section class="panel"><ol class="timeline">${playbook.timeline.map(item => `<li class="timeline-item"><time>${escape(item.when)}</time><div><strong>${escape(item.phase)}</strong><p>${escape(item.focus)}</p></div></li>`).join('')}</ol></section>
      ${sectionHeading('Common questions', 'Answers to share with your team')}
      <section class="panel">${playbook.faq.map(item => `<details class="disclosure"><summary>${escape(item.question)}</summary><p>${escape(item.answer)}</p></details>`).join('')}</section>
      <div class="note"><strong>Need help with a question that is not answered here?</strong><p>Contact Erin Henlin or Rusty Goodwill, or visit Talent Development.</p><a class="button secondary" href="https://swgas.sharepoint.com/sites/TalentDevelopment" target="_blank" rel="noopener noreferrer">Visit Talent Development <span aria-hidden="true">↗</span></a></div>${sourceNote()}`;
  }

  function table(rows) {
    if (!rows?.length) return '';
    // Merged cells repeat their contents in extraction. Collapse duplicates for readable callouts.
    if (rows.length === 1 && rows[0].filter(Boolean).length === 1) return `<aside class="note">${escape(rows[0].find(Boolean)).replace(/\n/g, '<br>')}</aside>`;
    return `<div class="table-wrap"><table><thead><tr>${rows[0].map(cell => `<th scope="col">${escape(cell)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(row => `<tr>${row.map(cell => `<td>${escape(cell).replace(/\n/g, '<br>')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  }

  function sourceSection(section) {
    let result = '';
    let bullets = [];
    const flush = () => { if (bullets.length) { result += list(bullets); bullets = []; } };
    section.blocks.forEach(block => {
      if (block.style === 'List Paragraph') { bullets.push(block.text); return; }
      flush();
      if (block.type === 'table') { result += table(block.rows); return; }
      if (/^Heading/.test(block.style)) result += `<h4>${escape(block.text)}</h4>`;
      else if (block.text) result += `<p>${escape(block.text).replace(/\n/g, '<br>')}</p>`;
    });
    flush();
    if (section.title.startsWith('6.')) result += '<p><a href="#competencies">Read all ten definitions and role-specific behaviors in the competency library.</a></p>';
    return `<details class="disclosure"><summary>${escape(section.title === 'Front matter' ? 'Executive summary & how to use the playbook' : section.title)}</summary><div class="stack">${result}</div></details>`;
  }

  function renderResources() {
    const playbook = source();
    return `${heading('Resources & support', 'Find the right reference.', 'Use the source guidance, explore the model, or connect with the team that can help.')}
      ${support()}
      ${sectionHeading('Source documents', 'What this hub is built on', 'Source wording is kept separate from practical development suggestions.')}
      <div class="three-columns"><article class="panel"><span class="pill">Model & behaviors</span><h3>2026 Competency Rubric v2</h3><p>The ten competency definitions, employee-group behaviors, and draft rating anchors come from the supplied workbook.</p><a class="button secondary" href="#competencies">Explore competencies <span aria-hidden="true">→</span></a></article><article class="panel"><span class="pill">Implementation</span><h3>Director Champion Playbook</h3><p>The implementation timeline, contribution stages, cascade agenda, responsibilities, and FAQs come from the supplied final playbook.</p><a class="button secondary" href="#implementation">View the implementation guide <span aria-hidden="true">→</span></a></article><article class="panel"><span class="pill">Design & practice ideas</span><h3>Original review hub · Revision 8</h3><p>The original HTML provides the visual foundation, review workflow, and practical coaching and development suggestions. Suggestions are discussion aids, not additional rating criteria.</p><a class="button secondary" href="#leader">Open leader guidance <span aria-hidden="true">→</span></a></article></div>
      <details class="disclosure panel"><summary>Source status & remaining material</summary><p>The two additional Korn Ferry source documents have not yet been supplied. Their additional definitions or guidance will be incorporated after review.</p><p>Definitions currently shown are taken from the supplied competency workbook. The playbook identifies the model and definitions as final, while supporting behaviors, rating labels, scales, and the evaluation experience remain in design.</p><p>The workbook uses “Needs Improvement” on its Rating Scale sheet and “Developing” in its four-point competency anchors for level 1. This is an unresolved source discrepancy; neither label is represented as finalized review policy.</p></details>
      ${sectionHeading('Reference library', 'Director Champion Playbook', 'Open the section you need. These text sections preserve the supplied playbook; the competency library provides the model and definitions in accessible form.')}
      <section class="panel">${playbook.sections.map(sourceSection).join('')}</section>
      <p class="source-note">The hub is a preview for learning and future workflow design. Microsoft authentication, shared record storage, and Oracle submission are not connected.</p>`;
  }

  window.HUB_RESOURCES = Object.freeze({renderLeader, renderImplementation, renderResources});
})();
