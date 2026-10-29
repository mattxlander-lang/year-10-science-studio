const assert=require('node:assert/strict'),B=require('../dist/exam-bank.js'),C=require('../dist/exam-core.js');
const ids=new Set();let automatic=0,written=0;
for(const t of B.topics){assert.equal(t.questions.length,6);for(const q of t.questions){assert.ok(!ids.has(q.id));ids.add(q.id);assert.ok(['core','extension'].includes(q.level));if(q.type==='written'){written++;assert.equal(q.marks,q.rubric.length);assert.ok(q.model.length>40);continue;}automatic++;assert.ok(q.explain.length>30);const answer=q.type==='mc'?q.correct:String(q.answer);assert.equal(C.grade(q,answer),true);assert.equal(C.grade(q,''),false);assert.equal(C.grade(q,q.type==='mc'?(q.correct+1)%q.options.length:String(q.answer+10)),false);}}
assert.equal(B.topics.length,8);assert.equal(automatic,32);assert.equal(written,16);
const s=C.clean(B,null),t=B.topics[0],r=s.topics[t.id],q=t.questions[0];
r.questions[q.id].answer=(q.correct+1)%q.options.length;assert.equal(C.check(t,r,q.id),true);assert.equal(C.summary(t,r).firstCorrect,0);
for(const n of t.questions.filter(q=>q.type!=='written').slice(1)){r.questions[n.id].answer=n.type==='mc'?n.correct:String(n.answer);C.check(t,r,n.id)}assert.equal(r.best,3);assert.equal(C.summary(t,r).checked,4);
C.retry(t,r);assert.equal(C.summary(t,r).checked,0);assert.equal(C.summary(t,r).firstCount,4);assert.equal(r.best,3);
for(const n of t.questions.filter(q=>q.type!=='written')){r.questions[n.id].answer=n.type==='mc'?n.correct:String(n.answer);C.check(t,r,n.id)}assert.equal(r.best,4);assert.equal(C.summary(t,r).firstCorrect,3);
const restored=C.clean(B,JSON.parse(JSON.stringify(s)));assert.deepEqual(restored,s);assert.equal(C.numeric(' 0.5 '),.5);assert.equal(C.numeric('2 A'),null);assert.equal(C.numeric(''),null);
const bad=C.clean(B,{version:1,topics:{motion:{best:999,questions:{mo1:{answer:99,checked:true},mo5:{draft:'',assessed:true,rubric:[true]}}}}});assert.equal(bad.topics.motion.best,null);assert.equal(bad.topics.motion.questions.mo1.checked,false);assert.equal(bad.topics.motion.questions.mo5.assessed,false);
console.log('PASS: 48-item bank; grading/validation; incomplete and completed runs; retries preserve first pass/best; JSON round-trip; invalid stored state.');
