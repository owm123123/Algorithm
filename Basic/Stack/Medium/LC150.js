/*
* LeetCode 150. Evaluate Reverse Polish Notation

You are given an array of strings tokens that represents an arithmetic expression in Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:
- The valid operators are '+', '-', '*', and '/'.
- Each operand may be an integer or another expression.
* - The division between two integers always truncates toward zero. (向零取整)
* Math.floor(-1.7) 得到 -2（向下）
* Math.trunc(-1.7) 得到 -1（向零）

- There will not be any division by zero.
- The input represents a valid arithmetic expression.

Example 1:
Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9

Example 2:
Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6

Example 3:
Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22

Constraints:
- 1 <= tokens.length <= 10^4
- tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // Write your code here
  let stack = [];
  let set = new Set(['+', '-', '*', '/']);
  for (let s of tokens) {
    if (!set.has(s)) {
      stack.push(Number(s));
    } else {
      let n2 = stack.pop();
      let n1 = stack.pop();
      if (s === '+') {
        stack.push(n1 + n2);
      } else if (s === '-') {
        stack.push(n1 - n2);
      } else if (s === '*') {
        stack.push(n1 * n2);
      } else if (s === '/') {
        stack.push(Math.trunc(n1 / n2));
      }
    }
  }
  return stack.pop();
};
