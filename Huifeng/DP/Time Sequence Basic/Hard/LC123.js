// * 123. Best Time to Buy and Sell Stock III
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// * Find the maximum profit you can achieve. 發現最大利益
// * You may complete at most two transactions. 最多交易兩次
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Input: prices = [3,3,5,0,0,3,1,4]
// Output: 6
// Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
// Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 105

// * DP -> time: 30%, space: 30%
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  // * 1. 狀態分析
  // 0: 持有第1次的最大利益
  // 1: 售出第1次的最大利益
  // 2: 持有第2次的最大利益
  // 3: 售出第2次的最大利益

  // * 2. 初始化
  let n = prices.length;
  let dp = Array.from({ length: n }, () => [0, 0, 0, 0]);
  dp[0][0] = -prices[0]; // 第0天，第1次買入
  dp[0][1] = 0; // 第0天，第1次賣出（不可能）
  dp[0][2] = -prices[0]; // 第0天，第2次買入（不可能）,但表示第一次買入
  dp[0][3] = 0; // 第0天，第1次賣出（不可能）

  for (let i = 1; i < n; i++) {
    // * 昨天持有: Math.max(繼續持有, 售出)
    // * 昨天售出: Math.max(繼續售出, 持有下一筆)
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] - prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] + prices[i]);
  }

  // ! 只需比較 售出 才可能是最大利益
  return Math.max(0, dp[n - 1][1], dp[n - 1][3]);
};

// * 降維 -> time: 100%, space: 100%
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let hold1 = -prices[0]; // 第一次持有
  let sold1 = 0; // 第一次賣出
  let hold2 = -prices[0]; // 第二次持有
  let sold2 = 0; // 第二次賣出

  for (let i = 1; i < prices.length; i++) {
    hold1 = Math.max(hold1, -prices[i]);
    sold1 = Math.max(sold1, hold1 + prices[i]);
    hold2 = Math.max(hold2, sold1 - prices[i]);
    sold2 = Math.max(sold2, hold2 + prices[i]);
  }
  return Math.max(0, sold1, sold2);
};
