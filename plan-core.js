(function(root){'use strict';
function attempts(bank,raw,C,M){const map=new Map();for(const x of [raw?.current,...(Array.isArray(raw?.history)?raw.history:[])]){const a=M.restore(bank,x,C);if(a?.status==='submitted')map.set(a.id,a);}return [...map.values()].sort((a,b)=>(b.submittedAt||b.startedAt)-(a.submittedAt||a.startedAt));}
function build(bank,a,C,M){const r=M.result(bank,a,C);return r.topics.map(t=>{const lostAuto=t.autoTotal-t.auto,lostWritten=t.pending?0:t.writtenTotal-t.written,weak=lostAuto+lostWritten>0,ratio=(lostAuto+lostWritten)/(t.autoTotal+(t.pending?0:t.writtenTotal));return {...t,weak,priority:weak?(ratio>=.5?'High priority':'Consolidate'):(t.pending?'Mark first':'Maintain'),weight:ratio,steps:weak?3:0};}).sort((a,b)=>Number(b.weak)-Number(a.weak)||b.weight-a.weight||b.pending-a.pending);}
function completion(record){return Number(record?.model===true)+Number(record?.quiz?.score>=3)+Number(record?.written===true);}
function session(items,records,minutes){let used=0;const picks=[];for(const t of items.filter(t=>t.weak)){const cost=(3-completion(records?.[t.id]))*5;if(cost&&used+cost<=minutes){picks.push(t.id);used+=cost;}}return {topics:picks,minutes:used};}
const api={attempts,build,completion,session};if(typeof module!=='undefined')module.exports=api;else root.PlanCore=api;
})(globalThis);
