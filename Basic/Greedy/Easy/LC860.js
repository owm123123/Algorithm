/*
860. Lemonade Change

At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and each customer will buy one lemonade. Each customer will pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is always correct.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

Example 1:
Input: bills = [5,5,5,10,20]
Output: true

Example 2:
Input: bills = [5,5,10,10,20]
Output: false

Constraints:
- 1 <= bills.length <= 10^5
- bills[i] is either 5, 10, or 20

// Write your solution below:
*/

class Solution {
  /**
   * @param {number[]} bills
   * @return {boolean}
   */
  lemonadeChange(bills) {
    let five = 0,
      ten = 0;
    for (let bill of bills) {
      if (bill === 5) {
        five++;
      } else if (bill === 10) {
        if (five === 0) return false;
        five--;
        ten++;
      } else {
        if (five > 0 && ten > 0) {
          five--;
          ten--;
        } else if (five >= 3) {
          five -= 3;
        } else {
          return false;
        }
      }
    }
    return true;
  }
}
