const myButton = document.querySelector(".butao-convert")
const currencySelect = document.querySelector(".currency-select")


function minhaFuncao() {



    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em Real

    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas


    const dolarToday = 5.2

    const eurToday = 6.2

    const bitic = 9.4

    if (currencySelect.value == "dolar") { //se o valor estiver selecionado o valor de dolar entre aqui
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

    if (currencySelect.value == "bitic") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitic)



    }




    /* const conveterdValue = inputCurrencyValue /dolarToday */

    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)  // buscar valor e altear

    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {

        style: "currency",
        currency: "USD"
    }).format(conveterdValue)

    currencyValueConverted.innerHTML = new Intl.NumberFormat("bit", {

        style: "currency",
        currency: "BTC"
    }).format(conveterdValue)



}




function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = './assets/dolar.png'


    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/euro.png'
        currencySelect.value == "euro"



    }
    if (currencySelect.value == "bitic") {
        currencyName.innerHTML = "Biticoin"
        currencyImage.src = './assets/bitcoin.png'
        currencySelect.value == "bitic"



    }

    minhaFuncao()



}




myButton.addEventListener("click", minhaFuncao)

currencySelect.addEventListener("change", changeCurrency)





/* currencySelect.addEventListener("change", function changeCurrency() {




    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-img")

    if (currencySelect.value == "dolar") {

        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = './assets/dolar.png'


    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = './assets/euro.png'
        currencySelect.value == "euro"



    }


  

}

) */