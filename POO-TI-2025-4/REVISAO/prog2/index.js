/* 2. Elabore um programa que leia duas listas de 10 elementos:
a) a primeira lista contendo os nomes dos times.
b) a segunda lista contendo a pontuação dos times.
Ao final, apresentar na tela o time campeão (com pontuação) e o último
colocado (com pontuação) no campeonato.*/


import input from "readline-sync"

var times = [];
var pontos = [];

for (var i = 0 ; i<10 ; i++){
    var nometime = input.question(`Digite o nome do time ${i + 1}: `);
    times.push(nometime);
}
for (var i = 0; i<10 ; i++){
    var pontuacao = input.question(`Digite o valor de pontos do ${times[i]}`)
    pontos.push(pontuacao);
}

