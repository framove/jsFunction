const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

  
  function removeDuplicates(param) {

    const unicos = [];

    for (let i = 0; i <= param.length; i++){
        const elemento = param[i];
        if (!unicos.includes(param[i])) {
            unicos.push(elemento);
        }
    }
        return unicos;
  }

  console.log(removeDuplicates(duplicates));