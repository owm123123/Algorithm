/*
* 494. Target Sum

You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols '+' or '-' before each integer in nums and then concatenate all the integers.

Return the number of different expressions that you can build, which evaluates to target.

Example 1:
Input: nums = [1,1,1,1,1], target = 3
Output: 5
Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.

Example 2:
Input: nums = [1], target = 1
Output: 1

Constraints:
- 1 <= nums.length <= 20
- 0 <= nums[i] <= 1000
- 0 <= sum(nums[i]) <= 1000
- -1000 <= target <= 1000
*/

/*
  * dp: 子集合 轉 背包問題
    1. 設 sum 為 nums 的總和。
    2. 設 P 為所有加號的數字和，N 為所有減號的數字和。
    3. 有：P + N = sum，P - N = target
    4. 解得：P = (sum + target) / 2
    5. 問題轉成「從 nums 中選一些數字，和為 P，有幾種選法？」
  * 步驟說明
    1. 計算 sum，判斷 (sum + target) 是否為偶數且非負，否則無解。
    2. 設 dp[i] 表示和為 i 的組合數，初始化 dp[0]=1。
    3. 遍歷 nums，對每個 num，從 P 到 num 遞減更新 dp。
    4. 回傳 dp[P]。
 */
class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  findTargetSumWays(nums, target) {
    let sum = nums.reduce((a, b) => a + b);
    // ! 須滿足 P 為 整數 且 >= 0 才能轉移
    if ((sum + target) % 2 !== 0 || sum < Math.abs(target)) return 0;
    let P = (sum + target) / 2;
    let dp = new Array(P + 1).fill(0);
    dp[0] = 1;
    // * 這一題是組合問題: 先硬幣，再金額, 因為背包問題所以從後面計算
    for (let num of nums) {
      for (let i = P; i >= num; i--) {
        dp[i] += dp[i - num];
      }
    }
    return dp[P];
  }
}
