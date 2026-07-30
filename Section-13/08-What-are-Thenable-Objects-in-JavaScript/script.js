const myObj = {
  then(resolve) {
    h1.addEventListener("click", () => {
      resolve("I am resolved!");
    });
  },
};

const data = await myObj;
console.log(data);

// myObj.then((data) => {
//   console.log(data);
// });
