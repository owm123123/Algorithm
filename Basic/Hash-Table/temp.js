/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let set = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    set[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    set[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
  }
  for (let n of set) {
    if (n !== 0) return false;
  }
  return true;
};
