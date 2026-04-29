// #!/usr/bin/env node => for linux and windows
// #!C:\Users\admin\Desktop\node.exe
// #!node => only for windows and bash

console.log("Hello");

let num = 0;

setInterval(() => {
  console.log(++num);
}, 500);
