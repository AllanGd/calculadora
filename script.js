function insert(numero){
  var num = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = num + numero;
}

function limpar(){
  document.getElementById("resultado").innerHTML = "";
}

function voltar(){
  var resultado = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length-1);
}

function calcular(){
  var resultado = document.getElementById("resultado").innerHTML;
  if (resultado){
    if (resultado==".06."){
      document.getElementById("resultado").innerHTML = "Criado por Allan :)";
    }else{
      document.getElementById("resultado").innerHTML = eval(resultado);
    }
  }
}