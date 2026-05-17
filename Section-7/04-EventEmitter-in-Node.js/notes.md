EventEmitter in Node.js
🧠 What is EventEmitter?

EventEmitter is a built-in Node.js class used to create and handle custom events.

It allows objects to:

emit events
listen for events
respond when events occur

Node.js internally uses EventEmitter in:

streams
HTTP servers
sockets
file system APIs
Importing EventEmitter
import EventEmitter from "node:events";
Creating an EventEmitter Object
const emitter = new EventEmitter();
Listening to Events

Use:

emitter.on()

to listen for an event.

Example
import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("greet", () => {
console.log("Hello");
});

emitter.emit("greet");

Output:

Hello
emit()
emitter.emit()

triggers an event.

Passing Data with Events
emitter.on("message", (name) => {
console.log(`Hello ${name}`);
});

emitter.emit("message", "Nishu");

Output:

Hello Nishu
Multiple Listeners
emitter.on("test", () => {
console.log("Listener 1");
});

emitter.on("test", () => {
console.log("Listener 2");
});

emitter.emit("test");
once()

Runs listener only one time.

emitter.once("login", () => {
console.log("User logged in");
});
removeListener()

Removes a listener.

function greet() {
console.log("Hello");
}

emitter.on("greet", greet);

emitter.removeListener("greet", greet);
removeAllListeners()

Removes all listeners for an event.

emitter.removeAllListeners("greet");
listenerCount()

Returns total listeners count.

console.log(emitter.listenerCount("greet"));
EventEmitter Flow
Event emitted
↓
Listeners detect event
↓
Callback functions execute
Real-World Examples
Module Events
Streams data, end
HTTP request
Process exit
File System change
Streams Example
stream.on("data", (chunk) => {
console.log(chunk);
});

👉 "data" is an event.

Why EventEmitter is Important

✅ Asynchronous communication
✅ Loose coupling
✅ Event-driven programming
✅ Core part of Node.js architecture

Important Notes
EventEmitter is Synchronous

Listeners execute synchronously in the order they are registered.

Error Handling

Special event:

error

should always be handled.

Example:

emitter.on("error", (err) => {
console.log(err.message);
});
Interview Definition

“EventEmitter is a built-in Node.js class that enables event-driven programming by allowing objects to emit and listen to events.”

Final Summary

👉 emit() → trigger event
👉 on() → listen for event
👉 once() → listen one time

👉 EventEmitter is the foundation of:

streams
HTTP
async Node.js architecture 🚀
