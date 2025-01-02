/**
 * @param {number} x
 * @return {number}
 */
// 시간복잡도 O(log|x|), 공간복잡도 O(1)
var reverse = function (x) {
  // 32비트 정수의 범위
  const MIN = -Math.pow(2, 31); // -2147483648
  const MAX = Math.pow(2, 31) - 1; // 2147483647

  let reversed = 0; // 결과값 저장 변수

  // x가 0이 아닐 때까지 반복
  while (x !== 0) {
    // 마지막 자리 숫자 추출
    const digit = x % 10;

    // x에서 마지막 자리 제거 (| 0은 정수로 만듬)
    x = (x / 10) | 0;

    // 범위를 초과하지 않도록 체크
    if (reversed > Math.floor(MAX / 10) || (reversed === Math.floor(MAX / 10) && digit > 7)) return 0;
    if (reversed < Math.ceil(MIN / 10) || (reversed === Math.ceil(MIN / 10) && digit < -8)) return 0;

    reversed = reversed * 10 + digit;
  }

  return reversed;
};

console.log(reverse(-123));
