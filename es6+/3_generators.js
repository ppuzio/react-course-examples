function* gen() {
  console.log('this is returned just before a');
  yield 'step 1';
  console.log('this is returned just after... or is it?');

  console.log(
    "this is returned just before b and doesn't get returned until you proceed to the next step",
  );
  yield 'step 2';
  yield 'step 3';
}

const generator = gen();

generator.next(); // { value: "a", done: false }
