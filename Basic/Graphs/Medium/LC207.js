/**
 * LeetCode 207. Course Schedule
 *
 * There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1.
 * You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi before course ai.
 *
 * For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
 *
 * Return true if you can finish all courses. Otherwise, return false.
 *
 * Example 1:
 * Input: numCourses = 2, prerequisites = [[1,0]]
 * Output: true
 * Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.
 *
 * Example 2:
 * Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 *
 * Constraints:
 * - 1 <= numCourses <= 2000
 * - 0 <= prerequisites.length <= 5000
 * - prerequisites[i].length == 2
 * - 0 <= ai, bi < numCourses
 * - All the pairs prerequisites[i] are unique.
 */

// Write your solution below:
// * DFS + hasCycle
class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @return {boolean}
   */

  canFinish(numCourses, prerequisites) {
    let graph = Array.from({ length: numCourses }, () => []);
    for (let [before, after] of prerequisites) {
      graph[after].push(before);
    }
    // 0: 未拜訪 1: 拜訪中 2: 已拜訪
    let visited = new Array(numCourses).fill(0);

    let hasCycle = (idx) => {
      if (visited[idx] === 2) return false;
      if (visited[idx] === 1) return true;

      visited[idx] = 1;

      for (let next of graph[idx]) {
        // ! 這裡不能判斷 visited[next] === 0, 不然沒有意義
        if (hasCycle(next)) return true;
      }

      // ! 跑完記得設定
      visited[idx] = 2;
      return false;
    };

    for (let i = 0; i < numCourses; i++) {
      if (visited[i] === 0 && hasCycle(i)) return false;
    }
    return true;
  }
}

// * Tot
