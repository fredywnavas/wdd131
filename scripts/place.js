const temperature = 55;
const windSpeed = 10;

function calculateWindChill(temperature, windSpeed) {
    return 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

const windChillSpan = document.querySelector("#wind-chill");

if (temperature <= 50 && windSpeed > 3) {
    windChillSpan.textContent = `${calculateWindChill(temperature, windSpeed)}°F`;
} else {
    windChillSpan.textContent = "N/A"
}