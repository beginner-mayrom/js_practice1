function calcular(){
    var input = parseFloat(document.getElementById('altura').value);
    var ehMasc = document.getElementById('masc').checked;
    var ehFem = document.getElementById('fem').checked;
    var calculo = document.getElementById('resultado');
    calculo.innerHTML = '';

    if(ehMasc){
        var calcMasc = (72.7 * input) - 58;
        calculo.innerHTML = (calcMasc).toFixed(2) + ' Kg';
    }
    else if(ehFem){
        var calcFem = (62.1 * input) - 44.7;
        calculo.innerHTML = (calcFem).toFixed(2) + ' Kg';
    }
}