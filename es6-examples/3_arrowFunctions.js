// The old way of creating functions
function addNumbersDeclaration(a, b) {
  return a + b;
}

const addNumbersExpression = function(a, b) {
  return a + b;
};

// arrow functions offer a shorter syntax

const addNumbersArrow = (a, b) => {
  return a + b;
};

/* if our function's task is only to return something, 
  we can use the even shorter syntax */

const addNumbersImplicitReturn = (a, b) => a + b;
