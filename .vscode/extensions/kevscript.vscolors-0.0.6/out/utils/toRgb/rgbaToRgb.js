"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToRgb = void 0;
const vscode = require("vscode");
const rgbToRgb_1 = require("./rgbToRgb");
function rgbaToRgb([r, g, b, a]) {
    if (a === 1) {
        return rgbToRgb_1.rgbToRgb([r, g, b]);
    }
    else {
        vscode.window.showErrorMessage(`Can't parse RGBA format to RGB because of opacity value.`);
        throw new Error(`Can't parse RGBA format to RGB because of opacity value.`);
    }
}
exports.rgbaToRgb = rgbaToRgb;
//# sourceMappingURL=rgbaToRgb.js.map