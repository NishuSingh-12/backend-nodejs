const environmentVariables = process.env;

setInterval(() => {
  console.log(environmentVariables);
}, 1000);

// const { exec } = require("child_process");
// exec(`powershell -Command "setx VARIABLE_NAME "NodeJS" /M"`);
