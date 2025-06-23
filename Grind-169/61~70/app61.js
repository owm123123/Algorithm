// * Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
// Output: true

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
// Output: false

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rows = board.length;
  const cols = board[0].length;

  const backtrack = (i, j, index) => {
    if (index === word.length) return true;

    // 檢查邊界
    if (i < 0 || i >= rows || j < 0 || j >= cols) {
      return false;
    }

    // 剪枝
    if (board[i][j] !== word[index]) {
      return false;
    }

    // 處理已訪問,避免 recursion 重複走
    const temp = board[i][j];
    board[i][j] = '#';

    const found =
      backtrack(i + 1, j, index + 1) ||
      backtrack(i - 1, j, index + 1) ||
      backtrack(i, j + 1, index + 1) ||
      backtrack(i, j - 1, index + 1);

    // 回溯 (讓其他路徑可以正確地使用該節點)
    board[i][j] = temp;

    return found;
  };

  // 起點不一定是 board[0][0]
  // 所以需要 double for-each
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};
