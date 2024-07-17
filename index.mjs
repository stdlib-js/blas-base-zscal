// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-cmul@v0.2.1-esm/index.mjs";function t(r,t,n,s){var i,o;if(r<=0||s<=0)return n;if(1===s){for(o=0;o<r;o++)n.set(e(t,n.get(o)),o);return n}for(i=0,o=0;o<r;o++)n.set(e(t,n.get(i)),i),i+=s;return n}function n(r,t,n,s,i){var o,a;if(r<=0||s<=0)return n;for(o=i,a=0;a<r;a++)n.set(e(t,n.get(o)),o),o+=s;return n}r(t,"ndarray",n);export{t as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
