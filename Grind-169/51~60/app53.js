// * Binary Tree Right Side View
// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Input: root = [1,2,3,4,null,null,null,5]
// Output: [1,3,4,5]

// Input: root = [1,null,3]
// Output: [1,3]

// Input: root = []
// Output: []

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
 * @return {number[]}
 * @description // * DFS
 */
var rightSideView = function (root) {
  let res = [];
  let dfs = (node, depth) => {
    if (!node) return;
    // ! 注意是 res.legnth
    if (depth === res.length) res.push(node.val);
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  };
  dfs(root, 0);
  return res;
};

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
 * @return {number[]}
 * @description // * BFS
 */
var rightSideView = function (root) {
  let res = [];
  let queue = [root];

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (i === len - 1) res.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.rigth);
    }
  }

  return res;
};
