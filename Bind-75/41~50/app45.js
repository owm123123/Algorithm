//* Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// Input: numCourses = 2, prerequisites = [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0. So it is possible.

// Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
// To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

// numCourses = 3
// prerequisites = [
//   [0, 1], // 1 -> 0
//   [1, 2], // 2 -> 1
//   [2, 0]  // 0 -> 2
// ]
// 形成一個環：0 → 1 → 2 → 0
// Output: false

// numCourses = 5
// prerequisites = [
//   [1, 0],
//   [2, 1],
//   [4, 3]
// ]
// 0 → 1 → 2 和 3 → 4 兩個獨立子圖
// Output: true

//-------------------------
// 建立[][] => Array.from({length:nums}, () => [])
// new Array(nums.length),fill([]); (X)
// 如果 graph[0] 改變了，其他也會跟著改變

// prerequisites = [
//   [1, 0], // 0 -> 1
//   [2, 0], // 0 -> 2
//   [3, 1], // 1 -> 3
//   [3, 2]  // 2 -> 3
// ]

// const graph = Array.from({ length: numCourses }, () => []);
// for (let [a, b] of prerequisites) {
//   graph[b].push(a);
// }

// graph = [
//   [1, 2], // 0 指向 1 和 2
//   [3],    // 1 指向 3
//   [3],    // 2 指向 3
//   []      // 3 沒有指向任何課
// ]

// 此題為單向圖 prerequisites  -> 所以可以直接檢查
// 雙向圖 -> 修1可以修2，修2也可以修1
//-------------------------
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * @description // * DFS檢查有無cycle (無法得到修課順序)
 */
var canFinish = function (numCourses, prerequisites) {
  // create graph
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
  }

  // create visited 0:未訪問 1:訪問中 2:已訪問
  let visited = new Array(numCourses).fill(0);

  const hasCycle = (node) => {
    // let curr = visited[node]; (X)
    // 不可以定義變數，這樣沒有寫回visited[]
    if (visited[node] === 1) return true;
    if (visited[node] === 2) return false;

    visited[node] = 1;

    for (let next of graph[node]) {
      if (hasCycle(next)) return true;
    }

    visited[node] = 2;
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  return true;
};
//-------------------------
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * @description // * Topological sort (可得到修課順序)
 * // ! Topological sort 效率比上面差,有必要再使用
 */
var canFinish = function (numCourses, prerequisites) {
  // create graph
  let graph = Array.from({ length: numCourses });
  let indegree = new Array(numCourses).fill(0);
  for (let [a, b] of prerequisites) {
    graph[b].push(a);
    indegree[a]++;
  }

  // 將所有 indegree 為 0 放入 queue
  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (numCourses[i] === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length) {
    const node = queue.shift();
    count++;
    for (let next of graph[node]) {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    }
  }

  return count === numCourses;
};
//-------------------------
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 * @description // * beat91* map + array
 * // * node 只進 queue 一次 出去一次
 */
var canFinish = function (numCourses, prerequisites) {
  const adj = new Map();
  const indegree = Array(numCourses).fill(0);

  // Build adjacency list and indegree array
  prerequisites.forEach(([u, v]) => {
    if (!adj.has(v)) adj.set(v, []);
    adj.get(v).push(u);
    indegree[u]++;
  });

  // Collect courses with no prerequisites
  const queue = indegree
    .map((deg, i) => (deg === 0 ? i : null))
    .filter((i) => i !== null);

  let count = 0;

  while (queue.length > 0) {
    const course = queue.shift();
    count++;

    (adj.get(course) || []).forEach((next) => {
      indegree[next]--;
      if (indegree[next] === 0) queue.push(next);
    });
  }

  return count === numCourses;
};
