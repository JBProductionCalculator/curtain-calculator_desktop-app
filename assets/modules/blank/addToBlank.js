function addToBlankFun(parentBlock, selectOne, selectTwo ) {

	// console.log(parentBlock);

	// let price = parentBlock.querySelector("#price").textContent
	let idParent = parentBlock.id
    let productSystem = parentBlock.querySelector('#'+selectTwo).value
    let productColor = parentBlock.querySelector('#'+selectOne).value
 	let color =  parentBlock.querySelectorAll("input[name='color']")
 	let fixationSystem = parentBlock.querySelectorAll("input[name='fixationSystem']")
 	let controlType = parentBlock.querySelectorAll("input[name='controlType']")
 	let widht = parentBlock.querySelector("#width").value
 	let height = parentBlock.querySelector("#height").value


 	// console.log(productSystem);
 	let oneItem
 	if (productSystem == "MAXIMUS") {
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} Бел.`,
	 		"color" : productColor,
	 		"width" : widht,
	 		"height" : height,
	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem),
 		}
 	}else{
 		oneItem = {
	 		"idParent" : idParent,
	 		"systemAndColor" : `${productSystem} ${productColor} ${addToBlankForEach(color)}`,
	 		"color" : productColor,
	 		"width" : widht,
	 		"height" : height,
	 		"controlType" :  addToBlankForEach(controlType),
	 		"fixationSystem" : addToBlankForEach(fixationSystem),
 		}

 	}



 	// console.log(oneItem);
 	creatingOrgerBlank(oneItem)


 	function addToBlankForEach(data){

		let text
		data.forEach(function(oneRadio){
			if (oneRadio.checked == true) {
				text = oneRadio.value
			}  	
		})
 		

		return text

	}

}




