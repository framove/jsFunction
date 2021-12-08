const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sumNumbers = 0;
  let contador = 0;
  for (let i = 0; i <= param[i]; i++) {
    contador += 1;
  }
  for (let i = 0; i <= param[i]; i++) {
    sumNumbers += param[i];
  }
  let promedio = sumNumbers / contador;
  return promedio
}

console.log(average(numbers));