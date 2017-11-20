const CHAR_VALUES = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function (s) {
    let r = 0
    // s.split('').forEach(v => {
    //     r += CHAR_VALUES[v]
    // })
    let arr = s.split('')
    let len = arr.length
    let v, next_V
    for (let i = 0; i < len - 1; ++i) {
        v = CHAR_VALUES[arr[i]]
        next_V = CHAR_VALUES[arr[i + 1]]
        if (next_V > v) {
            r -= v
        } else {
            r += v
        }
    }
    return r + CHAR_VALUES[arr[len - 1]]
}