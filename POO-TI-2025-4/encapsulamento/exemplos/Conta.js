export default class Conta{

    #numero
    #correntista
    #saldo

    constructor (numero,correntista){
        this.#numero = numero;
        this.#correntista = correntista;
        this.#saldo = 0.00;
    }
    
    depositar(valor){
        this.#saldo += valor;
    }

    sacar(valor){
        if (this.#saldo - valor >= 0) {
            this.#saldo = this.#saldo - valor;
            return true;
        }
        return false;
    }

    get saldo(){
        return this.#saldo.toFixed(2);
    } 
    get numero(){
        return this.#numero;
    } 
    get correntista(){
        return this.#correntista;
    }

}