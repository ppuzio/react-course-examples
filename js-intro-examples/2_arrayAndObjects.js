//arrays
var arr = [
  false,
  1,
  { number: 2 },
  '3',
  function() {
    return 4;
  },
  [5],
];

var index = 2;
console.log(arr[0], arr[index]);

// objects
var person = { name: 'Adam' };
var key = 'name';

console.log(person.name, person[key]);
