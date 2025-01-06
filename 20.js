/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      let last_item = stack.pop();
      if (s[i] == ')' && last_item == '(') continue;
      else if (s[i] == ']' && last_item == '[') continue;
      else if (s[i] == '}' && last_item == '{') continue;
      else return false;
    }
  }
  if (stack.length == 0) return true;
  else return false;
};

let s = '(]';
console.log(isValid(s));
