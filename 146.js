/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.capacity = capacity; // 최대 크기
  this.cache = new Map(); // Map을 이용해 캐시 관리
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    const oldestKey = this.cache.keys().next().value;
    // next()로 첫번째 값을 가져옴

    this.cache.delete(oldestKey);
  }

  this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lRUCache = new LRUCache(2);
console.log(lRUCache);
lRUCache.put(1, 1);
console.log(lRUCache);
lRUCache.put(2, 2);
console.log(lRUCache);
lRUCache.get(1); // 1을 반환합니다
console.log(lRUCache);
lRUCache.put(3, 3);
console.log(lRUCache);
lRUCache.get(2);
lRUCache.put(4, 4);
lRUCache.get(1);
console.log(lRUCache);
lRUCache.get(3); // 3을 반환합니다 
lRUCache.get(4); // 4를 반환합니다
