const numbers = [1, 2, 3, 5, 45, 37, 58];

 sumAll = (param) => {
  let sumNumbers = 0
  for (let i = 0; i <= param[i]; i++) {
    sumNumbers += param[i];
  }
  return sumNumbers
}

console.log(sumAll(numbers))