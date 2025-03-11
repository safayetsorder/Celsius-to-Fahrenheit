const makeFahrenheit = document.getElementById("makeFahrenheit");
const celsiusInput = document.getElementById("celsiusInput");
const result = document.getElementById("result");

makeFahrenheit.addEventListener('click', function (event) {
    event.preventDefault();
    const celsius = celsiusInput.value;


    if (!isNaN(celsius)) {
        const fahrenheit1 = Number(celsius);

        const fahrenheit = (fahrenheit1 * 9 / 5) + 32;


        result.innerText = celsius + " " + " celsius = " + " " + fahrenheit + " " + " fahrenheit"
    }
    else {
        result.innerText = "Celsius must be in number ";
        result.style.color = "gold";
        result.style.text = "bold";

    }




})
