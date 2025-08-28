/*
* 323. Number of Connected Components in an Undirected Graph

Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
write a function to find the number of connected components in an undirected graph.

Example 1:
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Example 2:
Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1

Note:
- You can assume that no duplicate edges will appear in edges.
- Each node can only appear in at most one edge.

*/

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   */
  countComponents(n, edges) {
    let graph = Array.from({ length: n }, () => []);
    let visited = new Array(n).fill(false);
    for (let [e1, e2] of edges) {
      graph[e1].push(e2);
      graph[e2].push(e1);
    }

    let dfs = (node) => {
      visited[node] = true;
      for (let nei of graph[node]) {
        if (visited[nei] === false) {
          dfs(nei);
        }
      }
    };

    let count = 0;
    for (let i = 0; i < n; i++) {
      if (visited[i] === false) {
        count++;
        dfs(i);
      }
    }

    return count;
  }
}
