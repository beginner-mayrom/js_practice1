function fah(){
  var input = parseInt(document.getElementById('num').value);
  var resFah = document.getElementById('resultadoFah');
  resFah.innerHTML = "";
  resFah.innerHTML = (input * 1.8 + 32).toFixed(2) + " Fahrenheit";
}

function celsius(){
  var input = parseInt(document.getElementById('num2').value);
  var resCelsius = document.getElementById('resultadoCelsius');
  resCelsius.innerHTML = "";
  resCelsius.innerHTML = ((input - 32) / 1.8).toFixed(2) + " Celsius";
}