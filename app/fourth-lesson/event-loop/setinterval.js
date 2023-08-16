setInterval(() => {
  console.log("setInterval is executed");
}, 500);

console.log("second task");

console.time();

for (let i = 0; i < 10000000; i++) {
  const header = document.querySelector("h3");
  header.textContent = `Hey, everyone is waiting for me!`;
}

console.timeEnd();

console.log("third task");
