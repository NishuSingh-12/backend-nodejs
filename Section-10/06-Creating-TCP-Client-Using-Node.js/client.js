import net from "node:net";

const client = net.createConnection({
  host: "192.168.2.103",
  port: 4000,
});

client.on("connect", () => {
  console.log("Connected to server");
  client.write("Hello server");
  client.end();
});
client.on("data", (data) => {
  console.log("Server: ", data.toString());
});
client.on("close", () => {
  console.log("Connection closed");
});

client.on("error", (err) => {
  console.log(err.message);
});
