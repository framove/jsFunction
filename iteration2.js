const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function buscaPalabraMasLarga(param) {
    palabra_mas_grande = ""
    param.forEach(function(data){
    if (data.length > palabra_mas_grande.length){
         palabra_mas_grande = data
     }
    })
    return palabra_mas_grande 
  }
  
  buscaPalabraMasLarga(avengers);
  console.log(palabra_mas_grande);