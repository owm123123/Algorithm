/*
* 208. Implement Trie (Prefix Tree)

A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

- Trie() Initializes the trie object.
- void insert(String word) Inserts the string word into the trie.
- boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
- boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.

Example:
Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");
trie.search("app");     // returns true

Constraints:
- 1 <= word.length, prefix.length <= 2000
- word and prefix consist only of lowercase English letters.
- At most 3 * 10^4 calls in total will be made to insert, search, and startsWith.

*/

class TrieNode {
  constructor() {
    this.child = {};
    this.end = false;
  }
}

class PrefixTree {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.child[c]) {
        node.child[c] = new TrieNode();
      }
      node = node.child[c];
    }
    node.end = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (let c of word) {
      if (!node.child[c]) return false;
      node = node.child[c];
    }
    return node.end;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (let c of prefix) {
      if (!node.child[c]) return false;
      node = node.child[c];
    }
    return true;
  }
}
