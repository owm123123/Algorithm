/*
* LeetCode 853. Car Fleet

There are n cars traveling at different speeds in the same direction along a one-lane road. You are given an integer target, which represents the destination point, and two integer arrays position and speed, both of length n.

position[i] represents the starting position of the i-th car, and speed[i] represents the speed of the i-th car (in units per hour).

A car can never pass another car ahead of it, but it can catch up to it and drive at the same speed and position. When this happens, the cars form a car fleet. A car fleet is some non-empty set of cars driving at the same position and speed.

Return the number of car fleets that will arrive at the destination.

Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3

Example 2:
Input: target = 10, position = [3], speed = [3]
Output: 1

Constraints:
- n == position.length == speed.length
- 1 <= n <= 10^5
- 0 < target <= 10^6
- 0 <= position[i] < target
- All the values of position are unique.
- 0 < speed[i] <= 10^6

*/

class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let cars = []; // pos(當前位置), time(抵達所需時間)
    let len = position.length;
    for (let i = 0; i < len; i++) {
      // ! 算時間不要用 math.floor, 否則判斷會不准
      cars.push([position[i], (target - position[i]) / speed[i]]);
    }

    // 先處理離終點近車
    cars.sort((a, b) => b[0] - a[0]);

    // * stack 裡存的是「車隊到達終點的時間」。
    // * 每次 push 的時間都比前一個大（因為只有 time > stack[top] 才 push）。
    let stack = [];
    for (let i = 0; i < cars.length; i++) {
      let [_, time] = cars[i];
      if (stack.length === 0 || time > stack[stack.length - 1]) {
        stack.push(time);
      }
    }
    return stack.length;
  }
}
