const temperatureInput = document.getElementById("temperature");
const fromUnitSelect = document.getElementById("fromUnit");
const convertButton = document.getElementById("convert");
const convertedTempSpan = document.getElementById("convertedTemp");

convertButton.addEventListener("click", function() {
    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = fromUnit === "celsius" ? "fahrenheit" : fromUnit === "fahrenheit" ? "celsius" : "kelvin";

    let convertedTemp;

    if (fromUnit === "celsius") {
        convertedTemp = (temperature * 9/5) + 32;
    } else if (fromUnit === "fahrenheit") {
        convertedTemp = (temperature - 32) * 5/9;
    } else {
        convertedTemp = temperature - 273.15; // Kelvin to Celsius
    }

    convertedTempSpan.textContent = convertedTemp.toFixed(2) + " " + toUnit;
});
