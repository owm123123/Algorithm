// * Time Based Key-Value Store
// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

// Input
// ["TimeMap", "set", "get", "get", "set", "get", "get"]
// [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
// Output
// [null, null, "bar", "bar", null, "bar2", "bar2"]

// Explanation
// TimeMap timeMap = new TimeMap();
// timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
// timeMap.get("foo", 1);         // return "bar"
// timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
// timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
// timeMap.get("foo", 4);         // return "bar2"
// timeMap.get("foo", 5);         // return "bar2"

// Constraints:
// 1 <= key.length, value.length <= 100
// key and value consist of lowercase English letters and digits.
// 1 <= timestamp <= 107
// * All the timestamps timestamp of set are strictly increasing.
// * 每次 set 的 timestamp 一定比前一次大, 表示 不會遇到"先 set 7 再 set 4" 這種情況。
// ! 表示可以用 binary search 去搜尋 達到 O(logn)
// At most 2 * 105 calls will be made to set and get.

var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.map.has(key)) {
    this.map.get(key).push([value, timestamp]);
  } else {
    this.map.set(key, [[value, timestamp]]);
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (this.map.has(key)) {
    let arrs = this.map.get(key);
    let l = 0,
      r = arrs.length;
    while (l < r) {
      let mid = Math.floor(l + (r - l) / 2);
      if (timestamp === arrs[mid][1]) return arrs[mid][0];
      if (arrs[mid][1] > timestamp) {
        r = mid;
      } else {
        l = mid + 1;
      }
    }
    if (l === 0) return '';
    // * 這裡用 upper bound (第一個大於 timestamp) 所以需要 l - 1
    return arrs[l - 1][0];
  }
  return '';
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
