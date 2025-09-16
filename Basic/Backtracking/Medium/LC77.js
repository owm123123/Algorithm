/*
* 77. Combinations

Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

Example 2:
Input: n = 1, k = 1
Output: [[1]]

Constraints:
1 <= n <= 20
1 <= k <= n
*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];

  let backTrack = (start, sub) => {
    if (sub.length === k) {
      res.push([...sub]);
      return;
    }

    for (let i = start; i <= n; i++) {
      sub.push(i);
      backTrack(i + 1, sub);
      sub.pop();
    }
  };

  backTrack(1, []);
  return res;
};
