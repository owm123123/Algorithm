// * Number of Connected Components in an Undirected Graph
// There is an undirected graph with n nodes. There is also an edges array, where edges[i] = [a, b] means that there is an edge between node a and node b in the graph.
// The nodes are numbered from 0 to n - 1.
// Return the total number of connected components in that graph.

// Input: n=3, edges=[[0,1], [0,2]]
// Output: 1

// Input: n=6, edges=[[0,1], [1,2], [2,3], [4,5]]
// Output: 2

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {number}
   * @description // * DFS + Graph
   */
  countComponents(n, edges) {
    let count = 0;
    // create graph
    let graph = Array.from({ length: n }, () => []);
    for (let [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }
    // create visited
    let visited = new Array(n).fill(false);

    const dfs = (node) => {
      visited[node] = true;
      for (let next of graph[node]) {
        // * 斷點在這 檢查 visited 是否走過
        if (!visited[next]) dfs(next);
      }
    };

    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        count++;
        dfs(i);
      }
    }
  }
}
