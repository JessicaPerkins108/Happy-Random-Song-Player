"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const vscode = require("vscode");
const getColorType_1 = require("./getColorType");
describe('getColorType function', () => {
    vscode.window.showInformationMessage('Start tests for getColorType');
    it('recognizes HEX colors', () => {
        const hexInput = '#333333';
        const hexObject = getColorType_1.getColorType(hexInput);
        const expectedHexObject = {
            type: "hex",
            value: hexInput
        };
        chai_1.expect(hexObject).to.eql(expectedHexObject);
    });
    it('recognizes HEX-mini colors', () => {
        const hexInput = '#333';
        const hexObject = getColorType_1.getColorType(hexInput);
        const expectedHexObject = {
            type: "hex",
            value: hexInput
        };
        chai_1.expect(hexObject).to.eql(expectedHexObject);
    });
    it('recognizes HEXA colors', () => {
        const hexaInput = '#333333ff';
        const hexaObject = getColorType_1.getColorType(hexaInput);
        const expectedHexaObject = {
            type: "hexa",
            value: hexaInput
        };
        chai_1.expect(hexaObject).to.eql(expectedHexaObject);
    });
    it('recognizes HEXA-mini colors', () => {
        const hexaInput = '#333f';
        const hexaObject = getColorType_1.getColorType(hexaInput);
        const expectedHexaObject = {
            type: "hexa",
            value: hexaInput
        };
        chai_1.expect(hexaObject).to.eql(expectedHexaObject);
    });
    it('recognizes RGB colors', () => {
        const rgbInput = 'rgb(255,255,0)';
        const rgbObject = getColorType_1.getColorType(rgbInput);
        const expectedRgbObject = {
            type: "rgb",
            value: rgbInput
        };
        chai_1.expect(rgbObject).to.eql(expectedRgbObject);
    });
    it('recognizes RGBA colors', () => {
        const rgbaInput = 'rgba(255,255,0, 0.8)';
        const rgbaObject = getColorType_1.getColorType(rgbaInput);
        const expectedRgbaObject = {
            type: "rgba",
            value: rgbaInput
        };
        chai_1.expect(rgbaObject).to.eql(expectedRgbaObject);
    });
    it('recognizes HSL colors', () => {
        const hslInput = 'hsl(190, 65%, 58%)';
        const hslObject = getColorType_1.getColorType(hslInput);
        const expectedHslObject = {
            type: "hsl",
            value: hslInput
        };
        chai_1.expect(hslObject).to.eql(expectedHslObject);
    });
    it('recognizes HSLA colors', () => {
        const hslaInput = 'hsla(190, 65%, 58%, 0.8)';
        const hslaObject = getColorType_1.getColorType(hslaInput);
        const expectedHslaObject = {
            type: "hsla",
            value: hslaInput
        };
        chai_1.expect(hslaObject).to.eql(expectedHslaObject);
    });
    it('can parse unformatted inputs with unnecessary spaces', () => {
        const unformattedHex = '   #333333 ';
        const hexObject = getColorType_1.getColorType(unformattedHex);
        chai_1.expect(hexObject.type).to.eql("hex");
        const unformattedRgb = ' rgb(255 , 255 ,0 ) ';
        const rgbObject = getColorType_1.getColorType(unformattedRgb);
        chai_1.expect(rgbObject.type).to.eql("rgb");
        const unformattedRgba = ' rgba(255 , 255 ,0, 0.8 ) ';
        const rgbaObject = getColorType_1.getColorType(unformattedRgba);
        chai_1.expect(rgbaObject.type).to.eql("rgba");
        const unformattedHsl = ' hsl( 190 , 30%, 25% ) ';
        const hslObject = getColorType_1.getColorType(unformattedHsl);
        chai_1.expect(hslObject.type).to.eql("hsl");
        const unformattedHsla = ' hsla( 190 , 30%, 25% ,0.8 ) ';
        const hslaObject = getColorType_1.getColorType(unformattedHsla);
        chai_1.expect(hslaObject.type).to.eql("hsla");
    });
    it("returns Errors when can't recognize inputs", () => {
        const hex5Digits = '#33333';
        chai_1.expect(() => getColorType_1.getColorType(hex5Digits)).to.throw(Error);
        const hexSpacedOut = '#333 333';
        chai_1.expect(() => getColorType_1.getColorType(hexSpacedOut)).to.throw(Error);
        const hexSpacedOutAndUntrimed = '  #3333 3';
        chai_1.expect(() => getColorType_1.getColorType(hexSpacedOutAndUntrimed)).to.throw(Error);
        const rgbLackingB = 'rg(255,255,0)';
        chai_1.expect(() => getColorType_1.getColorType(rgbLackingB)).to.throw(Error);
        const hslWithoutPerc = 'hsl(190,50,50%)';
        chai_1.expect(() => getColorType_1.getColorType(hslWithoutPerc)).to.throw(Error);
        const hslaWithoutAlpha = 'hsla(190,50%,50%)';
        chai_1.expect(() => getColorType_1.getColorType(hslaWithoutAlpha)).to.throw(Error);
        const rgbaWithoutAlpha = 'rgba(255,255,0)';
        chai_1.expect(() => getColorType_1.getColorType(rgbaWithoutAlpha)).to.throw(Error);
    });
});
//# sourceMappingURL=getColorType.test.js.map