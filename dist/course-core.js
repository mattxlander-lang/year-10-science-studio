(function(root){'use strict';
function xCross(mother,father){const mothers={AA:['A','A'],Aa:['A','a'],aa:['a','a']},fathers={AY:['A','Y'],aY:['a','Y']};if(!mothers[mother]||!fathers[father])throw Error('Invalid parent genotype');return mothers[mother].flatMap(m=>fathers[father].map(f=>({sex:f==='Y'?'son':'daughter',genotype:f==='Y'?`X${m}Y`:`X${m}X${f}`,affected:f==='Y'?m==='a':m==='a'&&f==='a',carrier:f!=='Y'&&m!==f})));}
function coCross(a,b){if(!['RR','RW','WW'].includes(a)||!['RR','RW','WW'].includes(b))throw Error('Invalid genotype');return [...a].flatMap(x=>[...b].map(y=>[x,y].sort().join('')));}
function clean(raw,bank){const out={};if(!raw||typeof raw!=='object')return out;for(const q of bank){const r=raw[q.id];if(!r||typeof r!=='object')continue;const questions=[q,...(q.extra||[])];out[q.id]={answers:questions.map((x,i)=>Number.isInteger(r.answers?.[i])&&r.answers[i]>=0&&r.answers[i]<x.options.length?r.answers[i]:null),draft:typeof r.draft==='string'?r.draft.slice(0,6000):'',paper:r.paper===true,checks:q.rubric.map((_,i)=>r.checks?.[i]===true)};}return out;}
function complete(q,r){return !!r&&[q,...(q.extra||[])].every((x,i)=>r.answers?.[i]===x.correct)&&(!!r.draft?.trim()||r.paper===true)&&q.rubric.every((_,i)=>r.checks?.[i]===true);}
const api={xCross,coCross,clean,complete};if(typeof module!=='undefined')module.exports=api;else root.CourseCore=api;
})(globalThis);
