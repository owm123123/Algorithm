/*
* LeetCode 1834. Single-Threaded CPU

You are given n tasks labeled from 0 to n-1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTimei, processingTimei] means that the i-th task will be available to process at enqueueTimei and will take processingTimei to finish processing.

You have a single-threaded CPU that can process at most one task at a time and will act in the following way:
- If the CPU is idle and there are no available tasks to process, the CPU remains idle.
- If the CPU is idle and there are available tasks, it will choose the one with the shortest processing time. If multiple tasks have the same shortest processing time, it will choose the task with the smallest index.
- Once a task is started, the CPU will process the entire task without stopping.
- The CPU can finish a task then immediately start a new one.
* 如果 CPU 空閒且沒有可執行任務，保持空閒
* 如果 CPU 空閒且有可執行任務，選擇處理時間最短的任務
* 如果處理時間相同，選擇索引最小的任務
* 任務一旦開始就不能中斷
* 任務完成後可立即開始下一個任務

Return the order in which the CPU will process the tasks.

Example 1:
Input: tasks = [[1,2],[2,4],[3,2],[4,1]]
Output: [0,2,3,1]
Explanation: The events go as follows: 
- At time = 1, task 0 is available to process. Available tasks = {0}.
- At time = 2, task 1 is available to process. Available tasks = {0,1}.
- At time = 3, task 2 is available to process. Available tasks = {0,1,2}.
- At time = 4, task 3 is available to process. Available tasks = {0,1,2,3}.
- At time = 1, the CPU starts with task 0. 
- At time = 3, the CPU finishes task 0 and starts with task 2.
- At time = 5, the CPU finishes task 2 and starts with task 3.
- At time = 6, the CPU finishes task 3 and starts with task 1.

Example 2:
Input: tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
Output: [4,3,2,0,1]
Explanation: All tasks are available at time = 7. The CPU will choose the tasks in the order of their processing times.

Constraints:
- tasks.length == n
- 1 <= n <= 10^5
- 1 <= enqueueTimei, processingTimei <= 10^9
*/

// * tasks : [enqueueTime processingTime]
// * [任務可開始執行的時間, 任務執行需要的時間]
/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function (tasks) {
  // 邊界檢查：空陣列直接返回
  if (!tasks || !tasks.length) return [];

  const n = tasks.length;

  // 步驟1：將任務轉換為物件並按開始時間排序
  // 原始任務：[enqueueTime, processingTime] -> 物件：{startTime, duration, index}
  const sortedTasks = tasks
    .map((e, i) => ({
      startTime: e[0], // 任務可開始執行的時間
      duration: e[1], // 任務執行需要的時間
      index: i, // 保留原始索引
    }))
    .sort((a, b) => a.startTime - b.startTime); // 按開始時間排序

  // 步驟2：建立優先佇列（Min Heap）
  // 排序規則：1. 執行時間短的優先 2. 執行時間相同時索引小的優先
  const minQueue = new PriorityQueue((a, b) => {
    if (a.duration === b.duration) {
      return a.index - b.index; // 執行時間相同，選索引較小的
    } else {
      return a.duration - b.duration; // 選執行時間較短的
    }
  });

  const result = []; // 存放執行順序的結果
  let cpuStartTime = 0; // CPU 當前時間
  let i = 0; // 指向下一個要檢查的任務

  // 步驟3：主迴圈 - 模擬CPU執行過程
  // 當佇列不為空或還有任務未處理時繼續執行
  while (!minQueue.isEmpty() || i < n) {
    // 情況1：CPU空閒且沒有可執行任務
    // 如果佇列為空且當前時間小於下一個任務的開始時間，跳到該任務的開始時間
    if (minQueue.isEmpty() && cpuStartTime < sortedTasks[i].startTime)
      cpuStartTime = sortedTasks[i].startTime;

    // 情況2：將所有在當前時間可執行的任務加入佇列
    // 遍歷所有開始時間 <= 當前CPU時間的任務
    while (i < n && cpuStartTime >= sortedTasks[i].startTime) {
      minQueue.enqueue(sortedTasks[i]); // 加入優先佇列
      i++;
    }

    // 情況3：從佇列中取出優先度最高的任務執行
    const nextTask = minQueue.dequeue(); // 取出執行時間最短的任務

    cpuStartTime += nextTask.duration; // 更新CPU時間（當前時間 + 任務執行時間）
    result.push(nextTask.index); // 記錄執行順序（使用原始索引）
  }

  return result; // 返回任務執行順序
};
