/*
* LeetCode 853. Car Fleet

There are n cars going to the same destination along a one-lane road. The destination is target miles away.

You are given two integer arrays position and speed, both of length n, where position[i] is the starting position of the ith car and speed[i] is the speed of the ith car (in miles per hour).

* A car can never pass another car ahead of it, but it can catch up to it and drive at the same speed and position. When this happens, the cars form a fleet. A fleet is some cars driving together at the same position and speed.
* 車不能超車，但可以追上前車，追上後會以同樣速度一起前進，形成一個「車隊」。

* Return the number of fleets that will arrive at the destination.
// * 最後會有幾個車隊抵達終點

Example 1:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3

Example 2:
Input: target = 10, position = [3], speed = [3]
Output: 1

Constraints:
- n == position.length == speed.length
- 1 <= n <= 10^4
- 0 < target <= 10^6
- 0 <= position[i] < target
- All the values of position are unique.
- 0 < speed[i] <= 10^6
*/

// Write your solution here:
class Solution {
  /**
   * @param {number} target
   * @param {number[]} position
   * @param {number[]} speed
   * @return {number}
   */
  carFleet(target, position, speed) {
    let cars = []; // pos(位置), time(所需時間)
    let len = position.length;
    for (let i = 0; i < len; i++) {
      // ! 算時間不要用 math.floor, 否則判斷會不准
      cars.push([position[i], (target - position[i]) / speed[i]]);
    }

    //* 先處理離終點近車
    cars.sort((a, b) => b[0] - a[0]);

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
