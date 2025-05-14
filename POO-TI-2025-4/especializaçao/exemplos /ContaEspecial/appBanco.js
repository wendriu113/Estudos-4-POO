import Conta from "./Conta.js"
import ContaEspecial from "./ContaEspecial.js"
import Pessoa from "./Pessoa.js"

var correntista = new Pessoa ("joao","j@j.com","999999999")
var conta1 = new Conta (1234, correntista)
var conta2 = new ContaEspecial (12345,correntista,500)

console.log ("Dados Conta comum")
console.log (`Numero: ${conta1.numero}`)
console.log (`Nome: ${conta1.correntista.nome}`)
console.log (`Saldo: ${conta1.saldo.toFixed(2)}`)

console.log ("\nDados Conta Especial")
console.log (`Numero: ${conta2.numero}`)
console.log (`Nome: ${conta2.correntista.nome}`)
console.log (`Saldo: ${conta2.saldo.toFixed(2)}`)
console.log (`Limite: ${conta2.limite.toFixed(2)}`)