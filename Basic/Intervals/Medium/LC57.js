/**
 * * 57. Insert Interval
 *
 * Given a set of non-overlapping intervals sorted by their start time,
 * insert a new interval into the intervals (merge if necessary).
 *
 * You may assume that the intervals were initially sorted according to their start times.
 *
 * Example 1:
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 *
 * Example 2:
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 *
 * Constraints:
 * - 0 <= intervals.length <= 10^4
 * - intervals[i].length == 2
 * - 0 <= intervals[i][0] <= intervals[i][1] <= 10^5
 * - intervals are sorted by their start time
 * - newInterval.length == 2
 * - 0 <= newInterval[0] <= newInterval[1] <= 10^5
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  // TODO: Implement your solution here
  let res = [];
  let i = 0;
  let n = intervals.length;

  // before
  while (i < n && intervals[i][1] < newInterval[0]) {
    res.push(intervals[i++]);
  }

  // [1, 2] [3, 5] [6, 8] [9, 10]   [4, 7]
  // merge
  while (
    i < n &&
    intervals[i][1] >= newInterval[0] &&
    intervals[i][0] <= newInterval[1]
  ) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  res.push(newInterval);

  // After
  while (i < n) {
    res.push(intervals[i++]);
  }

  return res;
}
