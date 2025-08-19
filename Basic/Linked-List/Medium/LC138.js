/**
 * * 138. Copy List with Random Pointer
 *
 * A linked list of length n is given such that each node contains an additional random pointer,
 * which could point to any node in the list, or null.
 *
 * Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes,
 * where each new node has its value set to the value of its corresponding original node.
 * Both the next and random pointer of the new nodes should point to new nodes in the copied list
 * such that the pointers in the original list and copied list represent the same list state.
 * None of the pointers in the new list should point to nodes in the original list.
 *
 * Return the head of the copied linked list.
 *
 * The linked list is represented in the input/output as a list of n nodes.
 * Each node is represented as a pair of [val, random_index] where:
 *   - val: an integer representing Node.val
 *   - random_index: the index of the node (range from 0 to n-1) that the random pointer points to,
 *     or null if it does not point to any node.
 *
 * Example:
 * Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 *
 * Constraints:
 * - 0 <= n <= 1000
 * - -10^4 <= Node.val <= 10^4
 * - Node.random is null or points to a node in the linked list.
 *
 * Definition for a Node.
 * function Node(val, next, random) {
 *     this.val = val;
 *     this.next = next;
 *     this.random = random;
 * }
 */

class Solution {
  /**
   * @param {Node} head
   * @return {Node}
   */
  copyRandomList(head) {
    // Write your solution here:
    if (!head) return null;
    // origin / copy
    let map = new Map();

    // init copy map
    let curr = head;
    while (curr) {
      map.set(curr, new Node(curr.val, null, null));
      curr = curr.next;
    }

    // build copy map
    curr = head;
    while (curr) {
      map.get(curr).next = curr.next ? map.get(curr.next) : null;
      map.get(curr).random = curr.random ? map.get(curr.random) : null;
      curr = curr.next;
    }

    return map.get(head);
  }
}
