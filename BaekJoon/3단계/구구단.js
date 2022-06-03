const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let n = Number(line);
  for (let i = 1; i <= 9; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
  }
}).on("close", () => {
  process.exit();
});
