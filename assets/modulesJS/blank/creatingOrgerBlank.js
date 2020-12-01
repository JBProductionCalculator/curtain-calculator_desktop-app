let orderBlank = []




function creatingOrgerBlank(oneRow, arrayParam) {

	// console.log(orderBlank)


	orderBlank.push(oneRow)


	// console.log(orderBlank);



	let curtainsBlank = []
	let newVerticalBlank = []

	// console.log(curtainsBlank	)

	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []


	creationOneBlank(orderBlank)

	recurringProducts(curtainsBlank)

	deleteRepeatingElement(curtainsBlank)


	// addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download")
	// addToHTMLBlankInform(newVerticalBlank, "#nweVerticalBlank", "#newVerticalBlank_download")
	// addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download")
	// addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download")
	// addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#horizontalStandardBlank_download")


	//функци добавления информации в doc бланки и бланки которые на экране
	// addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download")
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains", "#screen_blanks_roller_curtains", arrayParam ,"#curtainsBlank_download")
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains_day_night", "#screen_blanks_day_night" ,arrayParam ,"#curtainsBlank_download" )
	addToWindowBlankInForm(curtainsBlank,"#roller_curtains_ready", "#screen_blanks_rolle_ready", arrayParam  ,"#curtainsBlank_download")



	// новые вертекальные бланки
	// addToHTMLBlankInform(newVerticalBlank, "#nweVerticalBlank", "#newVerticalBlank_download")
	addToWindowBlankInForm(newVerticalBlank, "#new_vertical_89mm", "#secreen_new_vertical_89mm", arrayParam ,"#newVerticalBlank_download")
	addToWindowBlankInForm(newVerticalBlank, "#new_vertical_127mm", "#secreen_new_vertical_127mm",arrayParam , "#newVerticalBlank_download")




	// addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download")
	addToWindowBlankInForm(horizontalVenusBlank,"#horizontal_louver_venus", "#screen_horizontal_louver_venus",arrayParam , "#horizontalVenusBlank_download")

	// addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download")
	addToWindowBlankInForm(horizontalStandardBlank, "#horizontal_louver_standard", "#screen_horizontal_louver_standard",arrayParam , "#horizontalStandardBlank_download")


	// addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#mosquitoNetBlank_download")
	addToWindowBlankInForm(mosquitoNetBlank, "#mosquito_net", "#secreen_mosquito_net", arrayParam , "#mosquitoNetBlank_download")





// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			data.forEach(function(oneProduct){

			if(oneProduct.idParent === "roller_curtains" ||
			 	oneProduct.idParent === "roller_curtains_day_night" || 
			 	 oneProduct.idParent === "roller_curtains_ready" ){
					

					curtainsBlank.push(oneProduct)

			}

			if(oneProduct.idParent === "new_vertical_89mm" || oneProduct.idParent === "new_vertical_127mm" ){
				newVerticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_venus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_standard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "mosquito_net" ) {
				mosquitoNetBlank.push(oneProduct)
			}

		}) 
	}




	
//Функция которая дает одинаковые классы повторяющимся элементам
	function recurringProducts(data) {
		// console.log(data)
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

								let repeatingElementClass =  `${data[i].systemAndColor} ${data[i].idParent} ${data[i].width} ${data[i].height} ${data[i].controlType} ${data[i].fixationSystem}`
								data[i].arrayElementClass = repeatingElementClass

								// deleteRepeatingElement(data, data[i], repeatingElementClass)
								
								
								// data.splice(x, x)
									
						}
					}
				}
			}
		}		
	}		
}


// удаление повторяющихся элементов и возвращает количетво
function deleteRepeatingElement(allProduct){
	var arr = allProduct

	var result = {};
	for (var i = 0; i < allProduct.length; ++i)
	{
	    var a = arr[i].arrayElementClass;
	    // console.log(a)
	    if (result[a] != undefined)
	        ++result[a];
	    else
	        result[a] = 1;
	}

	// console.log(result)

}




