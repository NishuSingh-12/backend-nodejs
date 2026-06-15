import { createWriteStream } from "node:fs";
import net from "node:net";

const client = net.createConnection({ host: "192.168.2.100", port: 4000 });

client.on("connect", () => {
  console.log("Connected");
  client.write("DOWNLOAD numbers.txt");
});

const writeStream = createWriteStream("C:\\Users\\admin\\Desktop\\myMovie.mp4");

client.on("data", (chunk) => {
  writeStream.write(chunk);
});

client.on("end", () => {
  console.log("Download Complete");
  writeStream.end();
});

client.on("error", (err) => {
  console.log("Client side error: ", err.message);
});
