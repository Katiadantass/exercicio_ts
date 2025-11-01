// ===== Class - Precisa das propriedades definidas antes do constructor =====
class Pessoa {
    nome: string;
    renda?: number; // ? - Define a variável como opcional

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        // Usa o operador de coalescência nula (??) para evitar erro de tipo estrito
        // Se 'renda' for undefined ou null, assume o valor 0
        this.renda = renda ?? 0;
    }

    dizOla(): string {
        return `${this.nome} disse oi`;
    }
}

// ===== Class ContaBancaria =====
class ContaBancaria {
    // Protected - só pode ser acessado dentro da classe e por classes herdeiras
    protected saldo: number = 0;
    // Public - acessível em qualquer instância
    public numeroDaConta: number;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }

    // Static - pertence à classe, não à instância
    static retornaNumeroDoBanco() {
        return 125;
    }

    // Private - só pode ser acessado dentro desta classe
    private getSaldo() {
        return this.saldo;
    }

    depositar(valor: number) {
        this.saldo += valor;
    }
}

// ===== Herança =====
// Classe filha herda atributos e métodos da classe pai
class ContaBancariaPessoaFisica extends ContaBancaria {
    // Sobrescreve o método depositar
    depositar(valor: number): void {
        // Como 'saldo' é protected, pode ser acessado aqui
        this.saldo = valor * 2;
    }
}

// ===== Teste de funcionamento =====
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
contaDoPedro.depositar(100);
console.log(contaDoPedro);