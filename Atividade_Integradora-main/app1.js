class Cliente{
    #nome;
    #altura;
    #peso;

    constructor(nome, altura, peso){
        this.#nome = nome
        this.#altura = Number(altura)
        this.#peso = Number(peso)
    }
}