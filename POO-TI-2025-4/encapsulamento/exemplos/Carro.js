export default class Carro{
    #modelo
    #marca
    #motor
    
    constructor (modelo,marca,motor){
        this.#marca = marca
        this.#motor = motor
        this.#modelo = modelo

    }
    get modelo(){
        return this.#modelo
    }

    set marca(novamarca) {
        this.#marca = novamarca
    }
    
}