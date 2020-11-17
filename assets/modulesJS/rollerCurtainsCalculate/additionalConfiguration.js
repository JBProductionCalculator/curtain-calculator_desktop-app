

// функция добаления стоимости к цвету
function selectedColorSystem(type, colorInputs, parentSection) {
	let price

	colorInputs.forEach(function(radio){
		if (radio.checked) {
			if (type == 'Compact' || type == 'фалш шторы' || type == 'MINI' || type == 'STANDART' ) {

				if (parentSection == "#roller_curtains_day_night") {
					price  = 2
				}else{
					price = 1
				}

			}else if (type == 'MAXIMUS') {
				price = 0

			}else if (type == 'UNI Плоскю Направл' ){

				if (parentSection == "#roller_curtains_day_night") {
					price  = 3
				}else{
					price = 2

				}

			}else if ( type == 'UNI П-обрю Направл') {

				if (parentSection == "#roller_curtains_day_night") {
					price  = 4
				}else{
					price =  3
				}

			}else{
				price = 0
			}
		}
	})

	return price
}


// появление раздела выбра размера : СТД иди РГ для определенных типов ткани
function viewSizeSystem(type,sizes, parentSection){
	let sizeParentBlock = sizes[0].closest(parentSection+' .sizeSystem')
		if (type == 'UNI Плоскю Направл' || type == 'UNI П-обрю Направл') {
			sizeParentBlock.classList.add('none')
		}else{
			sizeParentBlock.classList.remove('none')
		}
	
}


// показывает систему фиксации в нужных местах и возвращает цену
function selectedFixationSystem(type, fixationSystemInputs, parentSection){
	let price = 0
	let fixationSystemParentBlock = fixationSystemInputs[0].closest('.fixationSystem')

	if (type == 'фалш шторы'  || type == 'UNI Плоскю Направл' || type == 'UNI П-обрю Направл') {
		fixationSystemParentBlock.classList.add('none')

	}else{
		fixationSystemParentBlock.classList.remove('none')
	
	    fixationSystemInputs.forEach(function(radio){
	            if(radio.checked){
	            	// первая таблица
	                if (parentSection == "#roller_curtains") {        

	                    if (radio.value == 'Магнитная'){
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART' || type == 'MAXIMUS') {
	                             price = 0.9     
	                        }

	                    }
	                    if (radio.value == 'Направляющая струна') {
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART') {
	                             price = 0.9                        
	                        } if(type == 'MAXIMUS' ){
	                             price = 2.5     
	                        } 

	                    }

	                }
	            	// вторая таблица день-ночь
	                if (parentSection == "#roller_curtains_day_night") {        

	                    if (radio.value == 'Магнитная'){
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART' || type == 'MAXIMUS') {
	                              price = 0.9     
	                        }

	                    }
	                    if (radio.value == 'Направляющая струна') {
	                        if (type == 'Compact' || type == 'MINI' || type == 'STANDART') {
	                             price = 1.2                      
	                        }if(type == 'MAXIMUS' ){
	                           price = 3.0 
	                        }   

	                    }


	                }

	            }

	        })

	}

	
	return price

}



// показывает Груз цепи при выборе нужных типов штор
function selectedChainLoad(type, chainLoad){
	let price = 0
	let chainLoadParentBlock =  chainLoad[0].closest('.chainLoad')
		if (type == 'фалш шторы' ) {
			chainLoadParentBlock.classList.add('none')
		}else{
			chainLoadParentBlock.classList.remove('none')
			price = 0.2
		}
	return price
}



// показывает Фиксация цепи при выборе нужных типов штор
function selectedChainFixing(type, chainLoad){
	let price = 0
	let chainFixingParentBlock =  chainLoad[0].closest('.chainFixing')

		if (type == 'фалш шторы' || type == 'STANDART' || type == 'MAXIMUS'   ) {
			chainFixingParentBlock.classList.add('none')

		}else{
			chainFixingParentBlock.classList.remove('none')
			price  = 0.2
		}

	return price
}


