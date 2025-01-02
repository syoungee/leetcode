/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 시간복잡도 O(N), 공간복잡도 O(N)
function containsDuplicate(nums) {
  const seen = new Set();
  for (let num of nums) {
      if (seen.has(num)) {
          return true;
      }
      seen.add(num);
  }
  return false;
}

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
