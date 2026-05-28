"use strict";var n=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var u=n(function(l,t){
var i=require('@stdlib/constants-float64-pinf/dist'),a=require('@stdlib/constants-float64-ninf/dist'),o=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r){if(typeof r!="number")throw new TypeError(o('1dn9X',r));return r!==r?{type:"float64",value:"NaN"}:r===i?{type:"float64",value:"+Infinity"}:r===a?{type:"float64",value:"-Infinity"}:r}t.exports=f
});var s=u();module.exports=s;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
