// import * as vscode from 'vscode'

// import Selection = vscode.Selection
// import Range = vscode.Range
// import Position = vscode.Position
// import Window = vscode.window

// import {stripIndent} from 'common-tags'

// const normalLine1 = 'function twoPlusTwo(){'
// const normalLine2 = 'return 2+2'
// const normalLine3 = '}'

// const strikedLine1 = 'f̶u̶n̶c̶t̶i̶o̶n̶ ̶t̶w̶o̶P̶l̶u̶s̶T̶w̶o̶(̶)̶{̶'
// const strikedLine2 = 'r̶e̶t̶u̶r̶n̶ ̶2̶+̶2̶'
// const strikedLine3 = '}̶'

// const nonWhitespaceStrikedLine1 = 'f̶u̶n̶c̶t̶i̶o̶n̶ t̶w̶o̶P̶l̶u̶s̶T̶w̶o̶(̶)̶{̶'
// const nonWhitespaceStrikedLine2 = 'r̶e̶t̶u̶r̶n̶ 2̶+̶2̶'
// const nonWhitespaceStrikedLine3 = '}̶'

// const normalReferenceText = stripIndent`
//     ${normalLine1}
//         ${normalLine2}
//     ${normalLine3}
// `

// const strikedReferenceText = stripIndent`
//     ${strikedLine1}
//      ̶ ̶ ̶ ̶${strikedLine2}
//     ${strikedLine3}
// `

// const nonWhitespaceStrikedReferenceText = stripIndent`
//     ${nonWhitespaceStrikedLine1}
//         ${nonWhitespaceStrikedLine2}
//     ${nonWhitespaceStrikedLine3}
// `

// function selectAll(){
//     if(Window.activeTextEditor){
//         let activeEditor: vscode.TextEditor = Window.activeTextEditor
        
        
//         activeEditor.selections = [new Selection(
//             new Position(1, normalLine1.length),
//             new Position(3, normalLine3.length)
//         )]
//     }
// }

// function getCurrentSelectionText(){
//     if(Window.activeTextEditor){
//         let activeEditor: vscode.TextEditor = Window.activeTextEditor
//         let document: vscode.TextDocument = activeEditor.document
//         let selection = activeEditor.selection

//         return document.getText(new Range(selection.start, selection.end))
//     }
// }

suite("Extension", function(){

    // test("Strikes whitespace when configuration is set to true", function(){
    //     vscode.workspace.getConfiguration('strike').update('whitespace', true)
        
    // })

    // test("Doesn't strikes whitespace when configuration is set to false", function(){
    //     vscode.workspace.getConfiguration('strike').update('whitespace', false)

    //     let WorkspaceEdit = vscode.WorkspaceEdit

    //     const edit = new WorkspaceEdit()

    //     edit.createFile()
        
    //     vscode.workspace
    //         .applyEdit()
    //         .openTextDocument({content: normalReferenceText})
    //         .then(document => {
                
    //             selectAll()
    //             const text = getCurrentSelectionText()
    //             debugger
    //         })
    // })
})
