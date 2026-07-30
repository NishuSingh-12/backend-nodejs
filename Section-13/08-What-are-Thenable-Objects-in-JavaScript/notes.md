- Thenable Objects in JavaScript
  Definition
  A Thenable Object is any object that contains a then() method. JavaScript treats it like a Promise.
  Thenable = Any object with a then() method

Syntax
const obj = {
then(resolve, reject) {
resolve("Success");
}
};
Why are Thenables Used?
Behave like Promises.
Work with await.
Can be used with Promise.resolve().
Example
const obj = {
then(resolve) {
resolve("Hello");
}
};

await obj; // "Hello"
Thenable vs Promise
Thenable Promise
Has a then() method Built-in JavaScript object
Not an actual Promise Actual Promise
Can behave like a Promise Fully supports Promise features
Mongoose Connection

Many Mongoose Query objects are Thenable. You can use:

await User.find();

or

User.find().then(result => {
console.log(result);
});

Although Mongoose queries are thenable, they are not always actual Promise objects.

Q1. What is a Thenable Object?
Ans: A Thenable Object is any object that has a then() method and behaves like a Promise.

Q2. Is every Thenable a Promise?
Ans: No. Every Promise is thenable, but not every thenable is a Promise.

Q3. Why are Mongoose queries called Thenable?
Ans: Because they have a then() method, so they can be used with .then() and await.

Revision (10 Seconds)
Thenable Object

• Has then() method
• Behaves like a Promise
• Can use await
• Not necessarily a Promise

Promise ⊂ Thenable

A Thenable Object is any object with a then() method. It behaves like a Promise, but it is not necessarily an actual Promise. Mongoose queries are a common example of thenable objects.
