//наценка на товар
function  productMarkup(price, selectMarkup) {
	let percent = price / 100 * Number(selectMarkup) 
	let newPrice = price + percent

	return newPrice
}


// конвертер валюты из долара в гривну
function currencyConverter(parentSection){
	let price = document.querySelector(parentSection + ' #price')
	let exchangeRates = document.querySelector(parentSection + ' .currencyConverter input')
	let newPriceContainer =  document.querySelector(parentSection + ' .newConverterPrice')
	
	exchangeRates.addEventListener('input',function(){
		
		newPriceContainer.innerHTML = Number(price.textContent) * this.value
		
	})

}