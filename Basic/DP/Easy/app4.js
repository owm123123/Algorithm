// Maximize the number of segments of length x, y and z

// Given a rod of length n, the task is to cut the rod in such a way that the total number of segments of length x, y, and z is maximized. The segments can only be of length x, y, and z.
// Note: If no segment can be cut then return 0.

// Examples:

// Input: n = 4, x = 2, y = 1, z = 1
// Output: 4
// Explanation: Total length is 4, and the cut lengths are 2, 1 and 1.  We can make maximum 4 segments each of length 1.

// Input: n = 5, x = 5, y = 3, z = 2
// Output: 2
// Explanation: Here total length is 5, and the cut lengths are 5, 3 and 2. We can make two segments of lengths 3 and 2.

// Input: n = 7, x = 8, y = 9, z = 10
// Output: 0
// Explanation: Here the total length is 7, and the cut lengths are 8, 9, and 10. We cannot cut the segment into lengths that fully utilize the segment, so the output is 0.

// --------------------------------------------------
// 題目關鍵字
// Maximize the number of segments
// 最大化段數：目標是將長度為 n 的桿子切割成最多的段數。

// Segments of length x, y, and z
// 段長限制：只能切割成長度為 x、y 或 z 的段。

// Rod of length n
// 桿子的總長度：給定一個長度為 n 的桿子。

// If no segment can be cut then return 0
// 無法切割時返回 0：如果無法完全切割桿子，則返回 0。
// --------------------------------------------------

console.log(buup(4, 2, 1, 1)); // 4
console.log(buup(5, 5, 3, 2)); // 2
console.log(buup(7, 8, 9, 10)); // 0

// DP
function buup(n, x, y, z) {
  let dp = new Array(n + 1).fill(-Infinity);
  dp[0] = 0;

  for (let i = 0; i <= n; i++) {
    if (i >= x) {
      dp[i] = Math.max(dp[i], dp[i - x] + 1);
    }
    if (i >= y) {
      dp[i] = Math.max(dp[i], dp[i - y] + 1);
    }
    if (i >= z) {
      dp[i] = Math.max(dp[i], dp[i - z] + 1);
    }
  }

  return Math.max(0, dp[n]);
}

console.log(tddp(4, 2, 1, 1)); // 4
console.log(tddp(5, 5, 3, 2)); // 2
console.log(tddp(7, 8, 9, 10)); // 0

function tddp(n, x, y, z) {
  let memo = {};

  function helper(n) {
    if (n === 0) return 0;
    if (n < 0) return -Infinity;

    if (memo[n] != undefined) return memo[n];

    const cutX = helper(n - x);
    const cutY = helper(n - y);
    const cutZ = helper(n - z);

    memo[n] = 1 + Math.max(cutX, cutY, cutZ);

    return memo[n];
  }

  return Math.max(0, helper(n));
}
