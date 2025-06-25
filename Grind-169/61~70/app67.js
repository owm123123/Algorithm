// * Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures,
// * return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature.
// * answer[i] 是「要等幾天才會遇到更高溫」
// ! If there is no future day for which this is possible, keep answer[i] == 0 instead.
// ! 如果之後都沒有更高溫，answer[i] 就是 0

// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Input: temperatures = [30,60,90]
// Output: [1,1,0]

// Constraints:
// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100

/**
 * @param {number[]} temperatures
 * @return {number[]}
 * @description // ! 單調遞減堆疊（Monotonic Stack）
 */
var dailyTemperatures = function (temperatures) {
  let n = temperatures.length;
  let stack = [];
  let res = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let idx = stack.pop();
      res[idx] = i - idx;
    }
    // * stack 存的是 index
    // ! push 必須放下面 不然會斷掉上面的 while
    stack.push(i);
  }
  return res;
};
