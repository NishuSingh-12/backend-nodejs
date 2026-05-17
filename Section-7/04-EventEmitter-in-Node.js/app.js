import EventEmitter from "events";

const emitter = new EventEmitter();

emitter.setMaxListeners(2);

emitter.on("abc", () => {
  console.log("abc event fired-2");
});
emitter.on("abc", () => {
  console.log("abc event fired-1");
});
emitter.on("x", () => {
  console.log("x event fired-1");
});
emitter.on("y", () => {
  console.log(" first y event fired-1");
});
emitter.on("y", () => {
  console.log(" second y event fired-1");
});
emitter.on("y", () => {
  console.log(" third y event fired-1");
});
emitter.on("z", () => {
  console.log("z event fired-1");
});

emitter.emit("y");
console.log(emitter);
