var aluno = {
    nome: " Eduardo ",
    email: "Dudu.com",
    Curso: " Tecnico em INFO",
    disciplina: {
        Professor: "Joaquim",
        Nome: "Prog",
        Sala: "Lab 2"
    }
}

aluno ["Bloco da turma"]="Blocos Laboratórios"
delete aluno.Curso 

console.log(`Nome: ${aluno.nome}\n
Email: ${aluno.email}\n
Professor: ${aluno.disciplina.Professor}\n
Disciplina: ${aluno.disciplina.Nome}\n
Sala: ${aluno.disciplina.Sala}\n
Bloco: ${aluno["Bloco da turma"]}`)


