/*2) Elabore um aplicativo denominado appLampada.js que realizará as
seguintes operações:
a) leia os dados da lâmpada do terminal e crie um objeto na memória;

b) mostre na tela o estado atual da lâmpada;
c) ligue a lâmpada;
d) mostre novamente o estado atual da lâmpada.*/


import Lamapada from "./Lampada.js";
import input from "readline-sync";

var lampada1 = new Lampada()
lampada1.marca = input.question("Digite a marca da lâmpada: ");
lampada1.voltagem = parseFloat(input.question("Digite a voltagem da lâmpada: "));
lampada1.tipo = input.question("Digite o tipo da lâmpada: ");
lampada1.cor = input.question("Digite a cor da lâmpada: ");
lampada1.preco = parseFloat(input.question("Digite o preço da lâmpada: "));

console.log(`DADOS: \nMarca: ${lampada1.marca} - Voltagem: ${lampada1.voltagem}
     - Tipo: ${lampada1.tipo} - Cor: ${lampada1.cor} - Preço: R$${lampada1.preco}`);

     console.log(`Estado atual: ${lampada1.verificarEstado() ? "Ligada" : "Desligada"}`);
     lampada1.ligar();
     console.log(`Estado atual: ${lampada1.verificarEstado() ? "Ligada" : "Desligada"}`);