const clientes = [
    {nome: 'Ana Silva', altura: 1.65, peso: 60},
    {nome: 'Bruno Costa', altura: 1.80, peso: 95},
    {nome: 'Carla Dias ', altura: 1.60, peso: 45},
    {nome: 'Daniel Meireles', altura: 1.75, peso: 72},
    {nome: 'Elisa Borges ', altura: 1.68, peso: 92}
]

const btnGerar = document.getElementById('gerar-relatorio')
const corpoTabela = document.getElementById('corpo-tabela')

const calcIMC = (peso, altura) => peso / (altura*altura)

function classificarIMC(imc) {
    switch (true) {
        case imc < 18.5:
            return 'Abaixo do peso';
        case imc >= 18.5 && imc < 25:
            return 'Peso Normal';
        case imc >= 25 && imc < 30:
            return 'Sobrepeso';
        default:
            return 'Obesidade';
    }
}

function gerarRelatorio() {
    corpoTabela.innerHTML = '';

for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i];

    const imcCalculado = calcIMC(cliente.peso, cliente.altura);
    const classificacao = classificarIMC(imcCalculado);

    const linha = document.createElement('tr');

    const celulaNome = document.createElement('td');
    celulaNome.textContent = cliente.nome;

    const celulaIMC = document.createElement('td');
    celulaIMC.textContent = imcCalculado.toFixed(2); // Formatado com 2 casas decimais

    const celulaClassificacao = document.createElement('td');
    celulaClassificacao.textContent = classificacao;

    linha.appendChild(celulaNome);
    linha.appendChild(celulaIMC);
    linha.appendChild(celulaClassificacao);

    corpoTabela.appendChild(linha);
    }
}

btnGerar.addEventListener('click', () => {
    gerarRelatorio();
});