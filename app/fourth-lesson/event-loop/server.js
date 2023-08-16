const http = require("http");
const app = require("express");

app.listen();

const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url);
  res.end("welcome to my app!");
});

server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});

// (req, res) => {
//   console.log("request event");
//   res.end("Hello World");
// };
