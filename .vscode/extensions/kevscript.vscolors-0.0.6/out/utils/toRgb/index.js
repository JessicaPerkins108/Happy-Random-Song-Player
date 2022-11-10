"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toRgb = void 0;
const vscode = require("vscode");
const hexsToRgb_1 = require("./hexsToRgb");
const hslsToRgb_1 = require("./hslsToRgb");
const rgbsToRgb_1 = require("./rgbsToRgb");
function toRgb(formatedColor) {
    switch (formatedColor.type) {
        case "rgb":
            return rgbsToRgb_1.rgbToRgb(formatedColor.value);
            break;
        case "hex":
            return hexsToRgb_1.hexToRgb(formatedColor.value);
            break;
        case "hsl":
            return hslsToRgb_1.hslToRgb(formatedColor.value);
            break;
        case "hexa":
            return hexsToRgb_1.hexaToRgb(formatedColor.value);
            break;
        case "rgba":
            return rgbsToRgb_1.rgbaToRgb(formatedColor.value);
            break;
        case "hsla":
            return hslsToRgb_1.hslaToRgb(formatedColor.value);
            break;
        default:
            vscode.window.showErrorMessage('error from toRgb()');
            throw new Error('error from toRgb()');
            break;
    }
}
exports.toRgb = toRgb;
//# sourceMappingURL=index.js.map