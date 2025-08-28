/*
* 1462. Course Schedule IV

There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [a, b] indicates that you must take course b before course a.

Some of the courses may have prerequisites, and some may not. For example, if prerequisites = [[1, 0]], it means you have to take course 0 before course 1.

You are also given a list of queries, where queries[j] = [u, v]. For the j-th query, you should answer whether taking course u is a prerequisite of course v.

Return a boolean array answer, where answer[j] is the answer to the j-th query.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
Output: [true,false]

Example 2:
Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
Output: [false,false]

Constraints:
- 2 <= numCourses <= 100
- 0 <= prerequisites.length <= 500
- prerequisites[i].length == 2
- 0 <= ai, bi < numCourses
- 1 <= queries.length <= 10^4
- 0 <= ui, vi < numCourses
*/

/*
* 題意
  1. 給你 numCourses 門課，編號 0 ~ numCourses-1。
  2. prerequisites[i] = [a, b] 表示「要修 a 之前必須先修 b」。
  3. queries[j] = [u, v]，問你「u 是不是 v 的先修課？」
*/
class Solution {
  /**
   * @param {number} numCourses
   * @param {number[][]} prerequisites
   * @param {number[][]} queries
   * @return {boolean[]}
   */
  checkIfPrerequisite(numCourses, prerequisites, queries) {
    let graph = Array.from({ length: numCourses }, () => new Set());
    let requires = Array.from({ length: numCourses }, () => new Set());
    let indegree = new Array(numCourses).fill(0);

    for (let [to, from] of prerequisites) {
      graph[from].add(to);
      indegree[to]++;
    }

    let queue = [];
    for (let i = 0; i < numCourses; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    while (queue.length) {
      let node = queue.shift();

      // * 比 Course Schedule II 多處理 requires 紀錄需要
      for (let nei of graph[node]) {
        requires[nei].add(node);
        for (let pre of requires[node]) {
          requires[nei].add(pre);
        }

        indegree[nei]--;
        if (indegree[nei] === 0) {
          queue.push(nei);
        }
      }
    }

    return queries.map(([u, v]) => requires[u].has(v));
  }
}
