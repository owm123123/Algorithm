// * Top K Frequent Elements
// Given an integer array nums and an integer k,
// ! return the k most frequent elements.
// ! 出現次數最多的 k 個元素
// You may return the answer in any order.

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]

// Input: nums = [1], k = 1
// Output: [1]

// Input: nums = [4,1,2,2,3,3,3,4,4,4,5,5,5,5,5,6,6,6,6,6,6], k = 3
// 出現次數：
// 6: 6次
// 5: 5次
// 4: 4次
// 3: 3次
// 2: 2次
// 1: 1次
// Output: [6,5,4]

/**
 * ! map 常用縮寫
 * map.set(key, (map.get(key) || 0) + 1);
 *
 * ! 補充 map 方法 (entries())
 * let count = new Map();
 * count.set(6, 6);
 * count.set(5, 5);
 * count.set(4, 4);
 *
 * console.log([...count.entries()]);
 * 輸出: [ [6, 6], [5, 5], [4, 4] ]
 *
 * ! map 取 key, value 記得是([])
 * .map(([key, _]) => key)
 * .map(([_, value]) => value)
 *
 * !! 下面是物件的取法
 * .map(map => map.value) (X)
 * .obj(obj => obj.value) (O)
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let count = new Map();
  for (let num of nums) {
    count.set(num, (count.get(mun) | 0) + 1);
  }
  return (
    [...count.entries]
      // ! 由大到小 b[1] - a[1]
      .sort(a, (b) => b[1] - a[1])
      .slice(0, k)
      .map(([key, _]) => key)
  );
};
