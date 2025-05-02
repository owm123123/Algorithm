// Max and Min Sum
maxSum([2, 7, 3, 25, 7, 0, 6, 1, -5, -12, -11], 3); // 35
maxSum([100, 200, 300, 400], 2); // 700
maxSum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4); // 39
maxSum([2, 3], 3); // Invalid;
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11, -6], 3); // -28

function maxSum(arr, size) {
  if (arr.length < size) {
    console.log('Invalid');
    return 'Invalid';
  }

  let temp = 0;
  for (let i = 0; i < size; i++) {
    temp += arr[i];
  }

  max = temp;

  // 可以考慮 以邊界的結尾 作為loop更好
  // for(let i = size; i < arr.length; i++)
  for (let i = 1; i <= arr.length - size; i++) {
    temp = temp + arr[i + size - 1] - arr[i - 1];
    if (max < temp) {
      max = temp;
    }
  }

  console.log(max);
}
