"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHex = void 0;
const vscode = require("vscode");
function formatHex(clr) {
    // remove all whitespace
    const hex = clr.replace(/\s/g, "");
    if (hex.length !== 4 && hex.length !== 7) {
        vscode.window.showErrorMessage(`${clr} is not a valid hex code, check for typos`);
        throw new Error(`${clr} is not a valid hex code, check for typos`);
    }
    return hex;
}
exports.formatHex = formatHex;
//# sourceMappingURL=formatHex.js.map