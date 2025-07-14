// * Maximum Width of Binary Tree
// Given the root of a binary tree, return the maximum width of the given tree.
// The maximum width of a tree is the maximum width among all levels.
// The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
// It is guaranteed that the answer will in the range of a 32-bit signed integer.

// Input: root = [1,3,2,5,3,null,9]
// Output: 4
// Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).

// Input: root = [1,3,2,5,null,null,9,6,null,7]
// Output: 7
// Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).

// Input: root = [1,3,2,5]
// Output: 2
// Explanation: The maximum width exists in the second level with length 2 (3,2).

// Constraints:
// The number of nodes in the tree is in the range [1, 3000].
// -100 <= Node.val <= 100

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
 * @description // * BFS + node編號
 * // * left = 2 * root, right = 2 * root + 1
 */
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let maxWidth = 0;
  let queue = [[root, 1]]; // * [node, idx]
  while (queue.length) {
    let len = queue.length;
    // ! 當層最左邊 idx,給 48 行使用
    let minIdx = queue[0][1];
    let first = 0;
    let last = 0;
    for (let i = 0; i < len; i++) {
      let [node, idx] = queue.shift();
      idx -= minIdx; // ! 避免編號過大
      if (i === 0) first = idx;
      if (i === len - 1) last = idx;
      if (node.left) queue.push([node.left, 2 * idx]);
      if (node.right) queue.push([node.right, 2 * idx + 1]);
    }
    maxWidth = Math.max(maxWidth, last - first + 1);
  }
  return maxWidth;
};
