class Cliente {
    #nome;
    #altura;
    #peso;

    constructor(nome, altura, peso) {
        this.#nome = nome;
        this.#altura = Number(altura);
        this.#peso = Number(peso);
    }

    getNome() {
        return this.#nome;
    }

    getAltura() {
        return this.#altura;
    }

    getPeso() {
        return this.#peso;
    }

    calcularIMC() {
        const imc = this.#peso / (this.#altura * this.#altura);
        return Number(imc.toFixed(2));
    }

    definirClassificacao() {
        const imc = this.calcularIMC();

        switch (true) {
            case (imc < 18.5): return 'Abaixo do Peso';
            case (imc >= 18.5 && imc <= 24.9): return 'Peso Normal';
            case (imc >= 25 && imc <= 29.9): return 'Sobrepeso';
            case (imc >= 30 && imc <= 34.9): return 'Obesidade grau 1';
            case (imc >= 35 && imc <= 39.9): return 'Obesidade grau 2';
            default: return 'Obesidade grau 3';
        }
    }
}

class PainelApp {
    #clientes = [];
    #form;
    #tabelaCorpo;

    constructor() {
        this.#form = document.getElementById('form-paciente');
        this.#tabelaCorpo = document.getElementById('tabela-paciente-corpo');
    }

    iniciar() {
        this.#configurarEventos();
    }

    #configurarEventos() {
        this.#form.addEventListener('submit', (evento) => {
            this.#cadastrarCliente(evento);
        });
    }

    #cadastrarCliente(evento) {
        evento.preventDefault();

        const nomeInput = document.getElementById('nome').value.trim();
        const alturaInput = document.getElementById('altura').value;
        const pesoInput = document.getElementById('peso').value;

        const novoCliente = new Cliente(nomeInput, alturaInput, pesoInput);

        this.#clientes.push(novoCliente);

        this.#renderizarTabela();

        this.#form.reset();
        document.getElementById('nome').focus();
    }

    #renderizarTabela() {
        this.#tabelaCorpo.innerHTML = '';

        this.#clientes.forEach((cliente) => {
            const linha = document.createElement('tr');

            linha.innerHTML = `
                <td>${cliente.getNome()}</td> 
                <td>${cliente.getAltura().toFixed(2)}</td> 
                <td>${cliente.getPeso().toFixed(2)}</td> 
                <td>${cliente.calcularIMC()}</td> 
                <td>${cliente.definirClassificacao()}</td>
            `;

            this.#tabelaCorpo.appendChild(linha);
        });
    }
}
