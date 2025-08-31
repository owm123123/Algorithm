/**
 * 210. Course Schedule II
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi before course ai.
 *
 * Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them.
 * If it is impossible to finish all courses, return an empty array.
 *
 * Example 1:
 * Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * Output: [0,2,1,3] or [0,1,2,3]
 *
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: [0,1]
 *
 * Example 3:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: []
 *
 * Constraints:
 * - 1 <= numCourses <= 2000
 * - 0 <= prerequisites.length <= numCourses * (numCourses - 1)
 * - prerequisites[i].length == 2
 * - 0 <= ai, bi < numCourses
 * - ai != bi
 * - All the pairs [ai, bi] are unique.
 */

// Write your solution below:
// * BFS + Topological Sort (Kahn's Algorithm)
class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {number[]}
   */
  findOrder(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    let inDegree = new Array(numCourses).fill(0);

    // * 用 to form 代表有向圖
    for (let [to, from] of prerequisites) {
      graph[from].push(to);
      // ! 是看幾個需要他
      inDegree[to]++;
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
      if (inDegree[i] === 0) queue.push(i);
    }

    let res = [];
    while (queue.length) {
      let node = queue.shift();
      res.push(node);
      // ! 注意
      for (let nei of graph[node]) {
        inDegree[nei]--;
        if (inDegree[nei] === 0) queue.push(nei);
      }
    }
    return res.length === numCourses ? res : [];
  }
}
