// * LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]
// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4

// Constraints:
// 1 <= capacity <= 3000
// 0 <= key <= 104
// 0 <= value <= 105
// At most 2 * 105 calls will be made to get and put.

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity;
  // * map: 紀錄是否存在
  // * head / tail: 紀錄順序
  this.map = new Map();
  // dummy head & tail
  this.head = new Node();
  this.tail = new Node();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};
/**
 * * 圖解
 * * <-> A <-> node <-> B <->
 * * <-> A <------> B <->
 */
LRUCache.prototype._remove = function (node) {
  // * 讓 node 的前一個節點的 next 指向 node 的下一個節點。
  node.prev.next = node.next;
  // * 讓 node 的下一個節點的 prev 指向 node 的前一個節點。
  node.next.prev = node.prev;
};

/**
 * * 圖解
 * * 假設原本是：head <-> A
 * * 插入 node 後要變成：head <-> node <-> A
 */
LRUCache.prototype._add = function (node) {
  // * 處理 head <-> node
  node.next = this.head.next;
  node.prev = this.head;

  // * node <-> A
  // * 原本 head 後的節點 prev 指向 node。
  this.head.next.prev = node;
  this.head.next = node;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) return -1;
  let node = this.map.get(key);
  this._remove(node);
  this._add(node);
  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    let node = this.map.get(key);
    node.val = value;
    this._remove(node);
    this._add(node);
  } else {
    if (this.map.size === this.capacity) {
      let lru = this.tail.prev;
      this._remove(lru);
      this.map.delete(lru.key);
    }
    let node = new Node(key, value);
    this._add(node);
    this.map.set(key, node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
