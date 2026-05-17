What is Event-Driven Architecture?
🧠 Definition

Event-Driven Architecture (EDA) is a software design pattern where the flow of the application is controlled by events.

An event is simply:

“something that happened”

Examples:

button click
file upload
HTTP request
timer completion
database update
How It Works

In Event-Driven systems:

Event occurs
↓
Event is emitted
↓
Listeners/handlers respond
Simple Analogy

🔔 Doorbell rings → you open the door.

Here:

Doorbell ring = event
Your response = event handler
Event-Driven Architecture in Node.js

Node.js heavily uses Event-Driven Architecture internally.

Examples:

HTTP servers
streams
file system
sockets
Event Emitter

Node.js provides:

EventEmitter

for creating and handling events.

Basic Example
import EventEmitter from "node:events";

const emitter = new EventEmitter();

emitter.on("greet", () => {
console.log("Hello");
});

emitter.emit("greet");

Output:

Hello
Explanation
Listener
emitter.on()

waits for an event.

Emit Event
emitter.emit()

triggers the event.

Real-World Examples in Node.js
Event Handler
HTTP request Send response
Stream data Process chunk
File upload Save file
Timer complete Execute callback
Streams Example
stream.on("data", (chunk) => {
console.log(chunk);
});

👉 "data" is an event.

Why Event-Driven Architecture is Powerful

✅ Non-blocking
✅ Highly scalable
✅ Efficient for I/O operations
✅ Handles many users simultaneously

Core Components
Component Role
Event Producer Creates event
Event Action/occurrence
Event Listener Waits for event
Event Handler Executes logic
Event Flow
User Action
↓
Event Generated
↓
Event Listener Detects
↓
Handler Executes
Advantages

✅ Loose coupling
✅ Better scalability
✅ Asynchronous processing
✅ Real-time communication

Limitations

❌ Harder debugging
❌ Complex event chains
❌ Event dependency issues

Node.js and Event Loop

Node.js combines:

Event-Driven Architecture
Async I/O
Event Loop

to achieve high performance.
