import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const html=fs.readFileSync(path.join(root,'dist','Performance Review Workspace Revision 1.html'),'utf8');
const scripts=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
let checked=0;
for(const [_,attrs,code] of scripts){if(attrs.includes('application/json')){JSON.parse(code);continue;}new vm.Script(code);checked++;}
const module=scripts.find(([_,attrs])=>attrs.includes('1r4glrmkhhxny.js'))[2];
const context={};vm.createContext(context);vm.runInContext(module,context);
const entries=context.TURBOPACK[0],factory=entries[entries.indexOf(76024)+1],exports={};
factory({s(values){for(let i=0;i<values.length-2;i+=3)exports[values[i]]=values[i+2];}});
const runtime=scripts.find(([_,attrs])=>attrs.includes('swg-leader-coach-runtime'))[2];
const source=JSON.parse(runtime.match(/const BEHAVIOR_SOURCE = (.*?);\n/)[1]);
let behaviors=0,anchors=0;
for(const competency of Object.values(exports.COMPETENCIES)){
 const name={'self-development':'Self Development','drives-vision-purpose':'Drives Vision and Purpose'}[competency.id]||competency.name;
 assert.deepEqual(JSON.parse(JSON.stringify(competency.behaviors)),source[name].behaviors,`UI/export source agreement: ${name}`);
 assert.equal(competency.definition,source[name].definition);
 for(const [level,rows] of Object.entries(competency.behaviors)){
  assert.equal(rows.length,4,`${name}: four behaviors per role`);
  for(const row of rows){assert.equal(row.anchors.length,level==='non_exempt'?2:4);assert(row.anchors.every(Boolean));behaviors++;anchors+=row.anchors.length;}
 }
}
assert.equal(behaviors,112);assert.equal(anchors,408);
assert.equal(exports.rubricLevelFor('individual','non_exempt_traditional'),'exempt');
assert.equal(exports.rubricLevelFor('individual','non_exempt_step'),'non_exempt');
assert.equal(exports.rubricLevelFor('individual','exempt'),'exempt');
assert.equal(exports.rubricLevelFor('people_leader','exempt'),'people_leader');
assert.equal(exports.rubricLevelFor('senior_leader','exempt'),'senior_leader');
assert.equal(exports.competencyIdsForLevel('individual').length,5);
assert.equal(exports.competencyIdsForLevel('people_leader').length,8);
assert.equal(exports.competencyIdsForLevel('senior_leader').length,10);
assert.equal(exports.SCALE_DEFINITIONS[exports.scaleModeFor('non_exempt_step')].length,2);
assert.equal(exports.SCALE_DEFINITIONS[exports.scaleModeFor('non_exempt_traditional')].length,4);
const action=exports.COMPETENCIES['action-oriented'];
assert.equal(exports.behaviorRatingDescription(action.behaviors.non_exempt[0],'non_exempt_step',1),action.behaviors.non_exempt[0].anchors[1]);
assert.equal(exports.behaviorRatingDescription(action.behaviors.exempt[0],'non_exempt_traditional',3),action.behaviors.exempt[0].anchors[3]);
assert(html.includes('href="index.html#home" target="_top"'));
assert(html.includes('Microsoft saving is not connected'));
assert(html.includes('Future review design preview'));
assert(!html.includes('The embedded Non-Exempt anchors use an older three-point scale'));
for(const match of html.matchAll(/review%20assets\/([^\s"'<>\\)]+)/g)){assert(fs.existsSync(path.join(root,'dist','review assets',decodeURIComponent(match[1]))),match[0]);}
console.log(`PASS: ${checked} scripts parse; 10 competencies, ${behaviors} behaviors, ${anchors} source anchors; role/scale mapping, UI/export agreement, asset references, return route, and preview wording.`);

// Exercise the actual Word generator with current source data, including XML escaping,
// two- and four-point templates, all role tiers, overrides, and an incomplete review.
const generator=runtime.slice(runtime.indexOf('  function buildReviewDocxBytes(data) {'),runtime.indexOf('  function interceptOriginalAction(event) {'));
const exportContext={TextEncoder};vm.createContext(exportContext);vm.runInContext(generator,exportContext);
function storedParts(bytes){const view=new DataView(bytes.buffer,bytes.byteOffset,bytes.byteLength);let offset=0;const parts={};while(view.getUint32(offset,true)===0x04034b50){const size=view.getUint32(offset+18,true),nameLength=view.getUint16(offset+26,true),extraLength=view.getUint16(offset+28,true),name=new TextDecoder().decode(bytes.slice(offset+30,offset+30+nameLength)),start=offset+30+nameLength+extraLength;parts[name]=new TextDecoder().decode(bytes.slice(start,start+size));offset=start+size;}assert.equal(Object.keys(parts).length,8);return parts;}
function exportFixture(level,category,rating){const role=exports.rubricLevelFor(level,category),scale=exports.SCALE_DEFINITIONS[exports.scaleModeFor(category)];return {employeeName:'Fictional A & B <QA>',reviewerName:'Fictional Leader',meta:category,scale,prepared:true,calculatedOverallScore:rating,overallScore:rating,overallSource:'calculated',overallSummary:'QA overall evidence & next steps.',competencies:exports.competencyIdsForLevel(level).map(id=>{const c=exports.COMPETENCIES[id];return {id,name:c.name,definition:c.definition,score:rating,finalRating:rating,ratingSource:'calculated',comment:'QA evidence for '+c.name,behaviors:c.behaviors[role].map(b=>({id:b.id,text:b.statement,rating,label:scale[rating-1].label,description:b.anchors[rating-1],anchorAvailable:true}))};})};}
for(const [level,category,rating] of [['individual','non_exempt_step',2],['individual','non_exempt_traditional',3],['people_leader','exempt',3],['senior_leader','exempt',3]]){
 const fixture=exportFixture(level,category,rating),xml=storedParts(exportContext.buildReviewDocxBytes(fixture))['word/document.xml'];
 assert(xml.includes('Prepared for manual Oracle entry'));
 assert(xml.includes('Fictional A &amp; B &lt;QA&gt;'));
 for(const c of fixture.competencies){assert(xml.includes('QA evidence for '+c.name.replace(/&/g,'&amp;')));}
 assert(!xml.includes('A rating is required.'));
 assert(!xml.includes('A competency comment is required.'));
}
const adjusted=exportFixture('individual','non_exempt_traditional',3);adjusted.overallSource='adjusted';adjusted.overallScore=4;
assert(storedParts(exportContext.buildReviewDocxBytes(adjusted))['word/document.xml'].includes('Leader adjusted'));
const incomplete=exportFixture('individual','non_exempt_traditional',3);incomplete.competencies[0].behaviors[0].rating=null;
assert(storedParts(exportContext.buildReviewDocxBytes(incomplete))['word/document.xml'].includes('Draft preparation document'));
console.log('PASS: editable DOCX ZIP generation for NXS, NXT, People Leader, Senior Leader; source comments, XML escaping, override, and incomplete-review status.');
