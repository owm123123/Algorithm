// * Coin Change
// You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Input: coins = [2], amount = 3
// Output: -1

// Input: coins = [1], amount = 0
// Output: 0

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // ! 組成 amount 的最少硬幣數, 不能考慮當下最優解，所不能使用 greedy
  if (amount === 0) return 0;

  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
