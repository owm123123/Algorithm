/*
* 130. Surrounded Regions
// * 思路問題

Given an m x n matrix board containing 'X' and 'O', capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:
Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

Example 2:
Input: board = [["X"]]
Output: [["X"]]

Constraints:
- m == board.length
- n == board[i].length
- 1 <= m, n <= 200
- board[i][j] is 'X' or 'O'.
*/

// * 只有從邊界出來相連的 O 不需要翻轉
class Solution {
  /**
   * @param {character[][]} board
   * @return {void} Do not return anything, modify board in-place instead.
   */
  solve(board) {
    let rows = board.length,
      cols = board[0].length;
    let dest = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    let dfs = (r, c) => {
      if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O')
        return;
      board[r][c] = 'E';

      for (let [dr, dc] of dest) {
        dfs(r + dr, c + dc);
      }
    };

    // * 只從邊界出發 找不需要翻轉
    for (let r = 0; r < rows; r++) {
      dfs(r, 0);
      dfs(r, cols - 1);
    }
    for (let c = 0; c < cols; c++) {
      dfs(0, c);
      dfs(rows - 1, c);
    }

    // 翻轉
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (board[r][c] === 'O') board[r][c] = 'X';
        if (board[r][c] === 'E') board[r][c] = 'O';
      }
    }
  }
}
