const inicio = document.querySelector('.inicio');
const jogo = document.querySelector('.jogo')
const inicioPlay = document.querySelector('.inicio__play');
const input = document.querySelector('#chute');
const jogoPlay = document.querySelector('.jogo__play');


let numeroSecreto = Math.floor(Math.random() * 100); // Gera número rândomico
console.log(numeroSecreto);
let chute;
let tentativa = 1;
let txtTentativa = document.querySelector('.jogo__texto--tentativa');
let txtDica = document.querySelector

// Valida o chute e atribui ele a uma variavel caso ele seja valido
jogoPlay.addEventListener('click', () => {
    let validador = validaChute();
    if(validador === true) {
        chute = input.value
        txtTentativa.innerHTML = 'Tentativa ' + tentativa + ' de 5';
        tentativa++
    }

    console.log(chute)
    verificaChute();
    console.log(tentativa)
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
        console.log('acertou')
    } else if (chute > numeroSecreto) {
        console.log('maior')
    } else {
        console.log('menor')
    }
}


