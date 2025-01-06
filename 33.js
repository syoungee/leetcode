/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    // Left side is sorted
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1; // Target in left part
      } else {
        left = mid + 1; // Target in right part
      }
    }
    // Right side is sorted
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1; // Target in right part
      } else {
        right = mid - 1; // Target in left part
      }
    }
  }
  return -1; // Not found
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
