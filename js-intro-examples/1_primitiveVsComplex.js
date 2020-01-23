var a = 0;
var b = a;
a = 10;
console.log(a, b);

var person = { name: 'Adam' };
var person2 = person;

person2.name = 'David';
console.log(person, person2);
