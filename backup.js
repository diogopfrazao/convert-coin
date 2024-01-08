const myButton = document.querySelector(".butao-convert")
const currencySelect = document.querySelector(".currency-select")






myButton.addEventListener("click", function minhaFuncao() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real

    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas




    const dolarToday = 5.2

    const eurToday = 6.3


    if (currencySelect.value == "dolar") {


        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)


    }
    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / eurToday)



    }


    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)  // buscar valor e altear

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

        style: "currency",
        currency: "USD"
    }).format(conveterValue)


    minhaFuncao()

    console.log(conveterValue)


})

currencySelect.addEventListener("change", function changeCurrency()  {

    


    const currencyName = document.getElementById("currency-name")
    const currencyImage =document.getElementById("currency-img")

    if (currencySelect.value == "dolar") {

       currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = './assets/dolar.png'


    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/euro.png'

   



      
    }

   currencySelect.addEventListener("change",minhaFuncao())
}) 






