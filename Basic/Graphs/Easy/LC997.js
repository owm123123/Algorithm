/*
* 997. Find the Town Judge

In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:
1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
3. There is exactly one person that satisfies properties 1 and 2.
* 有一個 法官 滿足：
* 法官不信任任何人。
* 其他所有人都信任法官。
* 只有一個人符合這兩個條件。

You are given an integer n representing the number of people in the town, and an array trust where 
* trust[i] = [a, b] representing that the person labeled a trusts the person labeled b.
* trust[i] = [a, b] 代表 a 信任 b

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.

Example 1:
Input: n = 2, trust = [[1,2]]
Output: 2

Example 2:
Input: n = 3, trust = [[1,3],[2,3]]
Output: 3

Example 3:
Input: n = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1

Constraints:
- 1 <= n <= 1000
- 0 <= trust.length <= 10^4
- trust[i].length == 2
- All the trust relationships are unique.
*/

// * graphs (incoming & outgoing)
function findJudge(n, trust) {
  // * incoming:  被信任次數 (入度)
  let incoming = new Array(n + 1).fill(0);
  // * outgoing: 信任別人次數 (出度)
  let outgoing = new Array(n + 1).fill(0);

  for (let [src, dst] of trust) {
    outgoing[src]++;
    incoming[dst]++;
  }

  for (let i = 1; i <= n; i++) {
    // * 找 信任別人為 0, 被信任為 n - 1
    if (outgoing[i] === 0 && incoming[i] === n - 1) {
      return i;
    }
  }

  return -1;
}
