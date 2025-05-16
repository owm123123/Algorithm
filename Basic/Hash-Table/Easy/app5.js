// Duplicate within K Distance in an Array

// Given an array arr[], the task is to find the maximum distance between two occurrences of any element. If no element occurs twice, return 0.

// Examples:

// Input: k = 3, arr[] = [1, 2, 3, 4, 1, 2, 3, 4]
// Output: false
// Explanation: Each element in the given array arr[]
// appears twice and the distance between every element and
// its duplicate is 4.

// Input: k = 3, arr[] = [1, 2, 3, 1, 4, 5]
// Output: ture
// Explanation: 1 is present at index 0 and 3.

// Input: k = 3, arr[] = [1, 2, 3, 4, 5]
// Output: false
// Explanation: There is no duplicate element in arr[].

// Hash Table + Counter
console.log(hashTable(3, [1, 2, 3, 4, 1, 2, 3, 4]));
console.log(hashTable(3, [1, 2, 3, 1, 4, 5]));
console.log(hashTable(3, [1, 2, 3, 4, 5]));

function hashTable(k, arr) {
  let mp = {};

  // for...in 是用來迭代物件的屬性鍵 會轉成 String
  for (let i = 0; i < arr.length; i++) {
    if (mp.hasOwnProperty(arr[i])) {
      if (i - mp[arr[i]] <= k) {
        return true;
      }
    }
    mp[arr[i]] = i;
  }
  return false;
}

// TODO Hash Table + Sliding Windows
