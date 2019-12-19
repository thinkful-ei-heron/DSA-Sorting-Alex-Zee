function randomize(array) {
  for(let i = 0; i < array.length; i++) {
    let randomIndex = Math.floor(Math.random() * Math.floor(array.length - 1));
    let changingVal = array[i];
    let newVal = array[randomIndex];
    array[i] = newVal;
    array[randomIndex] = changingVal;
  }
  return array;
}


console.log(randomize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));