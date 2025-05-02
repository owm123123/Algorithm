// twoSum

// Input: arr[] = {10, 20, 35, 50}, target =70
// Output:  Yes
// Explanation : There is a pair (20, 50) with given target.

// Input: arr[] = {10, 20, 30}, target =70
// Output :  No
// Explanation : There is no pair with sum 70

// Input: arr[] = {-8, 1, 4, 6, 10, 45], target = 16
// Output: Yes
// Explanation : There is a pair (6, 10) with given target.

twoSum([10, 20, 35, 50], 70);
twoSum([10, 20, 30], 70);
twoSum([-8, 1, 4, 6, 10, 45], 16);

function twoSum(arr, target) {
  // 建議先排序
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = arr.length - 1;

  // 修正條件，避免無窮迴圈
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    }
    if (arr[left] + arr[right] < target) {
      left++;
    }
    if (arr[left] + arr[right] === target) {
      console.log('Yes');
      return true;
    }
  }
  console.log('No');
  return false;
}
