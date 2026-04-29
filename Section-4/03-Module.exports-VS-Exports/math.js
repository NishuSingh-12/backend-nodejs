function sum(...num) {
  return num.reduce((curr, acc) => curr + acc);
}
function product(...num) {
  return num.reduce((curr, acc) => curr * acc);
}
exports.sum = (a, b) => a - b;
