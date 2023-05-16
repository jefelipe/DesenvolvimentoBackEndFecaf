var botao = document.getElementById('enviar');
var nome = document.getElementById('nome');
var endereco = document.getElementById('endereco');



const validarElementos = function () {
    if (nome.value == '' || endereco.value == '') {
        alert('Campos obrigatórios precisam ser preenchidos')
        if (nome.value == '')
            nome.style.background = '#f28063';
        else if (endereco.value == '')
            endereco.style.background = '#f28063';
    } else {
        nome.style.background = '#ffffff';
        endereco.style.background = '#ffffff';
    }
}

const bloqueiNumeros = function (tecla) {
    let code = tecla.keyCode;

    if(code > 33 && code < 64 )
        event.preventDefault();
}

botao.addEventListener('click', function () { validarElementos(); })

nome.addEventListener('keypress', function () { bloqueiNumeros(event); })