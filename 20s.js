var isValid = function (s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (let char of s) {
    if (char in pairs) {
      // 닫는 괄호일 경우
      if (stack.pop() !== pairs[char]) {
        return false; // 매칭 실패 시
      }
    } else {
      // 여는 괄호일 경우
      stack.push(char);
    }
  }

  return stack.length === 0;
};
