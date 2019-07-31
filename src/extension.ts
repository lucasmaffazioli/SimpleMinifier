// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerTextEditorCommand('extension.simpleminify', () => {
		let text = "Nada selecionado!"
		const editor = vscode.window.activeTextEditor;
		// 
		if (editor) {
			const selection = editor.selection;
			text = editor.document.getText(selection);
			// text = text.replace(/(?:\r\n|\r|\n)/g, ' ');
			console.log(text);
			text = text.replace(/\s\s+/g, ' ');
			console.log(text);
			// 
			editor.edit((editBuilder) => {
				editBuilder.replace(selection, text);
			});
		};
		// Display a message box to the user
		vscode.window.showInformationMessage('Minified!');
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
