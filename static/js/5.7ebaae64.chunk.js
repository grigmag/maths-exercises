(this.webpackJsonp1=this.webpackJsonp1||[]).push([[5,14,15,16,17],{36:function(t,n,r){"use strict";r.r(n),r.d(n,"noSpaceBetweenNumbers",(function(){return u})),r.d(n,"noConsecutiveSigns",(function(){return c})),r.d(n,"parsedNormally",(function(){return i})),r.d(n,"typicalMethods",(function(){return a})),r.d(n,"onlyNumbers",(function(){return f})),r.d(n,"upToNTerms",(function(){return s})),r.d(n,"noNumberMult",(function(){return l}));var e=r(72),o=r.n(e),u=(r(73),r(75),function(t){return!t.match(/[0-9] +[0-9]/)}),c=function(t){return!t.match(/[+\-*/] *[+\-*/]/)},i=function(t){try{return o()(t),!0}catch(n){return!1}},a=[u,c,i],f=function(t){return!t.match(/[^0-9+\-*/^ ]/)},s=function(t){return function(n){var r=["+","-"];return n.slice(1).split("").filter((function(t){return r.includes(t)})).length<t}},l=function(t){return!t.match(/[0-9] *\* *[0-9]/)}},37:function(t,n,r){"use strict";r.r(n),r.d(n,"compareNumbers",(function(){return u})),r.d(n,"nerd",(function(){return c}));var e=r(72),o=r.n(e),u=(r(73),r(75),function(t,n){var r=t.replace(/ /g,"");return"+"===r[0]&&(r=r.slice(1)),r===n}),c=function(t,n){try{return o()(t).eq(n)}catch(r){return!1}}},38:function(t,n,r){"use strict";r.r(n),r.d(n,"varNameList",(function(){return e}));var e=["x","y","z","b","c","d","k","l","m","n","s","t"]},40:function(t,n,r){"use strict";r.r(n),r.d(n,"exBlueprint",(function(){return u}));var e=r(74),o=r(36),u={questionText:"\u039a\u03ac\u03bd\u03b5 \u03c4\u03b9\u03c2 \u03c0\u03c1\u03ac\u03be\u03b5\u03b9\u03c2:",questionMath:null,questionLatex:null,answerMath:null,checkMethod:r(37).nerd,validationMethods:[].concat(Object(e.a)(o.typicalMethods),[o.noNumberMult])}},48:function(t,n,r){"use strict";r.r(n),r.d(n,"default",(function(){return h}));var e=r(74),o=r(22),u=r(79),c=r(77),i=r(72),a=r.n(i),f=(r(73),r(75),r(76)),s=r(78),l=r(36),d=r(38),b=r(40);function h(){for(var t=Object(c.a)({},b.exBlueprint),n=Object(f.e)(-5,5,2),r=Object(u.a)(n,2),i=r[0],h=r[1],y=Object(f.b)(d.varNameList,3),p=[],v=0;v<2;++v){var m,O=Object(f.f)(3),j=Object(f.b)(y,O),g="",w=Object(o.a)(j);try{for(w.s();!(m=w.n()).done;){var M=m.value;g+="".concat(M).concat(Object(s.a)(Object(f.d)(1,4))," ")}}catch(S){w.e(S)}finally{w.f()}p.push(g)}return t.questionMath="(".concat(i," ").concat(p[0],") / (").concat(h," ").concat(p[1],")"),t.questionLatex="$\\frac{".concat(i," ").concat(p[0],"}{").concat(h," ").concat(p[1],"}$"),t.answerMath=a()(t.questionMath).toString(),t.validationMethods=[].concat(Object(e.a)(t.validationMethods),[Object(l.upToNTerms)(1)]),t}},74:function(t,n,r){"use strict";r.d(n,"a",(function(){return u}));var e=r(16);var o=r(20);function u(t){return function(t){if(Array.isArray(t))return Object(e.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},76:function(t,n,r){"use strict";r.d(n,"d",(function(){return u})),r.d(n,"e",(function(){return c})),r.d(n,"c",(function(){return i})),r.d(n,"f",(function(){return a})),r.d(n,"a",(function(){return f})),r.d(n,"b",(function(){return s})),r.d(n,"g",(function(){return l}));var e=r(74);function o(t,n){for(var r,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=Math.min(t,n),u=Math.max(t,n)+1;"undefined"===typeof r||e.includes(r);)r=Math.floor(Math.random()*(u-o)+o);return r}function u(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(r<1)throw new Error("Generate less than 1 random integer?");if(1===r)return o(t,n,e);for(var u=[];u.length<r;)u.push(o(t,n,e));return u}function c(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;if(0===t&&0===n)throw new Error("Both nums are 0 in randomNonZeroIntBetween");return u(t,n,r,[0])}function i(){return!!u(0,1)}function a(t){return u(1,t)}function f(t){return t[u(0,t.length-1)]}function s(t,n){if(n>t.length)throw new Error("Elements  to pick are larger than array length");for(var r=new Set;r.size<n;)r.add(f(t));return Object(e.a)(r)}function l(t){for(var n,r,e=t.length;e;)r=Math.floor(Math.random()*e--),n=t[e],t[e]=t[r],t[r]=n;return t}},77:function(t,n,r){"use strict";function e(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function o(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function u(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}r.d(n,"a",(function(){return u}))},78:function(t,n,r){"use strict";function e(t){return t>0?"+".concat(t):"".concat(t)}function o(t){return t<0?"(".concat(t,")"):t}function u(t){return 1===t?"":"^".concat(t)}r.d(n,"b",(function(){return e})),r.d(n,"c",(function(){return o})),r.d(n,"a",(function(){return u}))},79:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r(20);function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],e=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(e=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);e=!0);}catch(a){o=!0,u=a}finally{try{e||null==i.return||i.return()}finally{if(o)throw u}}return r}}(t,n)||Object(e.a)(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5.7ebaae64.chunk.js.map