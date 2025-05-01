// Check for Disjoint

// Given two arrays a and b, check if they are disjoint, i.e., there is no element common between both the arrays.

// Input: a[] = {12, 34, 11, 9, 3}, b[] = {2, 1, 3, 5}
// Output: False
// Explanation: 3 is common in both the arrays.

// Input: a[] = {12, 34, 11, 9, 3}, b[] = {7, 2, 1, 5}
// Output: True
// Explanation: There is no common element in both the sets.

// Hash Table O(n)
console.log(hashTable([12, 34, 11, 9, 3], [2, 1, 3, 5]));
console.log(hashTable([12, 34, 11, 9, 3], [7, 2, 1, 5]));

function hashTable(arr1, arr2) {
  const hashSet = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (hashSet.has(arr2[i])) {
      return false;
    }
  }

  return true;
}

// TODO Merge Sort O(nlogn)
