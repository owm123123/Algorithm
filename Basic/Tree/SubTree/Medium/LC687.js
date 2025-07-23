// * 687. Longest Univalue Path
// Given the root of a binary tree, return the length of the longest path, where each node in the path has the same value. This path may or may not pass through the root.
// The length of the path between two nodes is represented by the number of edges between them.

// Input: root = [5,4,5,1,1,null,5]
// Output: 2
// Explanation: The shown image shows that the longest path of the same value (i.e. 5).

// Input: root = [1,4,5,4,4,null,5]
// Output: 2
// Explanation: The shown image shows that the longest path of the same value (i.e. 4).

// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -1000 <= Node.val <= 1000
// The depth of the tree will not exceed 1000.

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
var longestUnivaluePath = function (root) {
  if (!root) return 0;
  let maxCount = 0;
  let dfs = (node) => {
    if (!node) return 0;
    let left = dfs(node.left);
    let right = dfs(node.right);

    // *如果 node.left 存在且 node.left.val == node.val，則 leftPath = left + 1，否則 0
    // *如果 node.right 存在且 node.right.val == node.val，則 rightPath = right + 1，否則 0
    let leftCount = 0;
    let rightCount = 0;
    if (node.left && node.val === node.left.val) leftCount = left + 1;
    if (node.right && node.val === node.right.val) rightCount = right + 1;
    maxCount = Math.max(maxCount, leftCount + rightCount);

    return Math.max(leftCount, rightCount);
  };
  dfs(root);
  return maxCount;
};
