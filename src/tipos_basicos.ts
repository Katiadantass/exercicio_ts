// Boolean -- variável que só aceita true ou false
let estaChovendo: boolean = false;
estaChovendo = true;

// Number -- não diferencia inteiro de fracionado
let idade: number = 27;
let altura: number = 1.75;

// String -- aceita apenas textos
const nacionalidade: string = 'Brasileira';

// Arrays -- não podemos misturar tipos diferentes no mesmo array
const colegas: string[] = ['Lucas', 'Fernanda', 'Pedro'];
const tecnologias: Array<string> = ['HTML', 'CSS', 'JS'];
const notas: ReadonlyArray<number> = [7, 9, 5, 8]; // ReadonlyArray: não permite alterações, como push()

// Tupla -- permite tipos diversos em posições específicas do array
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Matheus', true, 22];

// Union Type -- permite dois ou mais tipos possíveis para a variável
let idadeDaAna: number | string = 25;
idadeDaAna = '25 anos';

// Any -- aceita qualquer tipo de dado (usar com cautela)
let dadosDaApi: any;
dadosDaApi = 10;
dadosDaApi = true;
dadosDaApi = [1, 2, 3];
dadosDaApi = 'String';

// ===== Teste =====
console.log("Boolean - Está chovendo?", estaChovendo);
console.log("Number - Idade:", idade, "Altura:", altura);
console.log("String - Nacionalidade:", nacionalidade);
console.log("Array - Colegas:", colegas);
console.log("Array - Tecnologias:", tecnologias);
console.log("ReadonlyArray - Notas:", notas);
console.log("Tupla - Lista:", lista);
console.log("Union Type - Idade da Ana:", idadeDaAna);
console.log("Any - Dados da API:", dadosDaApi);