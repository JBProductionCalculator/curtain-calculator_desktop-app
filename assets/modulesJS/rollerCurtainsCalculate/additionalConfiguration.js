

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
function viewSizeSystem(type,sizes){
	let sizeParentBlock = sizes[0].closest('.sizeSystem')
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
function viewChainLoad(type, chainLoad){
	let chainLoadParentBlock =  chainLoad[0].closest('.chainLoad')
		if (type == 'фалш шторы' ) {
			chainLoadParentBlock.classList.add('none')
		}else{
			chainLoadParentBlock.classList.remove('none')
		}
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



