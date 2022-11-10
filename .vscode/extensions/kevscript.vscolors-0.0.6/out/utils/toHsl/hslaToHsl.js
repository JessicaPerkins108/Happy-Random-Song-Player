"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToHsl = void 0;
const vscode = require("vscode");
const hslToHsl_1 = require("./hslToHsl");
function hslaToHsl([h, s, l, a]) {
    if (a === 1) {
        return hslToHsl_1.hslToHsl([h, s, l]);
    }
    else {
        vscode.window.showErrorMessage(`Can't parse HSLA format to HSL because of opacity value.`);
        throw new Error(`Can't parse HSLA format to HSL because of opacity value.`);
    }
}
exports.hslaToHsl = hslaToHsl;
//# sourceMappingURL=hslaToHsl.js.map