// Check for Equal

// Given two arrays, a and b of equal length. The task is to determine if the given arrays are equal or not. Two arrays are considered equal if:
// 1. Both arrays contain the same set of elements.
// 2. The arrangements (or permutations) of elements may be different.
// 3. If there are repeated elements, the counts of each element must be the same in both arrays.

// Input: a[] = [1, 2, 5, 4, 0], b[] = [2, 4, 5, 0, 1]
// Output: true

// Input: a[] = [1, 2, 5, 4, 0, 2, 1], b[] = [2, 4, 5, 0, 1, 1, 2]
// Output: true

//  Input: a[] = [1, 7, 1], b[] = [7, 7, 1]
// Output: false

// Hash Table & Counter
console.log(hashTable([1, 2, 5, 4, 0], [2, 4, 5, 0, 1]));
console.log(hashTable([1, 2, 5, 4, 0, 2, 1], [2, 4, 5, 0, 1, 1, 2]));
console.log(hashTable([1, 7, 1], [7, 7, 1]));

function hashTable(arr1, arr2) {
  const n = arr1.length;
  const m = arr2.length;

  if (n !== m) {
    return false;
  }

  let table = {};
  for (let num of arr1) {
    /**
     * if else 可修改以下
     * table[num] = (table[num] || 0) + 1;
     * 如果是 table[num] 是 undefined 的話 = 0 ，不是 + 1
     */

    if (!table[num]) {
      table[num] = 1;
    } else {
      table[num]++;
    }
  }

  for (let num of arr2) {
    // !table[num]
    // 0 或 undefined -> false
    // 負數 或 正數 -> true

    if (!table[num]) {
      return false;
    }
    table[num]--;
  }

  return true;
}
