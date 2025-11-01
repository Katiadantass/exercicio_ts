// Interface para representar uma pessoa com nome
interface IPessoa {
    nome: string;
}

// Função que recebe uma string ou um objeto IPessoa
// Retorna uma saudação adequada dependendo do tipo recebido
function apresentar(nomeOuPessoa: string | IPessoa): string {
    if (typeof nomeOuPessoa === "string") {
        return `Olá, ${nomeOuPessoa}! Seja bem-vindo(a).`; // Se for string, usa diretamente
    } else {
        return `Olá, ${nomeOuPessoa.nome}! Que bom te ver por aqui.`; // Se for objeto, pega o nome
    }
}

// Testes da função
console.log(apresentar("Ana"));                 // Resultado: Olá, Ana! Seja bem-vindo(a).
console.log(apresentar({ nome: "Bruno" }));    // Resultado: Olá, Bruno! Que bom te ver por aqui.