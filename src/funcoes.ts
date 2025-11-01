// Tipagem Implícita — o TypeScript infere automaticamente o tipo da variável
let number = 5;

// Tipagem Explícita — o tipo da variável é definido manualmente
let number2: number = 5;

// Função com tipagem explícita nos parâmetros e retorno implícito
function calculaArea(base: number, altura: number) {
    return base * altura;
}

// Arrow Function com tipagem explícita no retorno
const calculaArea2 = (base: number, altura: number): number => base * altura;

// Void — indica que a função não tem retorno
// Rest — aceita múltiplos parâmetros e define o tipo de todos como number
function somar(...numeros: number[]): void {
    console.log(numeros);
}

// Union Type — a função pode retornar uma string OU um número
function teste(): string | number {
    if (10 > 5) {
        return 'Dez é maior que cinco';
    } else {
        return 5;
    }
}

const resultadoDeTeste = teste();
console.log(resultadoDeTeste); // Exibe o resultado no terminal