// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).arrayview2iteratorRight=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,f=r.__lookupGetter__,l=r.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?n:function(e,t,n){var c,a,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((a="value"in n)&&(f.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=n.value,e.__proto__=c):e[t]=n.value),y="get"in n,s="set"in n,a&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,t,n.get),s&&u&&u.call(e,t,n.set),e};var c=t;function a(e,t,n){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var y=/./;function s(e){return"boolean"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return p&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function v(e,t){return null!=e&&g.call(e,t)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var h=b()?function(e){var t,n,r;if(null==e)return d.call(e);n=e[m],t=v(e,m);try{e[m]=void 0}catch(t){return d.call(e)}return r=d.call(e),t?e[m]=n:delete e[m],r}:function(e){return d.call(e)},w=Boolean.prototype.toString;var j=b();function _(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return w.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===h(e)))}function S(e){return s(e)||_(e)}function E(){return new Function("return this;")()}a(S,"isPrimitive",s),a(S,"isObject",_);var T="object"==typeof self?self:null,O="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof I?I:null;var P=function(e){if(arguments.length){if(!s(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return E()}if(T)return T;if(O)return O;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),N=P.document&&P.document.childNodes,x=Int8Array;function B(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;a(B,"REGEXP",V);var C=Array.isArray?Array.isArray:function(e){return"[object Array]"===h(e)};function F(e){return null!==e&&"object"==typeof e}function G(e){var t,n,r,o;if(("Object"===(n=h(e).slice(8,-1))||"Error"===n)&&e.constructor){if("string"==typeof(r=e.constructor).name)return r.name;if(t=V.exec(r.toString()))return t[1]}return F(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}a(F,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var n,r;if(!C(t))return!1;if(0===(n=t.length))return!1;for(r=0;r<n;r++)if(!1===e(t[r]))return!1;return!0}}(F));var k="function"==typeof y||"object"==typeof x||"function"==typeof N?function(e){return G(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?G(e).toLowerCase():t};function L(e){return"function"===k(e)}var M=Math.floor;function R(e){return M(e)===e}function U(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&R(e.length)&&e.length>=0&&e.length<=9007199254740991}function Y(e){return"number"==typeof e}var X=Number,q=X.prototype.toString;var z=b();function D(e){return"object"==typeof e&&(e instanceof X||(z?function(e){try{return q.call(e),!0}catch(e){return!1}}(e):"[object Number]"===h(e)))}function H(e){return Y(e)||D(e)}a(H,"isPrimitive",Y),a(H,"isObject",D);var J=Number.POSITIVE_INFINITY,K=X.NEGATIVE_INFINITY;function Q(e){return e<J&&e>K&&R(e)}function W(e){return Y(e)&&Q(e)}function Z(e){return D(e)&&Q(e.valueOf())}function $(e){return W(e)||Z(e)}a($,"isPrimitive",W),a($,"isObject",Z);var ee="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&v(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function te(e,t){return e[t]}function ne(e,t){return e.get(t)}function re(e,t,n){e[t]=n}function oe(e,t,n){e.set(n,t)}function ie(e){var t=Boolean(e.get&&e.set);return{data:e,accessors:t,getter:t?ne:te,setter:t?oe:re}}function ue(){var e,t=arguments,n=t[0],r="https://stdlib.io/e/"+n+"?";for(e=1;e<t.length;e++)r+="&arg[]="+encodeURIComponent(t[e]);return r}return function e(t){var n,r,o,i,u,f,l,c,y;if(!U(t))throw new TypeError(ue("00r2a",t));if(1===(o=arguments.length))r=0,l=t.length;else if(2===o)L(arguments[1])?(r=0,f=arguments[1]):r=arguments[1],l=t.length;else if(3===o)L(arguments[1])?(r=0,l=t.length,f=arguments[1],n=arguments[2]):L(arguments[2])?(r=arguments[1],l=t.length,f=arguments[2]):(r=arguments[1],l=arguments[2]);else{if(r=arguments[1],l=arguments[2],!L(f=arguments[3]))throw new TypeError(ue("00r3E",f));n=arguments[4]}if(!W(r))throw new TypeError(ue("invalid argument. Second argument must be either an integer (starting view index) or a function. Value: `%s`.",r));if(!W(l))throw new TypeError(ue("invalid argument. Third argument must be either an integer (ending view index) or a function. Value: `%s`.",l));return l<0?(l=t.length+l)<0&&(l=0):l>t.length&&(l=t.length),r<0&&(r=t.length+r)<0&&(r=0),y=l,a(i={},"next",f?s:p),a(i,"return",b),ee&&a(i,ee,d),c=ie(t).getter,i;function s(){return y-=1,u||y<r?{done:!0}:{value:f.call(n,c(t,y),y,l-y-1,t),done:!1}}function p(){return y-=1,u||y<r?{done:!0}:{value:c(t,y),done:!1}}function b(e){return u=!0,arguments.length?{value:e,done:!0}:{done:!0}}function d(){return f?e(t,r,l,f,n):e(t,r,l)}}}));
//# sourceMappingURL=browser.js.map
