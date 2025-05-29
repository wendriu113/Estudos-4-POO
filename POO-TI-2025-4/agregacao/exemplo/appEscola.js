import Estudante from './Estudante.js'
import Turma from './Turma.js'

var estudante1 = new Estudante(1, "João", "j@gmail.com", 981767434)
var estudante2 = new Estudante(2, "Maria", "m@hotmail.com", 991098765)
var estudante3 = new Estudante(3, "Marcos", "ma@gmail.com", 999823412)

var turma1 = new Turma("4INFO", "Técnico em Informática")
turma1.addEstudante(estudante1)
turma1.addEstudante(estudante2)
turma1.addEstudante(estudante3)

console.log(`--- Relação de estudantes da turma: ${turma1.nome} - ${turma1.curso} ---`)
for( var i = 0; i < turma1.estudantes.length; i++){
    console.log(`ID: ${turma1.estudantes[i].id}\n
        Nome: ${turma1.estudantes[i].nome}\n
        E-mail: ${turma1.estudantes[i].email}\n
        Celular: ${turma1.estudantes[i].celular}\n\n`)
}

console.log("Removendo o estudante de ID igual a 2")
if( turma1.delEstudante( 2 ) == true ){
    console.log("Estudante removido")
    for( var i = 0; i < turma1.estudantes.length; i++ )
    console.log(`ID: ${turma1.estudantes[i].id}\n
        Nome: ${turma1.estudantes[i].nome}\n
        E-mail: ${turma1.estudantes[i].email}\n
        Celular: ${turma1.estudantes[i].celular}\n\n`)
}
