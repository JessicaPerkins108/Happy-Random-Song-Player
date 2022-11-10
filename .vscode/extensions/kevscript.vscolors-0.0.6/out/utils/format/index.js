"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatColor = void 0;
const formatHexs_1 = require("./formatHexs");
const formatHsls_1 = require("./formatHsls");
const formatRgbs_1 = require("./formatRgbs");
function formatColor(colorType) {
    switch (colorType.type) {
        case "rgb":
            return {
                type: colorType.type,
                value: formatRgbs_1.formatRgb(colorType.value)
            };
            break;
        case "hex":
            return {
                type: colorType.type,
                value: formatHexs_1.formatHex(colorType.value)
            };
            break;
        case "rgba":
            return {
                type: colorType.type,
                value: formatRgbs_1.formatRgba(colorType.value)
            };
            break;
        case "hsl":
            return {
                type: colorType.type,
                value: formatHsls_1.formatHsl(colorType.value)
            };
            break;
        case "hsla":
            return {
                type: colorType.type,
                value: formatHsls_1.formatHsla(colorType.value)
            };
            break;
        case "hexa":
            return {
                type: colorType.type,
                value: formatHexs_1.formatHexa(colorType.value)
            };
            break;
        default:
            throw new Error('error from formatColor()');
            break;
    }
}
exports.formatColor = formatColor;
//# sourceMappingURL=index.js.map