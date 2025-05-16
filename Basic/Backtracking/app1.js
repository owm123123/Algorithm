// Print all subsets of a given Set or Array
// Given an array arr of size n, your task is to print all the subsets of the array  in lexicographical order.
// A subset is any selection of elements from an array, where the order does not matter, and no element appears more than once. It can include any number of elements, from none (the empty subset) to all the elements of the array.

// Input: arr[] = [1, 2, 3]
// Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
// Explanation: The subsets of [1, 2, 3] in lexicographical order are:
//                         [], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]

// Input: arr[] = [2, 4]
// Output: [[], [2], [2, 4], [4]]
// Explanation: The subsets of [1, 2] in lexicographical order are:
//                         [], [1], [1, 2], [2]

subsets([1, 2, 3]);
subsets([2, 4]);

function subsets(arrs) {
  const result = [];
  const current = [];

  const backtrack = (index) => {
    result.push([...current]);

    for (let i = index; i < arrs.length; i++) {
      current.push(arrs[i]);

      backtrack(i + 1);

      // 回退
      current.pop();
    }
  };

  backtrack(0);
  console.log(result);
  return result;
}
