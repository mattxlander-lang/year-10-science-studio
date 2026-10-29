/* Small, deterministic teaching models. Units and assumptions are shown in the UI. */
(function(root){'use strict';const models={
 circuit(v,r1,r2,parallel,closed=true){const resistance=parallel?1/(1/r1+1/r2):r1+r2;const current=closed?v/resistance:0;return {resistance,current,i1:parallel?(closed?v/r1:0):current,i2:parallel?(closed?v/r2:0):current,v1:closed?(parallel?v:current*r1):0,v2:closed?(parallel?v:current*r2):0};},
 motion(f,m,t,cut=false){const push=cut?Math.min(t,2):t,a=f/m;return {a:cut&&t>=2?0:a,v:a*push,x:.5*a*push*push+(cut&&t>2?a*2*(t-2):0)};},
 selection(p,s,environment){let wAA=1,wAa=1-s/2,waa=1-s;if(environment==='a')[wAA,waa]=[waa,wAA];if(environment==='neutral')wAA=wAa=waa=1;const mean=p*p*wAA+2*p*(1-p)*wAa+(1-p)**2*waa;return (p*p*wAA+p*(1-p)*wAa)/mean;},
 climate(albedo,epsilon){return (1361*(1-albedo)/(4*5.670374419e-8*(1-epsilon/2)))**.25-273.15;},
 shells(z){let n=z;return [2,8,8,2].map(cap=>{const x=Math.min(cap,n);n-=x;return x}).filter(Boolean);}
};if(typeof module!=='undefined')module.exports=models;else root.ScienceModels=models;})(globalThis);
