const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', line => {
  const input = line.split(' ');
  const division = Number(input[0]) / Number(input[1]);

  console.log(Number(input[0]) + Number(input[1]));
  console.log(Number(input[0]) - Number(input[1]));
  console.log(Number(input[0]) * Number(input[1]));
  console.log(Math.floor(division));
  console.log(Number(input[0]) % Number(input[1]));

  rl.close();
})
.on('close', () => {
  process.exit();
});