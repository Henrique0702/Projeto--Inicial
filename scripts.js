var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome")
var email = document.getElementById("email");
var Telefone = document.getElementById("Tel");
var CEP = document.getElementById("CEP");
var Logradouro = document.getElementById("Log");
var Numero = document.getElementById("Num");
var Bairro = document.getElementById("Bai");
var Cidade = document.getElementById("Cid");
var Estado = document.getElementById("Est");


var saida = document.getElementById("saida-de-dados");


function alertar(event){
    // alert("Você clicou no botão!!! "  + nome.value);

    // var numero = 7;
    // var resultado = numero % 2;
    // if(resultado == 0){
    //     alert("este número é par!");
    // }
    saida.innerText = "Nome: " + nome.value +
      "\n Email: " + email.value + "\nTelefone: " + Telefone.value + "\nCEP: " + CEP.value + "\nLogradouro: " + Log.value + "\nNumero: " + Num.value;


}