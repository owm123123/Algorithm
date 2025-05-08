// Tribonacci Numbers

// The tribonacci series is a generalization of the Fibonacci sequence where each term is the sum of the three preceding terms.

// a(n) = a(n-1) + a(n-2) + a(n-3)
// with
// a(0) = a(1) = 0, a(2) = 1.

// First few numbers in the Tribonacci Sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, ….
// Given a value n, task is to print first n Tribonacci Numbers.

// Input : 5
// Output : 0, 0, 1, 1, 2

// Input : 10
// Output : 0, 0, 1, 1, 2, 4, 7, 13, 24, 44

// Input : 20
// Output : 0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136,  5768, 10609, 19513

console.log(dp(5));
console.log(dp(10));
console.log(dp(20));

function dp(n) {
  if (n === 1 || n === 2) {
    return 0;
  }
  if (n === 3) {
    return 1;
  }

  let res = [0, 0, 1];
  let prevPrev = 0;
  let prev = 0;
  let curr = 1;

  // 0, 0, 1, 1, 2, 4, 7, 13, 24, 44

  for (let i = 4; i <= n; i++) {
    const next = prevPrev + prev + curr;
    res.push(next);

    let temp = curr;
    curr = next;
    prevPrev = prev;
    prev = temp;
  }

  return res;
}
