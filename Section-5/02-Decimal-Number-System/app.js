const digitList = [2, 4, 6, 5];
const gigitList2 = [7, 3, 2];

let a = digitList[3] * 1000;
let b = digitList[2] * 100;
let c = digitList[1] * 10;
let d = digitList[0] * 1;

let num1 = a + b + c + d;

const num2 = 7 * Math.pow(10, 0) + 3 * Math.pow(10, 1) + 2 * Math.pow(10, 2);
// console.log(num2);

function digitsToNumber(digits) {
  let res = 0;
  for (let i = 0; i < digits.length; i++) {
    res += digits[i] * Math.pow(10, i);
  }
  return res;
}
let num3 = digitsToNumber([4, 5, 6, 2]);
console.log(num3);
