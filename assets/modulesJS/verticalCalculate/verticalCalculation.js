
function veticalCalculation(data, idCalculate,parentSelect, objectID ) {


	    let width, height, area, productSelect, productPrice
        width = document.querySelector( idCalculate +' input#width')
        height = document.querySelector(idCalculate + ' input#height')
        area = document.querySelector( idCalculate + ' input#area')
        productSelect = document.querySelector(parentSelect)

        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ

        let cout =  document.querySelector(idCalculate+' input#count')
        let addToBlank = document.querySelector(idCalculate+ ' input#add_to_blank')
        function priceСalculation(){ 
 

          cout.addEventListener('click', function (){
                let productArea = areaCalculation()
                let price = productArea * productPrice
                document.querySelector(idCalculate+' #price').innerHTML = price

                addToBlank.style.visibility = 'visible'
            })

            addToBlank.addEventListener('click', function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, objectID[0], objectID[1])


                this.style.visibility = 'hidden'
            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                area.value = y
                return y
            }

          

        }
        priceСalculation()


		




		selectCreate(data, objectID)
        function selectCreate(data, idSelects){

        	let selectName = createSelect(objectID[0])
        	let selectColor = createSelect(objectID[1])

        

        	// вывод значений в select типов ткани
        	let firstProductName = data[0].name
        	

        	data.forEach(function(oneProduct){
        		let productName = createOption(oneProduct.name)
        		selectName.append(productName)




        		
        		if (oneProduct.name == firstProductName ) {
        			let colorCodes = oneProduct.colorСode
        			finedProductPrice(data, firstProductName, colorCodes[0])

        			console.log();
	        			colorCodes.forEach(function(oneColor,index){
		        			let productColor =	createOption(oneColor)
		        			selectColor.append(productColor)
		        		})
        		}
       			 
        	
        	})

        	// подмеа цветов в select цветов при выборе ткани
        	selectName.addEventListener('change', function(){
        		let prosuctName = this.value
        		
     

        		data.forEach(function(oneProduct){
        			if(prosuctName == oneProduct.name){
        				// Очищение select от старых цветов
        				selectColor.innerHTML = ""

        				// добавлние цветов во второй select
        				let colorCodes = oneProduct.colorСode

        				colorCodes.forEach(function(oneColor){
        					let colors = createOption(oneColor)
        					selectColor.append(colors)

        					productSelect.append(selectColor)

        				})



        				finedProductPrice(data,prosuctName, selectColor.value)


        			}
        		})
        	})


        	selectColor.addEventListener('change',function(){
        		finedProductPrice(data,selectName.value, this.value)
        	})




        	productSelect.append(selectName)
        	productSelect.append(selectColor)

        	 function createSelect(id){
	        	let select = document.createElement('select')
	        	select.id = id 

	        	return select
	        }

	        function createOption(text){
	        	let option = document.createElement('option')
	        	option.textContent = text 
	        	return option
	        }


        }

       

        // функция которая ищет в обекте нужную цену и возращает 
       	function finedProductPrice(data,checkedTypeFabric, checkedColor){
       		data.forEach(function(oneProduct){
       			if (oneProduct.name == checkedTypeFabric ) {
       				productPrice = oneProduct.price[0]
       			}
       		})
      




       	}
}

