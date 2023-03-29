function calcular (tipoCalculo){
    //let nome = window.confirm('Deseja entrar no site?');
    //window.alert('Bem vindo ao meu site');

    let resultado;
    let numero1 = Number(window.document.getElementById('valor1').value);
    let numero2 = Number(window.document.getElementById('valor2').value);
    let operacao = tipoCalculo.toUpperCase();
    let divResultado = window.document.getElementById('resultado')

    if(operacao == 'SOMAR'){
        resultado = numero1 + numero2;
    }else if(operacao == 'SUBTRAIR'){
        resultado = numero1 - numero2;
    }else if(operacao == 'MULTIPLICAR'){
        resultado = numero1 * numero2;
    }else if(operacao == 'DIVIDIR'){
        resultado = numero1 / numero2;
    }

    divResultado.innerText = resultado.toFixed(2);
}

function limpar(){
    window.document.getElementById('valor1').value = "";
    window.document.getElementById('valor2').value = "";
    window.document.getElementById('resultado').innerText = "";
}