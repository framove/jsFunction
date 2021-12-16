//Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];


  function repeatCounter(param) {
   let contador = []
   for (let i = 0; i < param.length; i++) {
       if (contador[param[i]] === undefined) {
           contador[param[i]] = 1
       } else {
           contador[param[i]] += 1
       }
   }
    return contador
  }

  console.log(repeatCounter(counterWords));