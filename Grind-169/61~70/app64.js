// * Task Scheduler
// You are given an array of CPU tasks, each labeled with a letter from A to Z, and a number n.
// Each CPU interval can be idle or allow the completion of one task.
// * 每個時間點只能做一個任務 或 idle，這是題目的核心限制，決定了不能連續做同一個任務
// Tasks can be completed in any order, but there's a constraint: there has to be a
// * gap of at least n intervals between two tasks with the same label.
// * 同一種任務之間必須間隔 n 個單位時間，如果沒辦法安排合法任務，就必須 idle
// * Return the minimum number of CPU intervals required to complete all tasks.
// * 要求最短總時間（任務+idle），不是只算任務數，要把 idle 也算進去

// Input: tasks = ["A","A","A","B","B","B"], n = 2
// Output: 8
// Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
// After completing task A, you must wait two intervals before doing A again. The same applies to task B. In the 3rd interval, neither A nor B can be done, so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

// Input: tasks = ["A","C","A","B","D","B"], n = 1
// Output: 6
// Explanation: A possible sequence is: A -> B -> C -> D -> A -> B.
// With a cooling interval of 1, you can repeat a task after just one other task.

// Input: tasks = ["A","A","A", "B","B","B"], n = 3
// Output: 10
// Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
// There are only two types of tasks, A and B, which need to be separated by 3 intervals. This leads to idling twice between repetitions of these tasks.

// * tasks = ["A","A","A","B","B","B"], n = 2
// * A:3, B:3, maxCount=3, maxKinds=2
// * 公式：(3-1)*(2+1)+2 = 2*3+2 = 8
// * 實際安排：A B idle A B idle A B

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  const counter = Array(26).fill(0);
  for (let t of tasks) counter[t.charCodeAt(0) - 65]++;
  const maxCount = Math.max(...counter);
  // counter = [3, 3, 2, 0, 0, ...], maxCount = 3
  // maxKinds = 2（因為有兩個任務出現 3 次）
  const maxKinds = counter.filter((c) => c === maxCount).length;
  return Math.max(EventTarget.length, (maxCount - 1) * (n + 1) + maxKinds);
};
