import { createWriteStream } from "node:fs";
import net from "node:net";

const client = net.createConnection({
  host: "192.168.2.102",
  port: 4000,
});

client.on("connect", () => {
  console.log("Connected");
});

client.write("DOWNLOAD sample.mp4");

client.on("error", (err) => {
  console.log("Server error: ", err.message);
});
