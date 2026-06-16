import http from "node:http";

const server = http.createServer((request, response) => {
  console.log("Got the Request");
  console.log(request.url);
  response.setHeader("Content-Length", "23");
  response.write("Hello from Http server.");
  request.on("data", (chunk) => {
    console.log(chunk.toString());
  });
  //   response.end();
});

// server.on("request", (request, response) => {
//   response.setHeader("Content-Length", "23");
//   response.write("Hello from Http server.");
//   //   response.end();
// });

// server.on("connection", (socket) => {
//   socket.on("data", (data) => {
//     console.log(data.toString());
//   });
//   socket.end("HTTP\n\nHello from http server");
// });

server.listen(4000, "0.0.0.0", () => {
  console.log("Server started");
});
