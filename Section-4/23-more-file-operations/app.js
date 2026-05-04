import { watch } from "node:fs";
import {
  rename,
  copyFile,
  cp,
  unlink,
  rmdir,
  rm,
  writeFile,
  mkdir,
  stat,
  readFile,
} from "node:fs/promises";

// await rename("myFile.txt", "file-1.txt");

// console.log("File renamed");

// copyFile("file-1.txt", "file-2.txt");
// copyFile("generateOTP.png", "C:\\Users\\admin\\Desktop\\gOTP.png");

// cp("./src", "C:\\Users\\admin\\Desktop\\src", { recursive: true });

// rename("generateOTP.png", "C:\\Users\\admin\\Desktop\\gOTP.png");

// unlink("file-2.txt");

// rmdir("./test");
// rm("src", { recursive: true });

// writeFile("styles.css", "");
// mkdir("nishu");

// const stats = await stat("app.js");

// console.log(stats);
watch("file-1.txt", async (eventType) => {
  if (eventType === "change") {
    console.log(await readFile("file-1.txt", "utf-8"));
  }
});
