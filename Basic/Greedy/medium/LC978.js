/**
 * 978. Longest Turbulent Subarray
 *
 * Given an integer array arr, return the length of a maximum size turbulent subarray of arr.
 *
 * A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.
 *
 * More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:
 *   For i <= k < j:
 * *     - arr[k] > arr[k + 1] when k is even, and arr[k] < arr[k + 1] when k is odd;
 *     OR
 * *     - arr[k] < arr[k + 1] when k is even, and arr[k] > arr[k + 1] when k is odd.
 *
 * Example 1:
 * Input: arr = [9,4,2,10,7,8,8,1,9]
 * Output: 5
 * Explanation: [4,2,10,7,8] is a turbulent subarray of length 5.
 *
 * Example 2:
 * Input: arr = [4,8,12,16]
 * Output: 2
 *
 * Example 3:
 * Input: arr = [100]
 * Output: 1
 *
 * Constraints:
 * - 1 <= arr.length <= 4 * 10^4
 * - 0 <= arr[i] <= 10^9
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxTurbulenceSize = function (arr) {
  // TODO: Implement your solution here
  let l = 0,
    r = 1,
    res = 1,
    prev = '';

  while (r < arr.length) {
    if (arr[r - 1] > arr[r] && prev !== '>') {
      res = Math.max(res, r - l + 1);
      r++;
      prev = '>';
    } else if (arr[r - 1] < arr[r] && prev !== '<') {
      res = Math.max(res, r - l + 1);
      r++;
      prev = '<';
    } else {
      r = arr[r] === arr[r - 1] ? r + 1 : r;
      l = r - 1;
      prev = '';
    }
  }

  return res;
};
