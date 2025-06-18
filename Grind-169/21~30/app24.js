// * Evaluate Reverse Polish Notation
// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// * 這裡有說要取整數
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9

// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let token of tokens) {
    // ! isNaN(): 檢查 str 可不可以轉成 int
    // ! Number.isInteger(): 檢查是否為 int type
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      // ! 注意 pop() 順序
      let b = stack.pop();
      let a = stack.pop();
      switch (token) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          // ! Math.trunc(): 取整數
          stack.push(Math.trunc(a / b));
          break;
      }
    }
  }
  return stack[0];
};
