// * Sudoku Solver
// Write a program to solve a Sudoku puzzle by filling the empty cells.
// A sudoku solution must satisfy all of the following rules:
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

// Input: board =
// [["5","3",".",".","7",".",".",".","."],
// ["6",".",".","1","9","5",".",".","."],
// [".","9","8",".",".",".",".","6","."],
// ["8",".",".",".","6",".",".",".","3"],
// ["4",".",".","8",".","3",".",".","1"],
// ["7",".",".",".","2",".",".",".","6"],
// [".","6",".",".",".",".","2","8","."],
// [".",".",".","4","1","9",".",".","5"],
// [".",".",".",".","8",".",".","7","9"]]

// Output:
// [["5","3","4","6","7","8","9","1","2"],
// ["6","7","2","1","9","5","3","4","8"],
// ["1","9","8","3","4","2","5","6","7"],
// ["8","5","9","7","6","1","4","2","3"],
// ["4","2","6","8","5","3","7","9","1"],
// ["7","1","3","9","2","4","8","5","6"],
// ["9","6","1","5","3","7","2","8","4"],
// ["2","8","7","4","1","9","6","3","5"],
// ["3","4","5","2","8","6","1","7","9"]]
// Explanation: The input board is shown above and the only valid solution is shown below:

// Constraints:
// board.length == 9
// board[i].length == 9
// board[i][j] is a digit or '.'.
// It is guaranteed that the input board has only one solution.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  // * 紀錄那些數字使用過 0: 未使用 1: 已使用
  const rows = Array.from({ length: 9 }, () => Array(10).fill(0));
  const cols = Array.from({ length: 9 }, () => Array(10).fill(0));
  const boxes = Array.from({ length: 9 }, () => Array(10).fill(0));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== '.') {
        const n = Number(c);
        const bx = Math.floor(j / 3);
        const by = Math.floor(i / 3);
        rows[i][n] = 1;
        cols[j][n] = 1;
        boxes[by * 3 + bx][n] = 1;
      }
    }
  }

  function fill(x, y) {
    if (y === 9) return true;

    // * 找下一個座標
    const nx = (x + 1) % 9;
    const ny = nx === 0 ? y + 1 : y;

    if (board[y][x] !== '.') return fill(nx, ny);

    for (let i = 1; i <= 9; i++) {
      const bx = Math.floor(x / 3);
      const by = Math.floor(y / 3);
      const box_key = by * 3 + bx;
      if (!rows[y][i] && !cols[x][i] && !boxes[box_key][i]) {
        rows[y][i] = 1;
        cols[x][i] = 1;
        boxes[box_key][i] = 1;
        board[y][x] = String(i);
        if (fill(nx, ny)) return true;
        board[y][x] = '.';
        boxes[box_key][i] = 0;
        cols[x][i] = 0;
        rows[y][i] = 0;
      }
    }
    return false;
  }

  fill(0, 0);
};
