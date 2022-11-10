"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexaToHexa = exports.hexToHexa = exports.hexaToHex = exports.hexToHex = void 0;
const vscode = require("vscode");
// HEX TO HEX
function hexToHex(hex) {
    return hex;
}
exports.hexToHex = hexToHex;
// HEXA TO HEX
function hexaToHex(clr) {
    const arr = clr.split('');
    // check for hexa full format
    if (arr.length === 9) {
        if ((arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') && (arr[arr.length - 2] === 'f' || arr[arr.length - 2] === 'F')) {
            arr.splice(7, 2);
            const hex = arr.join('');
            return hexToHex(hex);
        }
        else {
            vscode.window.showErrorMessage(`Can't parse HEXA format to HEX because of opacity value.`);
            throw new Error(`Can't parse HEXA format to HEX because of opacity value.`);
        }
        // check for short version
    }
    else if (arr.length === 5) {
        if (arr[arr.length - 1] === 'f' || arr[arr.length - 1] === 'F') {
            arr.splice(4, 1);
            const hex = arr.join('');
            return hexToHex(hex);
        }
        else {
            vscode.window.showErrorMessage(`Can't parse HEXA format to HEX because of opacity value.`);
            throw new Error(`Can't parse HEXA format to HEX because of opacity value.`);
        }
    }
    vscode.window.showErrorMessage(`Error in hexaToHex().`);
    throw new Error(`Error in hexaToHex().`);
}
exports.hexaToHex = hexaToHex;
// HEX TO HEXA
function hexToHexa(hex) {
    if (hex.length === 4) {
        return `${hex}f`;
    }
    else if (hex.length === 7) {
        return `${hex}ff`;
    }
    else {
        vscode.window.showErrorMessage(`Can't parse Hex-life input ${hex} to Hexa.`);
        throw new Error(`Can't parse Hex-life input ${hex} to Hexa.`);
    }
}
exports.hexToHexa = hexToHexa;
// HEXA TO HEXA
function hexaToHexa(hexa) {
    return hexa;
}
exports.hexaToHexa = hexaToHexa;
//# sourceMappingURL=hexsToHex.js.map