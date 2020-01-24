{
  const a = 3;
}

const b = a + 3; // scope of a limited to curly braces
console.log(b);

let c = 5;
let c = 7; // we cannot redeclare variables declared previously with let
