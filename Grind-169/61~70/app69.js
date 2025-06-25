// * Meeting Rooms
// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: false
// Explanation:
// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict

// Input: intervals = [(5,8),(9,15)]
// Output: true

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
   * @returns {boolean}
   * @description // ! 注意上面的inervals的constructor
   */
  canAttendMeetings(intervals) {
    intervals.sort((a, b) => a.start - b.start);
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i - 1].end > intervals[i].start) return false;
    }
    return true;
  }
}
