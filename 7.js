/**
 * @param {number} x
 * @return {number}
 */
// 시간복잡도 O(N), 공간복잡도 O(N)
var reverse = function (x) {
  // 32비트 정수의 범위
  const MIN = -Math.pow(2, 31); // -2147483648
  const MAX = Math.pow(2, 31) - 1; // 2147483647

  let isMinus = false;
  if (x < 0) {
    isMinus = true;
    x *= -1;
  }

  let y = x.toString();
  let z = y.split('').reverse().join('');
  let num = parseInt(z);

  // 부호 복구
  if (isMinus) num = -num;

  // 범위를 벗어난 경우 0 반환
  if (num < MIN || num > MAX) {
    return 0;
  }

  return num;
};

console.log(reverse(-123));
