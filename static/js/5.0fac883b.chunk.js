(this.webpackJsonp1=this.webpackJsonp1||[]).push([[5,8],{32:function(n,t,r){"use strict";r.r(t),r.d(t,"compareNumbers",(function(){return u})),r.d(t,"nerd",(function(){return o})),r.d(t,"nerdOneVar",(function(){return i})),r.d(t,"nerdTwoVars",(function(){return a}));var e=r(60),c=r.n(e),u=(r(61),r(62),function(n,t){return n===t}),o=function(n,t){try{return c()(n).eq(t)}catch(r){return!1}},i=function(n,t){var r=["+","-","*","/"];try{return!(n.slice(1).split("").filter((function(n){return r.includes(n)})).length>1)&&o(n,t)}catch(e){return console.log(e),o(n,t)}},a=function(n,t){var r=["+","-","*","/"];try{return!(n.slice(1).split("").filter((function(n){return r.includes(n)})).length>2)&&o(n,t)}catch(e){return console.log(e),o(n,t)}}},38:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return f}));var e=r(19),c=r(60),u=r.n(c),o=(r(61),r(62),r(63)),i=r(64),a=r(32);function s(){var n=Object(e.a)(["$ "," $"]);return s=function(){return n},n}function f(){var n={questionText:null,questionMath:null,questionLatex:null,answerMath:null,checkMethod:null},t=["+","-","*","/"][Object(o.b)(0,3)];if("/"!==t){var r=Object(o.b)(-10,10),e=Object(o.b)(-10,10);n.questionMath="".concat("*"===t?Object(i.a)(r):r," ").concat(t," ").concat(Object(i.a)(e))}else{var c,f,l;Object(o.a)()?(l=Object(o.b)(-10,10),c=(f=Object(o.c)(-10,10))*l):(l=Object(o.c)(-10,10),f=(c=Object(o.c)(-10,10))*l),n.questionMath="".concat(Object(i.a)(c)," / ").concat(Object(i.a)(f))}return n.questionText="\u03a5\u03c0\u03bf\u03bb\u03cc\u03b3\u03b9\u03c3\u03b5:",n.questionLatex=String.raw(s(),u.a.convertToLaTeX(n.questionMath)),n.answerMath=u()(n.questionMath).toString(),n.checkMethod=a.compareNumbers,n}},63:function(n,t,r){"use strict";function e(n,t){var r=Math.min(n,t),e=Math.max(n,t)+1;return Math.floor(Math.random()*(e-r)+r)}function c(n,t){if(0===n&&0===t)throw new Error("Both nums are 0 in randomNonZeroIntBetween");for(var r;!r||0===r;)r=e(n,t);return r}function u(){return!!e(0,1)}function o(n){return e(1,n)}r.d(t,"b",(function(){return e})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"d",(function(){return o}))},64:function(n,t,r){"use strict";function e(n){return n<0?"(".concat(n,")"):n}r.d(t,"a",(function(){return e}))}}]);
//# sourceMappingURL=5.0fac883b.chunk.js.map