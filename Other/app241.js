// * Different Ways to Add Parentheses
// Given a string expression of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. You may return the answer in any order.

// The test cases are generated such that the output values fit in a 32-bit integer and the number of different results does not exceed 104.

// Input: expression = "2-1-1"
// Output: [0,2]
// Explanation:
// ((2-1)-1) = 0
// (2-(1-1)) = 2

// Input: expression = "2*3-4*5"
// Output: [-34,-14,-10,-10,10]
// Explanation:
// (2*(3-(4*5))) = -34
// ((2*3)-(4*5)) = -14
// ((2*(3-4))*5) = -10
// (2*((3-4)*5)) = -10
// (((2*3)-4)*5) = 10

// ! 以後可能要看下面了 下面有說不會給 / 這個 operator
// Constraints:
// 1 <= expression.length <= 20
// expression consists of digits and the operator '+', '-', and '*'.
// All the integer values in the input expression are in the range [0, 99].
// The integer values in the input expression do not have a leading '-' or '+' denoting the sign.

/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function (expression) {
  let memo = new Map();

  let dfs = (expr) => {
    if (memo.has(expr)) return memo.get(expr);

    let res = [];
    for (let i = 0; i < expr.length; i++) {
      if ('+-*'.includes(expr[i])) {
        let left = dfs(expr.slice(0, i));
        let right = dfs(expr.slice(i + 1));
        for (let l of left) {
          for (let r of right) {
            switch (expr[i]) {
              case '+':
                res.push(l + r);
                break;
              case '-':
                res.push(l - r);
                break;
              case '*':
                res.push(l * r);
                break;
            }
          }
        }
      }
    }
    // ! 表示沒有任何 operator
    if (res.length === 0) res.push(Number(expr));

    memo.set(expr, res);
    return res;
  };

  return dfs(expression);
};
