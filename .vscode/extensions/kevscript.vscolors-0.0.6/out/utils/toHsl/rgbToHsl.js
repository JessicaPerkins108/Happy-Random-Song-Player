"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHsl = void 0;
function rgbToHsl([rr, gg, bb]) {
    // Make r, g, and b fractions of 1
    let r = rr /= 255;
    let g = gg /= 255;
    let b = bb /= 255;
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta === 0) {
        h = 0;
    }
    else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    }
    else if (cmax === g) {
        h = (b - r) / delta + 2;
    }
    else {
        h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) {
        h += 360;
    }
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return "hsl(" + h + ", " + Math.round(s) + "%, " + Math.round(l) + "%)";
}
exports.rgbToHsl = rgbToHsl;
//# sourceMappingURL=rgbToHsl.js.map