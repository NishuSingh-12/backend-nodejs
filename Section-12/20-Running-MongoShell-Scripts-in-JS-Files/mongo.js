use("todoApp");
// db.todos.insertOne({ title: "Completed Node.js", complete: false });
const todoCollection = db.getCollection("todos");

for (let i = 1; i <= 10; i++) {
  todoCollection.insertOne({
    title: `Task ${i}`,
    complete: i % 2 === 0 ? true : false,
  });
}

console.log(db.todos.find());
