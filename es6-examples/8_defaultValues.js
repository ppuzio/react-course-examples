// default values can give us a hand when no value or undefined is used as input
const functionAddNumbers = (x = 0, y = 0, z = 0) => x + y + z;
const functionAddNumbersNoDef = (x, y, z) => x + y + z;

console.log(functionAddNumbers(1));
console.log(functionAddNumbersNoDef(1));

// keep in mind default values work only with undefined
const introduceYourself = (name = 'Pawel', job = 'Developer') =>
  `My name is ${name} and I'm a ${job}`;
console.log(introduceYourself());
console.log(introduceYourself(null, false));
