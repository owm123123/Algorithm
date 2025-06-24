// * Minimum Height Trees
// A tree is an undirected graph in which any two vertices are connected by exactly one path. In other words, any connected graph without simple cycles is a tree.
// Given a tree of n nodes labelled from 0 to n - 1, and an array of n - 1 edges where edges[i] = [ai, bi] indicates that there is an undirected edge between the two nodes ai and bi in the tree, you can choose any node of the tree as the root. When you select a node x as the root, the result tree has height h. Among all possible rooted trees, those with minimum height (i.e. min(h))  are called minimum height trees (MHTs).
// Return a list of all MHTs' root labels. You can return the answer in any order.
// The height of a rooted tree is the number of edges on the longest downward path between the root and a leaf.

// Input: n = 4, edges = [[1,0],[1,2],[1,3]]
// Output: [1]
// Explanation: As shown, the height of the tree is 1 when the root is the node with label 1 which is the only MHT.

// Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
// Output: [3,4]

// * 兩點間最長距離為奇數時，中心是一個節點
// * 0-1-2-3-4（5 個節點，直徑長度 4）
// * -------------------------------------
// * 兩點間最長距離偶數時，中心是兩個相鄰節點
// * 0-1-2-3-4-5（6 個節點，直徑長度 5）
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 * @description // * 拓樸法（BFS 剝葉子）
 */
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0];

  // ! 使用 set 不要用 array
  const graph = Array.from({ length: n }, () => new Set());
  for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
  }

  // * 外層(節點=1)開始刪除
  let leaves = [];
  for (let i = 0; i < n; i++) {
    if (graph[i].size === 1) leaves.push(i);
  }

  let remain = n;
  while (remain > 2) {
    remain -= leaves.length;
    const newLeaves = [];
    for (const leaf of leaves) {
      const neighbor = Array.from(graph[leaf])[0];
      graph[neighbor].delete(leaf);
      if (graph[neighbor].size === 1) newLeaves.push(neighbor);
    }
    leaves = newLeaves;
  }
  return leaves;
};
