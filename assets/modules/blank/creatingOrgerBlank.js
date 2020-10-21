let orderBlank = []

function creatingOrgerBlank(oneRow) {

	orderBlank.push(oneRow)

	console.log(orderBlank);

	let curtainsBlank = []
	let verticalBlank = []
	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []

	console.log(curtainsBlank)





	
	creationOneBlank(orderBlank)



// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			// let allRepeating = {'bolt' : 1}

			data.forEach(function(oneProduct){
			// console.log(oneProduct.idParent)
			if(oneProduct.idParent === "priceСalculation" ||
			 	oneProduct.idParent === "priceСalculationDayNight" || 
			 	 oneProduct.idParent === "priceСalculationReady" ){
					
					curtainsBlank.push(oneProduct)

					// curtainsBlank[oneProduct.idParent] = oneProduct
					recurringProducts(curtainsBlank)
			}

			if(oneProduct.idParent === "priceСalculationVerticalHouver89mm" || oneProduct.idParent === "priceСalculationVerticalHouver127mm"){
				verticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "priceСalculationHorizontalLouverVenus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "priceСalculationHorizontalLouverStandard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "priceСalculationMosquitoNet" ) {
				mosquitoNetBlank.push(oneProduct)
			}

		}) 
	}




	
//Функция которая вычесляет количество повторяющихся элементов в одном бланке ,оставляет тольк один а вместо этого отдает их количеств
	function recurringProducts(data) {

		addClassIdenticalElements()

		// removeIdenticalElements()

		function addClassIdenticalElements(){

			for(let i = 0; i < data.length;i++){

				for(let x = 0; x < data.length;x++ ){
					if (i == x) {

					}else{
						if(data[i].idParent == data[x].idParent &&
							data[i].systemAndColor == data[x].systemAndColor && 
							 data[i].width == data[x].width && 
							  data[i].height == data[x].height &&
							   data[i].controlType == data[x].controlType &&
							    data[i].fixationSystem == data[x].fixationSystem ){

								data[i].arrayElementClass =  `${data[i].systemAndColor} ${data[i].idParent} ${data[i].width} ${data[i].height} ${data[i].controlType} ${data[i].fixationSystem}`
								
								// data.splice(x, x)
									
						}
					}
				}
			}

		}


			



		// function removeIdenticalElements(){
		// 	let ooo = []
		// 	for(let h = 0; h < data.length; h++){
		// 		// data[h].arrayElementClass
		// 		for(let z = 0; z < data.length; z++){
		// 			if (h == z) {
		// 			}else{
		// 				if (data[h].arrayElementClass == data[z].arrayElementClass ) {
		// 					ooo.push(data[h].arrayElementClass)
		// 					console.log(data[h].arrayElementClass)
		// 				}
		// 			}


		// 		}
		// 		// for(let key in data[h]){
		// 		// 	console.log(key)
		// 		// }
		// 	}

		// 	console.log(ooo)


		// }
		

	}

}