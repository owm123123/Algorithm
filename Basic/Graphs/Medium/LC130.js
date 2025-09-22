/*
* 130. Surrounded Regions

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

/*
 * 這個問題必須用逆向思維 因為直接判斷「是否被包圍」太複雜，會有循環依賴問題。
    正確做法：
      找出所有不會被包圍的 'O'（從邊界開始的連通區域）
      剩下的 'O' 就是會被包圍的 
 */
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let rows = board.length,
    cols = board[0].length;
  let dist = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  let dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== 'O') return;
    board[r][c] = 'T';

    for (let [dr, dc] of dist) {
      dfs(dr + r, dc + c);
    }
  };

  for (let r = 0; r < rows; r++) {
    if (board[r][0] === 'O') dfs(r, 0);
    if (board[r][cols - 1] === 'O') dfs(r, cols - 1);
  }
  for (let c = 0; c < cols; c++) {
    if (board[0][c] === 'O') dfs(0, c);
    if (board[rows - 1][c] === 'O') dfs(rows - 1, c);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (board[r][c] === 'O') board[r][c] = 'X';
      if (board[r][c] === 'T') board[r][c] = 'O';
    }
  }
};
