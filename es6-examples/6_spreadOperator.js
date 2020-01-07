const firstArray = [1, 2];
const secondArray = [3, 4, 5];
// "spreads" the content of both arrays into a new one
const thirdArray = [...firstArray, ...secondArray];
console.log(thirdArray);

const firstObject = { name: 'Jane' };
const secondObject = { surname: 'Doe' };
// "spreads" the properties of both objects into a new one
const thirdObject = { ...firstObject, ...secondObject };
console.log(thirdObject);

/* rest - remaining elements, which haven't been used to declare new variables
  are groupped together
*/

const [firstElement, ...otherElements] = thirdArray;
console.log(otherElements);

const { name, ...rest } = thirdObject;
console.log(rest);
