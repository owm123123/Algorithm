// * Balanced Binary Tree
// Given a binary tree, determine if it is height-balanced.

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: true;

// Input: root = [1, 2, 2, 3, 3, null, null, 4, 4];
// Output: false;

// Input: root = [];
// Output: true;

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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // * 每個節點的左右子樹高度差不超過 1。
  let dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    // * 如果左右子樹有任何一邊已經不平衡（回傳 -1），就直接 propagate -1 上去。
    if (left === -1) return -1;
    let right = dfs(node.right);
    if (right === -1) return -1;
    // * DFS: 如果某個節點的左右子樹高度差 > 1，直接回傳 -1
    if (Math.abs(left - right) > 1) return -1;
    // * 假設左子樹高度 2，右子樹高度 3，
    // * 那目前節點高度就是 Math.max(2, 3) + 1 = 4。
    return Math.max(left, right) + 1;
  };

  return dfs(root) !== -1;
};
