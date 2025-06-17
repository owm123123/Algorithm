// * Ransom Note
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Input: ransomNote = "a", magazine = "b"
// Output: false

// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magmap = new Array(26).fill(0);
  for (let letter of magazine) {
    magmap[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  for (let letter of ransomNote) {
    if (magmap[letter.charCodeAt(0) - 'a'.charCodeAt(0)]) {
      magmap[letter.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    } else return false;
  }
  return true;
};
