// Check tor Subset

// Given two arrays a[] and b[] of size m and n respectively, the task is to determine whether b[] is a subset of a[]. Both arrays are not sorted, and elements are distinct.

// Input: a[] = [11, 1, 13, 21, 3, 7], b[] = [11, 3, 7, 1]
// Output: true
// Input: a[]= [1, 2, 3, 4, 5, 6], b = [1, 2, 4]
// Output: true
// Input: a[] = [10, 5, 2, 23, 19], b = [19, 5, 3]
// Output: false

console.log(pointer([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]));
console.log(pointer([1, 2, 3, 4, 5, 6], [1, 2, 4]));
console.log(pointer([10, 5, 2, 23, 19], [19, 5, 3]));

// Two Pointer O(nlogn)
function pointer(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let n = 0;
  let m = 0;

  while (n < arr1.length && m < arr2.length) {
    if (arr1[n] < arr2[m]) {
      n++;
    } else if (arr1[n] === arr2[m]) {
      n++;
      m++;
    } else {
      return false;
    }
  }
  return m === arr2.length;
}

// hash table O(n)
console.log(hashTable([11, 1, 13, 21, 3, 7], [11, 3, 7, 1]));
console.log(hashTable([1, 2, 3, 4, 5, 6], [1, 2, 4]));
console.log(hashTable([10, 5, 2, 23, 19], [19, 5, 3]));

function hashTable(arr1, arr2) {
  let hashSet = new Set(arr1);

  for (const n of arr2) {
    // Set.has O(1)
    if (!hashSet.has(n)) {
      return false;
    }
  }

  return true;
}
