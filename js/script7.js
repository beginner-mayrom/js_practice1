var input = document.getElementById('num');
var todosNum = [];
var maiorNum = 0;
var menorNum = 1000;

function adicionar(){
    if(input.value != ''){
        var numeros = input.value;

        todosNum.push({numeros: numeros});

        input.value = '';
    }
}

function exibirTodosNum(){
    var mostrarTodosNum = document.getElementById('resTodosNum');
    mostrarTodosNum.innerHTML = '';

    for(var i = 0; i <= todosNum.length; i++){
        var recebeTodosNum = todosNum[i];
        mostrarTodosNum.innerHTML += recebeTodosNum.numeros + '-';
    }
}

function exibirMaiorNum(){
    var mostrarMaiorNum = document.getElementById('resMaiorNum');
    mostrarMaiorNum.innerHTML = '';

    for(var i = 0; i <= todosNum.length; i++){
        var recebeTodosNum2 = todosNum[i];
        
        if(recebeTodosNum2.numeros > maiorNum){
            maiorNum = recebeTodosNum2.numeros;
        }

        mostrarMaiorNum.innerHTML = maiorNum;
    }
}

function exibirMenorNum(){
    var mostrarMenorNum = document.getElementById('resMenorNum');
    mostrarMenorNum.innerHTML = '';

    for(var i = 0; i <= todosNum.length; i++){
        var recebetodosNum3 = todosNum[i];

        if(recebetodosNum3.numeros < menorNum){
            menorNum = recebetodosNum3.numeros;
        }

        mostrarMenorNum.innerHTML = menorNum;
    }
}