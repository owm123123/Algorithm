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
  if (!tasks || !tasks.length) return [];

  const n = tasks.length;

  const sortedTasks = tasks
    .map((e, i) => ({
      startTime: e[0],
      duration: e[1],
      index: i,
    }))
    .sort((a, b) => a.startTime - b.startTime);

  const minQueue = new PriorityQueue((a, b) => {
    if (a.duration === b.duration) {
      return a.index - b.index;
    } else {
      return a.duration - b.duration;
    }
  });

  const result = [];
  let cpuStartTime = 0;
  let i = 0;
  while (!minQueue.isEmpty() || i < n) {
    if (minQueue.isEmpty() && cpuStartTime < sortedTasks[i].startTime)
      cpuStartTime = sortedTasks[i].startTime;

    while (i < n && cpuStartTime >= sortedTasks[i].startTime) {
      minQueue.enqueue(sortedTasks[i]);
      i++;
    }

    const nextTask = minQueue.dequeue();

    cpuStartTime += nextTask.duration;
    result.push(nextTask.index);
  }

  return result;
};
