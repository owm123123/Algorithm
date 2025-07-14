// * Basic Calculator II
// Given a string s which represents an expression, evaluate this expression and return its value.
// The integer division should truncate toward zero.
// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].
// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

// Input: s = "3+2*2"
// Output: 7

// Input: s = " 3/2 "
// Output: 1:

// Input: s = " 3+5 / 2 "
// Output: 5

// Constraints:
// 1 <= s.length <= 3 * 105
// s consists of integers and operators ('+', '-', '*', '/') separated by some number of spaces.
// s represents a valid expression.
// All the integers in the expression are non-negative integers in the range [0, 231 - 1].
// The answer is guaranteed to fit in a 32-bit integer.

// 3+5/2
/**
 * * 圖解
 * * 讀到 '3':
 * num = 3
 * * 讀到 '+':
 * stack = [3], sign = '+', num = 0
 * * 讀到 '5':
 * num = 5
 * * 讀到 '/':
 * sign 是 '+'，所以 stack.push(5)
 * stack = [3, 5]
 * sign = '/', num = 0
 * * 讀到 '2'（最後一個字元）
 * num = 2
 * i 到最後，進入 if 條件
 * sign 是 '/'，所以 stack.push(Math.trunc(stack.pop() / 2))
 * stack.pop() 取出 5，5 / 2 = 2.5，向零取整為 2
 * stack = [3, 2]
 * * stack.reduce((a, b) => a + b, 0)
 * 3 + 2 = 5
 */

/**
 * * 範例 "3+5/2":
 * 讀到 3，num = 3
 * * 讀到 +，這時才根據「前一個 sign」（預設是 +）把 3 處理進 stack
 * 讀到 5，num = 5
 * * 讀到 /，這時才根據「前一個 sign」（+）把 5 處理進 stack
 * 讀到 2，num = 2
 * * 到字串結尾，這時才根據「前一個 sign」（/）把 2 處理進 stack
 */
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // * 必須等到遇到運算符或結尾，才能確定「前一個數字」已經完整
  s = s.replace(/\s+/g, '');
  let stack = [];
  let num = 0;
  let sign = '+';
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (/\d/.test(c)) {
      num = num * 10 + Number(c);
    }
    // ! 注意最後一個位元也要加入
    if (/[+\-*/]/.test(c) || i === s.length - 1) {
      if (sign === '+') stack.push(num);
      else if (sign === '-') stack.push(-num);
      else if (sign === '*') stack.push(stack.pop() * num);
      else if (sign === '/') stack.push(Math.trunc(stack.pop() / num));
      sign = c;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};

// * beat100%
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let curr = 0;
  let prev = 0;
  let total = 0;
  let operator = '+';

  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (isDigit(c)) {
      curr = curr * 10 + (c - '0');
    }

    if (isOperator(c) || i === s.length - 1) {
      if (operator === '+') {
        total += prev;
        prev = curr;
      }
      if (operator === '-') {
        total += prev;
        prev = -1 * curr;
      }
      if (operator === '*') {
        prev *= curr;
      }
      if (operator === '/') {
        prev = Math.trunc(prev / curr);
      }
      curr = 0;
      operator = c;
    }
  }
  total += prev;
  return total;
};

function isDigit(c) {
  return '0' <= c && c <= '9';
}

function isOperator(c) {
  return c === '+' || c === '-' || c === '*' || c === '/';
}
