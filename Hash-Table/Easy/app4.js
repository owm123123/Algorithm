// Max Distance Between Two Occurrences

// Given an array arr[], the task is to find the maximum distance between two occurrences of any element. If no element occurs twice, return 0.

// Examples:
// Input: arr = [1, 1, 2, 2, 2, 1]
// Output: 5
// Explanation: distance for 1 is: 5-0 = 5, distance for 2 is: 4-2 = 2, So max distance is 5.

// Input : arr[] = [3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]
// Output: 10
// Explanation : Max distance for 2 is 11-1 = 10, max distance for 1 is 4-2 = 2 and max distance for 4 is 10-5 = 5

// Input: arr[] = [1, 2, 3, 6, 5, 4]
// Output: 0
// Explanation: No element has two occurrence, so maximum distance = 0.

// Hash Table + Counter
console.log(hashTable([1, 1, 2, 2, 2, 1]));
console.log(hashTable([3, 2, 1, 2, 1, 4, 5, 8, 6, 7, 4, 2]));
console.log(hashTable([1, 2, 3, 6, 5, 4]));

function hashTable(arr) {
  let max = 0;
  let mp = {};

  for (let i = 0; i < arr.length; i++) {
    // !mp[arr[i]] 這個寫法會讓 mp[arr[i]] = 0 也算進去
    if (!mp.hasOwnProperty(arr[i])) {
      mp[arr[i]] = i;
    } else {
      max = Math.max(max, i - mp[arr[i]]);
      // console.log(Math.max(max, i - mp[arr[i]]));
    }
  }

  return max;
}
