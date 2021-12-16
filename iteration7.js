//Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false.

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  let nombre = ""

  //función para sacar el índice
  function finderIndex(param) {
    let indice = param.indexOf(nombre); 
   return indice
  }
  
  //función para ver si el nombre está en el array
  function finderName(param) {
    let resultado = param.includes(nombre)
    return resultado
  }

  nombre = "Natasha"
  
  let nameIs = finderName(nameFinder);
  let indexIs = finderIndex(nameFinder);

  if (nameIs === true){
    console.log("¿" + nombre + " está en la posición " + finderIndex(nameFinder) + "?")
    console.log(finderName(nameFinder))
  }else {
    console.log(nombre + " está en el array")
    console.log(finderName(nameFinder));
  }

  //¿Se pueden meter las dos funciones dentro del console.log?
  /* console.log("¿" + nombre + " está en la posición " + finderIndex(nameFinder) + "?");
  leconsole.log(finderName(nameFinder)); */
  

  /* let nameIs = ["¿" + nombre + " está en la posición " + finderIndex(nameFinder) + "?", finderName(nameFinder)]
  console.log(nameIs); */



/* console.log("¿" + nombre + "está en el índice" + finderIndex(nameFinder) + "? "finderName(nameFinder)); */