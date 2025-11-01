// ===== Class - Permite herdar apenas uma classe! =====
class Conta {
    numeroDaConta: number;
    public saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

// Herança de Classe - A classe ContaSalario herda de Conta
class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

// ===== Interfaces =====
interface ITransacional {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

// Classe ContaCorrente herda de Conta e implementa a Interface ITransacional
class ContaCorrente extends Conta implements ITransacional {
    // Adicionamos o método depositar para poder testar
    depositar(valor: number) {
        this.saldo += valor;
    }

    transferir(valor: number, destinatario: Conta) {
        // Desconta o valor + taxa da conta de origem e adiciona o valor líquido ao destinatário
        this.saldo -= valor;
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    }

    taxaTransferencia: number = 0;
}

// ===== Teste de funcionamento =====
const contaA = new ContaCorrente(123);
const contaB = new ContaCorrente(456);

contaA.depositar(1000);
contaA.taxaTransferencia = 50;

const transferenciaFeita = contaA.transferir(200, contaB);

console.log("Transferência realizada:", transferenciaFeita);
console.log("Saldo da Conta A:", contaA.saldo);
console.log("Saldo da Conta B:", contaB.saldo);