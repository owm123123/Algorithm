// 2 Sum – Count pairs with given sum

// Given an array arr[] of n integers and a target value, the task is to find the number of pairs of integers in the array whose sum is equal to target.

// Input: arr[] = {1, 5, 7, -1, 5}, target = 6
// Output:  3
// Explanation: Pairs with sum 6 are (1, 5), (7, -1) & (1, 5).

// Input: arr[] = {1, 1, 1, 1}, target = 2
// Output:  6
// Explanation: Pairs with sum 2 are (1, 1), (1, 1), (1, 1), (1, 1), (1, 1) and (1, 1).

// Input: arr[] = {10, 12, 10, 15, -1}, target = 125
// Output:  0

// ---------------------------------------------------------------

// single Pointer O(nlogn) - Normal

console.log(poiner([1, 5, 7, -1, 5], 6));
console.log(poiner([1, 1, 1, 1], 2));
console.log(poiner([10, 12, 10, 15, -1], 125));

function poiner(arr, target) {
  arr.sort((a, b) => a - b); // 排序，O(n log n)
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        count++;
      } else if (arr[i] + arr[j] > target) {
        break; // 如果和已經大於目標值，後續不可能符合條件
      }
    }
  }

  return count;
}

// ---------------------------------------------------------------

// Hash Map O(n) - Best

console.log(hashTable([1, 5, 7, -1, 5], 6));
console.log(hashTable([1, 1, 1, 1], 2));
console.log(hashTable([10, 12, 10, 15, -1], 125));

function hashTable(arr, target) {
  const freq = new Map();
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if the complement (target - arr[i])
    // exists in the map. If yes, increment count
    if (freq.has(target - arr[i])) {
      cnt += freq.get(target - arr[i]);
    }

    // Increment the frequency of arr[i]
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }
  return cnt;
}
