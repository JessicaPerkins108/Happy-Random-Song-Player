"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHexa = void 0;
const vscode = require("vscode");
function formatHexa(clr) {
    // remove all whitespace
    const hexa = clr.replace(/\s/g, "");
    if (hexa.length !== 5 && hexa.length !== 9) {
        vscode.window.showErrorMessage(`${clr} is not a valid HEXA (#rrggbbaa) color, check for typos`);
        throw new Error(`${clr} is not a valid HEXA (#rrggbbaa) color, check for typos`);
    }
    return hexa;
}
exports.formatHexa = formatHexa;
//# sourceMappingURL=formatHexa.js.map