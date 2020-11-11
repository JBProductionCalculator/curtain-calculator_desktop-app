function rollerCurtainsCalculate(data, parentSection, productSelectID, commands ){

        let width, height, area, exchangeRates, selectMarkup ,productSelect
        let productPrice

        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')
        productSelect = document.querySelector(parentSection + " .productSelect")

        // radio элементы
        let colorSystem, fixationSystem, controlType
        colorSystem = document.querySelector(parentSection + " input[name='colorSystem']")
        fixationSystem = document.querySelector(parentSection + " input[name='fixationSystem']")
        controlType = document.querySelector(parentSection + " input[name='controlType']")

        // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")

        // console.log(selectOperations);

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType

        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorButtonOutputOperation(selectColor,selectType)


            priceСalculation()
        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
 
          cout.addEventListener("click", function (){
                let productArea = areaCalculation()
            // selectProductOperations(data,productSelectID,commands)
                let price = productArea * productPrice
                document.querySelector(parentSection+" #price").innerHTML = price

                addToBlank.style.visibility = "visible"
            })

            addToBlank.addEventListener("click", function(){
                let parentBlock = this.parentNode.parentNode

                addToBlankFun(parentBlock, productSelectID[0], productSelectID[1])

                this.style.visibility = "hidden"
            })



            // функция которая вычесляет площадь
            function areaCalculation(){
                let x = (width.value / 1000) * (height.value / 1000)
                let y = Math.round((x) * 100) / 100

                area.value = y
                return y
            }

        }
 

      
 

        // Создани slect типа и цвета товаров и их вывод на экран. функция отдает цену на продукт
        function createProductSelectOperations(){
            selectColor = createSelect('color')
            selectType = createSelect('type')

            productSelect.append(selectColor)
            productSelect.append(selectType)

            function createSelect(colorOrType){
                let select = document.createElement('select')

                if(colorOrType == 'color'){
                    data.forEach(function(product){
                       let option = createOption(product.name)
                       select.append(option)
                    })

                    select.id = productSelectID[0]
                }

                if(colorOrType == 'type'){
                    commands.forEach(function(command){
                        if (command != 'name') {
                            let converterCommand = 'data[0].'+command+'[2]'
                            let option = createOption(eval(converterCommand))
                            select.append(option)
                        }
                    })                   

                    select.id = productSelectID[1]
                }

                function createOption(text){
                    let option = document.createElement('option')
                    option.innerHTML = text
                    
                    return option
                }

                return select
            }



        }



        // поиск цены товара. функция принимает в параметры значения выбранных option. функция отдает цену на продукт
        function searchPrice(color,type){
            data.forEach(function(product){
                if (product.name == color) {

                   commands.forEach(function(command){
                        if (command != "name") {
                            let newCommand = eval('product.'+command)
                         
                            if(type == newCommand[2]){
                                productPrice = newCommand[0]

                            }

                        }
                        
                   })
                }
            })

        }

        // поиск нужной цены при выборе другого цвета или типа . функция отдает цену на продукт
        function findPriceOnClick(color,type){
            
            color.addEventListener('change', function(){

                data.forEach(function(product){
                    if(product.name ==  color.value){

                        commands.forEach(function(command){
                            let newCommand = eval('product.'+command)
                            if (newCommand[2] == type.value) {
                                productPrice = newCommand[0]
                                console.log( productPrice);
                            }

                        })
                    }
                })

                findType(type)
                
            })

            findType(type)

            function findType(clickType){
                clickType.addEventListener('change', function(){
                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                    console.log( productPrice);
                                }

                            })
                        }
                    })

                })
            }
            

        }




       //  функция в которой будут происходить все операции над выбраними типами товаров
        function calculatorButtonOutputOperation(color, type){
            console.log(color);
            console.log(type);
        }





     




}
        
            
    


              
       
