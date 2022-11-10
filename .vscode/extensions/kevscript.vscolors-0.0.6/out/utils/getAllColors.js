"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllColors = void 0;
function getAllColors(text) {
    const colorTypes = [
        {
            type: "rgb",
            regex: /^rgb\(\s?\d{1,3}%?\s?(\s?,\s?\d{1,3}%?){2}\s?\)/gi
            // precise version
            // regex: /rgb\(\s?(([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])|((100|[1-9]?[0-9])\s?\%))\s?\,\s?(([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])|((100|[1-9]?[0-9])\s?\%))\s?\,\s?(([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])|((100|[1-9]?[0-9])\s?\%))\s?\)/gi    
        },
        {
            type: "rgba",
            regex: /^rgba\(\s?(\d{1,3}%?\s?,\s?){3}(1|0?\.\d+)\s?\)/gi
        },
        {
            type: "hsl",
            regex: /^hsl\(\s?\d{1,3}\s?(,\s?\d{1,3}%){2}\s?\)/gi
        },
        {
            type: "hsla",
            regex: /^hsla\(\s?\d{1,3}\s?(,\s?\d{1,3}%){2}\s?,\s?(1|0?\.\d+)\s?\)/gi
        },
        {
            type: "hex",
            regex: /^#([\da-f]{3}){1,2}$/gi
        },
        {
            type: "hexa",
            regex: /^#([\da-f]{4}){1,2}$/gi
        }
    ];
    const txt = '#333 #444 fsdfsdf#hg #dfjkqjh';
    let matches = /f/.exec(txt);
    return matches;
}
exports.getAllColors = getAllColors;
//# sourceMappingURL=getAllColors.js.map