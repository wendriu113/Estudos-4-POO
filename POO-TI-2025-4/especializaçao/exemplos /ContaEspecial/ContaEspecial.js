import Conta from "./Conta.js"

//classe especializada que herda o que foi definido em conta.

export default class ContaEspecial extends Conta {

    constructor(numero, correntista, limite) {
        super (numero,correntista,limite)
        this.limite = limite
    }

}