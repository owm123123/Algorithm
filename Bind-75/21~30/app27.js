// Binary Tree Level Order Traversal
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).
// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

// Input: root = [1]
// Output: [[1]]

// Input: root = []
// Output: []

//-------------------------

/**
 * BFS + queue 機制
 * queue.shift() 會得到一個 node
 *
 * init: queue[root];
 *
 * while(queue.length > 0)
 *  size: 紀錄這層會有幾個 node
 *  level: 這層的 node []
 *  for node in size
 *    queue.shift // 拿出第一個
 *    level.push  // push node
 *
 *    記錄下一層有哪些 node
 *    node.left add queue
 *    node.right add queue
 *
 *  result push level
 *
 * return result
 *
 */

//-------------------------

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
var levelOrder = function (root) {
  if (!root) return [];

  let result = [];
  let queue = [root]; // init

  while (queue.length > 0) {
    // 因為 for-each 會影響 queue.length
    let size = queue.length;
    let level = [];

    for (let i = 0; i < size; i++) {
      // queue 的精隨 -> get first
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      level.push(node.val);
    }
    result.push(level);
  }
  return result;
};
