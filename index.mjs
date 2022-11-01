// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function d(l){var m,a,h,g,u,f,j,p,c;if(!n(l))throw new TypeError(o("00r2a",l));if(1===(h=arguments.length))a=0,j=l.length;else if(2===h)t(arguments[1])?(a=0,f=arguments[1]):a=arguments[1],j=l.length;else if(3===h)t(arguments[1])?(a=0,j=l.length,f=arguments[1],m=arguments[2]):t(arguments[2])?(a=arguments[1],j=l.length,f=arguments[2]):(a=arguments[1],j=arguments[2]);else{if(a=arguments[1],j=arguments[2],!t(f=arguments[3]))throw new TypeError(o("00r3E",f));m=arguments[4]}if(!r(a))throw new TypeError(o("invalid argument. Second argument must be either an integer (starting view index) or a function. Value: `%s`.",a));if(!r(j))throw new TypeError(o("invalid argument. Third argument must be either an integer (ending view index) or a function. Value: `%s`.",j));return j<0?(j=l.length+j)<0&&(j=0):j>l.length&&(j=l.length),a<0&&(a=l.length+a)<0&&(a=0),c=j,e(g={},"next",f?v:b),e(g,"return",x),i&&e(g,i,w),p=s(l).getter,g;function v(){return c-=1,u||c<a?{done:!0}:{value:f.call(m,p(l,c),c,j-c-1,l),done:!1}}function b(){return c-=1,u||c<a?{done:!0}:{value:p(l,c),done:!1}}function x(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function w(){return f?d(l,a,j,f,m):d(l,a,j)}}export{d as default};
//# sourceMappingURL=index.mjs.map
