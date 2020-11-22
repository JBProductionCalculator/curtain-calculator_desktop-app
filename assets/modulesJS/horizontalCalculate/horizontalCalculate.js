function horizontalCalculate(data, parentSection, productSelectID, commands ){
        //переменные размера
        let width, height, area,productSelect 
        width = document.querySelector( parentSection +" input#width")
        height = document.querySelector(parentSection + " input#height")
        area = document.querySelector( parentSection + " input#area")

        //элементы которые будут влиять на цену и будут применяться ко всем колонкам
        let exchangeRates, selectMarkup 
        exchangeRates = document.querySelector( parentSection + " input#exchangeRates")
        selectMarkup = document.querySelector(parentSection + ' .selectMarkup')

        // все элементы которые будут участвовать в изменение цены но будут применятся не ко всем колонкам
        let colorSystem,controlType, fixationSystem,sizeSystem,chainLoad, chainFixing,chainFixingUniversal,boxControlMethod,additionalScotchTapeInputs, plasticRetainer,guideString
        // radio элементы
        colorSystem = document.querySelectorAll(parentSection + " input[name='colorSystem']")
        controlType = document.querySelectorAll(parentSection + " input[name='controlType']")
        fixationSystem = document.querySelectorAll(parentSection + " input[name='fixationSystem']")
        sizeSystem = document.querySelectorAll(parentSection + " input[name='sizeSystem']")
        chainLoad = document.querySelectorAll(parentSection + " input[name='chainLoad']")
        chainFixing = document.querySelectorAll(parentSection + " input[name='chainFixing']")
        chainFixingUniversal = document.querySelectorAll(parentSection + " input[name='chainFixingUniversal']")
        additionalScotchTapeInputs = document.querySelectorAll(parentSection + " input[name='additionalScotchTape']")
        plasticRetainer = document.querySelectorAll(parentSection + " input[name='plasticRetainer']")
        guideString = document.querySelectorAll(parentSection + " input[name='guideString']")




        // select элемент с двойным выбором
        boxControlMethod = document.querySelector(parentSection + " .boxControlMethod")

        productSelect = document.querySelector(parentSection + " .productSelect")
    

        // переменные с селектами выбора товара . под них подвязано много функций
        let selectColor , selectType


        //переменные для работы с ценами
        let productPrice
        let allPricesAdditionalConfiguration
                 // priceColorSystem = 0


         // кнопики подчета и добавления
        let cout =  document.querySelector(parentSection+" input#count")
        let addToBlank = document.querySelector(parentSection+ " input#add_to_blank")


        callingMainFunctionCalculator()
        function callingMainFunctionCalculator(){

            createProductSelectOperations()

            searchPrice(selectColor.value, selectType.value)

            findPriceOnClick(selectColor,selectType)

            calculatorAdditionalConfiguration(selectType.value)

            priceСalculation()

            currencyConverter(parentSection)
        }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){ 
    
            cout.addEventListener("click", function (){
                calculatorAdditionalConfiguration(selectType.value)

                let productArea = areaCalculation()

                let priceGuideString = selectedGuideString(productArea,guideString, parentSection)


                let price
                price = productArea * productPrice + allPricesAdditionalConfiguration + priceGuideString

                // наценка
                price = productMarkup(price, selectMarkup.value)

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

                // if(y < 0.7){
                    // y = 0.7                    
                    // area.value = y
                    // return y
                // }else{
                    area.value = y
                    return y   
                // }


               
            }

        }
 

      
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------

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

                   calculatorAdditionalConfiguration(clickType.value)

                    // console.log(allPricesAdditionalConfiguration)

                    data.forEach(function(product){
                        if(product.name ==  color.value){

                            commands.forEach(function(command){
                                let newCommand = eval('product.'+command)
                                if (newCommand[2] == type.value) {
                                    productPrice = newCommand[0]
                                }

                            })
                        }
                    })

                })
            }
            

        }

// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------
  

       //  функция в которой будут происходить все операции над выбраними типами товаров. внутрение функции находятся в файле addPriceFunctions.js
        function calculatorAdditionalConfiguration(type){

            // console.log(parentSection)
        
            let pricePlasticRetainer

            pricePlasticRetainer = selectedPlasticRetainer(plasticRetainer,parentSection )
    

            allPricesAdditionalConfiguration =  pricePlasticRetainer


            return allPricesAdditionalConfiguration


        }




}
        
            
    


              
       
