// Climbing stairs to reach the top

// There are n stairs, and a person standing at the bottom wants to climb stairs to reach the top. The person can climb either 1 stair or 2 stairs at a time, the task is to count the number of ways that a person can reach at the top.

// Note: This problem is similar to Count ways to reach Nth stair (Order does not matter) with the only difference that in this problem, we count all distinct ways where different orderings of the steps are considered unique.

// Examples:

// Input: n = 1
// Output: 1
// Explanation: There is only one way to climb 1 stair.

// Input: n = 2
// Output: 2
// Explanation: There are two ways to reach 2th stair: {1, 1} and {2}.

// Input: n = 4
// Output: 5
// Explanation: There are five ways to reach 4th stair: {1, 1, 1, 1}, {1, 1, 2}, {2, 1, 1}, {1, 2, 1} and {2, 2}.

// 關鍵點 : 到達第 n 階的方法數等於到達第 n-1 階的方法數加上到達第 n-2 階的方法數。 dp[i] = dp[i-1] + dp[i-2]

console.log(DP(1)); // 1
console.log(DP(2)); // 2
console.log(DP(3)); // 3
console.log(DP(4)); // 5
console.log(DP(5)); // 8
console.log(DP(10)); // 89

// Using Top-Down DP (Memoization)  [O(n) Time and O(n) Space]
// 使用遞歸和記憶化表，實現方式更接近遞歸思路，適合處理有重疊子問題的情況。

// Using Bottom-Up DP [O(n) Time and O(n) Space]
// 使用迴圈計算，邏輯簡單，適合需要完整構建解的情況，且可以進一步優化空間到 O(1)。
function DP(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}
