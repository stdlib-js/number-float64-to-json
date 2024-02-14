// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function s(s){if("number"!=typeof s)throw new TypeError(n("invalid argument. Must provide a number. Value: `%s`.",s));return s!=s?{type:"float64",value:"NaN"}:s===t?{type:"float64",value:"+Infinity"}:s===e?{type:"float64",value:"-Infinity"}:s}export{s as default};
//# sourceMappingURL=index.mjs.map
