export default class Conta{

    constructor (numero,correntista){
        this.numero = numero
        this.correntista = correntista
        this.saldo = 0.00
    }
    depositar (valor){
        this.saldo =+ valor  
    }
    sacar (valor){
        if ( valor <= this.saldo ){
            this.saldo =- valor
            return true
        }
        return false
        }
}