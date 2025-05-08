// Given a positive integer n, the task is to find the nth Fibonacci number.

// The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21

// Input: n = 2
// Output: 1
// Explanation: 1 is the 2nd number of Fibonacci series.

// Input: n = 5
// Output: 5
// Explanation: 5 is the 5th number of Fibonacci series.

// DP
console.log(dp(2));
console.log(dp(5));

function dp(n) {
  // 特殊情況：n 為 0 或 1 時，直接返回對應的 Fibonacci 值
  if (n === 0) return 0;
  if (n === 1) return 1;

  // 初始化前兩項
  let prev = 0; // F(0)
  let curr = 1; // F(1)

  // 從第 2 項開始計算到第 n 項
  for (let i = 2; i <= n; i++) {
    let next = prev + curr; // 計算下一項
    prev = curr; // 更新前一項
    curr = next; // 更新當前項
  }

  return curr; // 返回第 n 項的 Fibonacci 值
}
