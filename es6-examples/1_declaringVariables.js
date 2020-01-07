// let - variables which can have their reference changed
let name = 'Dwight';
name = 'Jim';

// const - variables with constant reference to a value
const surname = 'Schrute';
surname = 'Halpert'; // this will result in an error

/* be careful - it doesn't mean that your variables of complex type
can't be mutated! */

const person = { name: 'Adam' };
person.name = 'Steven';
