// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function i(e){return"number"==typeof e}function a(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function t(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+a(n):a(n)+e,t&&(e="-"+e)),e}var n=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function o(e){var r,a,o;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(a=e.arg,o=parseInt(a,10),!isFinite(o)){if(!i(a))throw new Error("invalid integer. Value: "+a);o=0}return o<0&&("u"===e.specifier||10!==r)&&(o=4294967295+o+1),o<0?(a=(-o).toString(r),e.precision&&(a=t(a,e.precision,e.padRight)),a="-"+a):(a=o.toString(r),o||e.precision?e.precision&&(a=t(a,e.precision,e.padRight)):a="",e.sign&&(a=e.sign+a)),16===r&&(e.alternate&&(a="0x"+a),a=e.specifier===s.call(e.specifier)?s.call(a):n.call(a)),8===r&&e.alternate&&"0"!==a.charAt(0)&&(a="0"+a),a}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,u=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,m=/(\..*[^0])0*e/;function y(e){var r,a,t=parseFloat(e.arg);if(!isFinite(t)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+a);t=e.arg}switch(e.specifier){case"e":case"E":a=t.toExponential(e.precision);break;case"f":case"F":a=t.toFixed(e.precision);break;case"g":case"G":p(t)<1e-4?((r=e.precision)>0&&(r-=1),a=t.toExponential(r)):a=t.toPrecision(e.precision),e.alternate||(a=g.call(a,m,"$1e"),a=g.call(a,b,"e"),a=g.call(a,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return a=g.call(a,u,"e+0$1"),a=g.call(a,d,"e-0$1"),e.alternate&&(a=g.call(a,h,"$1."),a=g.call(a,w,"$1.e")),t>=0&&e.sign&&(a=e.sign+a),a=e.specifier===f.call(e.specifier)?f.call(a):l.call(a)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function I(e,r,i){var a=r-e.length;return a<0?e:e=i?e+E(a):E(a)+e}var x=String.fromCharCode,k=isNaN,V=Array.isArray;function N(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,a,n,s,p,l,f,g;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,f=0;f<e.length;f++)if(c(a=e[f]))p+=a;else{if(r=void 0!==a.precision,!(a=N(a)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+a+"`.");for(a.mapping&&(l=a.mapping),i=a.flags,g=0;g<i.length;g++)switch(n=i.charAt(g)){case" ":a.sign=" ";break;case"+":a.sign="+";break;case"-":a.padRight=!0,a.padZeros=!1;break;case"0":a.padZeros=i.indexOf("-")<0;break;case"#":a.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===a.width){if(a.width=parseInt(arguments[l],10),l+=1,k(a.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+a.width+"`.");a.width<0&&(a.padRight=!0,a.width=-a.width)}if(r&&"*"===a.precision){if(a.precision=parseInt(arguments[l],10),l+=1,k(a.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+a.precision+"`.");a.precision<0&&(a.precision=1,r=!1)}switch(a.arg=arguments[l],a.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(a.padZeros=!1),a.arg=o(a);break;case"s":a.maxWidth=r?a.precision:-1;break;case"c":if(!k(a.arg)){if((s=parseInt(a.arg,10))<0||s>127)throw new Error("invalid character code. Value: "+a.arg);a.arg=k(s)?String(a.arg):x(s)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(a.precision=6),a.arg=y(a);break;default:throw new Error("invalid specifier: "+a.specifier)}a.maxWidth>=0&&a.arg.length>a.maxWidth&&(a.arg=a.arg.substring(0,a.maxWidth)),a.padZeros?a.arg=t(a.arg,a.width||a.precision,a.padRight):a.width&&(a.arg=I(a.arg,a.width,a.padRight)),p+=a.arg||"",l+=1}return p}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function $(e){var r,i,a,t;for(i=[],t=0,a=F.exec(e);a;)(r=e.slice(t,F.lastIndex-a[0].length)).length&&i.push(r),i.push(S(a)),t=F.lastIndex,a=F.exec(e);return(r=e.slice(t)).length&&i.push(r),i}function A(e){return"string"==typeof e}function C(e){var r,i,a;if(!A(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=$(e),(i=new Array(arguments.length))[0]=r,a=1;a<i.length;a++)i[a]=arguments[a];return T.apply(null,i)}function R(i){if("number"!=typeof i)throw new TypeError(C("invalid argument. Must provide a number. Value: `%s`.",i));return i!=i?{type:"float64",value:"NaN"}:i===e?{type:"float64",value:"+Infinity"}:i===r?{type:"float64",value:"-Infinity"}:i}export{R as default};
//# sourceMappingURL=mod.js.map