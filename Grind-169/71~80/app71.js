// * Backspace String Compare
// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// * # 代表「退格鍵」：會把前一個字母刪掉
// Note that after backspacing an empty text, the text will continue empty.

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

// Constraints:
// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.
// Follow up: Can you solve it in O(n) time and O(1) space?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let build = (str) => {
    let stack = [];
    for (let s of str) {
      if (s === '#') {
        stack.pop();
      } else {
        stack.push(s);
      }
    }
    return stack.join('');
  };
  return build(s) === build(t);
};
