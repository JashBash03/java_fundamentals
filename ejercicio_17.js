function atontador(string) {
    let new_string = ""
    let index = 0
    for (const caracter of string){
      new_string += index % 2 ? string.charAt(index).toUpperCase() : string.charAt(index).toLowerCase()
      index++; 
    }
  return new_string
  }