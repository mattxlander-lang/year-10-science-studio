/* Small, deterministic teaching models. Units and assumptions are shown in the UI. */
(function(root){'use strict';const models={
 selection(p,s,environment){let wAA=1,wAa=1-s/2,waa=1-s;if(environment==='a')[wAA,waa]=[waa,wAA];if(environment==='neutral')wAA=wAa=waa=1;const mean=p*p*wAA+2*p*(1-p)*wAa+(1-p)**2*waa;return (p*p*wAA+p*(1-p)*wAa)/mean;},
};if(typeof module!=='undefined')module.exports=models;else root.ScienceModels=models;})(globalThis);
