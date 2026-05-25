const response = await fetch("http://localhost:4000/");
const data = await response.text();
console.log(data);
// const input = document.querySelector("input");

// const decoder = new TextDecoder();

// input.addEventListener("change", async () => {
//   const file = input.files[0];
//   // const str = await file.text();
//   const readStream = file.stream();
//   // const reader = readStream.getReader();

//   for await (const chunk of readStream) {
//     console.log(chunk);
//   }

//   // while (true) {
//   //   const { done, value } = await reader.read();
//   //   if (done) break;
//   //   console.log(value);
//   // }

//   // const result = await reader.read();
//   // console.log(decoder.decode(result.value));
//   // const result2 = await reader.read();
//   // console.log(decoder.decode(result2.value));
//   // const result3 = await reader.read();
//   // console.log(decoder.decode(result3.value));
//   // const result4 = await reader.read();
//   // console.log(decoder.decode(result4.value));
//   // const result5 = await reader.read();
//   // console.log(decoder.decode(result5.value));
// });
