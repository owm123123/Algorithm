/**
 * * 435. Non-overlapping Intervals
 *
 * Given an array of intervals where intervals[i] = [starti, endi],
 * return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
 *
 * Example 1:
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 *
 * Example 2:
 * Input: intervals = [[1,2],[1,2],[1,2]]
 * Output: 2
 *
 * Example 3:
 * Input: intervals = [[1,2],[2,3]]
 * Output: 0
 *
 * Constraints:
 * - 1 <= intervals.length <= 10^5
 * - intervals[i].length == 2
 * - -5 * 10^4 <= starti < endi <= 5 * 10^4
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // TODO: Implement your solution here
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++;
      end = intervals[i][1];
    }
  }

  return count;
};
