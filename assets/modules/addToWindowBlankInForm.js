//функция вызывается в файле creatingOrderBlank.js/ в ней прописан функционал для добавления новых товаров в бланк под каждой таблицей
function addToWindowBlankInForm(products, idTables, idAddBlank ,arrayParam) {


	let buttonAddToBlank = document.querySelector(idTables+" #add_to_blank")
	let screnBlank = document.querySelector(idAddBlank)
	
	let numberRepeatingProduct

	let resultRepeatElement = {};
	deleteRepeatingElement(products)


	let allProduct = screnBlank.querySelectorAll('ul')
	allProduct.forEach(function(prod,index){
		if (index != 0) {
			prod.remove()
		}
	})


	products.forEach(function(prod,index){
		if(prod.idParent == buttonAddToBlank.dataset.addtowindowblank){

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



	function createWindowBlank(product, countProduct, repeatObject){
		
		let ul = document.createElement('ul')


		let num = createWindowElement('li','number_of_blanks', countProduct+1)
		let systemAndColor = createWindowElement('li', 'system_and_color', product.systemAndColor)
		let width =	createWindowElement('li', 'width',  product.width)	
		let height = createWindowElement('li', 'height',product.height )
		let quantity = createWindowElement('li', 'quantity')
		let control = createWindowElement('li', 'control' ,product.controlType )
		let fixationSystem = createWindowElement('li', 'fastening', product.fixationSystem)
		let buttonDelete =  createWindowElement('div', 'delenteElement')

		ul.append(num)
		ul.append(systemAndColor)
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


}




