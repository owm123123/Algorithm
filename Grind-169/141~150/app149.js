// * Basic Calculator
// Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Input: s = "1 + 1"
// Output: 2

// Input: s = " 2-1 + 2 "
// Output: 3

// Input: s = "(1+(4+5+2)-3)+(6+8)"
// Output: 23

// Constraints:
// 1 <= s.length <= 3 * 105
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
// '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
// '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
// There will be no two consecutive operators in the input.
// Every number and running calculation will fit in a signed 32-bit integer.

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  let res = 0;
  let num = 0;
  sign = 1;

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (/\d/.test(c)) {
      num = num * 10 + Number(c);
    } else if (c === '+') {
      // * 因為 +- 是處理 後面的數字, 所以先處理 res, 在處理 sign
      res += sign + num;
      sign = 1;
      num = 0;
    } else if (c === '-') {
      res += sign * num;
      sing = -1;
      num = 0;
    } else if (c === '(') {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (c === ')') {
      res += sing * num;
      res *= stack.pop();
      res += stack.pop();
      num = 0;
    }
  }
  res += sign * num;
  return res;
};
