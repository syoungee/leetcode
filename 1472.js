/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.history = [homepage];
  this.current = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.history = this.history.slice(0, this.current + 1);
  this.history.push(url);
  this.current++;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  this.current = Math.max(this.current - steps, 0);
  return this.history[this.current];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  // 앞으로 이동 가능한 만큼 이동
  this.current = Math.min(this.current + steps, this.history.length - 1);
  return this.history[this.current];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
