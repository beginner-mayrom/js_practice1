var soma = 0;

function par(){
    var input = parseInt(document.getElementById('num').value);
    var res1 = document.getElementById('resultadoPar');
    res1.innerHTML = "";
    for (var i = 1; i <= input; i++){
        if (i % 2 === 0){
            res1.innerHTML += i + "-";
            soma = soma + i;
            //res1.innerHTML += `<p>${i}</p>`
        }
    }
} 

function exibirSoma(){
    var res2 = document.getElementById('resultadoSoma');
    res2.innerHTML = "";
    res2.innerHTML = soma;
}