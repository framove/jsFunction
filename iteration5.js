const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(element) {
  let suma = 0
  for (let i = 0; i < element.length; i++){
  if (typeof element[i] === "number"){
    suma += element[i]
  }else {
    suma += element[i].length
  }
}
  return suma
}

let resultado = averageWord(mixedElements)

console.log(resultado)