(this.webpackJsonp1=this.webpackJsonp1||[]).push([[14,17,18],{35:function(n,t,r){"use strict";r.r(t),r.d(t,"noSpaceBetweenNumbers",(function(){return o})),r.d(t,"noConsecutiveSigns",(function(){return c})),r.d(t,"parsedNormally",(function(){return i})),r.d(t,"typicalMethods",(function(){return a})),r.d(t,"onlyNumbers",(function(){return s})),r.d(t,"upToNTerms",(function(){return f})),r.d(t,"noNumberMult",(function(){return l}));var e=r(72),u=r.n(e),o=(r(73),r(75),function(n){return!n.match(/[0-9] +[0-9]/)}),c=function(n){return!n.match(/[+\-*/] *[+\-*/]/)},i=function(n){try{return u()(n),!0}catch(t){return!1}},a=[o,c,i],s=function(n){return!n.match(/[^0-9+\-*/^ ]/)},f=function(n){return function(t){var r=["+","-"];return t.slice(1).split("").filter((function(n){return r.includes(n)})).length<n}},l=function(n){return!n.match(/[0-9] *\* *[0-9]/)}},36:function(n,t,r){"use strict";r.r(t),r.d(t,"compareNumbers",(function(){return o})),r.d(t,"nerd",(function(){return c}));var e=r(72),u=r.n(e),o=(r(73),r(75),function(n,t){var r=n.replace(/ /g,"");return"+"===r[0]&&(r=r.slice(1)),r===t}),c=function(n,t){try{return u()(n).eq(t)}catch(r){return!1}}},39:function(n,t,r){"use strict";r.r(t),r.d(t,"exBlueprint",(function(){return o}));var e=r(74),u=r(35),o={questionText:"Calculate and simplify:",questionMath:null,questionLatex:null,answerMath:null,checkMethod:r(36).compareNumbers,validationMethods:[].concat(Object(e.a)(u.typicalMethods),[u.onlyNumbers])}},74:function(n,t,r){"use strict";r.d(t,"a",(function(){return o}));var e=r(16);var u=r(20);function o(n){return function(n){if(Array.isArray(n))return Object(e.a)(n)}(n)||function(n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}(n)||Object(u.a)(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=14.113dc53b.chunk.js.map