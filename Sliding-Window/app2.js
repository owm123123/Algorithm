// minSubLength

minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11); // 2

function minSubLength(arr, maxValue) {
  let left = 0;
  let right = 1;

  let minLength;
  let tempLength;
  let tempValue = arr[0];

  if (tempValue > maxValue) {
    return 1;
  }

  while (right <= arr.length) {
    tempValue = tempValue + arr[right];
  }
}
