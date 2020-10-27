let orderBlank = []




function creatingOrgerBlank(oneRow) {

	orderBlank.push(oneRow)

	console.log(orderBlank);

	let curtainsBlank = []
	let verticalBlank = []
	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []


	creationOneBlank(orderBlank)
	addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download")
	addToHTMLBlankInform(verticalBlank, "#verticalBlank", "#verticalBlank_download")
	addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download")
	addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download")
	addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#mosquitoNetBlank_download")


	// addToHTMLBlankInform(verticalBlank, "#blank-vertical")



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
					// recurringProducts(curtainsBlank)
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
	}		
}




function addToHTMLBlankInform(data,id,idButton){


	addButtonAmoutProduct(data, idButton)

	let blank = document.querySelector(id+" #all-product tbody")
	let allCells = {
		'count_blank':  ['count_blank',20 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
		'system_and_color':  ['system_and_color',188 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'width' : ['width',60 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'height' : ['height',60, 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'control_type' : ['control_type',50 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'amount' : ['amount',50 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'fixation_system': ['fixation_system',60, 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
        'notes' : ['notes',100 , 'padding: 5px 10px;boc-sizing:border-box;font-size: 11px;border:1px solid black; margin: 0;font-weight: 900;'],
	}

	
 
	blank.querySelectorAll('tr').forEach(function(tr,index){
		if (index == 0 	) {
		
		}else{
			tr.remove()
		}
	})
    


	data.forEach(function(product,index){
		let tr = document.createElement('tr')
		
		for(let key in allCells){
			let td = document.createElement('td')
			td.id = allCells[key][0]
			td.width = allCells[key][1]
			td.style.cssText =  allCells[key][2]
			tr.append(td)					
		}

		tr.querySelector('#count_blank').textContent = index+1
		tr.querySelector('#system_and_color').textContent = product.systemAndColor
		tr.querySelector('#width').textContent = product.width
		tr.querySelector('#height').textContent = product.height
		tr.querySelector('#control_type').textContent = product.controlType
		tr.querySelector('#amount').textContent = index
		tr.querySelector('#fixation_system').textContent = product.fixationSystem
		tr.querySelector('#notes').innerHTML = '&#160;'


		blank.append(tr)
	})
}

function addButtonAmoutProduct(data,idButton){
	data.forEach(function(one,index){
		console.log(document.querySelector(idButton+' .amount_goods'))
		console.log(index)
		document.querySelector(idButton+' .amount_goods').textContent = index+1
		// console.log(one)
	})
	// console.log(idButton)	
}

// экспорт html в doc
function exportHTML(id){
	console.log(id)

   const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
   const footer = "</body></html>";
   const sourceHTML = header+document.getElementById(id).innerHTML+footer;
   
   const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
   const fileDownload = document.createElement("a");
   document.body.appendChild(fileDownload);
   fileDownload.href = source;
   fileDownload.download = 'document.doc';
   fileDownload.click();
   document.body.removeChild(fileDownload);
}


