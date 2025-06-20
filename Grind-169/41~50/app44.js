// * Diameter of Binary Tree
// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// * longest path between any two nodes
// The length of a path between two nodes is represented by the number of edges between them.
// * number of edges 回傳邊數

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

// Input: root = [1,2]
// Output: 1

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  /**
   * * 解題思路
   * * 用 DFS 從下往上計算每個節點的「左子樹高度」和「右子樹高度
   * * 每個節點的「左高 + 右高」就是經過這個節點的最長路徑（直徑候選）
   */

  let max = -Infinity;
  let dfs = (node) => {
    if (!node) return 0;
    // * 左子樹高度
    let left = dfs(node.left);
    // * 右子樹高度
    let right = dfs(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  };

  dfs(root);
  return max;
};
