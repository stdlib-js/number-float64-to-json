"use strict";var i=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var u=i(function(p,t){
var a=require('@stdlib/constants-float64-pinf/dist'),o=require('@stdlib/constants-float64-ninf/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function s(r){if(typeof r!="number")throw new TypeError(f('1dn9X',r));return r!==r?{type:"float64",value:"NaN"}:r===a?{type:"float64",value:"+Infinity"}:r===o?{type:"float64",value:"-Infinity"}:r}t.exports=s
});var v=u();module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
