export default class Turma{

    constructor(nome, curso){
        this.nome = nome
        this.curso = curso
        this.estudantes = [ ]
    }

    addEstudante( estudante ){
        this.estudantes.push( estudante )
    }

    delEstudante( id ){
        for( var i = 0; i < this.estudantes.length; i++ )
            if( this.estudantes[i].id == id ){
                this.estudantes.splice(i, 1)
                return true
            }
        return false
    }

}