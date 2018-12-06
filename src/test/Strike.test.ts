import * as assert from 'assert'

import {toggleStrike} from '../model/Strike'

suite("Strike", function () {
    test("transforms normal text into striketrough text", function() {
        assert.equal(
            toggleStrike("this test works!")
            ,"t̶h̶i̶s̶ ̶t̶e̶s̶t̶ ̶w̶o̶r̶k̶s̶!̶"
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

    test("ignores boundary chars if whitespace strike disabled", function(){
        assert.equal(
            toggleStrike(" boundary ", {strikeWhitespace: false})
            ," b̶o̶u̶n̶d̶a̶r̶y̶ "
        )
    })

    test("ignores boundary chars in multiline strings if whitespace strike disabled", function(){
        assert.equal(
            toggleStrike(`
                boundary 
                boundary
            `, {strikeWhitespace: false})
            ,(`
                b̶o̶u̶n̶d̶a̶r̶y̶ 
                b̶o̶u̶n̶d̶a̶r̶y̶
            `)
        )
    })
})