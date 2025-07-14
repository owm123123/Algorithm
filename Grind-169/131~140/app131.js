// * All Nodes Distance K in Binary Tree
// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.
// You can return the answer in any order.

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.

// Input: root = [1], target = 1, k = 3
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [1, 500].
// 0 <= Node.val <= 500
// All the values Node.val are unique.
// target is the value of one of the nodes in the tree.
// 0 <= k <= 1000

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
  // 建立 parent map
  let parent = new Map(); // key: node value: parent
  let dfs = (node, par) => {
    if (!node) return;
    parent.set(node, par);
    dfs(node.left, node);
    dfs(node.right, node);
  };
  dfs(root, null);

  // BFS 從 target 出發
  let res = [];
  // ! 注意因為 target 是 node 才可以這樣做
  let queue = [[target, 0]]; // node, dist
  let visited = new Set([target]);
  while (queue.length) {
    let [node, dist] = queue.shift();
    if (dist === k) res.push(node.val);
    // ! BFS 特性 當出現第一個 dist > k 後, 就可以跳出了, 因為後面都會 >
    if (dist > k) break;
    /**
     * * 等價於
     * let neighbors = [node.left, node.right, parent.get(node)];
     * for (let nei of neighbors) {}
     */
    for (let nei of [node.left, node.right, parent.get(node)]) {
      if (nei && !visited.has(nei)) {
        visited.add(nei);
        queue.push([nei, dist + 1]);
      }
    }
  }
  return res;
};
