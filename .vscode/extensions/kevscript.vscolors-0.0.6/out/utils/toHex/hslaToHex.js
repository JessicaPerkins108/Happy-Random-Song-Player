"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToHex = void 0;
const vscode = require("vscode");
const hslToHex_1 = require("./hslToHex");
function hslaToHex([h, s, l, a]) {
    if (a === 1) {
        return hslToHex_1.hslToHex([h, s, l]);
    }
    else {
        vscode.window.showErrorMessage(`Can't parse HSLA format to HEX because of opacity value.`);
        throw new Error(`Can't parse HSLA format to HEX because of opacity value.`);
    }
}
exports.hslaToHex = hslaToHex;
//# sourceMappingURL=hslaToHex.js.map