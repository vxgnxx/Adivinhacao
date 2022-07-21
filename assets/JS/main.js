const inicio = document.querySelector('.inicio')
const jogo = document.querySelector('.jogo')

const input = document.querySelector('#chute');
const inicioPlay = document.querySelector('.inicio__play');
const jogoPlay = document.querySelector('.jogo__play');
const back = document.querySelector('.jogo__back')
const reload = document.querySelector('.jogo__reload')


let numeroSecreto;
let chute;
let pontuacao;
let pontos = 1000;

let numeroTentativas = 15;
let tentativa = 2;

let txtTentativa = document.querySelector('.jogo__texto--tentativa');
let txtDica = document.querySelector('.jogo__texto--dica')

let dificuldade;
let validador

// Muda da tela de inicio para a tela de jogo
inicioPlay.addEventListener('click', () => {
    escolheDificuldade(); // Seleciona a dificuldade do jogo
    numeroSecreto = Math.floor(Math.random() * 100); // Gera o número aleatório
    console.log(numeroSecreto);
    inicio.style.display = 'none';
    jogo.style.display = 'flex';
})

// Roda o jogo
jogoPlay.addEventListener('click', () => {
    
    // Valida o chute e atribui ele a uma váriavel, enquanto imprime na tela qual o número da tentativa
    validador = validaChute();
    if(validador === true) {
        chute = input.value
        txtTentativa.innerHTML = 'Tentativa ' + tentativa + ' de ' + numeroTentativas;
    }
    
    verificaChute(); // Compara o chute ao número secreto
    
    // Restringe o número de tentativas
    if(tentativa > numeroTentativas) {
        pararJogo();
        txtTentativa.innerHTML = 'O número secreto era ' + numeroSecreto;
        txtDica.innerHTML = 'Tente de novo!';
    }
    
    tentativa++
    pontuacao = calculaPontos(); // Faz o calculo da pontuação
}) 

back.addEventListener('click', () => {
    inicio.style.display = 'flex';
    jogo.style.display = 'none';
})

reload.addEventListener('click', () => {
    numeroSecreto = Math.floor(Math.random() * 100); // Gera o número aleatório
    tentativa = 2;
    pontos = 1000;
    txtTentativa.innerHTML = 'Faça um chute!'
    txtDica.innerHTML = '--------------';
    input.disabled = false;
    input.value = '';
    jogoPlay.disabled = false;
    
})































// Checa se o chute é valido
function validaChute() {
    input.addEventListener('invalid', function (event) {
        if (event.target.validity.valueMissing) {
            event.target.setCustomValidity('Chute algum número.');
        } else if (event.target.validity.patternMismatch) {
            event.target.setCustomValidity('Por favor insira apenas números positivos, de 0 a 99.');
        } else {
        }
    })
    
    
    input.addEventListener('change', function (event) {
        event.target.setCustomValidity('');
    })
    
    if (input.validity.valueMissing || input.validity.patternMismatch) {
        return false
    } else {
        return true
    }
}

// Compara o chute com o número secreto
function verificaChute() {
    if(chute == numeroSecreto) {
        console.log('acertou');
        pararJogo();
        txtTentativa.innerHTML = 'Você acertou! Jogue de novo'
        txtDica.innerHTML = 'Pontuação: ' + pontuacao;
    } else if (chute > numeroSecreto) {
        txtDica.innerHTML = 'O número é menor do que o seu chute'
    } else {
        txtDica.innerHTML = 'O número é maior do que o seu chute'
    }
    
    if (input.value == '' || validador == false) {
        txtDica.innerHTML = '--------------'
    }
}

// Para o jogo
function pararJogo() {
    input.disabled = true;
    input.value = '* Fim de jogo *';
    jogoPlay.disabled = true;
}

// Calculo da pontuação
function calculaPontos() {
    let pontosPerdidos = Math.abs(chute - numeroSecreto) / 2
    pontos -= pontosPerdidos
    return pontos

}

// Define a dificuldade
function escolheDificuldade() {
    dificuldade = document.querySelectorAll('[name="dificuldade"]')

    for(let i = 0; i < dificuldade.length; i++){
        if(dificuldade[i].checked && dificuldade[i].value == 1) {
            numeroTentativas = 20;
        } else if(dificuldade[i].checked && dificuldade[i].value == 2) {
            numeroTentativas = 15;
        } else if(dificuldade[i].checked && dificuldade[i].value == 3) {
            numeroTentativas = 10;
        }
    }
}