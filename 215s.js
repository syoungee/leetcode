/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue(); // Min-Heap 생성

  for (let num of nums) {
    minHeap.enqueue(num); // 힙에 삽입
    if (minHeap.size() > k) {
      minHeap.dequeue(); // 크기 초과 시 최소값 제거
    }
  }

  return minHeap.front().element; // 루트(최소값) 반환
};
