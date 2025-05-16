// Union of Two Arrays
// Given two arrays a[] and b[], the task is to return union of both the arrays in any order.

// Note: Union of two arrays is an array having all distinct elements that are present in either array.

// Examples:

// Input : a[] = {1, 2, 3, 2, 1}, b[] = {3, 2, 2, 3, 3, 2}
// Output : {3, 2, 1}
// Explanation: 3, 2 and 1 are the distinct elements present in either array.

// Input : a[] = {1, 2, 3}, b[] = {4, 5, 6}
// Output : {1, 2, 3, 4, 5, 6}
// Explanation: 1, 2, 3, 4, 5 and 6 are the elements present in either array.

console.log(hashTable([1, 2, 3, 2, 1], [3, 2, 2, 3, 3, 2]));
console.log(hashTable([1, 2, 3], [4, 5, 6]));

function hashTable(arr1, arr2) {
  let set = new Set(arr1);

  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) {
      set.add(arr2[i]);
    }
  }

  return [...set];
}
