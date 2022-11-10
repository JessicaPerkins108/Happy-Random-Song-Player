"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHexa = exports.formatHex = void 0;
const vscode = require("vscode");
function formatHex(clr) {
    // remove all whitespace
    const hex = clr.replace(/\s/g, "");
    // if hex-like input doesnt have 3 or 6 digits, its not a valid hex color
    if (hex.length !== 4 && hex.length !== 7) {
        vscode.window.showErrorMessage(`${clr} is not a valid hex code, check for typos`);
        throw new Error(`${clr} is not a valid hex code, check for typos`);
    }
    return hex;
}
exports.formatHex = formatHex;
function formatHexa(clr) {
    // remove all whitespace
    const hexa = clr.replace(/\s/g, "");
    // if hex-like input doesnt have 3 or 6 digits, its not a valid hex color
    if (hexa.length !== 5 && hexa.length !== 9) {
        vscode.window.showErrorMessage(`${clr} is not a valid HEXA (#rrggbbaa) color, check for typos`);
        throw new Error(`${clr} is not a valid HEXA (#rrggbbaa) color, check for typos`);
    }
    return hexa;
}
exports.formatHexa = formatHexa;
//# sourceMappingURL=formatHexs.js.map