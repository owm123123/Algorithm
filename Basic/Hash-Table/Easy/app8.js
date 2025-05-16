// Two Sum – Pair with given Sum

// Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. This problem is a variation of 2Sum problem.

// Examples:

// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true
// Explanation: There is a pair (1, -3) with the sum equal to given target, 1 + (-3) = -2.

// Input: arr[] = [1, -2, 1, 0, 5], target = 0
// Output: false
// Explanation: There is no pair with sum equals to given target.

// Two Pointers O(nlogn) - Normal
console.log(pointer([0, -1, 2, -3, 1], -2));
console.log(pointer([1, -2, 1, 0, 5], 0));

function pointer(arr, k) {
  arr.sort((a, b) => a - b);
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const sum = arr[r] + arr[l];
    if (sum === k) {
      return true;
    } else if (sum > k) {
      r--;
    } else {
      l++;
    }
  }
  return false;
}

// Hash Table O(n) - Best
console.log(hashTable([0, -1, 2, -3, 1], -2));
console.log(hashTable([1, -2, 1, 0, 5], 0));

function hashTable(arr, k) {
  let set = new Set();

  for (const n of arr) {
    if (set.has(k - n)) {
      return true;
    }
    set.add(n);
  }

  return false;
}
