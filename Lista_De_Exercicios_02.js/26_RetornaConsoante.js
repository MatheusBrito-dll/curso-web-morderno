function consoante(array1) {
    return Array.from(array1).filter(function (item) {
      if (item !== 'a' && item !== 'e' && item !== 'i' && item !== 'o' && item !== 'u') {
        return true;
      } else {
        return false;
      }
    }).join("");
  }
  
  console.log(consoante("aLeLuia")); // retorna "ll"
  