'use strict';

import * as vscode from 'vscode';

import {toggleStrike} from './model/Strike'

import Selection = vscode.Selection
import Range = vscode.Range
import Position = vscode.Position
import Window = vscode.window

function processSelection(formatCB: (text: string)=>string) {
    if(Window.activeTextEditor){
        let e: vscode.TextEditor = Window.activeTextEditor
        let d: vscode.TextDocument = e.document
        let sel = e.selections
        
        var replaceRanges: Selection[] = [];
        e.edit(function (edit) {
            // itterate through the selections
            for (var x = 0; x < sel.length; x++) {
                let txt: string = d.getText(new Range(sel[x].start, sel[x].end))

                txt = formatCB(txt)
    
                //replace the txt in the current select and work out any range adjustments
                edit.replace(sel[x], txt)
                let startPos: Position = new Position(sel[x].start.line, sel[x].start.character)
                let endPos: Position = new Position(sel[x].start.line + txt.split(/\r\n|\r|\n/).length - 1, sel[x].start.character + txt.length)
                replaceRanges.push(new Selection(startPos, endPos))
            }
        })
        e.selections = replaceRanges
    }
}

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.strike.strikethrough', () => {
        processSelection(toggleStrike)
    })
    context.subscriptions.push(disposable)
}


export function deactivate() {
}