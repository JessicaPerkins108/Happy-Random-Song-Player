"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHex = void 0;
const vscode = require("vscode");
const hexsToHex_1 = require("./hexsToHex");
const rgbsToHex_1 = require("./rgbsToHex");
const hslsToHex_1 = require("./hslsToHex");
function toHex(formatedColor) {
    switch (formatedColor.type) {
        case "hex":
            return hexsToHex_1.hexToHex(formatedColor.value);
            break;
        case "rgb":
            return rgbsToHex_1.rgbToHex(formatedColor.value);
            break;
        case "hsl":
            return hslsToHex_1.hslToHex(formatedColor.value);
            break;
        case "rgba":
            return rgbsToHex_1.rgbaToHex(formatedColor.value);
            break;
        case "hsla":
            return hslsToHex_1.hslaToHex(formatedColor.value);
            break;
        case "hexa":
            return hexsToHex_1.hexaToHex(formatedColor.value);
            break;
        default:
            vscode.window.showErrorMessage('error from toHex()');
            throw new Error('error from toHex()');
            break;
    }
}
exports.toHex = toHex;
//# sourceMappingURL=index.js.map