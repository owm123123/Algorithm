// * 01 Matrix
// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
// * 其中每個格子填入「該格子到最近的 0 的距離」（距離以上下左右移動次數計算）。

// The distance between two cells sharing a common edge is 1.

// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 * @description // * BFS
 */
var updateMatrix = function (mat) {
  // * 將所有為 0 加進去 queue 擴散
  // ! 初始化須設定 Infinity
  // ! queue 記得存座標 [r, c]

  let rows = mat.length;
  let cols = mat[0].length;
  // ! 先設定 Infinity
  let result = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c] === 0) {
        result[r][c] = 0;
        // ! queue 需儲存座標
        queue.push([r, c]);
      }
    }
  }

  let dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let [r, c] = queue.shift();
    // ! dr -> delta row: 變化量
    for (let [dr, dc] of dirs) {
      // ! nr -> new row
      let nr = r + dr;
      let nc = c + dc;
      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        // ! 新位置 > 目前位置 + 1 = 到了一條更短的路徑
        result[nr][nc] > result[r][c] + 1
      ) {
        result[nr][nc] = result[r][c] + 1;
        queue.push(result[nr][nc]);
      }
    }
  }

  return result;
};

// * beat100% dp
function updateMatrix(mat) {
  const rows = mat.length;
  const cols = mat[0].length;

  // * 左上 -> 右下
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (mat[r][c]) {
        let top = Infinity;
        let left = Infinity;
        if (r > 0) {
          top = mat[r - 1][c];
        }
        if (c > 0) {
          left = mat[r][c - 1];
        }
        mat[r][c] = 1 + Math.min(top, left);
      }
    }
  }

  // * 右下 -> 左上
  for (let r = rows - 1; r >= 0; r--) {
    for (let c = cols - 1; c >= 0; c--) {
      if (mat[r][c]) {
        let bottom = Infinity;
        let right = Infinity;
        if (r < rows - 1) {
          bottom = mat[r + 1][c];
        }
        if (c < cols - 1) {
          right = mat[r][c + 1];
        }
        mat[r][c] = Math.min(mat[r][c], 1 + Math.min(bottom, right));
      }
    }
  }
  return mat;
}
