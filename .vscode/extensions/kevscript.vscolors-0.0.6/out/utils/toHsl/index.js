"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHsl = void 0;
const vscode = require("vscode");
const hexsToHsl_1 = require("./hexsToHsl");
const hslsToHsl_1 = require("./hslsToHsl");
const rgbsToHsl_1 = require("./rgbsToHsl");
function toHsl(formatedColor) {
    switch (formatedColor.type) {
        case "hsl":
            return hslsToHsl_1.hslToHsl(formatedColor.value);
            break;
        case "hex":
            return hexsToHsl_1.hexToHsl(formatedColor.value);
            break;
        case "rgb":
            return rgbsToHsl_1.rgbToHsl(formatedColor.value);
            break;
        case "hexa":
            return hexsToHsl_1.hexaToHsl(formatedColor.value);
            break;
        case "rgba":
            return rgbsToHsl_1.rgbaToHsl(formatedColor.value);
            break;
        case "hsla":
            return hslsToHsl_1.hslaToHsl(formatedColor.value);
            break;
        default:
            vscode.window.showErrorMessage('error from toHsl()');
            throw new Error('error from toHsl()');
            break;
    }
}
exports.toHsl = toHsl;
//# sourceMappingURL=index.js.map