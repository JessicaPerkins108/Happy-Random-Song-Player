"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatHsl = void 0;
function formatHsl(clr) {
    // remove all whitepsace
    let hsl = clr.replace(/\s/g, "");
    let sep = hsl.indexOf(",") > -1 ? "," : " ";
    hsl = hsl.substr(4).split(")")[0].split(sep);
    let h = hsl[0];
    let s = parseInt(hsl[1].substr(0, hsl[1].length - 1));
    let l = parseInt(hsl[2].substr(0, hsl[2].length - 1));
    // Strip label and convert to degrees (if necessary)
    if (h.indexOf("deg") > -1) {
        h = h.substr(0, h.length - 3);
    }
    else if (h.indexOf("rad") > -1) {
        h = Math.round((h.substr(0, h.length - 3)) * (180 / Math.PI));
    }
    else if (h.indexOf("turn") > -1) {
        h = Math.round((h.substr(0, h.length - 4)) * 360);
    }
    if (h >= 360) {
        h %= 360;
    }
    // if % are over 100
    if (s >= 100) {
        s = 100;
    }
    ;
    if (l >= 100) {
        l = 100;
    }
    ;
    return [parseInt(h), s, l];
}
exports.formatHsl = formatHsl;
//# sourceMappingURL=formatHsl.js.map