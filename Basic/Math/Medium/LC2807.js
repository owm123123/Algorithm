/**
 * 2807. Insert Greatest Common Divisors in Linked List
 *
 * Given the head of a linked list head, each node contains a positive integer.
 *
 * Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor (GCD) of the values of the two adjacent nodes.
 * * greatest common divisor 最大公因數
 * * adjacent nodes 相鄰節點
 *
 * Return the head of the modified linked list.
 *
 * Example:
 * Input: head = [18,6,10,3]
 * Output: [18,6,6,2,10,1,3]
 * Explanation:
 * - Insert a node with value gcd(18, 6) = 6 between 18 and 6.
 * - Insert a node with value gcd(6, 10) = 2 between 6 and 10.
 * - Insert a node with value gcd(10, 3) = 1 between 10 and 3.
 *
 * Constraints:
 * - The number of nodes in the list is between 1 and 100.
 * - 1 <= Node.val <= 1000
 *
 * Definition for singly-linked list:
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// Write your solution below:
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class Solution {
  /**
   * @param {ListNode} head
   * @return {ListNode}
   */
  insertGreatestCommonDivisors(head) {
    let dummy = new ListNode(-1);
    let curr = dummy;
    let n1 = head;

    let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    while (n1 && n1.next) {
      curr.next = new ListNode(n1.val);
      curr = curr.next;
      curr.next = new ListNode(gcd(n1.val, n1.next.val));
      curr = curr.next;
      n1 = n1.next;
    }
    if (n1) curr.next = new ListNode(n1.val);

    return dummy.next;
  }
}
