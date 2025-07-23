// *　968. Binary Tree Cameras
// You are given the root of a binary tree. We install cameras on the tree nodes where each camera at a node can monitor its parent, itself, and its immediate children.
// Return the minimum number of cameras needed to monitor all nodes of the tree.

// Input: root = [0,0,null,0,0]
// Output: 1
// Explanation: One camera is enough to monitor all nodes if placed as shown.

// Input: root = [0,0,null,0,null,0,null,null,0]
// Output: 2
// Explanation: At least two cameras are needed to monitor all nodes of the tree. The above image shows one of the valid configurations of camera placement.

// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// Node.val == 0

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
var minCameraCover = function (root) {
  let count = 0;
  // * 紀錄哪些已經被覆蓋
  let covered = new Set();
  // ! 加上 root 的 parent
  covered.add(null);

  let dfs = (node, parent) => {
    if (!node) return;
    dfs(node.left, node);
    dfs(node.right, node);

    // * !parent && !covered.has(node)): root, 解沒有被覆蓋
    // * !covered.has(node.left) || !covered.has(node.right): 左右都沒有被覆蓋
    if (
      (!parent && !covered.has(node)) ||
      !covered.has(node.left) ||
      !covered.has(node.right)
    ) {
      count++;
      covered.add(node);
      covered.add(parent);
      covered.add(node.left);
      covered.add(node.right);
    }
  };
  dfs(root, null);
  return count;
};

// * 0：這個節點沒被覆蓋，需要父節點裝攝影機
// * 1：這個節點有攝影機
// * 2：這個節點被覆蓋（但自己沒攝影機）
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
var minCameraCover = function (root) {
  let count = 0;
  // 0: 需要被覆蓋, 1: 有攝影機, 2: 已被覆蓋
  function dfs(node) {
    if (!node) return 2;
    let left = dfs(node.left);
    let right = dfs(node.right);
    if (left === 0 || right === 0) {
      count++;
      return 1; // 裝攝影機
    }
    if (left === 1 || right === 1) {
      return 2; // 被子節點覆蓋
    }
    return 0; // 需要被覆蓋
  }
  if (dfs(root) === 0) count++;
  return count;
};
