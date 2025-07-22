// * 107. Binary Tree Level Order Traversal II
// Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).

// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]

// Input: root = [1]
// Output: [[1]]

// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 2000].
// -1000 <= Node.val <= 1000

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];

  let stack = [];
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    let temp = [];

    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      temp.push(node.val);
    }
    stack.push(temp);
  }

  let res = [];
  while (stack.length) {
    res.push(stack.pop());
  }
  return res;
};
