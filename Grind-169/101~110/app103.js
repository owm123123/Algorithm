// * Generate Parentheses
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
// * well-formed parentheses: 左括號數都要大於等於右括號

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Input: n = 1
// Output: ["()"]

// Constraints:
// 1 <= n <= 8

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  let dfs = (str, l, r) => {
    if (l === 0 && r === 0) {
      res.push(str);
      return;
    }
    if (l > 0) dfs(str + '(', l - 1, r);
    if (r > l) dfs(str + ')', l, r - 1);
  };
  dfs('', n, n);
  return res;
};
