// 題目：Find Triplet with Given Sum

// Input:
// arr = [12, 3, 4, 1, 6, 9], target = 24
// Output:
// Yes
// Explanation:
// 存在三個數字 (12, 3, 9) 的和等於 24。

// Input:
// arr = [1, 2, 3, 4, 5], target = 13
// Output:
// No
// Explanation:
// 不存在三個數字的和等於 13。

test([12, 3, 4, 1, 6, 9], 24);
test([1, 2, 3, 4, 5], 13);

function test(arr, target) {
  arr.sort((a, b) => a - b);
  console.log(arr);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      console.log(sum);
      if (sum === target) {
        console.log('Yes');
        return true;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  console.log('No');
  return 'No';
}
