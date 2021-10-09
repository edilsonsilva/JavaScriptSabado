// O comando abaixo diz que o documento html deve obter a tag h1 e 
// mudar o seu texto para "Mudei o texto"
// document.getElementsByTagName("h1")[0].innerHTML="Mudei o texto";

// nome = prompt("Digite o seu nome");
// document.getElementsByTagName("h1")[0].innerHTML=nome;

/*
var é utilizado para declaração de variáveis globais; enquanto que o
let é utilizado para declações de forma de bloco.

se você fizer uma declaração de variável usando var dentro de um if,for,while..
esta variávei será vista fora desta estrutura. Já a declaração com let 
dentro destes blocos não será vista fora deles. Mas se você fizer  uma declaração
usando let ou var fora dos blocos, estas serão vistas por todo o código

var idade = 10;
let email = "joao@terra.com.br";

if(10==10){   
    var nome = "Pedro";
    let sobrenome = "Oliveira";
}
console.log(nome);
console.log(sobrenome);
*/

// document.getElementById("saida").innerHTML="Mensagem";
// document.getElementById("saida").style.backgroundColor="yellow";
// document.getElementById("saida").style.color="red";

const tag = document.getElementById("saida");

tag.innerHTML = "Novo texto";
tag.style.backgroundColor="green";
tag.style.color="yellow";

