/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let maxLen = 0;

  let set = new Set();

  for (let end = 0; end < s.length; end++) {
    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[end]);
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

s = 'abcabcbb';
lengthOfLongestSubstring(s);
