//функция вызывается в файле creatingOrderBlank.js/ в ней прописан функционал для добавления новых товаров в бланк под каждой таблицей
function addToWindowBlankInForm(products, idTables, idAddBlank ,arrayParam) {

	// console.log(products)

	let buttonAddToBlank = document.querySelector(idTables+" #add_to_blank")
	let screnBlank = document.querySelector(idAddBlank)

	// console.log(screnBlank)
	
	let numberRepeatingProduct

	let resultRepeatElement = {};
	deleteRepeatingElement(products)
	
	// console.log(screnBlank)


	let allProduct = screnBlank.querySelectorAll('ul')



	allProduct.forEach(function(prod,index){
		if (index != 0) {
			prod.remove()
		}
	})


	products.forEach(function(prod,index){
		// console.log(prod.idParent)
		// console.log(buttonAddToBlank.dataset.addtowindowblank)

		if(prod.idParent == buttonAddToBlank.dataset.addtowindowblank){

			// console.log(screnBlank)

			screnBlank.classList.remove('none')
			
			let newProduct = createWindowBlank(prod, index, resultRepeatElement)
			
			screnBlank.append(newProduct)

			// for(let key in resultRepeatElement){
			// 	if (prod.arrayElementClass  ==  key) {
			// 		numberRepeatingProduct = resultRepeatElement[key]
			// 	}else{

			// 	}
			// }


			// console.log(prod.arrayElementClass)

			
		}
	})


	// "productSystem" : productSystem,	 		
	// "productColor" : productColor,	 		
	// "colorSystem" : colorSystem,	 		
	// "width" : widht,
	// "height" : height,
	// "controlType" :  addToBlankForEach(controlType),
	// "fixationSystem" : addToBlankForEach(fixationSystem),
	// 'sizeSystem' : addToBlankForEach(sizeSystem),
	// 'chainLoad' : addToBlankForEach(chainLoad),
	// 'chainFixing' : addToBlankForEach(chainFixing),
	// 'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal),
	// 'plasticRetainer' : addToBlankForEach(plasticRetainer),
	// 'guideString' : addToBlankForEach(guideString),

	function createWindowBlank(product, countProduct, repeatObject){
		
		let ul = document.createElement('ul')

	
		let maiConfiguration 			

		if (idTables == '#new_vertical_89mm') {
			// console.log(idTables)

			maiConfiguration = createWindowElement('li', 'maiConfiguration', `${89} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

		}else if(idTables == "#new_vertical_127mm"){ 
			// console.log(idTables)

			maiConfiguration = createWindowElement('li', 'maiConfiguration', `${127} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

		}else {
			maiConfiguration  = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

		}

		
		// let maiConfiguration  = createWindowElement('li', 'maiConfiguration', `${additionalText(idTables)} ${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	


		let num = createWindowElement('li','number_of_blanks', countProduct+1)
		let width =	createWindowElement('li', 'width',  product.width)	
		let height = createWindowElement('li', 'height',product.height )
		let quantity = createWindowElement('li', 'quantity')
		let control = createWindowElement('li', 'control' ,product.controlType )
		let fixationSystem = createWindowElement('li', 'fastening', product.fixationSystem)
		let buttonDelete =  createWindowElement('div', 'delenteElement')

		ul.append(num)
		// ul.append(systemAndColor)
		ul.append(maiConfiguration)
		ul.append(width)
		ul.append(height)
		ul.append(control)
		ul.append(quantity)
		ul.append(fixationSystem)
		ul.append(buttonDelete)	

		dleteWindowElement(ul,product, countProduct)

		return ul	

	}



	function createWindowElement(tagN, classN, text){
		let li = document.createElement(tagN)
		li.classList.add(classN)
		li.textContent = text
		// console.log(text)

		return li
	}


	function dleteWindowElement(removedItem,removedProduct, numberProduct){
		let buttonDelete = removedItem.querySelector('.delenteElement')
		buttonDelete.addEventListener('click', function(){

			removedItem.remove()

			orderBlank.splice(removedProduct.numberInArrayOrderBlank,1,1) 

			// console.log(arrayParam)

		
		})
	}


// функция которая создает обьект повторяющихся элементов и отдает обьекты с их названиями и количеством
	function deleteRepeatingElement(allProduct){

		let arr = allProduct

		for (let i = 0; i < allProduct.length; ++i)
		{
		    let a = arr[i].arrayElementClass;
		    // console.log(a)
		    if (resultRepeatElement[a] != undefined)
		        ++resultRepeatElement[a];
		    else
		        resultRepeatElement[a] = 1;
		}

		// console.log(resultRepeatElement)

	}


	//дополнительная функция
	function excludeUndefined(text){
		if (text != undefined) {
		// console.log(text)

			return text
		}else{
			return ' '
		}
	}


	// function ddd (idTables, product){
	// 	let maiConfiguration
	// 		if (idTables == '#new_vertical_89mm') {
	// 			maiConfiguration = createWindowElement('li', 'maiConfiguration', `${89} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

	// 		}else if(idTables = "#new_vertical_127mm"){ 
	// 			maiConfiguration = createWindowElement('li', 'maiConfiguration', `${127} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

	// 		}else{
	// 			let maiConfiguration  = createWindowElement('li', 'maiConfiguration', `${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`)	

	// 		}

	// 	return maiConfiguration

	// }

	// //дополнительная функция
	// function additionalText(idTables){
	// 	if(idTables == '#new_vertical_89mm') {
	// 		return 89
	// 	}else if(idTables == '#new_vertical_127mm'){
	// 		return 127

	// 	}else{
	// 		return ' '
	// 	}
	// }
	


}




