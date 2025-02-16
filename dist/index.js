"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(K,p){
var _=require('@stdlib/strided-base-reinterpret-complex128/dist'),w=require('@stdlib/complex-float64-base-mul/dist').assign,E=require('@stdlib/complex-float64-real/dist'),O=require('@stdlib/complex-float64-imag/dist');function b(e,r,a,v,t){var s,c,f,l,m,d,i,u;if(e<=0)return a;for(s=_(a,0),d=v*2,i=t*2,c=E(r),f=O(r),u=0;u<e;u++)l=s[i],m=s[i+1],w(c,f,l,m,s,1,i),i+=d;return a}p.exports=b
});var y=n(function(L,x){
var k=require('@stdlib/strided-base-stride2offset/dist'),A=q();function B(e,r,a,v){var t=k(e,v);return A(e,r,a,v,t)}x.exports=B
});var g=n(function(M,j){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=y(),D=q();C(z,"ndarray",D);j.exports=z
});var F=require("path").join,G=require('@stdlib/utils-try-require/dist'),H=require('@stdlib/assert-is-error/dist'),I=g(),o,R=G(F(__dirname,"./native.js"));H(R)?o=I:o=R;module.exports=o;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
