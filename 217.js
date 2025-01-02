/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 시간복잡도 O(N), 공간복잡도 O(N)
var containsDuplicate = function (nums) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]] != undefined) return true;
    hashTable[nums[i]] = i;
  }

  return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
