"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslToRgba = exports.hslaToRgb = exports.hslaToRgba = exports.hslToRgb = void 0;
const vscode = require("vscode");
function hslToRgb([h, s, l]) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
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
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
exports.hslToRgb = hslToRgb;
function hslaToRgba([h, s, l, a]) {
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
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
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
exports.hslaToRgba = hslaToRgba;
function hslaToRgb([h, s, l, a]) {
    if (a === 1) {
        return hslToRgb([h, s, l]);
    }
    else if (a < 1 && a >= 0) {
        return hslaToRgba([h, s, l, a]);
    }
    else {
        vscode.window.showErrorMessage("error in hslaToRgb()");
        throw new Error("error in hslaToRgb()");
    }
}
exports.hslaToRgb = hslaToRgb;
function hslToRgba([h, s, l]) {
    return hslaToRgba([h, s, l, 1]);
}
exports.hslToRgba = hslToRgba;
//# sourceMappingURL=hslsToRgb.js.map