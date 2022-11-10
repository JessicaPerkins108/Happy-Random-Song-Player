"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToHsl = void 0;
const vscode = require("vscode");
const rgbToHsl_1 = require("./rgbToHsl");
function rgbaToHsl([r, g, b, a]) {
    if (a === 1) {
        return rgbToHsl_1.rgbToHsl([r, g, b]);
    }
    else {
        vscode.window.showErrorMessage(`Can't parse RGBA format to HSL because of opacity value.`);
        throw new Error(`Can't parse RGBA format to HSL because of opacity value.`);
    }
}
exports.rgbaToHsl = rgbaToHsl;
//# sourceMappingURL=rgbaToHsl.js.map