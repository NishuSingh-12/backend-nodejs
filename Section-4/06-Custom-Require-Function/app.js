const b = loadModule("./math.js");
const { sum } = loadModule("./sum.js");
console.log(b);
console.log(sum(1, 2, 3, 4));
function loadModule(path) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(path).toString();
  //   console.log(fileContent);
  return (function (send) {
    eval(fileContent);
    return send;
  })({});
}
