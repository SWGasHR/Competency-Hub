import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const read = name => fs.readFileSync(path.join(dist, name), 'utf8');
const files = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? files(path.join(directory, entry.name)) : [path.join(directory, entry.name)]);
const allFiles = files(dist);
let scripts = 0;
for (const file of allFiles.filter(file => /\.js$/.test(file))) {
  new vm.Script(fs.readFileSync(file, 'utf8'), { filename: path.relative(root, file) });
  scripts++;
}
for (const file of allFiles.filter(file => /\.html$/.test(file))) {
  for (const match of fs.readFileSync(file, 'utf8').matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    if (/\bsrc\s*=/.test(match[1])) continue;
    if (/application\/json/.test(match[1])) JSON.parse(match[2]);
    else { new vm.Script(match[2], { filename: `${path.relative(root, file)} inline script` }); scripts++; }
  }
}
console.log(`PASS: ${scripts} application and inline scripts parse.`);

function createHarness(hash = '#home') {
  const elements = new Map();
  const listeners = { document: new Map(), window: new Map() };
  function element(key) {
    if (!elements.has(key)) elements.set(key, {
      innerHTML: '', textContent: '', hidden: false, dataset: {},
      classList: { add() {}, remove() {}, contains() { return false; }, toggle() { return false; } },
      setAttribute() {}, scrollIntoView() {}, focus() {}, append() {},
    });
    return elements.get(key);
  }
  const document = {
    querySelector: element,
    querySelectorAll: () => [],
    addEventListener(name, fn) { listeners.document.set(name, fn); },
    documentElement: element('documentElement'),
    body: element('body'),
    title: '',
  };
  const location = { hash, origin: 'https://local.test' };
  const window = { addEventListener(name, fn) { listeners.window.set(name, fn); } };
  const context = vm.createContext({ window, document, location, console, setTimeout, clearTimeout, URL, Blob });
  for (const name of ['Competency Content Revision 1.js', 'Hub Resources Revision 1.js', 'Hub Application Revision 1.js']) {
    vm.runInContext(read(name), context, { filename: name });
  }
  return {
    content: window.HUB_CONTENT,
    resources: window.HUB_RESOURCES,
    html: () => element('#page-content').innerHTML,
    fragment: selector => element(selector).innerHTML,
    navigate(next) { location.hash = next; listeners.window.get('hashchange')(); return this.html(); },
    change(id, value) { listeners.document.get('change')({ target: { id, value } }); },
    input(id, value) { listeners.document.get('input')({ target: { id, value, dataset: {} } }); },
  };
}
const app = createHarness();
const { rubric, playbook, development } = app.content;
const plain = value => JSON.parse(JSON.stringify(value));
const normalize = text => String(text).replace(/\s+/g, ' ').trim();
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
const contains = (markup, value, label) => assert(markup.includes(escape(value)), label);
const competencyIds = new Set(rubric.competencies.map(item => item.id));
assert.equal(rubric.competencies.length, 10);
assert.equal(competencyIds.size, 10, 'Competency IDs must be unique');
assert.equal(development.length, 10);
assert.deepEqual(new Set(development.map(guide => guide.id)), competencyIds, 'Every competency needs its development guide');
let behaviors = 0;
let anchors = 0;
for (const competency of rubric.competencies) {
  assert(competency.definition.trim(), `${competency.id}: nonempty definition`);
  for (const [role, block] of Object.entries(competency.roles)) {
    assert.equal(block.behaviors.length, 4, `${competency.id}/${role}: four source behaviors`);
    for (const behavior of block.behaviors) {
      assert(behavior.statement.trim());
      assert.equal(behavior.anchors.length, role === 'nxs' ? 2 : 4);
      assert.deepEqual(plain(behavior.anchors.map(anchor => anchor.value)), role === 'nxs' ? [1,2] : [1,2,3,4]);
      assert(behavior.anchors.every(anchor => anchor.text.trim()));
      behaviors++;
      anchors += behavior.anchors.length;
    }
  }
}
assert.equal(behaviors, 112);
assert.equal(anchors, 408);
for (const [role, count] of Object.entries({ nxs:5, nxt:5, exempt:5, people_leader:8, senior_leader:10 })) {
  const actual = rubric.competencies.filter(item => item.roles[rubric.roleMapping[role]]);
  assert.equal(actual.length, count, `${role}: assigned competency count`);
  const page = createHarness(`#competencies/role/${role}`).html();
  for (const competency of actual) contains(page, competency.name, `${role}: catalog must include ${competency.name}`);
  assert.equal((page.match(/class="competency-card\b/g) || []).length, count, `${role}: all assigned competencies must be rendered`);
}
// These rendered-output assertions catch source keys such as "people" or "senior"
// silently disappearing when UI route keys are "people_leader"/"senior_leader".
for (const [group, count] of [['core',5], ['people_leader',3], ['senior_leader',2]]) {
  const markup = createHarness(`#competencies/${group}`).html();
  assert.equal((markup.match(/class="competency-card\b/g) || []).length, count, `${group}: group filter must render the complete source group`);
}
assert.equal((createHarness('#competencies').html().match(/class="competency-card\b/g) || []).length, 10, 'Full catalog must show all ten competencies');
const searchApp = createHarness('#competencies');
searchApp.input('competency-search', 'clarifyingzzznomatch');
assert(searchApp.fragment('#catalog-results').includes('No matching competencies'), 'Empty search result has a useful recovery state');
searchApp.input('competency-search', 'collaborates');
assert.equal((searchApp.fragment('#catalog-results').match(/class="competency-card\b/g) || []).length, 1, 'Name search isolates a competency');
searchApp.input('competency-search', '<img src=x onerror=alert(1)>');
assert(!searchApp.fragment('#catalog-results').includes('<img src=x'), 'Search query cannot become executable markup');

for (const competency of rubric.competencies) {
  const guideApp = createHarness(`#competency/${competency.id}`);
  contains(guideApp.html(), competency.definition, `${competency.id}: definition rendered`);
  for (const [role, sourceRole] of Object.entries(rubric.roleMapping)) {
    if (!competency.roles[sourceRole]) continue;
    guideApp.change('guide-role', role);
    const markup = guideApp.fragment('#guide-body');
    assert(!markup.includes('undefined'), `${competency.id}/${role}: no missing content`);
    for (const behavior of competency.roles[sourceRole].behaviors) contains(markup, behavior.statement, `${competency.id}/${role}: source behavior rendered`);
  }
}
console.log(`PASS: 10 definitions, ${behaviors} behaviors, ${anchors} anchors; audience/group catalogs, searches, and every role's behavior page.`);

const review = read('Performance Review Workspace Revision 1.html');
const reviewSourceMatch = review.match(/const BEHAVIOR_SOURCE = (.*?);\n/);
assert(reviewSourceMatch, 'Review behavior source is present');
const reviewSource = JSON.parse(reviewSourceMatch[1]);
for (const competency of rubric.competencies) {
  const source = reviewSource[competency.sourceSheet];
  assert(source, `${competency.id}: exists in review workspace`);
  assert.equal(normalize(source.definition), normalize(competency.definition), `${competency.id}: same definition in hub and review`);
  for (const [role, reviewRole] of Object.entries({ nxs:'non_exempt', exempt_nxt:'exempt', people_leader:'people_leader', senior_leader:'senior_leader' })) {
    const block = competency.roles[role];
    if (!block) continue;
    const rows = source.behaviors[reviewRole];
    assert.equal(rows.length, block.behaviors.length);
    block.behaviors.forEach((behavior, index) => {
      assert.equal(normalize(rows[index].statement), normalize(behavior.statement), `${competency.id}/${role}/${index}: same behavior in hub and review`);
      assert.deepEqual(rows[index].anchors.map(normalize), plain(behavior.anchors.map(anchor => normalize(anchor.text))), `${competency.id}/${role}/${index}: review uses current source anchors`);
    });
  }
}
console.log('PASS: Review workspace definitions, audience behaviors, and all anchors match the competency hub source.');

assert.equal(playbook.faq.length, 12);
assert.equal(playbook.timeline.length, 8);
assert.equal(playbook.responsibilities.length, 5);
assert.equal(playbook.cascadeAgenda.reduce((sum, item) => sum + parseInt(item.time, 10), 0), 30);
const implementation = app.resources.renderImplementation();
for (const item of playbook.faq) {
  contains(implementation, item.question, `FAQ question: ${item.question}`);
  contains(implementation, item.answer, `FAQ answer: ${item.question}`);
}
for (const item of playbook.timeline) {
  for (const field of ['when','phase','focus']) contains(implementation, item[field], `Timeline: ${item.when}/${field}`);
}
for (const boundary of [...playbook.keyBoundaries.finalized, ...playbook.keyBoundaries.stillInDesign]) contains(implementation, boundary, `Implementation boundary: ${boundary}`);
const leader = app.resources.renderLeader();
for (const item of playbook.cascadeAgenda) for (const field of ['segment','time','focus']) contains(leader, item[field], `Cascade agenda: ${item.segment}/${field}`);
for (const item of playbook.responsibilities) for (const field of ['name','approach']) contains(leader, item[field], `Leader responsibility: ${item.name}/${field}`);
const resources = app.resources.renderResources();
for (const section of playbook.sections.filter(section => section.title !== 'Front matter')) contains(resources, section.title, `Source section available: ${section.title}`);
assert(resources.includes('Korn Ferry'), 'Pending additional source status stays visible');
for (const markup of [implementation, leader, resources]) assert(!markup.includes('undefined'), 'Support renderer contains no missing values');
assert(app.html().lastIndexOf('review-feature') > app.html().lastIndexOf('A SHARED DIRECTION'), 'Performance review feature follows learning content on the home page');
console.log('PASS: All FAQs, timeline milestones, cascade agenda, responsibilities, source sections, and implementation boundaries are rendered.');

let assetReferences = 0;
const skipped = new Set();
function localReference(reference, origin) {
  const value = reference.trim();
  if (!value || /^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(value)) return;
  // Server routes embedded by the preserved original bundle are not static asset URLs.
  if (value.includes('${') || value.includes('{')) { skipped.add(value); return; }
  const withoutQuery = value.split(/[?#]/)[0];
  let decoded;
  try { decoded = decodeURIComponent(withoutQuery.replace(/&amp;/g, '&')); } catch { assert.fail(`Invalid URL encoding: ${value}`); }
  const target = decoded.startsWith('/') ? path.join(dist, decoded) : path.resolve(path.dirname(origin), decoded);
  assert(target === dist || target.startsWith(dist + path.sep), `Asset escapes static output: ${value}`);
  assert(fs.existsSync(target), `Missing local asset ${value} referenced by ${path.relative(root, origin)}`);
  assetReferences++;
}
for (const file of allFiles.filter(file => /\.html$/.test(file))) {
  const html = fs.readFileSync(file, 'utf8').replace(/(<script\b[^>]*>)[\s\S]*?<\/script>/gi, '$1</script>');
  for (const tag of html.matchAll(/<(?:script|link|img|iframe|source|video|audio)\b[^>]*>/gi)) {
    for (const attribute of tag[0].matchAll(/\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/gi)) localReference(attribute[2], file);
  }
  for (const style of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)) {
    for (const url of style[1].matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)) localReference(url[2], file);
  }
}
for (const file of allFiles.filter(file => /\.css$/.test(file))) {
  for (const url of fs.readFileSync(file, 'utf8').matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/gi)) localReference(url[2], file);
}
console.log(`PASS: ${assetReferences} local HTML/CSS asset references resolve${skipped.size ? `; ${skipped.size} dynamic templates skipped` : ''}.`);

const reviewCheck = spawnSync(process.execPath, [path.join(root, 'tests', 'Review Integrity Revision 1.mjs')], { cwd:root, encoding:'utf8' });
if (reviewCheck.stdout) process.stdout.write(reviewCheck.stdout);
if (reviewCheck.stderr) process.stderr.write(reviewCheck.stderr);
assert.equal(reviewCheck.status, 0, 'Preserved review integrity suite passes');
console.log('PASS: Complete dependency-free hub verification. Browser layout and interaction QA are tracked separately.');
