function calcular(){
    nome = document.getElementById("nome").value;
    altura = (document.getElementById("altura").value/100);
    peso = document.getElementById("peso").value;

    imc =( peso / (altura * altura)).toFixed(2);

    texto = ""

    if(imc < 18.5){
        texto = "você está muito magro"
    }else if(imc < 24.9){
        texto = "você está no peso ideal"
    }else if(imc < 29.9){
        texto = "você está com sobrepeso"
    }else if(imc < 39.9){
        texto = "você está com obesidade nvl II"
    }else if(imc > 40){
        texto = "você está com obesidade nvl III"
    }
    document.getElementById("resultado").innerText = `${nome}, seu IMC é ${imc} ${texto}`

    }