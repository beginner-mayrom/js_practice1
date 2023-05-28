//const consAlcUrb = 6.2;
//const consGasUrb = 9.4;
//const consAlcRod = 8.1;
//const consGasRod = 12.1;

function calcular(){

    var valorAlc = parseFloat(document.getElementById('alc').value);
    var valorGas = parseFloat(document.getElementById('gas').value);
    var calculo = document.getElementById('resultado');
    calculo.innerHTML = '';

    var fatorRend = valorAlc / valorGas;

    if (fatorRend <= 0.7){
        calculo.innerHTML = 'usar álcool';
    }

    else{
        calculo.innerHTML = 'usar gasolina';
    }
}