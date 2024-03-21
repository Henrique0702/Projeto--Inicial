var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome")
var email = document.getElementById("email");
var Telefone = document.getElementById("telefone");
var CEP = document.getElementById("CEP");
var Logradouro = document.getElementById("logradouro");
var Numero = document.getElementById("numero");
var bairro = document.getElementById("bairro");
var Cidade = document.getElementById("cidade");
var Estado = document.getElementById("estado");


var saida = document.getElementById("saida-de-dados");


function alertar(event){
    // alert("Você clicou no botão!!! "  + nome.value);

    // var numero = 7;
    // var resultado = numero % 2;
    // if(resultado == 0){
    //     alert("este número é par!");
    // }

    const url = `https://viacep.com.br/ws/${cep.value}/json`;
    
    fetch(url)
    .then(resposta=>resposta.json())
    .then(dados=>alert(dados.bairro))


    saida.innerText = "Nome: " + nome.value +
      "\n Email: " + email.value + "\nTelefone: " + telefone.value + "\nCEP: " + CEP.value + "\nLogradouro: " + logradouro.value + "\nNumero: " + numero.value + "\nBairro: " + bairro.value + "\nCidade: " + cidade.value + "\nEstado: " + estado.value;  


}