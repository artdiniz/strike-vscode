'use strict'

import * as vscode from 'vscode'

import {toggleStrike} from './model/Strike'

import Selection = vscode.Selection
import Range = vscode.Range
import Position = vscode.Position
import Window = vscode.window

function processSelection(formatCB: (text: string)=>string) {
    if(Window.activeTextEditor){
        let activeEditor: vscode.TextEditor = Window.activeTextEditor
        let document: vscode.TextDocument = activeEditor.document
        let selections = activeEditor.selections
        
        var replaceRanges: Selection[] = []

        activeEditor.edit(function (edit) {
            // itterate through the selections
            for (var x = 0; x < selections.length; x++) {
                let txt: string = document.getText(new Range(selections[x].start, selections[x].end))

                txt = formatCB(txt)
    
                //replace the txt in the current select and work out any range adjustments
                edit.replace(selections[x], txt)
                let startPos: Position = new Position(selections[x].start.line, selections[x].start.character)
                let endPos: Position = new Position(selections[x].start.line + txt.split(/\r\n|\r|\n/).length - 1, selections[x].start.character + txt.length)
                replaceRanges.push(new Selection(startPos, endPos))
            }
        })
        activeEditor.selections = replaceRanges
    }
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.strike.strikethrough', () => {
        const doStrikeWhitespace = Boolean(vscode.workspace.getConfiguration('strike').get("whitespace"))

        processSelection((text) => toggleStrike(text, {strikeWhitespace: doStrikeWhitespace}))
    })
    context.subscriptions.push(disposable)
}


export function deactivate() {
}