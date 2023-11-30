const cadena = "XOXOOOXOXXXXOXOOXO"

function contarXO(cadena) {
    let x = 0;
    let o = 0;
    for (const caracter of cadena) {
        if(caracter === 'X') {
            x++;
        } else if(caracter === 'O') {
            o++;
        }
    }
    return {x, o}
}