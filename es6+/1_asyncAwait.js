const slowPromise = () => {
  console.log('slow promise starts');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('that was slow!');
      console.log('slow promise finished');
    }, 5000);
  });
};

const quickPromise = () => {
  console.log('fast promise starts');
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('that was fast!');
      console.log('fast promise finished');
    }, 2000);
  });
};

const sequentialPromises = async () => {
  console.log('function starts - step one');

  // we get here right after
  const slow = await slowPromise();
  // we wait two seconds
  console.log(slow, '- step two, five seconds later');

  const fast = await quickPromise();
  console.log(fast, '- step three, seven seconds later in general');
};
sequentialPromises();
