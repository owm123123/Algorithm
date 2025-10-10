/*
* 160. Intersection of Two Linked Lists

Given the heads of two singly linked-lists headA and headB, 
return the node at which the two lists intersect. 
If the two linked lists have no intersection at all, return null.

Example 1:
Input: headA = [4,1,8,4,5], headB = [5,6,1,8,4,5]
Output: Intersected at '8'

Example 2:
Input: headA = [2,6,4], headB = [1,5]
Output: No intersection

Constraints:
- The number of nodes of both lists is in the range [0, 3 * 10^4].
- -10^5 <= Node.val <= 10^5
- Both headA and headB are linked lists.
- The lists may intersect at some node, or not at all.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (currA, currB) {
  if (!headA || !headB) return null;
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA ? currA.next : currB;
    currB = currB ? currB.next : currA;
  }

  return currA;
};
