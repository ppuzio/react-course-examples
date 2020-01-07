const testArray = [1,2,3,4,5];​
const [firstElement, secondElement, ,fourthElement] = testArray;​
// notice how we can skip the declaration of the third element?
console.log(firstElement, secondElement, fourthElement);​

const testObject = {name: "Jane", surname: "Doe"}​
const {name, surname} = testObject;​
console.log(name, surname);​

// accessing nested properties/elements? No problem!
const nestedObject = {employee: {workExperience: {company: "Jit Team"}}};
const {employee: {workExperience: { company }}} = nestedObject;
console.log(company);

const nestedArray = [1,[2,["text"]]];
const [, [, [nestedString]]] = nestedArray;
console.log(nestedString);

​