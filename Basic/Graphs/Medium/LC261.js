/**
 * 261. Graph Valid Tree
 *
 * Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes),
 * write a function to check whether these edges make up a valid tree.
 *
 * Example 1:
 * Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
 * Output: true
 *
 * Example 2:
 * Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
 * Output: false
 *
 * Constraints:
 * - 1 <= n <= 2000
 * - 0 <= edges.length <= 5000
 * - edges[i].length == 2
 * - 0 <= edges[i][j] < n
 * - No duplicate edges.
 * - No self-loops.
 */

// Write your solution here:
class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    let len = edges.length;
    // * 邊數必須等於 n-1，否則一定不是樹。
    if (len !== n - 1) return false;

    let graph = Array.from({ length: n }, () => []);
    for (let [a, b] of edges) {
      graph[b].push(a);
      graph[a].push(b);
    }

    let visited = new Array(n).fill(false);

    let hasCycle = (node, parent) => {
      visited[node] = true;
      for (let nei of graph[node]) {
        if (!visited[nei]) {
          if (hasCycle(nei, node)) return true;
        } else if (nei !== parent) {
          return true; // ! 拜訪過但不是從父節點來 (有環)
        }
      }
      return false;
    };

    // * 因為必定連通, 所以從 0 開始走就應該走完
    if (hasCycle(0, -1)) return false;

    for (let v of visited) {
      if (!v) return false;
    }
    return true;
  }
}
