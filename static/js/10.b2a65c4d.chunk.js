(this.webpackJsonp1=this.webpackJsonp1||[]).push([[10,14,17,18],{35:function(n,t,r){"use strict";r.r(t),r.d(t,"noSpaceBetweenNumbers",(function(){return o})),r.d(t,"noConsecutiveSigns",(function(){return c})),r.d(t,"parsedNormally",(function(){return i})),r.d(t,"typicalMethods",(function(){return a})),r.d(t,"onlyNumbers",(function(){return f})),r.d(t,"upToNTerms",(function(){return s})),r.d(t,"noNumberMult",(function(){return d}));var e=r(72),u=r.n(e),o=(r(73),r(75),function(n){return!n.match(/[0-9] +[0-9]/)}),c=function(n){return!n.match(/[+\-*/] *[+\-*/]/)},i=function(n){try{return u()(n),!0}catch(t){return!1}},a=[o,c,i],f=function(n){return!n.match(/[^0-9+\-*/^ ]/)},s=function(n){return function(t){var r=["+","-"];return t.slice(1).split("").filter((function(n){return r.includes(n)})).length<n}},d=function(n){return!n.match(/[0-9] *\* *[0-9]/)}},36:function(n,t,r){"use strict";r.r(t),r.d(t,"compareNumbers",(function(){return o})),r.d(t,"nerd",(function(){return c}));var e=r(72),u=r.n(e),o=(r(73),r(75),function(n,t){var r=n.replace(/ /g,"");return"+"===r[0]&&(r=r.slice(1)),r===t}),c=function(n,t){try{return u()(n).eq(t)}catch(r){return!1}}},39:function(n,t,r){"use strict";r.r(t),r.d(t,"exBlueprint",(function(){return o}));var e=r(74),u=r(35),o={questionText:"Calculate and simplify:",questionMath:null,questionLatex:null,answerMath:null,checkMethod:r(36).compareNumbers,validationMethods:[].concat(Object(e.a)(u.typicalMethods),[u.onlyNumbers])}},44:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var e=r(79),u=r(77),o=r(72),c=r.n(o),i=(r(73),r(75),r(76)),a=r(78),f=r(39);function s(){var n=Object(e.a)(["$ "," $"]);return s=function(){return n},n}function d(){var n=Object(u.a)({},f.exBlueprint);n.questionText="Simplify the fraction:";var t,r,e;return t=(e=Object(i.d)(2,5))*Object(i.d)(1,10),r=e*Object(i.d)(1,10),n.questionMath="".concat(Object(a.d)(t)," / ").concat(Object(a.d)(r)),n.questionLatex=String.raw(s(),c.a.convertToLaTeX(n.questionMath)),n.answerMath=c()(n.questionMath).toString(),n}},74:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(16);var u=r(20);function o(n){return function(n){if(Array.isArray(n))return Object(e.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(u.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},76:function(n,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"e",(function(){return c})),r.d(t,"c",(function(){return i})),r.d(t,"f",(function(){return a})),r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return s})),r.d(t,"g",(function(){return d}));var e=r(74);function u(n,t){for(var r,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],u=Math.min(n,t),o=Math.max(n,t)+1;"undefined"===typeof r||e.includes(r);)r=Math.floor(Math.random()*(o-u)+u);return r}function o(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r<1)throw new Error("Generate less than 1 random integer?");if(1===r)return u(n,t,e);for(var o=[];o.length<r;)o.push(u(n,t,e));return o}function c(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(0===n&&0===t)throw new Error("Both nums are 0 in randomNonZeroIntBetween");return o(n,t,r,[0])}function i(){return!!o(0,1)}function a(n){return o(1,n)}function f(n){return n[o(0,n.length-1)]}function s(n,t){if(t>n.length)throw new Error("Elements  to pick are larger than array length");for(var r=new Set;r.size<t;)r.add(f(n));return Object(e.a)(r)}function d(n){for(var t,r,e=n.length;e;)r=Math.floor(Math.random()*e--),t=n[e],n[e]=n[r],n[r]=t;return n}},77:function(n,t,r){"use strict";function e(n,t,r){return t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function u(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.push.apply(r,e)}return r}function o(n){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){e(n,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(r,t))}))}return n}r.d(t,"a",(function(){return o}))},78:function(n,t,r){"use strict";function e(n){return n>0?"+".concat(n):"".concat(n)}function u(n){return n<0?"(".concat(n,")"):n}function o(n){return 1===n?"":"^".concat(n)}function c(n){return 1===n?"":-1===n?"-":n}r.d(t,"c",(function(){return e})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return c}))},79:function(n,t,r){"use strict";function e(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}r.d(t,"a",(function(){return e}))}}]);
//# sourceMappingURL=10.b2a65c4d.chunk.js.map