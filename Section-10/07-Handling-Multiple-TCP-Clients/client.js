import net from "node:net";

const client = net.createConnection({ host: "192.168.2.103", port: 4000 });

client.on("connect", () => {
  console.log("Connected");
});

client.on("data", (data) => {
  console.log(data.toString());
});

process.stdin.on("data", (data) => {
  client.write(data);
});

client.on("error", (err) => {
  console.log("Client error: ", err.message);
});

client.on("close", () => {
  console.log("connection is closed");
});
