// //Arrey - []

// let listaNome = ['Jose', 'Maria', 'Luiz', 'Ana' ];

// listaNome.push('Ricardo');

// listaNome.unshift('Melissa');

// let cont = 0;

// //while(cont < listaNome.length){
// //    console.log("Aluno: " + listaNome[cont]);
// //    cont++
// //}

// listaNome.forEach(function(item){
//     console.log('Aluno:' + item);
// });

// // Json {-}
// /*
//     [
//     {
//         nome: "Jean Felipe",
//         telefone: "964986384",
//         email:"ermelindo35@hotmail.com"
//     },
//     {
//         nome: "Jean Felipe",
//         telefone: "964986384",
//         email:"ermelindo35@hotmail.com"
//     },
//     {
//         nome: "Jean Felipe",
//         telefone: "964986384",
//         email:"ermelindo35@hotmail.com"
//     }
//     ]

// */

// let dados = [{
//     nome: "Jean Felipe",
//     telefone: "964986384",
//     email:"ermelindo35@hotmail.com"
// },
// {
//     nome: "Mari Fernandes",
//     telefone: "964986384",
//     email:"ermelindo35@hotmail.com"
// },
// {
//     nome: "Josué Silva",
//     telefone: "964986384",
//     email:"ermelindo35@hotmail.com"
// }
// ]

// dados.forEach(function(item)){
//     console.log(dados[0]);
// }

var botao = document.getElementById('pesquisar');
var form = document.getElementById('formulario');

// request manda
// response recebe

const getDadosCep = function(){
    let numeroCep = document.getElementById('input-cep').value;
    let url = `https://viacep.com.br/ws/${numeroCep}/json/`;

    fetch(url).then(function(response){
        return response.json();
    }).then(function(dados){
        form.logradouro.value = dados.logradouro;
        form.bairro.value = dados.bairro;
        form.cidade.value = dados.localidade;
        form.estado.value = dados.uf;

    });

}

botao.addEventListener('click', function(){ getDadosCep(); })

