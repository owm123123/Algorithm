// * Graph Valid Tree
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

// Input:
// n = 5
// edges = [[0, 1], [0, 2], [0, 3], [1, 4]]
// Output: true

// Input:
// n = 5
// edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]
// Output: false

// Note:
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
//-------------------------

/**
 * ! 樹的特性
 * * 連通（Connected）：所有節點都要連在一起。
 * * 無環（Acyclic）：不能有環。
 *
 * ! Graph to Tree 限制
 * * 邊數必須是 n-1：n 個節點的樹一定有 n-1 條邊，否則不是樹。
 * * 不能有環：有環就不是樹。
 * * 必須連通：不能有孤立的節點或分離的子圖。
 */

class Solution {
  /**
   * @param {number} n
   * @param {number[][]} edges
   * @returns {boolean}
   */
  validTree(n, edges) {
    // ! 檢查 edges = n - 1 && 都有連通(Connected) 就可以確定是 無環(Acyclic)

    // * 邊樹必須是 n - 1
    if (edges.length !== n - 1) return false;

    // construction
    let graph = Array.from({ length: n }, () => []);
    for (let [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }
    let visited = new Array(n).fill(false);
    let queue = [0];
    visited[0] = true;

    while (queue.length) {
      let node = queue.shift();
      for (let nei of graph[node]) {
        if (!visited[nei]) {
          visited[nei] = true;
          queue.push(nei);
        }
      }
    }
    return visited.every((v) => v === true);
  }
}
