// * 1105. Filling Bookcase Shelves
// You are given an array books where books[i] = [thicknessi, heighti] indicates the thickness and height of the ith book. You are also given an integer shelfWidth.
// We want to place these books in order onto bookcase shelves that have a total width shelfWidth.
// We choose some of the books to place on this shelf such that the sum of their thickness is less than or equal to shelfWidth, then build another level of the shelf of the bookcase so that the total height of the bookcase has increased by the maximum height of the books we just put down. We repeat this process until there are no more books to place.
// Note that at each step of the above process, the order of the books we place is the same order as the given sequence of books.
// For example, if we have an ordered list of 5 books, we might place the first and second book onto the first shelf, the third book on the second shelf, and the fourth and fifth book on the last shelf.
// Return the minimum possible height that the total bookshelf can be after placing shelves in this manner.

// Input: books = [[1,1],[2,3],[2,3],[1,1],[1,1],[1,1],[1,2]], shelfWidth = 4
// Output: 6
// Explanation:
// The sum of the heights of the 3 shelves is 1 + 3 + 2 = 6.
// Notice that book number 2 does not have to be on the first shelf.
// Example 2:

// Input: books = [[1,3],[2,4],[3,2]], shelfWidth = 6
// Output: 4

// Constraints:
// 1 <= books.length <= 1000
// 1 <= thicknessi <= shelfWidth <= 1000
// 1 <= heighti <= 1000

/**
 * 給你一排書（每本有厚度和高度），和一個書架寬度 shelfWidth。
 * 你要依序把書放到書架上，每層書架的寬度不能超過 shelfWidth，
 * 每層的高度是這層所有書的最大高度，
 * 問你最小的總書架高度是多少？
 */

/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length;
  let dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i <= n; i++) {
    let col = 0;
    let maxRow = 0;
    for (let j = i - 1; j >= 0; j--) {
      col += books[j][0]; // 累加這一層的總厚度
      if (col > shelfWidth) break;
      maxRow = Math.max(maxRow, books[j][1]); // 這一層的最大高度
      dp[i] = Math.min(dp[i], dp[j] + maxRow);
    }
  }
  return dp[n];
};
