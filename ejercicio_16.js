function capitalizarPrimeraLetra(frase) {
    return frase.charAt(0).toUpperCase() + frase.slice(1);
  }

  var fraseOriginal = "hola mundo";
  var fraseCapitalizada = capitalizarPrimeraLetra(fraseOriginal);
  console.log(fraseCapitalizada);