"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const getColorType_1 = require("./utils/getColorType");
const format_1 = require("./utils/format");
const toHex_1 = require("./utils/toHex");
const toRgb_1 = require("./utils/toRgb");
const toHsl_1 = require("./utils/toHsl");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "VSColors" is now active!');
    const color2Hex = vscode.commands.registerCommand('vscolors.color2Hex', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            // Get the word within the selection
            const selectedText = document.getText(selection).trim();
            const colorType = getColorType_1.getColorType(selectedText);
            const formatedColor = format_1.formatColor(colorType);
            const hex = toHex_1.toHex(formatedColor);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, hex);
            });
        }
    });
    const color2Rgb = vscode.commands.registerCommand('vscolors.color2Rgb', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            // Get the word within the selection
            const selectedText = document.getText(selection).trim();
            const colorType = getColorType_1.getColorType(selectedText);
            const formatedColor = format_1.formatColor(colorType);
            const rgb = toRgb_1.toRgb(formatedColor);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, rgb);
            });
        }
    });
    const color2Hsl = vscode.commands.registerCommand('vscolors.color2Hsl', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            // Get the word within the selection
            const selectedText = document.getText(selection).trim();
            const colorType = getColorType_1.getColorType(selectedText);
            const formatedColor = format_1.formatColor(colorType);
            const hsl = toHsl_1.toHsl(formatedColor);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, hsl);
            });
        }
    });
    context.subscriptions.push(color2Hex, color2Rgb, color2Hsl);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map