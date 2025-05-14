/*Elabore a estrutura de uma classe denominada Lampada, cujo código deve
ser escrito em um arquivo de mesmo nome (Lampada.js). A classe será
utilizada para definição das características e comportamentos de objetos do
tipo lâmpada. Na estrutura da classe teremos os seguintes atributos:
marca (string), voltagem (number), tipo (string), cor (string), preco (number) e
ligada (boolean).

a) Escreva um método para ligar a lâmpada, o método não recebe nenhum
argumento, somente coloca o valor true (verdadeiro) para o atributo ligada.
b) Escreva um método para desligar a lâmpada, este método também não
recebe argumentos, deve colocar o valor false (falso) para o atributo ligada.
c) Por fim, elabore um método denominado verificarEstado o qual não recebe
argumentos, mas retorna true caso a lâmpada esteja ligada, ou false caso
esteja desligada.
*/


export default class Lampada {
    constructor(marca, voltagem, tipo, cor, preco){
        this.marca = marca;
        this.voltagem = voltagem;
        this.tipo = tipo;
        this.cor = cor;
        this.preco = preco;
        this.ligada = false;
    }
    ligar (){
        this.ligada = true;
    }
    desligar (){
        this.ligada = false;
    }
    verificarEstado(){
        if (this.ligada == true){
            return true;
        }
        else {
            return false;
        }
    }

}

