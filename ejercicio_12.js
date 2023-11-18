function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    let resultado = {
        peso: peso,
        altura: altura,
        imc: imc.toFixed(2)
    };
    return resultado;
}
let persona = calcularIMC(80, 1.80);
console.log(persona);