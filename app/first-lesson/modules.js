const os = require("os");
const { readFileSync, writeFileSync } = require("fs");
const http = require("http");

// get user info
const userInfo = os.userInfo();
console.log(userInfo);

// get information about operating system
const currentOS = {
  name: os.type(),
  relaese: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};
console.log(currentOS);

// read content of file
const first = readFileSync("./test/subfolder/first.txt", "utf-8");
console.log(first);

// write something into file
writeFileSync("./test/subfolder/result.txt", `here is the result ${first}`);

// create node server
const server = http.createServer((req, res) => {
  console.log("request made");

  if (req.url === "/") {
    res.write("Welcome to my app");
    res.end();
  }

  if (req.url === "/about") {
    res.write("Welcome to about app!");
    res.end();
  }
});

server.listen(5000);
