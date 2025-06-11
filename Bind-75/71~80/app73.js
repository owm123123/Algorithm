// * Non-overlapping Intervals
// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.
// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

/**
 * * overlapping：有交集、範圍有重疊
 * * non-overlapping：完全分開，或只在端點接觸
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 * @description // * 精隨在 sort 那行 (Greedy)
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return 0;
  // * 用 [1] 排序比較好 => 每次都選結束最早
  // * Greedy => 每次都優先選擇「結束時間最早」的區間
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < end) {
      count++;
    } else {
      end = intervals[i][1];
    }
  }

  return count;
};
