"use strict";var n=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var q=n(function(A,o){
var c=require('@stdlib/math-base-ops-cmul/dist');function j(a,i,e,t){var u,r;if(a<=0||t<=0)return e;if(t===1){for(r=0;r<a;r++)e.set(c(i,e.get(r)),r);return e}for(u=0,r=0;r<a;r++)e.set(c(i,e.get(u)),u),u+=t;return e}o.exports=j
});var l=n(function(B,f){
var R=require('@stdlib/math-base-ops-cmul/dist');function _(a,i,e,t,u){var r,s;if(a<=0||t<=0)return e;for(r=u,s=0;s<a;s++)e.set(R(i,e.get(r)),r),r+=t;return e}f.exports=_
});var y=n(function(C,p){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=q(),E=l();d(m,"ndarray",E);p.exports=m
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=y(),v,g=b(O(__dirname,"./native.js"));h(g)?v=k:v=g;module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
