// * 1302. Deepest Leaves Sum
// Given the root of a binary tree, return the sum of values of its deepest leaves.

// Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
// Output: 15

// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 19

// Constraints:
// The number of nodes in the tree is in the range [1, 104].
// 1 <= Node.val <= 100

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
var deepestLeavesSum = function (root) {
  if (!root) return 0;
  let sum = 0;
  let maxDeep = 0;
  let dfs = (node, deep) => {
    if (!node) return;
    // * 沒有葉子就做比較
    if (!node.left && !node.right) {
      if (deep > maxDeep) {
        maxDeep = deep;
        sum = node.val;
      } else if (deep === maxDeep) {
        sum += node.val;
      }
    }
    if (node.left) dfs(node.left, deep + 1);
    if (node.right) dfs(node.right, deep + 1);
  };
  dfs(root, 0);
  return sum;
};
