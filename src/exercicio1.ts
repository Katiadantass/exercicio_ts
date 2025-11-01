// Função que realiza cálculo com dois números
// Aceita "multiplicar" ou "somar" como operação
function calcular(a: number, b: number, operacao: "multiplicar" | "somar"): number {
    if (operacao === "multiplicar") {
        return a * b; // Retorna a multiplicação
    } else {
        return a + b; // Retorna a soma
    }
}

// Testes da função
console.log(calcular(3, 4, "multiplicar")); // Resultado: 12
console.log(calcular(3, 4, "somar"));       // Resultado: 7