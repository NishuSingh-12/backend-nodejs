const octalNum1 = 0o273;
const octalNum2 = 0o4527;

function digitsToNumber(digit, radix = 10) {
  let res = 0;
  for (let i = 0; i < digit.length; i++) {
    const position = digit.length - 1 - i;
    res += digit[i] * Math.pow(radix, position);
  }
  return res;
}
const octalNum3 = digitsToNumber([4, 5, 2, 7], 8);
console.log(octalNum3);
