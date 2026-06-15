import net from "node:net";

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const lines = request.split("\r\n");
    const requestLine = lines[0];

    const hostHeader = lines.find((line) => {
      return line.startsWith("Host:");
    });
    const userAgent = lines.find((line) => {
      return line.startsWith("User-Agent:");
    });

    if (userAgent.includes("Chrome")) {
      //   console.log("Chrome Browser");
    }

    const acceptHeader = lines.find((line) => {
      return line.startsWith("Accept:");
    });
    // console.log(acceptHeader);
    // console.log(acceptHeader.includes("text/html"));
    const [method, path, version] = requestLine.split(" ");
    // if (path === "/") {
    //   socket.write("HTTP/1.1 200 OK\r\n\r\nHome Page");
    //   socket.end();
    // }
    // if (path === "/users") {
    //   socket.write("HTTP/1.1 200 OK\r\n\r\nUsers Page");
    //   socket.end();
    // }

    // socket.write(
    //   "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\n\r\n<h1>Hello</h1>",
    // );
    // socket.write(
    //   "HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<h1>Hello Nishu</h1>",
    // );
    socket.write(
      "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\n\r\n<h1>Hello Nishu</h1>",
    );
    socket.end();
  });
});

server.listen(4000);
