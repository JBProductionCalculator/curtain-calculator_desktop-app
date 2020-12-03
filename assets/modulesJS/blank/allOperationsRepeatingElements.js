
function allOperationsRepeatingElements(arrayProducts){
	addClassIdenticalElements(arrayProducts)
	addCountRepeatingElement(arrayProducts)	

	let newArray
	newArray = deleteRepeatingElement(arrayProducts)

	return newArray
}


//Функция которая дает одинаковые классы повторяющимся элементам
function addClassIdenticalElements(data){

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

						
						
						// data.splice(x, x)
							
				}
			}
		}
	}
}	



// добавление количества к повторяющимся элементам
function addCountRepeatingElement(allProduct){
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

	// вторая часть уравнения
	arr.forEach(function(product){
		for(repetProduct in result){
			if (product.arrayElementClass == repetProduct ) {
				product.numberRepetitons = result[repetProduct]
			}
		}
	})

	deleteRepeatingElement(arr)
}


// удаление повторяющихся элементов
function deleteRepeatingElement(allProducts){
	

	allProducts = allProducts.filter((thing, index, self) =>
	  index === self.findIndex((t) => (
	    t.arrayElementClass === thing.arrayElementClass 
	  ))
	)



	return allProducts 
		

}	


