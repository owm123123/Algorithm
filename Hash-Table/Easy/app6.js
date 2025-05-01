// Intersection of two Arrays

// Given two arrays a[] and b[], the task is find intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not count duplicate elements and the result should contain items in any order.

// Input: a[] = {1, 2, 1, 3, 1},  b[] = {3, 1, 3, 4, 1}
// Output: {1,  3}
// Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements

// Input: a[] = {1, 1, 1},  b[] = {1, 1, 1, 1, 1}
// Output: {1}
// Explanation: 1 is the only common element present in both the arrays.

// Input: a[] = {1, 2, 3},  b[] = {4, 5, 6}
// Output: {}
// Explanation: No common element in both the arrays.

// Hash Table
console.log(hashTable([1, 2, 1, 3, 1], [3, 1, 3, 4, 1]));
console.log(hashTable([1, 1, 1], [1, 1, 1, 1, 1]));
console.log(hashTable([1, 2, 3], [4, 5, 6]));

function hashTable(arr1, arr2) {
  let asSet = new Set(arr1);
  let reSet = new Set();

  for (let i = 0; i < arr2.length; i++) {
    if (asSet.has(arr2[i])) {
      reSet.add(arr2[i]);
    }
  }

  return [...reSet].sort((a, b) => a - b);
}
