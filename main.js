const form = document.getElementById('form-atividade');
const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');
const corpoTabela = document.querySelector('tbody');
const mediaFinal = document.querySelector('#media-final');
const mediaFinalResultado = document.querySelector('#media-final-resultado');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const atividades = [];
const notas = [];
const notaMinima = parseFloat(prompt('Digite a nota minima: '));
let linha = '<tr>';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaMediaFinal()
    atualizaTabela();
});

function adicionaLinha() {
    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`a Atividade ${inputNomeAtividade.value} já  foi inserida no sistema!`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${seletorEmoji()}</td>`;
        linha += '</tr>';
    }
    
}

function atualizaTabela() {
    corpoTabela.innerHTML = linha;
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    somaDasNotas = 0;
}

function seletorEmoji() {
    if(inputNotaAtividade.value >= notaMinima) {
        return imgAprovado
    } else {
        return imgReprovado
    }
}

function atualizaMediaFinal() {
    mediaFinal.innerHTML = calculaMediaFinal().toFixed(2);
    mediaFinalResultado.innerHTML = calculaMediaFinal() >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;
    for(let i = 0; i < notas.length; i++) {
        somaDasNotas = somaDasNotas + notas[i]
    };
    return somaDasNotas / notas.length;
}