function addToHTMLBlankInform(data,id,idButton){

	// addButtonAmoutProduct(data, idButton)

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


	// let dd = document.querySelector('#roller_curtains')
	// console.log(dd)
    


	data.forEach(function(product,index){
		let tr = document.createElement('tr')
		
		for(let key in allCells){
			let td = document.createElement('td')
			td.id = allCells[key][0]
			td.width = allCells[key][1]
			td.style.cssText =  allCells[key][2]
			tr.append(td)					
		}
		

		// let maiConfiguration 			

		if (product.idParent == 'new_vertical_89mm') {
			tr.querySelector('#system_and_color').textContent =  `${89} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`
		}
		else if(product.idParent == "new_vertical_127mm"){ 
			tr.querySelector('#system_and_color').textContent =  `${127} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.productSystem)}  ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)}`
		}
		else {
			tr.querySelector('#system_and_color').textContent =  `${excludeUndefined(product.productSystem)} ${excludeUndefined(product.productColor)} ${excludeUndefined(product.colorSystem)} ${excludeUndefined(product.sizeSystem)} ${excludeUndefined(product.chainLoad)} ${excludeUndefined(product.chainFixing)} ${excludeUndefined(product.chainFixingUniversal)} ${excludeUndefined(product.additionalScotchTape)} ${excludeUndefined(product.plasticRetainer)} ${excludeUndefined(product.guideString)} ${excludeUndefined(product.fasteningSelected)} ${excludeUndefined(product.controlMethod)}`
		}

			
		tr.querySelector('#count_blank').textContent = index+1
		tr.querySelector('#width').textContent = product.width
		tr.querySelector('#height').textContent = product.height
		tr.querySelector('#control_type').textContent = product.controlType
		// tr.querySelector('#amount').textContent = index
		tr.querySelector('#fixation_system').textContent = product.fixationSystem
		tr.querySelector('#notes').innerHTML = '&#160;'

		
		// tr.dataset.productNumber = allAddedProduct
		// console.log(tr)

		blank.append(tr)
	})
}






function newDownloadDocBlank(data){
	let curtainsBlank = []
	let newVerticalBlank = []
	

	let horizontalVenusBlank = []
	let horizontalStandardBlank = []
	let mosquitoNetBlank = []



	creationOneBlank(orderBlank)




	addToHTMLBlankInform(curtainsBlank, "#curtainsBlank", "#curtainsBlank_download")
	addToHTMLBlankInform(newVerticalBlank, "#nweVerticalBlank", "#newVerticalBlank_download")
	addToHTMLBlankInform(horizontalVenusBlank, "#horizontalVenusBlank", "#horizontalVenusBlank_download")
	addToHTMLBlankInform(horizontalStandardBlank, "#horizontalStandardBlank", "#horizontalStandardBlank_download")
	addToHTMLBlankInform(mosquitoNetBlank, "#mosquitoNetBlank", "#mosquitoNetBlank_download")



	// Функция разделяющая вары из разных таблиц по ужным бланкам.
	function creationOneBlank(data){
			data.forEach(function(oneProduct){

			if(oneProduct.idParent === "roller_curtains" ||
			 	oneProduct.idParent === "roller_curtains_day_night" || 
			 	 oneProduct.idParent === "roller_curtains_ready" ){
					

					curtainsBlank.push(oneProduct)

			}

			if(oneProduct.idParent === "new_vertical_89mm" || oneProduct.idParent === "new_vertical_127mm" ){
				newVerticalBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_venus" ) {
				horizontalVenusBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "horizontal_louver_standard" ) {
				horizontalStandardBlank.push(oneProduct)
			}

			if (oneProduct.idParent === "mosquito_net" ) {
				mosquitoNetBlank.push(oneProduct)
			}

		}) 
	}

}

// экспорт html в doc
function exportHTML(id){
	// addToBlankFun(arrayParam[0],arrayParam[1],arrayParam[2])

	newDownloadDocBlank(orderBlank)

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




//дополнительная функция
function excludeUndefined(text){
	if (text != undefined) {
		return text
	}else{
		return ' '
	}
}



