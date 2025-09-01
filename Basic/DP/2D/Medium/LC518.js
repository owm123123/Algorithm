/*
* 518. Coin Change II (LeetCode)

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: amount = 5, coins = [1,2,5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1

Example 2:
Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.

Example 3:
Input: amount = 10, coins = [10]
Output: 1

Constraints:
- 1 <= amount <= 300
- 1 <= coins.length <= 300
- 1 <= coins[i] <= 500
*/

/*
* 322. Coin Change (最小硬幣數) 先金額, 再硬幣, 做 Math.min
先金額、再硬幣：每種金額 i，嘗試所有硬幣，會把順序不同但組合相同的情況都算進去（排列）。
以 amount = 5, coins = [1,2,5] 為例，
這種寫法會把 2+1+2 和 1+2+2 都算進去，
但題目只要「組合」不管順序。
*/
/*
* 518. Coin Change II (硬幣組合) 先硬幣, 再金額
先硬幣、再金額：每種硬幣只影響後面的金額，保證每種組合只算一次（組合）。
*/
class Solution {
  /**
   * @param {number} amount
   * @param {number[]} coins
   * @return {number}
   */

  change(amount, coins) {
    let dp = new Array(amount + 1).fill(0);
    dp[0] = 1;

    // * 要求組合, 所以應該是 先硬幣, 再金額
    for (let coin of coins) {
      for (let i = coin; i < amount + 1; i++) {
        dp[i] += dp[i - coin];
      }
    }
    return dp[amount];
  }
}
