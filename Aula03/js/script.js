var cor = prompt("Digite os números relacionados as cores:\n1-Vermelho\n2-Azul\n3-Preto");
/*
if(cor==1){
    document.body.style.backgroundColor="red";
}
else if(cor==2){
    document.body.style.backgroundColor="blue";
}
else if(cor==3){
    document.body.style.backgroundColor="black";
}
else{
    document.body.style.backgroundColor="white";
    alert("O valor digitado não corresponde as cores especificadas");
}
*/
//DRY-> Don't Reapet Yourself ( Não se repita)
//Vamos refatorar o código acima(Refactor)
var fundo = "white";
if(cor==1){
    fundo = "red";
}
else if(cor==2){
    fundo = "blue";
}
else if(cor==3){
    fundo = "black";
}
else{
    alert("O valor digitado não corresponde as cores especificadas");
}

document.body.style.backgroundColor = fundo;