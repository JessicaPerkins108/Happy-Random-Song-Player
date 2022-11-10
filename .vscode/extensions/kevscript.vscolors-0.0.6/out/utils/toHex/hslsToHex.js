"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToHex = exports.hslaToHexa = exports.hslToHexa = exports.hslToHex = void 0;
const vscode = require("vscode");
// HSL TO HEX
function hslToHex([h, s, l]) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    const [rr, gg, bb] = [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    });
    return "#" + rr + gg + bb;
}
exports.hslToHex = hslToHex;
// HSL TO HEXA
function hslToHexa([h, s, l]) {
    const hex = hslToHex([h, s, l]);
    return `${hex}ff`;
}
exports.hslToHexa = hslToHexa;
// HSLA TO HEXA
function hslaToHexa([h, s, l, a]) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs((h / 60) % 2 - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    let alpha = Math.round(a * 255).toString(16);
    const [rr, gg, bb, aa] = [r, g, b, alpha].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    });
    return "#" + rr + gg + bb + aa;
}
exports.hslaToHexa = hslaToHexa;
// HSLA TO HEX
function hslaToHex([h, s, l, a]) {
    if (a === 1) {
        return hslToHex([h, s, l]);
    }
    else if (a < 1) {
        return hslaToHexa([h, s, l, a]);
    }
    else {
        vscode.window.showErrorMessage('error in hslaToHex()');
        throw new Error('error in hslaToHex()');
    }
}
exports.hslaToHex = hslaToHex;
//# sourceMappingURL=hslsToHex.js.map