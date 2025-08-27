/*
* LeetCode 309. Best Time to Buy and Sell Stock with Cooldown

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times) with the following restrictions:

- After you sell your stock, you cannot buy stock on the next day (i.e., cooldown one day).
- Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:
Input: prices = [1,2,3,0,2]
Output: 3
Explanation: transactions = [buy, sell, cooldown, buy, sell]

Example 2:
Input: prices = [1]
Output: 0

Constraints:
- 1 <= prices.length <= 5000
- 0 <= prices[i] <= 1000

*/

// ! 跟 122. Best Time to Buy And Sell Stock II 差別在於 需要 cooldown(後天不能購買), 所以不能用 Greedy 需要用 DP
class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    // dp[i][0,1,2]: 設定第 i 天, 0: 買入, 1: 持有, 2: 冷卻 的收益
    let n = prices.length;
    if (n === 0) return 0;
    let dp = Array.from({ length: n }, () => [0, 0, 0]);

    // 初始化第一天
    dp[0][0] = -prices[0];
    dp[0][1] = 0;
    dp[0][2] = 0;

    for (let i = 1; i < n; i++) {
      dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]);
      dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2]);
      dp[i][2] = dp[i - 1][0] + prices[i];
    }

    return Math.max(dp[n - 1][1], dp[n - 1][2]);
  }
}
