// * 257. Binary Tree Paths
// Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Input: root = [1,2,3,null,5]
// Output: ["1->2->5","1->3"]

// Input: root = [1]
// Output: ["1"]

// Constraints:
// The number of nodes in the tree is in the range [1, 100].
// -100 <= Node.val <= 100

// * string
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  let res = [];
  let dfs = (node, prefix) => {
    if (!node) return;
    prefix += node.val;
    if (!node.left && !node.right) {
      res.push(prefix);
      return;
    }
    prefix += '->';
    if (node.left) dfs(node.left, arr);
    if (node.right) dfs(node.right, arr);
  };

  dfs(root, '');
  return res;
};

// * array
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (!root) return [];
  let res = [];
  let dfs = (node, arr) => {
    if (!node) return;
    arr.push(node.val);
    if (!node.left && !node.right) {
      res.push(arr.join('->'));
    } else {
      if (node.left) dfs(node.left, arr);
      if (node.right) dfs(node.right, arr);
    }
    // * backtracking: 每次遞迴後將他 pop 掉
    arr.pop();
  };

  dfs(root, []);
  return res;
};
