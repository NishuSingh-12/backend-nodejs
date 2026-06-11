import dgram from "node:dgram";
import { createReadStream, statSync } from "node:fs";

const FILE_PATH = "C:\\Users\\admin\\Desktop\\numbers.txt.txt";

const socket = dgram.createSocket("udp4");

const totalSize = statSync(FILE_PATH).size;
let sentBytes = 0;

socket.on("message", (message, remoteAddress) => {
  console.log("\n" + message.toString());
  console.log(remoteAddress);
  socket.close();
});

const readStream = createReadStream(FILE_PATH, {
  highWaterMark: 1000,
});

readStream.on("data", (chunk) => {
  sentBytes += chunk.length;

  const percentage = ((sentBytes / totalSize) * 100).toFixed(2);

  process.stdout.write(`\rUploading: ${percentage}%`);

  socket.send(chunk, 4000, "192.168.2.103", (err) => {
    if (err) {
      console.error(err);
    }
  });
});

readStream.on("end", () => {
  process.stdout.write("\rUploading: 100.00%\n");

  socket.send("EOF", 4000, "192.168.2.103", () => {
    console.log("File sent successfully.");
  });
});
