const containerInputOne = document.querySelector(".container-one");
const containerInputDos = document.querySelector(".container-dos");


const primerInputNumber = document.querySelector("#primer-input");
// const segundoInputNumber = document.querySelector("#segundo-input");

const divisaTotal = document.querySelector(".texto-numero");




async function fetchExchangeRates() {
  try {
    const response = await fetch(
      "https://v6.exchangerate-api.com/v6/ddae4097f787543b74da6e58/latest/USD"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    throw error;
  }
}

fetchExchangeRates().then((result) => {
  console.log(result);
  createSelectOptions(result);
});



function createSelectOptions(result) {
  const selecteOne = document.createElement("select");
  selecteOne.classList.add("select-one");

  const selecteDos = document.createElement("select");
  selecteDos.classList.add("select-dos");

  for (const currency in result.conversion_rates) {
    const optionOne = document.createElement("option");
    optionOne.setAttribute("value", result.conversion_rates[currency]);
    optionOne.innerHTML = currency;

    const optionDos = document.createElement("option");
    optionDos.setAttribute("value", result.conversion_rates[currency]);
    optionDos.innerHTML = currency;

    selecteOne.append(optionOne);
    selecteDos.append(optionDos);
  }

  containerInputOne.append(selecteOne);
  containerInputDos.append(selecteDos);

}

function calculate() {
  const inputOneCantidad = primerInputNumber.value;
  // const inputDosCantidad = segundoInputNumber.value;

  const conversionRateOne = parseFloat(containerInputOne.querySelector(".select-one").value || 0);
  const conversionRateTwo = parseFloat(containerInputDos.querySelector(".select-dos").value || 0);

  let calcular = (inputOneCantidad * conversionRateOne) / conversionRateTwo;

  divisaTotal.innerHTML = `$${calcular.toFixed(2)}`;

  
}













