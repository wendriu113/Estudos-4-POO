/*Esta atividade será na forma de resolução de exercícios sobre construção e
manipulação de classes em JavaScript, usando-se os conceitos de
construtores e métodos. Use o VSCode para criar um projeto denominado
atividade-elevador para elaboração dos códigos dos exercícios. Ao final,
use seu compactador de arquivos favorito para compactar a pasta e postar no
Classroom da turma.

1. Escreva a estrutura de uma classe denominada Elevador, cujo código deve
ser armazenado em um arquivo JavaScript de mesmo nome. A classe será
utilizada para definição das características e comportamentos de um elevador.
Portanto, a classe deve possuir a seguinte estrutura:
a) Os seguintes atributos: totalAndares (number), andarAtual (number),
capacidade (number), numeroPessoasAtual (number).
b) Um construtor para inicializar os valores dos seguintes atributos, passados
como parâmetros: totalAndares e capacidade. Os atributos andarAtual
e numeroPessoasAtual devem ser inicializados com o valor zero pelo
construtor.
c) Elaborar o código de um método denominado subir(), o qual deverá ser
utilizado para mover o elevador para um andar acima. Entretanto, o elevador
somente poderá ser movido se ainda não atingiu o número máximo de
andares. Sendo assim, o método deverá retornar verdadeiro se conseguiu
movimentar o elevador para cima, ou falso se não foi possível.
d) Também escreva um método denominado descer(), este terá um
comportamento semelhante ao anterior, entretanto sua lógica deve ser
implementada para verificar se o elevador ainda pode descer, ou seja, se ainda
não atingiu o térreo. Este método também deve retornar verdadeiro ou falso,
caso tenha obtido êxito ou não.
e) Na sequência, escreva o comportamento de um método denominado
entrar(numero). Note que o método recebe como parâmetro o número de
pessoas que pretendem entrar no elevador. Veja que o método deve retornar
falso, caso o número de ingressantes extrapole a capacidade do elevador, caso
contrário, o método deve retornar verdadeiro. Caso seja possível a entrada das

pessoas, não esqueça de acrescentar o número de ingressantes no total de
ocupantes do elevador no momento.
f) Se pessoas entram no elevador, também podem sair. Sendo assim, escreva
um método denominado sair(numero), o qual recebe como parâmetro o
número de pessoas que irão sair em um determinado andar. Veja que você
deve verificar se o número de pessoas que estão saindo condiz com o número
de ocupantes atual do elevador, visto que não pode ficar negativo. O método
deve retornar verdadeiro ou falso, caso tenha êxito em sua execução. Caso
obtenha êxito na execução, não esqueça de subtrair o número de pessoas que
estão saindo do número de ocupantes do elevador no momento.*/

export default class Elevador 


 {
    constructor(totalAndares, capacidade) {
        this.totalAndares = totalAndares;
        this.andarAtual = 0;
        this.capacidade = capacidade;
        this.numeroPessoasAtual = 0;
    }


    subir() {
        if (this.andarAtual < this.totalAndares) {

            this.andarAtual++;
            return true;
        } else {
            return false;
        }
    }

    descer() {
        if (this.andarAtual > 0) {
            this.andarAtual--;
            return true;
        } else {

            return false;
        }
    }

    entrar(pessoas) {
        if (this.numeroPessoasAtual + pessoas <= this.capacidade) {
            this.numeroPessoasAtual = this.numeroPessoasAtual + pessoas;
            return true;
        } else {
            return false;
        }
    }

    sair(pessoas) {
        if (this.numeroPessoasAtual >= pessoas) {
            this.numeroPessoasAtual = this.numeroPessoasAtual - pessoas;
        } else {
            return false;
        }
    }
}

