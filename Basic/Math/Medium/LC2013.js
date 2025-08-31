/*
* 2013. Detect Squares

Given a list of points on a 2D plane, implement a data structure that can add new points and count the number of axis-aligned squares that can be formed with a given point as one of the corners.

Implement the DetectSquares class:
- DetectSquares() Initializes the object with an empty data structure.
- void add(int[] point) Adds a new point to the data structure. Each point is represented as a two-element array [x, y].
- int count(int[] point) Counts the number of axis-aligned squares that have the given point as one of their corners.

Example:
Input
["DetectSquares","add","add","add","count","count"]
[[],[[3,10]],[[11,2]],[[3,2]],[[11,10]],[[14,8]]]
Output
[null,null,null,null,1,0]

Explanation
DetectSquares detectSquares = new DetectSquares();
detectSquares.add([3, 10]);
detectSquares.add([11, 2]);
detectSquares.add([3, 2]);
detectSquares.count([11, 10]); // return 1. The square is: (11,10), (3,10), (11,2), (3,2)
detectSquares.count([14, 8]); // return 0. No square can be formed.

Constraints:
- point.length == 2
- 0 <= x, y <= 1000
- At most 3000 calls in total will be made to add and count.
*/

class CountSquares {
  constructor() {
    this.cnt = {}; // cnt[x][y] = 出現次數
  }

  /**
   * @param {number[]} point
   * @return {void}
   */
  add(point) {
    let [x, y] = point;
    if (!this.cnt[x]) this.cnt[x] = {};
    this.cnt[x][y] = (this.cnt[x][y] || 0) + 1;
  }

  /**
   * @param {number[]} point
   * @return {number}
   */
  count(point) {
    let [x, y] = point;
    let res = 0;
    if (!this.cnt[x]) return 0;
    for (let ny in this.cnt[x]) {
      ny = Number(ny);
      if (ny === y) continue;
      let d = ny - y;
      // check (x + d, y), (x + d, ny)
      if (this.cnt[x + d] && this.cnt[x + d][y] && this.cnt[x + d][ny]) {
        res += this.cnt[x][ny] * this.cnt[x + d][y] * this.cnt[x + d][ny];
      }
      // check (x - d, y), (x - d, ny)
      if (this.cnt[x - d] && this.cnt[x - d][y] && this.cnt[x - d][ny]) {
        res += this.cnt[x][ny] * this.cnt[x - d][y] * this.cnt[x - d][ny];
      }
    }
    return res;
  }
}
