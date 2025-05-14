/*1. Sabendo-se que a média de aprovação em uma disciplina é 6, escreva um
programa que leia uma lista de 10 médias de alunos. Logo a seguir, apresente
na tela a quantidade de alunos que obtiveram aprovação e a quantidade de
alunos que ficaram em recuperação na disciplina.*/

import input from "readline-sync"
var aprovado = 0;
var recuperacao = 0;
for (var i=0 ; i<10 ; i++){

    var media = parseFloat(input.question(`Digite a nota do aluno ${i + 1}: `));
    if (media >= 6){
        aprovado++
    } 
    else {
        recuperacao++
    }
}
console.log (`Total de alunos aprovados foi de ${aprovado}`)
console.log (`Total de alunos em recuperaçao foi de ${recuperacao}`)
