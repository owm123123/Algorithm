/**
 * 133. Clone Graph
 *
 * Given a reference of a node in a connected undirected graph.
 * Return a deep copy (clone) of the graph.
 * Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.
 *
 * class Node {
 *     constructor(val, neighbors) {
 *         this.val = val === undefined ? 0 : val;
 *         this.neighbors = neighbors === undefined ? [] : neighbors;
 *     }
 * }
 *
 * Example:
 * Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
 * Output: [[2,4],[1,3],[2,4],[1,3]]
 *
 * Constraints:
 * - The number of nodes in the graph is in the range [0, 100].
 * - 1 <= Node.val <= 100
 * - Node.val is unique for each node.
 * - There are no repeated edges and no self-loops in the graph.
 * - The Graph is connected and all nodes can be visited starting from the given node.
 */

// Write your solution here:

/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
  /**
   * @param {Node} node
   * @return {Node}
   */
  cloneGraph(node) {
    if (!node) return null;
    let map = new Map();

    let dfs = (origin) => {
      if (map.has(origin)) return map.get(origin);

      let copy = new Node(origin.val);
      map.set(origin, copy);

      for (let next of origin.neighbors) {
        if (!map.has(next)) {
          copy.neighbors.push(dfs(next));
        }
      }

      return copy;
    };

    // ! 不能回傳 map.values() [包含所有複製節點的 Iterator]
    // ! 須回傳 [複製圖的頭節點]
    return dfs(node);
  }
}
