const makeFahrenheit = document.getElementById("makeFahrenheit");
const celsiusInput = document.getElementById("celsiusInput");
const result = document.getElementById("result");

makeFahrenheit.addEventListener('click', function (event) {
    event.preventDefault();
    const celsius = celsiusInput.value;

    // if (celsius > 0 || celsius < 0) {
    //     const fahrenheit = (Number(celsius) * 9 / 5) + 32;

    //     console.log(celsius);

    //     result.innerText = celsius + " " + "Deg celsius = " + " " + fahrenheit + " " + "Deg fahrenheit"
    // }
    // else {
    //     alert("celsius must be in number")
    // }




    if (!isNaN(celsius)) {
        const fahrenheit = (Number(celsius) * 9 / 5) + 32;

        console.log(celsius);

        result.innerText = celsius + " " + "Deg celsius = " + " " + fahrenheit + " " + "Deg fahrenheit"
    }
    else {
        result.innerText = "Celsius must be in number ";
        result.style.color = "red";
    }




})