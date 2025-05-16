// Two Sum – Pair Closest to 0

// Given an integer array arr[], the task is to find the maximum sum of two elements such that sum is closest to zero.
// Input: arr[] = [-8, 5, 2, -6]
// Output: -1
// Explanation: The min absolute sum pair is (5, -6)

// Input:  arr[] = [0, -8, -6, 3]
// Output: 3
// Explanation: We have a tie between (0, 3) and (-6, 3). We pick the max sum in this case which is 0+3

// Input: arr[] = [-7, 4, 1, -2]
// Output: -1
// Explanation: The min absolute sum pair is (4, -5).

test([-8, 5, 2, -6]);
test([0, -8, -6, 3]);
test([-7, 4, 1, -2]);

function test(arr) {
  arr.sort((a, b) => a - b);
  // console.log(arr);

  let left = 0;
  let right = arr.length - 1;

  let minValue = Infinity;

  while (left < right) {
    let tempValue = arr[left] + arr[right];
    // console.log(tempValue);
    if (Math.abs(tempValue) < Math.abs(minValue)) {
      if (tempValue > 0) {
        minValue = tempValue;
      }
    }
    if (tempValue < 0) {
      left++;
    } else {
      right--;
    }
  }
  console.log(minValue);
}
