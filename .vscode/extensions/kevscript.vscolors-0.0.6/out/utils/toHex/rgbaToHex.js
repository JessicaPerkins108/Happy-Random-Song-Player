"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToHex = void 0;
const vscode = require("vscode");
const rgbToHex_1 = require("./rgbToHex");
function rgbaToHex([r, g, b, a]) {
    if (a === 1) {
        return rgbToHex_1.rgbToHex([r, g, b]);
    }
    else {
        vscode.window.showErrorMessage(`Can't parse RGBA format to HEX because of opacity value.`);
        throw new Error(`Can't parse RGBA format to HEX because of opacity value.`);
    }
}
exports.rgbaToHex = rgbaToHex;
//# sourceMappingURL=rgbaToHex.js.map