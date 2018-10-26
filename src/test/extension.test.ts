//
// Note: This example test is leveraging the Mocha test framework.
// Please refer to their documentation on https://mochajs.org/ for help.
//

// The module 'assert' provides assertion methods from node
import * as assert from 'assert'

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
// import * as vscode from 'vscode';
// import * as myExtension from '../extension';

// Defines a Mocha test suite to group tests of similar kind together
import {toggleStrike} from '../model/Strike'

suite("Strike", function () {
    test("transforms normal text into striketrough text", function() {
        assert.equal(
            toggleStrike("this test works!")
            ,"t̶h̶i̶s̶ t̶e̶s̶t̶ w̶o̶r̶k̶s̶!̶"
        )
    })

    test("transforms striketrough text back into normal text", function(){
        assert.equal(
            toggleStrike("t̶h̶i̶s̶ ̶t̶e̶s̶t̶ ̶w̶o̶r̶k̶s̶!̶")
            ,"this test works!"
        )
    })

    test("transforms mixed text into normal text", function(){
        assert.equal(
            toggleStrike("this ̶t̶est̶ w̶o̶rk̶s̶!̶")
            ,"this test works!"
        )
    })

    test("ignores boundary chars", function(){
        assert.equal(
            toggleStrike(" boundary ")
            ," b̶o̶u̶n̶d̶a̶r̶y̶ "
        )
    })

    test("ignores boundary chars in multiline strings", function(){
        assert.equal(
            toggleStrike(`
                boundary 
                boundary
            `)
            ,(`
                b̶o̶u̶n̶d̶a̶r̶y̶ 
                b̶o̶u̶n̶d̶a̶r̶y̶
            `)
        )
    })
})