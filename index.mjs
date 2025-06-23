// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function s(s){if("number"!=typeof s)throw new TypeError(n("1dn9X",s));return s!=s?{type:"float64",value:"NaN"}:s===t?{type:"float64",value:"+Infinity"}:s===e?{type:"float64",value:"-Infinity"}:s}export{s as default};
//# sourceMappingURL=index.mjs.map
