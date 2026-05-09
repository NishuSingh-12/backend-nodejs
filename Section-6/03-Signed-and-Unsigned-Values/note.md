Signed and Unsigned Values
🔹 Signed Values

👉 Signed values can store:

positive numbers ➕
negative numbers ➖

👉 One bit is used as the sign bit.

Example (8-bit signed):

01100100 = +100
11100100 = negative value
🔹 Unsigned Values

👉 Unsigned values store only:

positive numbers
zero

👉 No sign bit is used.

Example (8-bit unsigned):

11111111 = 255
🔹 Range Difference (8-bit)
Type Range
Unsigned 8-bit 0 to 255
Signed 8-bit -128 to 127
🔹 Why Important?

Used in:

buffers
typed arrays
binary data
low-level programming
🔹 JavaScript Examples
const arr1 = new Uint8Array([255]);
console.log(arr1[0]); // 255
const arr2 = new Int8Array([-5]);
console.log(arr2[0]); // -5

“Signed values can represent both positive and negative numbers, while unsigned values can represent only non-negative numbers.”

🧠 Simple summary:

👉 Signed = positive + negative
👉 Unsigned = only positive values and zero
