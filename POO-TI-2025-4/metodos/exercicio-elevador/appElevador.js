/*2. Agora, vamos elaborar um programa denominado appElevador.js o qual
deverá realizar as seguintes operações:
a) Criar um objeto do tipo Elevador.
b) Fazer ingressar um certo número de pessoas.
c) Subir um andar.
d) Entrar mais algumas pessoas.
e) Subir outro andar.
f) Descer um certo número de pessoas.
g) Fazer subir até o último andar.
h) subir mais um certo número de pessoas.
i) Fazer descer até o térreo.*/

import Elevador  from "./elevador.js";
import input from "readline-sync";

var elevador = new Elevador(10, 5);

while (true ) {
    console.log(  `\nElevador no Andar ${elevador.andarAtual} com ${elevador.numeroPessoasAtual} pessoas.` );
    console.log("Escolha uma Opção");
    console.log("1 - Entrar Pessoas");
    console.log("2 - Sair Pessoas");
    console.log("3 - Subir Andares");
    console.log("4 - Descer Andares");
    console.log("5 - Sair do Programa");

    var opcao = input.question("Opção: ");
    if (opcao == "5") break;

    switch (opcao) {
        case "1":
            var pessoas = input.question("Quantas pessoas deseja entrar? ");
            elevador.entrar(pessoas);
            break;
        case "2":
            var pessoas = input.question("Quantas pessoas deseja sair? ");
            elevador.sair(pessoas);
            elevador.numeroPessoasAtual = elevador.numeroPessoasAtual - pessoas;
            break;
        case "3":
            elevador.subir();
            break;
        case "4":
            elevador.descer();
            break;
        default:
            console.log("Opção inválida.");
            break;
    }
}

    


