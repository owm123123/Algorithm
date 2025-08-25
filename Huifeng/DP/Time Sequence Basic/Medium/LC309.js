// * 309. Best Time to Buy and Sell Stock with Cooldown
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:
// After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
// Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

// Input: prices = [1,2,3,0,2]
// Output: 3
// Explanation: transactions = [buy, sell, cooldown, buy, sell]

// Input: prices = [1]
// Output: 0

// Constraints:
// 1 <= prices.length <= 5000
// 0 <= prices[i] <= 1000

// * DP -> time: 100%, space: 26%
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // 0: 剛持有股票
  // 1: 持有股票一天以上
  // 2: 已清空股票

  if (prices.length === 0) return 0;
  let n = prices.length;
  let dp = Array.from({ length: n }, () => [0, 0, 0]);
  // 初始化
  dp[0][0] = -prices[0]; // 第一天買入
  dp[0][1] = 0; // 第一天持有但沒買
  dp[0][2] = 0; // 第一天賣出（不可能）

  for (let i = 1; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
    dp[i][1] = dp[i - 1][0] + prices[i];
    dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
  }

  // * 因為持有股票[0]，一定不會是最高的，所以可以省略
  return Math.max(dp[n - 1][1], dp[n - 1][2]);
};

// * 降維 -> time: 100%, space: 95%
var maxProfit = function (prices) {
  // 0: 剛持有股票
  // 1: 持有股票一天以上
  // 2: 已清空股票

  let hold = -prices[0]; // 第一天買入
  let sold = 0; // 第一天持有但沒買
  let rest = 0; // 第一天賣出（不可能）

  for (let i = 1; i < prices.length; i++) {
    let prevHold = hold;
    let prevSold = sold;
    let prevRest = rest;
    hold = Math.max(prevHold, prevRest - prices[i]);
    sold = prevHold + prices[i];
    rest = Math.max(prevRest, prevSold);
  }
  return Math.max(sold, rest);
};
