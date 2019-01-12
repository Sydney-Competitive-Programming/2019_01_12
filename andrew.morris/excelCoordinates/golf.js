x='ABC101'

let i = 0;

let row = 0;

while (true) {
  c = x[i++].charCodeAt(0);

  if (c < 65) { i--; break; }

  row=row*26+c-64;
}

console.log([row-1, x.slice(i)-1]);
