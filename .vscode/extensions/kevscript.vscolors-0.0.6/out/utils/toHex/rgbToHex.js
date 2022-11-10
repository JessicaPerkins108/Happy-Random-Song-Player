"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbToHex = void 0;
function rgbToHex(rgbArr) {
    return '#' + rgbArr.map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
exports.rgbToHex = rgbToHex;
//# sourceMappingURL=rgbToHex.js.map