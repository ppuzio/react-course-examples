new Promise((resolve, reject) => {
  console.log('Initial');
  resolve('what we pass to the next step');
  // reject will be used if we want to throw early
})
  .then(result => {
    console.log(result);
    throw new Error('Something failed');
  })
  .then(() => {
    console.log('Do we ever come here?');
  })
  .catch(e => {
    console.error('Error handling: ', e);
  })
  .then(() => {
    console.log('Do this, no matter what happened before');
  });
