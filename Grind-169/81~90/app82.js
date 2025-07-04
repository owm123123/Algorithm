// * Top K Frequent Words
// Given an array of strings words and an integer k, return the k most frequent strings.
// * 出現頻率最高的 k 個單字。
// Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.
// * 有多個單字頻率一樣，字典序較小的排前面。

// Input: words = ["i","love","leetcode","i","love","coding"], k = 2
// Output: ["i","love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
// Output: ["the","is","sunny","day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.

// Constraints:
// 1 <= words.length <= 500
// 1 <= words[i].length <= 10
// words[i] consists of lowercase English letters.
// k is in the range [1, The number of unique words[i]]

// Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = new Map();
  for (let w of words) {
    map.set(w, (map.get(w) || 0) + 1);
  }

  const arr = Array.from(map.entries());
  arr.sort((a, b) => {
    if (b[1] === a[1]) {
      return a[0].localeCompare(b[0]);
    }
    return (b[1] = a[1]);
  });

  return arr.slice(0, k).map((e) => e[0]);
};
