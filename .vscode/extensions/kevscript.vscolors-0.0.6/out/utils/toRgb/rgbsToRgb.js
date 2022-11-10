"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToRgb = exports.rgbToRgba = exports.rgbaToRgba = exports.rgbToRgb = void 0;
const vscode = require("vscode");
function rgbToRgb(rgbArr) {
    return `rgb(${rgbArr[0]}, ${rgbArr[1]}, ${rgbArr[2]})`;
}
exports.rgbToRgb = rgbToRgb;
function rgbaToRgba([r, g, b, a]) {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
exports.rgbaToRgba = rgbaToRgba;
function rgbToRgba([r, g, b]) {
    return `rgba(${r}, ${g}, ${b}, 1)`;
}
exports.rgbToRgba = rgbToRgba;
function rgbaToRgb([r, g, b, a]) {
    if (a === 1) {
        return rgbToRgb([r, g, b]);
    }
    else if (a < 1) {
        return rgbaToRgba([r, g, b, a]);
    }
    else {
        vscode.window.showErrorMessage('error in rgbaToRgb()');
        throw new Error('error in rgbaToRgb()');
    }
}
exports.rgbaToRgb = rgbaToRgb;
//# sourceMappingURL=rgbsToRgb.js.map