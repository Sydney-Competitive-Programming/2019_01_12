const input = 'ABC101';

const code = c => c.charCodeAt(0);
const aCode = code('A');

codes = input.split('').map(c => c.charCodeAt(0));

let i = 0;

let row = 0;
let col = 0;

while (true) {
  c = codes[i++];

  if (c < 65) { i--; break; }

  row=row*26+c-64;
}

while (true) {
  c = codes[i++];

  if (!c) break;

  col=col*10+c-48;
}

console.log([row-1, col-1]);
