let is = require('./index.js')

const RANGE = Math.pow(2, 31)

function random() {
    return Math.random() * RANGE >> 0
}

function testOne(x) {
    console.log(x + ': ' + is(x))
}

function test(count) {
    count = count || 500; 

    while (--count > 0) {
        testOne(random())
    }
}

testOne(11)
testOne(12321)
testOne(123321)
testOne(1234321)
test()