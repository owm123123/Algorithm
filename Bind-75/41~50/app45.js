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
 */
var canFinish = function (numCourses, prerequisites) {
  // create graph
  const graph = Array.from({ length: numCourses }, () => []);
  for (let [a, b] of prerequisites) {
    graph[b] = a;
  }

  // create visited 0:未訪問 1:訪問中 2:已訪問
  let visited = new Array(numCourses).fill(0);

  const hasCycle = (node) => {
    // let curr = visited[node]; (X)
    // 不可以定義變數，這樣沒有寫回visited[]
    if (visited[node] === 1) return true;
    if (visited[node] === 2) return false;

    visited[node] = 2;

    for (let next of graph[node]) {
      if (hasCycle(next)) return true;
    }

    visited[node] = 3;
    return false;
  };

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) return false;
  }
  return true;
};
