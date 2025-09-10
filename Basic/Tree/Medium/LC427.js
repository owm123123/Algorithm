/*
* 427. Construct Quad Tree

Given a n x n matrix grid of 0's and 1's only. We want to represent grid with a Quad-Tree.

Return the root of the Quad-Tree representing grid.

A Quad-Tree is a tree data structure in which each internal node has exactly four children. Besides, each node has two attributes:

- val: True if the node represents a grid of 1's or False if the node represents a grid of 0's.
- isLeaf: True if the node is a leaf node, False otherwise.

The root represents the whole grid. For each node, if it is not a leaf node, it will have four children corresponding to the four quadrants of the grid.

You can refer to the definition of the Node class below:

class Node {
  public boolean val;
  public boolean isLeaf;
  public Node topLeft;
  public Node topRight;
  public Node bottomLeft;
  public Node bottomRight;
}

The input is a 2D grid and you need to construct the corresponding Quad-Tree.

Example:
Input: grid = [[0,1],[1,0]]
Output: The quad tree corresponding to this grid.

Constraints:
- n == grid.length == grid[i].length
- n == 2^x where 0 <= x <= 6

*/

/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

/*
 * 題意
  1. 一開始看整個 grid，如果值都一樣，就直接建立葉節點。
  2. 如果有不同，就把這塊切成四個象限，對每個象限遞迴做同樣的判斷。
  3. 直到每個小區域都是全 0 或全 1，才建立葉節點。 
*/
/*
 * 參數說明
 * isLeaf 的判斷
    isLeaf = true：當前區域的所有格子都是相同值（全 0 或全 1）
    isLeaf = false：當前區域有不同值，需要繼續分割成四個子區域
 * val 的判斷
    val = true：區域內全是 1
    val = false：區域內全是 0
 */
class Solution {
  /**
   * @param {number[][]} grid
   * @return {Node}
   */
  construct(grid) {
    let n = grid.length;

    let dfs = (x, y, len) => {
      let val = grid[x][y];
      let allSame = true;
      for (let i = x; i < x + len; i++) {
        for (let j = y; j < y + len; j++) {
          if (grid[i][j] !== val) {
            allSame = false;
            break;
          }
        }
        if (!allSame) break;
      }

      if (allSame) {
        return new Node(Boolean(val), true, null, null, null, null);
      }

      let half = len >> 1;
      return new Node(
        true, // 非葉節點的 val 不重要
        false, // isLeaf = false 表示需要繼續分割
        dfs(x, y, half),
        dfs(x, y + half, half),
        dfs(x + half, y, half),
        dfs(x + half, y + half, half)
      );
    };

    return dfs(0, 0, n);
  }
}
