// * Meeting Rooms II
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i),
// * find the minimum number of days required to schedule all meetings without any conflicts. (「最少需要幾間會議室」才能讓所有會議都不衝突地舉行)

// Input: intervals = [(0,40),(5,10),(15,20)]
// Output: 2
// Explanation:
// day1: (0,40)
// day2: (5,10),(15,20)

// Input: intervals = [(4,9)]
// Output: 1

// Note: (0,8),(8,10) is not considered a conflict at 8
//-------------------------

/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
  /**
   * @param {Interval[]} intervals
   * @returns {number}
   */
  minMeetingRooms(intervals) {
    let starts = intervals.map((i) => i.start).sort((a, b) => a - b);
    let ends = intervals.map((i) => i.end).sort((a, b) => a - b);

    let rooms = 0;
    let endIndex = 0;

    for (let i = 0; i < intervals.length; i++) {
      // * 新會議開始，舊會議未結束
      if (starts[i] < ends[endIndex]) {
        rooms++;
      } else {
        // * 舊會議結束後++
        endIndex++;
      }
    }

    return rooms;
  }
}
