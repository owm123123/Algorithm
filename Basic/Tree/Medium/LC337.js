/*
* 337. House Robber III

The thief has found himself a new place for his thievery. He found a "binary tree" structure where each node represents a house containing a certain amount of money. Each house can only be robbed if its immediate children are not robbed on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

Example:
Input: [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount is 3 + 3 + 1 = 7.

Constraints:
- The number of nodes in the tree is in the range [1, 10^4].
- 0 <= Node.val <= 10^4
*/

// ! 不能定義 前一間最大值(prev) + 當前(curr)
// ! 因為有可能左邊要父節點才是最大, 但右邊不是, 會打架
class Solution {
  /**
   * @param {TreeNode} root
   * @return {number}
   */
  rob(root) {
    if (!root) return 0;

    let dfs = (node) => {
      if (!node) return [0, 0]; // 偷, 不偷
      let left = dfs(node.left);
      let right = dfs(node.right);
      let r = node.val + left[1] + right[1];
      let nr = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
      return [r, nr];
    };

    let res = dfs(root);
    return Math.max(res[0], res[1]);
  }
}
