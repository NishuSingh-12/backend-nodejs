const hexNum1 = 0x843;
const hexNum2 = 0x845a;
const hexNum3 = 0x45a;
// console.log(hexNum3);

function digitsToNumber(digit, radix = 10) {
  let res = 0;

  for (let i = 0; i < digit.length; i++) {
    const position = digit.length - 1 - i;
    const value = parseInt(digit[i], radix);
    res += value * radix ** position;
  }

  return res;
}

const hexNum4 = digitsToNumber([4, 5, 2, "a"], 16);
console.log(hexNum4);
