function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorNumerico = parseFloat(valor);

  var temperaturaEntrada = document.getElementsByName("entrada");
  var temperaturaSaida = document.getElementsByName("saida");
  var resultado = document.getElementById("valorConvertido");

  for (var i = 0; i < temperaturaEntrada.length; i++) {
    if (temperaturaEntrada[i].checked == true) {
      var entradaEscolhida = temperaturaEntrada[i].value;
    }
  }

  for (var i = 0; i < temperaturaSaida.length; i++) {
    if (temperaturaSaida[i].checked == true) {
      var saidaEscolhida = temperaturaSaida[i].value;
    }
  }

  if (entradaEscolhida == saidaEscolhida) {
    resultado.innerHTML =
      "Você deve selecionar escalas diferentes de temperatura para realizar uma conversão.";
  } else if (entradaEscolhida == "gc" && saidaEscolhida == "gf") {
    var celciusFahrenheit = 1.8 * valorNumerico + 32;
    resultado.innerHTML =
      valorNumerico + "°C equivale a " + celciusFahrenheit.toFixed(2) + "°F.";
  } else if (entradaEscolhida == "gc" && saidaEscolhida == "kv") {
    var celciusKelvin = valorNumerico + 273;
    resultado.innerHTML =
      valorNumerico + "°C equivale a " + celciusKelvin.toFixed(2) + "K.";
  } else if (entradaEscolhida == "gf" && saidaEscolhida == "gc") {
    var fahrenheitCelcius = (valorNumerico - 32) / 1.8;
    resultado.innerHTML =
      valorNumerico + "°F equivale a " + fahrenheitCelcius.toFixed(2) + "°C.";
  } else if (entradaEscolhida == "gf" && saidaEscolhida == "kv") {
    var fahrenheitKelvin = (valorNumerico - 32) / 1.8 + +273;
    resultado.innerHTML =
      valorNumerico + "K equivale a " + fahrenheitKelvin.toFixed(2) + "°F.";
  } else if (entradaEscolhida == "kv" && saidaEscolhida == "gc") {
    var kelvinCelcius = valorNumerico - 273;
    resultado.innerHTML =
      valorNumerico + "K equivale a " + kelvinCelcius.toFixed(2) + "°C.";
  } else if (entradaEscolhida == "kv" && saidaEscolhida == "gf") {
    var kelvinFahrenheit = (valorNumerico - 273) * 1.8 + 32;
    resultado.innerHTML =
      valorNumerico + "K equivale a " + kelvinFahrenheit.toFixed(2) + "°F.";
  }
}