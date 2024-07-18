// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/complex-float64-base-mul@esm/index.mjs";function t(e,t,n,s){var i,o;if(e<=0||s<=0)return n;if(1===s){for(o=0;o<e;o++)n.set(r(t,n.get(o)),o);return n}for(i=0,o=0;o<e;o++)n.set(r(t,n.get(i)),i),i+=s;return n}function n(e,t,n,s,i){var o,a;if(e<=0||s<=0)return n;for(o=i,a=0;a<e;a++)n.set(r(t,n.get(o)),o),o+=s;return n}e(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