// показывает Фиксацич цепи универсальная при выборе нужных типов штор
function selectedChainFixingUniversal(type, chainLoad){
	let price = 0
	let chainFixingUniversaParentBlock =  chainLoad[0].closest('.chainFixingUniversal')

		if ( type == 'Compact' || type == 'фалш шторы' || type == 'MINI' || type == 'UNI Плоскю Направл' || type == 'UNI П-обрю Направл'   ) {
			chainFixingUniversaParentBlock.classList.add('none')

		}else{
			chainFixingUniversaParentBlock.classList.remove('none')
			price  = 0.2
		}

	return price
}



// Функция 1 Сособ Управления .для  STANDARD другие расценки
function viewControlMethod(type, boxControlMethod, parentSection){
	let controlMethod = document.querySelector(parentSection+' .controlMethod')
	let controlMethodChanel = document.querySelector(parentSection+' .controlMethodChanel')


	if (type == 'MINI' || type == 'UNI Плоскю Направл'|| type == 'UNI П-обрю Направл') {
		boxControlMethod.classList.remove('none')
		// priceControlMethodChanel(24,26,30)
		viewChanelControlMethod(controlMethod,controlMethodChanel)

	}else if(type == 'STANDART'){
		boxControlMethod.classList.remove('none')
		viewChanelControlMethod(controlMethod,controlMethodChanel)

	}else{
		boxControlMethod.classList.add('none')
		let proxy  = 0
	}
	
}

// Функция 2 Сособ Управления
function viewChanelControlMethod(controlMethod, chanels){
	controlMethod.addEventListener('change', function(){
		if(controlMethod.value == 'Мотор'){
			chanels.classList.remove('none')
		}else{
			chanels.classList.add('none')
		}
	})
	
}



//// Функция 3 Сособ Управления .эта функция в вызывается прямо в каклькуляторе. она отдат цену
function priceControlMethod(type,boxControlMethod){
	let controlMethod = boxControlMethod.querySelector('.controlMethod')
	let controlMethodChanel = boxControlMethod.querySelector('.controlMethodChanel')
	let motorPrice = 85

	let price = 0

	if (type == 'MINI' || type == 'UNI Плоскю Направл'|| type == 'UNI П-обрю Направл') {
		price = chanelsPrices(24,26,30)
	}else if(type == 'STANDART'){
		price = chanelsPrices(50,60,70)
	}else{
		price = 0
	}


	function chanelsPrices(fistPice, twoPrice, fivePrice){
		if(controlMethod.value == 'Мотор'){

			if (controlMethodChanel.value == '1 канал') {
				return motorPrice + fistPice
			}

			if (controlMethodChanel.value == '2 канала') {
				return motorPrice +  twoPrice
			}

			if (controlMethodChanel.value == '5 каналов') {
				return motorPrice + fivePrice
			}

		}else{
			controlMethodChanel.classList.add('none')
			return 0
		}


	}


	return price
}	




// добавление второй ширины для UNI Плоскю Направлю
function viewEaxtraWidth(type,parentSection){
	let mainWidthText = document.querySelector(parentSection+' .main_width span')
	let glassWidth = document.querySelector(parentSection+' .glass_width')


	if (type == "UNI Плоскю Направл") {
		glassWidth.classList.remove('none')
		mainWidthText.textContent = 'Ширина ребра, мм'
	}else{
		glassWidth.classList.add('none')
		mainWidthText.textContent = 'Ширина, мм'
	}

}


//функуия 1 Доп. скотч . показ дополнительного скотча для типа UNI Плоскю Направл
function viewAdditionalScotchTape(type, parentSection){
	let additionalScotchTape = document.querySelector(parentSection + ' .additionalScotchTape')

	if (type == "UNI Плоскю Направл") {
		additionalScotchTape.classList.remove('none')
	}else{
		additionalScotchTape.classList.add('none')
	}

}

//функуия 2 Доп сктч . эта функция в вызывается прямо в каклькуляторе. она отдат цену
function priceAdditionalScotchTape(type, inputs, height){
	
	let price = 0
	if (type == "UNI Плоскю Направл") {
		inputs.forEach(function(radio){
			if (radio.checked && radio.value == 'Доп. скотч') {
				let converterToMeters = Number(height.value) / 1000
				price = Math.ceil(converterToMeters) * 0.8
			}
		})
		
	}else{
		price = 0
	}
	
	return price
}
	