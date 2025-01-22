"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(J,p){
var w=require('@stdlib/strided-base-reinterpret-complex128/dist'),z=require('@stdlib/complex-float64-base-mul/dist').assign,E=require('@stdlib/complex-float64-real/dist'),O=require('@stdlib/complex-float64-imag/dist');function b(e,r,a,v,_){var s,c,o,l,f,m,i,t;if(e<=0)return a;for(s=w(a,0),m=v*2,i=_*2,c=E(r),o=O(r),t=0;t<e;t++)l=s[i],f=s[i+1],z(c,o,l,f,s,1,i),i+=m;return a}p.exports=b
});var y=u(function(K,d){
var h=require('@stdlib/strided-base-stride2offset/dist'),k=n();function A(e,r,a,v){return k(e,r,a,v,h(e,v))}d.exports=A
});var g=u(function(L,j){
var B=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=y(),C=n();B(x,"ndarray",C);j.exports=x
});var D=require("path").join,F=require('@stdlib/utils-try-require/dist'),G=require('@stdlib/assert-is-error/dist'),H=g(),q,R=F(D(__dirname,"./native.js"));G(R)?q=H:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
