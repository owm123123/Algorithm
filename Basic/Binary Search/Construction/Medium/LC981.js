/*
* 981. Time Based Key-Value Store

Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

Implement the TimeMap class:
TimeMap() Initializes the object of the data structure.
void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

Example:
Input
["TimeMap", "set", "get", "get", "set", "get", "get"]
[[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
Output
[null, null, "bar", "bar", null, "bar2", "bar2"]

Explanation
TimeMap timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);  // store the key "foo" and value "bar" along with timestamp = 1.
timeMap.get("foo", 1);         // return "bar"
timeMap.get("foo", 3);         // return "bar", since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 is "bar".
timeMap.set("foo", "bar2", 4); // store the key "foo" and value "bar2" along with timestamp = 4.
timeMap.get("foo", 4);         // return "bar2"
timeMap.get("foo", 5);         // return "bar2"

Constraints:
1 <= key.length, value.length <= 100
key and value consist of lowercase English letters and digits.
1 <= timestamp <= 10^7
All the timestamps timestamp of set are strictly increasing.
At most 2 * 10^5 calls will be made to set and get.
*/

class TimeMap {
  constructor() {
    this.keyStore = new Map();
  }

  /**
   * @param {string} key
   * @param {string} value
   * @param {number} timestamp
   * @return {void}
   */
  set(key, value, timestamp) {
    if (!this.keyStore.has(key)) {
      this.keyStore.set(key, []);
    }
    this.keyStore.get(key).push([value, timestamp]);
  }

  /**
   * @param {string} key
   * @param {number} timestamp
   * @return {string}
   */
  // 1 2 3 4 5 6 7
  // a a b b b c c
  // [a, 1], [b, 3], [c, 6]
  get(key, timestamp) {
    if (!this.keyStore.has(key)) return '';

    let arr = this.keyStore.get(key);
    let left = 0,
      right = arr.length - 1;

    // * left：離開迴圈時，指向「第一個大於查詢 timestamp 的位置」（upper bound，arr[left][1] > timestamp）
    // * right：離開迴圈時，指向「最後一個小於等於查詢 timestamp 的位置」 （lower bound，arr[right][1] ≤ timestamp）
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);

      if (arr[mid][1] > timestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    // ! 防止 "set", ["alice", "happy", 5], 但"get", ["alice", 1]
    return right >= 0 ? arr[right][0] : '';
  }
}
