/*
* 621. Task Scheduler

You are given an array of CPU tasks, each represented by a capital letter from 'A' to 'Z'. Each task takes one unit of time to complete.

Between any two same tasks, there must be a cooling period of at least n units of time. This means that if you complete a task 'A' at time t, you cannot complete another task 'A' until time t + n + 1.

Return the minimum number of time units required to complete all tasks.
 
Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B
There is at least 2 units of time between any two same tasks.

Example 2:
Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: On this case any permutation of tasks is valid since n = 0.
["A","A","A","B","B","B"]
["A","B","A","B","A","B"]
["B","B","B","A","A","A"]
...
And so on.
The minimum number of units of time is just the number of tasks, 6.

Example 3:
Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
Explanation: A -> B -> C -> A -> D -> E -> A -> F -> G -> A -> idle -> idle -> A -> idle -> idle -> A
 
Constraints:
1 <= tasks.length <= 10^4
tasks[i] is an uppercase English letter.
0 <= n <= 100
*/

/**
 * * 數學公式
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // 1. 統計頻率
  const freq = {};
  for (const task of tasks) {
    freq[task] = (freq[task] || 0) + 1;
  }

  // 2. 找出最高頻率和有幾個任務達到最高頻率
  const maxFreq = Math.max(...Object.values(freq));
  const maxCount = Object.values(freq).filter((f) => f === maxFreq).length;

  // 3. 公式計算
  const partCount = maxFreq - 1; // 分割數
  const partLength = n - (maxCount - 1); // 每個分割的空位數
  const emptySlots = partCount * partLength; // 總空位數
  const availableTasks = tasks.length - maxFreq * maxCount; // 可填入空位的任務數
  const idles = Math.max(0, emptySlots - availableTasks); // 剩餘的 idle 時間

  return tasks.length + idles;
};

/**
 * * Heap
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // 1. 統計任務頻率
  const freq = new Map();
  for (const task of tasks) {
    freq.set(task, (freq.get(task) || 0) + 1);
  }

  // 2. 建立 Max Heap（頻率）
  const maxHeap = new MaxPriorityQueue();
  for (const count of freq.values()) {
    maxHeap.enqueue(count);
  }

  let time = 0;

  // 3. 模擬執行
  while (!maxHeap.isEmpty()) {
    const cycle = [];

    // 一個週期最多執行 n+1 個任務
    for (let i = 0; i <= n; i++) {
      if (!maxHeap.isEmpty()) {
        cycle.push(maxHeap.dequeue());
      }
    }

    // 執行任務，頻率減 1
    for (const count of cycle) {
      if (count > 1) {
        maxHeap.enqueue(count - 1);
      }
    }

    // 計算這個週期的時間
    if (maxHeap.isEmpty()) {
      // 最後一個週期，只需要實際執行的任務時間
      time += cycle.length;
    } else {
      // 不是最後週期，需要填滿 n+1 個時間單位
      time += n + 1;
    }
  }

  return time;
};
