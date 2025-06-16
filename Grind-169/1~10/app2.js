// * Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

// Input: s = "([])"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 !== 0) return false;

  let map = new Map();
  let stack = [];
  map.set('(', ')');
  map.set('[', ']');
  map.set('{', '}');

  for (let c of s) {
    if (map.get(c)) {
      stack.push(map.get(c));
    } else {
      if (stack.pop() !== c) return false;
    }
  }

  return stack.length === 0;
};
