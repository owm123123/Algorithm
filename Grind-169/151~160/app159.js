// * Employee Free Time
// Given a list schedule of employees, where each employee has a list of non-overlapping intervals representing their working time (and these intervals are sorted),
// * return the list of finite intervals representing common positive length free time for all employees, also in sorted order.
// * 回傳所有員工都有空的時間

// Each interval is represented as an object with .start and .end properties (not as an array).

// Do not include intervals like [5,5] in your answer as they have 0 length.

// Input: schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
// Output: [[3,4]]
// Explanation:
// There are a total of three employees, and all common
// free time intervals would be [-inf, 1], [3, 4], [10, inf].
// We discard any intervals that contain inf as they aren't finite.

// Input: schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
// Output: [[5,6],[7,9]]

// Note:
// schedule and schedule[i] are lists with lengths in range [1, 50].
// * 0 <= schedule[i].start < schedule[i].end <= 10^8.
// ! schedule[] 是一個物件

var employeeFreeTime = function (schedule) {
  let intervals = [];
  for (let emp of schedule) {
    for (let itv of emp) {
      intervals.push(itv);
    }
  }

  intervals.sort((a, b) => a.start - b.start);

  let res = [];
  let prevEnd = intervals[0].end;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start > prevEnd) {
      res.push({ start: prevEnd, end: intervals[i].start });
    }
    prevEnd = Math.max(prevEnd, intervals[i].end);
  }
  return res;
};
