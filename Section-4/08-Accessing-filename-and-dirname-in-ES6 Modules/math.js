export const num = 566;
import.meta.myName = "Nishu";
const { filename, dirname, myName } = import.meta;
console.log(`File name: ${filename}`);
console.log(`Directory name: ${dirname}`);
console.log(`Modify property: ${myName}`);
