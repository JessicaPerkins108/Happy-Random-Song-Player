"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToHsl = exports.rgbaToHsla = exports.rgbToHsla = exports.rgbToHsl = void 0;
const vscode = require("vscode");
// RGB TO HSL
function rgbToHsl([rr, gg, bb]) {
    // Make r, g, and b fractions of 1
    let r = rr /= 255;
    let g = gg /= 255;
    let b = bb /= 255;
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsl(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%)";
}
exports.rgbToHsl = rgbToHsl;
// RGB TO HSLA
function rgbToHsla([rr, gg, bb]) {
    // Make r, g, and b fractions of 1
    let r = rr /= 255;
    let g = gg /= 255;
    let b = bb /= 255;
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsla(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%, 1)";
}
exports.rgbToHsla = rgbToHsla;
// RGBA TO HSLA
function rgbaToHsla([rr, gg, bb, a]) {
    // Make r, g, and b fractions of 1
    let r = rr /= 255;
    let g = gg /= 255;
    let b = bb /= 255;
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsla(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%, " + a + ")";
}
exports.rgbaToHsla = rgbaToHsla;
// RGBA TO HSL
function rgbaToHsl([r, g, b, a]) {
    if (a === 1) {
        return rgbToHsl([r, g, b]);
    }
    else if (a < 1) {
        return rgbaToHsla([r, g, b, a]);
    }
    else {
        vscode.window.showErrorMessage("error in rgbaToHsl()");
        throw new Error("error in rgbaToHsl()");
    }
}
exports.rgbaToHsl = rgbaToHsl;
//# sourceMappingURL=rgbsToHsl.js.map