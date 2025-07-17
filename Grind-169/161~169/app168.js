// * N-Queens
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above

// Input: n = 1
// Output: [["Q"]]

// Constraints:
// 1 <= n <= 9

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const board = Array.from({ length: n }, () => Array(n).fill('.'));
  const cols = Array(n).fill(0);
  const diag1 = Array(2 * n - 1).fill(0);
  const diag2 = Array(2 * n - 1).fill(0);
  const sols = [];

  function available(x, y) {
    return !cols[x] && !diag1[x + y] && !diag2[x - y + n - 1];
  }

  function updateBoard(x, y, isPut) {
    cols[x] = isPut ? 1 : 0;
    diag1[x + y] = isPut ? 1 : 0;
    diag2[x - y + n - 1] = isPut ? 1 : 0;
    board[y][x] = isPut ? 'Q' : '.';
  }

  function nqueens(y) {
    if (y === n) {
      sols.push(board.map((row) => row.join('')));
      return;
    }
    for (let x = 0; x < n; x++) {
      if (!available(x, y)) continue;
      updateBoard(x, y, true);
      nqueens(y + 1);
      updateBoard(x, y, false);
    }
  }

  nqueens(0);
  return sols;
};
