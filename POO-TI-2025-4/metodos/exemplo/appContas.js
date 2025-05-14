import Contas from "./Contas.js";

var conta1 = new Contas(11234, "Fulano");
console.log(`Número ${conta1.numero}`);
console.log(`Correntista ${conta1.correntista}`);
console.log(`Saldo inicial R$ ${conta1.saldo.toFixed(2)}`);

conta1.depositar(1000);
console.log(`Saldo após depósito R$ ${conta1.saldo.toFixed(2)}`);

if (conta1.sacar(500)== true) {
    console.log(`\nSaque efetuado com sucesso. Novo Saldo ${conta1.saldo.toFixed(2)}`);
} else {
    console.log("Saque não efetuado. Saldo insuficiente.");
}