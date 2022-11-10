"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getColorFormat = void 0;
const vscode = require("vscode");
function getColorFormat(clr) {
    const colorTypes = [
        {
            format: "rgb",
            regex: /(rgb)\(\s?\d{1,3}%?\s?(\s?,\s?\d{1,3}%?){2}\s?\)/gi
        },
        {
            format: "rgba",
            regex: /(rgb)a\(\s?(\d{1,3}%?\s?,\s?){3}(1|0?\.\d+)\s?\)/gi
        },
        {
            format: "hsl",
            regex: /(hsl)\(\s?\d{1,3}%?\s?(\s?,\s?\d{1,3}%?){2}\s?\)/gi
        },
        {
            format: "hsla",
            regex: /(hsl)a\(\s?(\d{1,3}%?\s?,\s?){3}(1|0?\.\d+)\s?\)/gi
        },
        {
            format: "hex",
            regex: /#([\da-f]{3}){1,2}/gi
        },
    ];
    const matchingType = colorTypes.find((type) => type.regex.test(clr) === true);
    if (!matchingType) {
        vscode.window.showErrorMessage(`Can't resolve color format of ${clr}`);
        throw new Error(`Can't resolve color format of ${clr}`);
    }
    const colorFormat = {
        format: matchingType.format,
        value: clr
    };
    return colorFormat;
}
exports.getColorFormat = getColorFormat;
//# sourceMappingURL=getColorFormat.js.map