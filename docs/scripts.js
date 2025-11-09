function convertTemperature(type) {
  const temperatureInput = document.getElementById("temperatureInput");
  const resultText = document.getElementById("resultText");

  const value = parseFloat(String(temperatureInput.value).replace(",", "."));
  if (Number.isNaN(value)) {
    resultText.innerText = "Digite um número válido.";
    return;
  }

  let result, unit;

  if (type === "fahrenheit") {
    // °C -> °F
    result = value * 9/5 + 32;
    unit = "ºF";
  } else if (type === "celsius") {
    // °F -> °C
    result = (value - 32) * 5/9;
    unit = "ºC";
  } else {
    resultText.innerText = "Tipo inválido. Use 'fahrenheit' ou 'celsius'.";
    return;
  }

  resultText.innerText = `${result.toFixed(2)} ${unit}`;
}
