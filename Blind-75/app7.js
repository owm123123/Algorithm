// Valid Parentheses

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

// stack
function stack(s) {
  if (s.length % 2 !== 0) return false;

  let map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  const stack = [];

  for (let char of s) {
    if (char in map) {
      const top = stack.length > 0 ? stack.pop() : '#';
      if (top !== map[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}
