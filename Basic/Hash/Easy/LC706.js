/*
LeetCode 706. Design HashMap

Design a HashMap without using any built-in hash table libraries.

Implement the MyHashMap class:
- MyHashMap() initializes the object with an empty map.
- void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
- int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
- void remove(int key) removes the key and its corresponding value if the map contains the mapping for the key.

Example:
Input
["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
[[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
Output
[null, null, null, 1, -1, null, 1, null, -1]

Explanation
MyHashMap myHashMap = new MyHashMap();
myHashMap.put(1, 1);      // The map is now [[1,1]]
myHashMap.put(2, 2);      // The map is now [[1,1], [2,2]]
myHashMap.get(1);         // return 1, The map is now [[1,1], [2,2]]
myHashMap.get(3);         // return -1 (not found), The map is now [[1,1], [2,2]]
myHashMap.put(2, 1);      // The map is now [[1,1], [2,1]] (update existing value)
myHashMap.get(2);         // return 1, The map is now [[1,1], [2,1]]
myHashMap.remove(2);      // remove the mapping for 2, The map is now [[1,1]]
myHashMap.get(2);         // return -1 (not found), The map is now [[1,1]]

Constraints:

* 0 <= key, value <= 1,000,000
At most 10,000 calls will be made to put, get, and remove.
*/

class MyHashMap {
  constructor() {
    // * 題目要求 value <= 1,000,000
    this.map = new Array(1000001).fill(-1);
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    this.map[key] = value;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    return this.map[key];
  }

  // - int get(int key) returns the value to which the specified key is mapped,
  // * or -1 if this map contains no mapping for the key.
  // * 所以設定 -1 沒問題
  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    this.map[key] = -1;
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
