var contato1 = {
    nome: "Freefire",
    email: "freefire@ff.com",
    fones: {
        fixo: 1239734,
        celular: 9983178121
    }   
}

var contato2 = {
    nome: "DonRuan",
    email: "Juandograu@hotmail.com",
    fones: {
        fixo: 12539734,
        celular: 9983578121
    }
} 

console.log(`---------------DADOS DO CONTATO 1---------------\n
Nome: ${contato1.nome}\n
Email: ${contato1.email}\n
Fixo: ${contato1.fones.fixo}\n
Celular: ${contato1.fones.celular}\n
---------------DADOS DO CONTATO 2---------------\n
Nome: ${contato2.nome}\n
Email: ${contato2.email}\n
Fixo: ${contato2.fones.fixo}\n
Celular: ${contato2.fones.celular}`)


contato1.categoria = "Estudante"
console.log(`\n Categoria: ${contato1.categoria}`)