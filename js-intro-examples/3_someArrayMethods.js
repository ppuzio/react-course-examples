const arr = [1, 2, 3, 4];
console.log(
  arr.map(function(element) {
    return element + 1;
  }),
); // [2,3,4,5]

console.log(
  arr.filter(function(element) {
    return element > 2;
  }),
); // [3,4]

console.log(
  arr.find(function(element) {
    return element > 2;
  }),
); // [3]
