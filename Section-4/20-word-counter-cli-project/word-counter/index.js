import fs from "node:fs/promises";

const filePath = process.argv[2];
const targetWords = process.argv[3];
if (!filePath) {
  console.log("Please provide filepath");
  process.exit(1);
}
const fileContent = await fs.readFile(filePath, "utf-8");
const wordsArray = fileContent.split(/[\W]/).filter((w) => w);
const wordsCount = {};

if (targetWords) {
  const targetCounts = wordsArray.filter(
    (word) => word.toLowerCase() === targetWords.toLowerCase(),
  ).length;
  console.log(targetCounts);
} else {
  wordsArray.forEach((word) => {
    word = word.toLowerCase();
    if (word in wordsCount) {
      wordsCount[word]++;
    } else {
      wordsCount[word] = 1;
    }
  });
  console.log(wordsCount);
}
