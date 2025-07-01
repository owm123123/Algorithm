// * Decode String
// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
// The test cases are generated so that the length of the output will never exceed 105.

// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Constraints:
// 1 <= s.length <= 30
// s consists of lowercase English letters, digits, and square brackets '[]'.
// s is guaranteed to be a valid input.
// All the integers in s are in the range [1, 300].

// * 流程
// 遇到 3：currNum = 3
// 遇到 [：stack.push(['', 3])，currStr = ''，currNum = 0
// 遇到 a：currStr = 'a'
// 遇到 ]：stack.pop() 得到 ['', 3]，currStr = '' + 'a'.repeat(3) = 'aaa'
// 遇到 2：currNum = 2
// 遇到 [：stack.push(['aaa', 2])，currStr = ''，currNum = 0
// 遇到 b：currStr = 'b'
// 遇到 c：currStr = 'bc'
// 遇到 ]：stack.pop() 得到 ['aaa', 2]，currStr = 'aaa' + 'bc'.repeat(2) = 'aaabcbc'

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // * 目前這一層正在累積的字串
  let currStr = '';
  let currNum = 0;
  let stack = [];
  for (let c of s) {
    if (!isNaN(c)) {
      // * 12[a] 處理多位數時
      currNum = currNum * 10 + Number(c);
    } else if (c === '[') {
      // * 存回去是累積的字串
      stack.push([currStr, currNum]);
      currStr = '';
      currNum = 0;
    } else if (c === ']') {
      let [prevStr, num] = stack.pop();
      currStr = prevStr + currStr.repeat(num);
    } else {
      currStr += c;
    }
  }
  return currStr;
};
