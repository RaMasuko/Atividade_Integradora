class Cliente{
    #nome;
    #altura;
    #peso;

    constructor(nome, altura, peso){
        this.#nome = nome
        this.#altura = Number(altura)
        this.#peso = Number(peso)
    }

    getNome(){
        return this.#nome
    }
    getAltura(){
        return this.#altura
    }
    getPeso(){
        return this.#peso
    }
    calcularIMC(){
        const imc = this.#peso / (this.#altura * this.#altura)
        return Number(imc.toFixed(2))
    }

    definirClassificacao(){
        const imc = this.calcularIMC()

        switch(true){
            case (imc <18.5): return 'Abaixo do Peso';
            case (imc >= 18.5 && imc <= 24.9): return 'Peso Normal'
            case (imc >= 25 && imc <= 29.9): return 'SobrePeso'
            case (imc >=30 && imc <=34.9): return 'Obesidade grau 1'
            case (imc >=35 && imc <=39.9): return 'Obesidade grau 2'
            default: return 'Obesidade grau 3'
        }
    }
}