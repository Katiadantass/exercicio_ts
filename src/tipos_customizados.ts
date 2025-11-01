// Type Alias -- define um tipo personalizado chamado 'aluno'
type aluno = {
    nome: string;          // obrigatório
    cursos?: string[];     // opcional (pode ou não existir)
    idade: number;         // obrigatório
}

// Array de objetos do tipo 'aluno'
const alunos: aluno[] = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "Ux/Ui"],
        idade: 27,
    }, 
    {
        nome: "Ana",
        cursos: ["Front-end", "Python"],
        idade: 23,
    }, 
]

// Adicionando um novo aluno ao array
alunos.push({
    nome: "Julia",
    cursos: ["Arquitetura"],
    idade: 29
})

// Criando um objeto do tipo 'aluno' sem cursos (opcional)
const novoAluno: aluno = {
    nome: "Lucas",
    idade: 32,
}

// Função que recebe um objeto 'aluno' e exibe o nome no console
function exibeAluno(aluno: aluno): void {
    console.log(aluno.nome)
}

// ===== Teste =====
alunos.forEach(exibeAluno);
exibeAluno(novoAluno);