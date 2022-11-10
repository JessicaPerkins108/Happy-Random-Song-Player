"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToHsl = exports.hslaToHsla = exports.hslToHsla = exports.hslToHsl = void 0;
const vscode = require("vscode");
// HSL TO HSL
function hslToHsl([h, s, l]) {
    return `hsl(${h}, ${s}%, ${l}%)`;
}
exports.hslToHsl = hslToHsl;
// HSL TO HSLA
function hslToHsla([h, s, l]) {
    return `hsla(${h}, ${s}%, ${l}%, 1)`;
}
exports.hslToHsla = hslToHsla;
// HSLA TO HSLA
function hslaToHsla([h, s, l, a]) {
    return `hsla(${h}, ${s}%, ${l}%, ${a})`;
}
exports.hslaToHsla = hslaToHsla;
// HSLA TO HSL
function hslaToHsl([h, s, l, a]) {
    if (a === 1) {
        return hslToHsl([h, s, l]);
    }
    else if (a < 1) {
        return hslaToHsla([h, s, l, a]);
    }
    else {
        vscode.window.showErrorMessage('error in hslaToHsl()');
        throw new Error('error in hslaToHsl()');
    }
}
exports.hslaToHsl = hslaToHsl;
//# sourceMappingURL=hslsToHsl.js.map