"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToRgb = void 0;
const vscode = require("vscode");
const hslToRgb_1 = require("./hslToRgb");
function hslaToRgb([h, s, l, a]) {
    if (a === 1) {
        return hslToRgb_1.hslToRgb([h, s, l]);
    }
    else {
        vscode.window.showErrorMessage(`Can't parse HSLA format to RGB because of opacity value.`);
        throw new Error(`Can't parse HSLA format to RGB because of opacity value.`);
    }
}
exports.hslaToRgb = hslaToRgb;
//# sourceMappingURL=hslaToRgb.js.map