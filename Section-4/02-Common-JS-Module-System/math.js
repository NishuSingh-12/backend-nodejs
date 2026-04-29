function sum(...num) {
  return num.reduce((curr, acc) => curr + acc, 0);
}
function product(...num) {
  return num.reduce((curr, acc) => curr * acc);
}

module.exports = { sum, product };
