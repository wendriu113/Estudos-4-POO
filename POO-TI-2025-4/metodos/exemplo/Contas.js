export default class Contas {
    constructor (numero,correntista){
        this.numero = numero;
        this.correntista = correntista;
        this.saldo = 0;
    }
    depositar(valor){
        this.saldo = this.saldo + valor
    }
    sacar(valor){
        if (this.saldo - valor >= 0) {
            this.saldo = this.saldo - valor;
            return true;
        }
        return false;
    }
}

