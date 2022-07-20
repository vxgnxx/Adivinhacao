const input = document.querySelector('#chute');
const inicioPlay = document.querySelector('.inicio__play');
const jogoPlay = document.querySelector('.jogo__play');


let numeroSecreto = Math.floor(Math.random() * 100); // Gera número rândomico
console.log(numeroSecreto);
let chute;
let numeroTentativas = 5;
let tentativa = 2;
let txtTentativa = document.querySelector('.jogo__texto--tentativa');
let txtDica = document.querySelector('.jogo__texto--dica')

// Roda o jogo
jogoPlay.addEventListener('click', () => {
    
    // Valida o chute e atribui ele a uma váriavel, enquanto imprime na tela qual o número da tentativa
    let validador = validaChute();
    if(validador === true) {
        chute = input.value
        txtTentativa.innerHTML = 'Tentativa ' + tentativa + ' de ' + numeroTentativas;
    }
    
    if(tentativa > numeroTentativas) {
        pararJogo();
        txtTentativa.innerHTML = 'O número secreto era ' + numeroSecreto;
        txtDica.innerHTML = 'Tente de novo!';
    }
    
    verificaChute(); // Compara o chute ao número secreto
    tentativa++
}) 





















/*inicioPlay.addEventListener('click', () => {
    inicio.style.display = "none"; 
    jogo.style.display = "flex";
    console.log(input.value)
    }
)*/











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
        let pontuacao = calculaPontos();
        console.log('acertou');
        pararJogo();
        txtTentativa.innerHTML = 'Você acertou! Jogue de novo'
        txtDica.innerHTML = 'Pontuação: ' + pontuacao;
    } else if (chute > numeroSecreto) {
        txtDica.innerHTML = 'O número é menor doque o seu chute'
    } else {
        txtDica.innerHTML = 'O número é maior doque o seu chute'
    }
}

// Para o jogo
function pararJogo() {
    input.disabled = true;
    input.value = '* Fim de jogo *';
    jogoPlay.disabled = true;
}

function 


