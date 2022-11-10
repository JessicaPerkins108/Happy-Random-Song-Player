"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToHex = exports.rgbaToHexa = exports.rgbToHexa = exports.rgbToHex = void 0;
const vscode = require("vscode");
// RGB TO HEX
function rgbToHex(rgbArr) {
    return '#' + rgbArr.map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
exports.rgbToHex = rgbToHex;
// RGB TO HEXA
function rgbToHexa(rgbArr) {
    const hex = rgbArr.map(x => {
        const clr = x.toString(16);
        return clr.length === 1 ? '0' + clr : clr;
    }).join('');
    return '#' + hex + 'ff';
}
exports.rgbToHexa = rgbToHexa;
// RGBA TO HEXA
function rgbaToHexa([rr, gg, bb, aa]) {
    let r = rr.toString(16);
    let g = gg.toString(16);
    let b = bb.toString(16);
    let a = Math.round(aa * 255).toString(16);
    if (r.length === 1) {
        r = "0" + r;
    }
    if (g.length === 1) {
        g = "0" + g;
    }
    if (b.length === 1) {
        b = "0" + b;
    }
    if (a.length === 1) {
        a = "0" + a;
    }
    return "#" + r + g + b + a;
}
exports.rgbaToHexa = rgbaToHexa;
// RGBA TO HEX
function rgbaToHex([r, g, b, a]) {
    if (a === 1) {
        return rgbToHex([r, g, b]);
    }
    else if (a < 1) {
        return rgbaToHexa([r, g, b, a]);
    }
    else {
        vscode.window.showErrorMessage('error in hslaToHex()');
        throw new Error(`Error in rgbaToHex()`);
    }
}
exports.rgbaToHex = rgbaToHex;
//# sourceMappingURL=rgbsToHex.js.map