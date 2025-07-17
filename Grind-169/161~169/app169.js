// * Smallest Range Covering Elements from K Lists
// You have k lists of sorted integers in non-decreasing order. Find the smallest range that includes at least one number from each of the k lists.
// We define the range [a, b] is smaller than range [c, d] if b - a < d - c or a < c if b - a == d - c.

// Input: nums = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]
// Output: [20,24]
// Explanation:
// List 1: [4, 10, 15, 24,26], 24 is in range [20,24].
// List 2: [0, 9, 12, 20], 20 is in range [20,24].
// List 3: [5, 18, 22, 30], 22 is in range [20,24].

// Input: nums = [[1,2,3],[1,2,3],[1,2,3]]
// Output: [1,1]

// Constraints:
// nums.length == k
// 1 <= k <= 3500
// 1 <= nums[i].length <= 50
// -105 <= nums[i][j] <= 105
// nums[i] is sorted in non-decreasing order.

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    for (let v of nums[i]) arr.push([v, i]);
  }
  arr.sort((a, b) => a[0] - b[0]);

  let count = new Map();
  let total = 0,
    left = 0,
    res = [arr[0][0], arr[arr.length - 1][0]];
  for (let right = 0; right < arr.length; right++) {
    let idx = arr[right][1];
    count.set(idx, (count.get(idx) || 0) + 1);
    if (count.get(idx) === 1) total++;
    while (total === nums.length) {
      if (arr[right][0] - arr[left][0] < res[1] - res[0]) {
        res = [arr[left][0], arr[right][0]];
      }
      let lidx = arr[left][1];
      count.set(lidx, count.get(lidx) - 1);
      if (count.get(lidx) === 0) total--;
      left++;
    }
  }
  return res;
};
