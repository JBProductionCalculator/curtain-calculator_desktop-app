
let countArrayElementOrderBlank = 0
// let numberInArrayOrderBlank = 0
function addToBlankFun(parentBlock, selectOne, selectTwo ,selectType) {

	let arrayParameters = [parentBlock, selectOne, selectTwo ]


	// allAddedProduct++


	// let price = parentBlock.querySelector("#price").textContent
	// console.log(parentBlock[0])
	let idParent = parentBlock.parentNode.id
	let widht = parentBlock.querySelector("#width").value
 	let height = parentBlock.querySelector("#height").value
    let productSystem = parentBlock.querySelector('#'+selectTwo).value
    let productColor = parentBlock.querySelector('#'+selectOne).value
 	
 	//рулонные шторы
 	let colorSystem =  parentBlock.querySelectorAll("input[name='colorSystem']")
 	let controlType = parentBlock.querySelectorAll("input[name='controlType']")
 	let fixationSystem = parentBlock.querySelectorAll("input[name='fixationSystem']")
 	let sizeSystem = parentBlock.querySelectorAll("input[name='sizeSystem']")
 	let chainLoad = parentBlock.querySelectorAll("input[name='chainLoad']")
 	let chainFixing = parentBlock.querySelectorAll("input[name='chainFixing']")
 	let chainFixingUniversal = parentBlock.querySelectorAll("input[name='chainFixingUniversal']")
 	let additionalScotchTape = parentBlock.querySelectorAll("input[name='additionalScotchTape']")
 	let glassWidth = parentBlock.querySelector(".glass_width input")
 	let controlMethod = parentBlock.querySelector('.controlMethod')
 	let controlMethodChanel = parentBlock.querySelector('.controlMethodChanel')

 

 	// горизонтальные жалюзи стандарт
 	let plasticRetainer = parentBlock.querySelectorAll("input[name='plasticRetainer']")
 	let guideString = parentBlock.querySelectorAll("input[name='guideString']")

 	// // ветрикальные жалюзи
 	let fasteningSelected = parentBlock.querySelectorAll("input[name='fastening_selected']")


 	let allRadioElements = [colorSystem,controlType,fixationSystem,sizeSystem,chainLoad,chainFixing,chainFixingUniversal,plasticRetainer,guideString,fasteningSelected]



 	// console.log(productSystem);
 	let oneItem
 	 if(productSystem == 'Compact'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,
	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 		
	 	}

 	}else if(productSystem == 'фалш шторы'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}
 	}else if(productSystem == 'MINI'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,


	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		// 'controlMethod' : addToBlankForEach(controlMethod,'Цепь'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,

	 	}

 	}else if(productSystem == 'STANDART'){
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,


	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,

	 		
	 	}

 	}else if (productSystem == "MAXIMUS") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} 'Бел.'`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : 'Бел.',		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "UNI Плоскю Направл") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : `${widht} / ${glassWidth.value}`,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'additionalScotchTape' : addToBlankForEach(additionalScotchTape,'Без скотча'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else if (productSystem == "UNI П-обрю Направл") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'controlMethod' : choiceControlMethod(controlMethod.value, controlMethodChanel.value),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
	 	}

 	}else{
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(colorSystem)}`,
	 		"productSystem" : productSystem,	 		
	 		"productColor" : productColor,	 		
	 		"colorSystem" : addToBlankForEach(colorSystem),	 		
	 		"width" : widht,
	 		"height" : height,
	 		"numberRepetitons" : 1,

	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem,'Без фиксации'),
	 		'sizeSystem' : addToBlankForEach(sizeSystem, 'СТД'),
	 		'chainLoad' : addToBlankForEach(chainLoad,'Без груза'),
	 		'chainFixing' : addToBlankForEach(chainFixing,'Без фиксатора'),
	 		'chainFixingUniversal' : addToBlankForEach(chainFixingUniversal,'Без фиксатора'),

	 		'plasticRetainer' : addToBlankForEach(plasticRetainer,'Без фиксатора'),
	 		'guideString' : addToBlankForEach(guideString, 'Без струны'),
	 		'fasteningSelected' : addToBlankForEach(fasteningSelected),
	 		"numberInArrayOrderBlank" : countArrayElementOrderBlank++ ,
 		}

 	}


 	creatingOrgerBlank(oneItem, arrayParameters)

 	resetRadioElements(allRadioElements,selectType)

 

 	function resetRadioElements(data,selectType){
 		// console.log(selectType)

 		data.forEach(function(arrayRadio){
 			if (arrayRadio.length != 0) {

 				// console.log(arrayRadio[0])
 			}
 		})
 	}


 	function addToBlankForEach(data,exception){
 		// console.log(data[0])
		let text
		data.forEach(function(oneRadio){
			if (oneRadio.checked == true ) {
				text = oneRadio.value
			}  	
		})


 		if(text == undefined){
 			return " "

 		}else if(text == exception){
 			return " "	

 		}else{
			return text

 		}
	}


	function choiceControlMethod(method, channel){
		if (method != 'Цепь') {
			return `${method} ${channel}`
		}
	}



}




