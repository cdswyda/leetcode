/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s) return true;
    // 长度必定是偶数
    if (s.length % 2 !== 0) return false;

    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    const stack = [];
    let curr = '';
    const startReg = /[([{]/;

    for (let i = 0; i < s.length; i++) {
        curr = s[i];
        // 开始括号 入栈
        if (startReg.test(curr)) {
            stack.push(curr);
        } else {
            // 否则出栈对比
            if (map[stack.pop()] !== curr) {
                return false;
            }
        }
    }

    // 结束 栈应该为空
    return !stack.length;
};
