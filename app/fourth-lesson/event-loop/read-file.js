const { readFile, writeFile, readFileSync } = require("fs");

console.log("started a first task");

// CHECK FILE PATH!!!!
const result = readFileSync("../content/first-text.txt", "utf8");
console.log(result);

console.log("starting next task");
