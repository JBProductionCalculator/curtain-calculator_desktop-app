        let width, height, area, productSelect, productPrice
        width = document.querySelector('.priceСalculation input#width')
        height = document.querySelector('.priceСalculation input#height')
        area = document.querySelector('.priceСalculation input#area')
        productSelect = document.querySelector('.productSelect')

       




        let horizontalBlindsCommand ="['oneProduct.name', 'oneProduct.openType.copact', 'oneProduct.openType.mini', 'oneProduct.openType.standard', 'oneProduct.openType.maximus', 'oneProduct.closedType.uniFlat', 'oneProduct.closedType.uniFullTurn']" 
        creatingGoodsTables(horizontalBlinds, 7, eval(horizontalBlindsCommand))



        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
            //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
            function priceСalculation(){

                document.querySelector('.priceСalculation input#count').addEventListener('click', function (){
                    let productArea = areaCalculation()
                    let price = productArea * productPrice
                    document.querySelector('#price').innerHTML = price

                    // console.log(productArea)
                    // console.log(productPrice)

                })



                // функция которая вычесляет площадь
                function areaCalculation(){
                    let x = (width.value / 1000) * (height.value / 1000)
                    let y = Math.round((x) * 100) / 100 
                    // console.log( x * 100 / 100  )
                    area.value = y
                    return y
                }

              

            }
            priceСalculation()



        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
            // создание тегов select с option и вывод в них информации из базы данных 
            // а также функция возвращает данные о ценнах из БД которые будут учавствовать в подсчете стоимости
            let allProducts = horizontalBlinds
            oneSelect(allProducts, 'productName', 'product.name', false)
            oneSelect(allProducts, 'productType', false, ['data[0].openType.copact[2]', 
                                                          'data[0].openType.mini[2]', 
                                                          'data[0].openType.standard[2]', 
                                                          'data[0].openType.maximus[2]', 
                                                          'data[0].closedType.uniFlat[2]',
                                                          'data[0].closedType.uniFullTurn[2]', ] )


                





            function oneSelect(data, id, oneCommand, commandObject){
                //созданный выпадающий список
                let newSelect = createSelect(data, id, oneCommand, commandObject)


                //нахождение цены при выборе товара и его типа
                newSelect.addEventListener('change', function(element){
                    priceSearch(element,this.value  ,data)
                })
            }


            // фальшивый клик по элементу option для первого запуска всех элементо
            function fakeClick(data){
                let fakeSelect = document.querySelector('#productName ')
                fakeSelect.addEventListener('change', function(element){
                    priceSearch(element,this.value  ,data)
                })

                let event = new Event('change')                
                fakeSelect.dispatchEvent(event)
            }
            
            


            //функция которая выдает число(цену) при выборе одного из товаров и одной из категорий товаро
            // параметры функции: 1. весь тег select, 2. текст который в нажатом теге option, 3. весь масив информации
            //последний параметр передается чтобы сделать так чтобы функция сработала первый раз без события onchange
            let oneGoods  
            function priceSearch(select,nameOption,data) {

                if (select.target.id === 'productName') {
                    data.forEach(function(product){
                        if (nameOption === product.name) {
                            // console.log(product)
                            oneGoods = product
                            console.log(oneGoods)
                        }                        
                    })      
                }

                if(select.target.id === 'productType'){
                    // console.log(oneGoods.openType.copact[2])
                    console.log(oneGoods)
                    console.log(nameOption)
                    // console.log(oneGoods.closedType.uniFlat[2])

                   
                    if(nameOption == oneGoods.openType.copact[2]){
                        console.log(oneGoods.openType.copact[0])
                         productPrice = oneGoods.openType.copact[0]
                    }

                    if(nameOption == oneGoods.openType.mini[2]){
                        console.log(oneGoods.openType.mini[0])
                         productPrice = oneGoods.openType.mini[0]
                    } 

                    if(nameOption == oneGoods.openType.standard[2]){
                        console.log(oneGoods.openType.standard[0])
                         productPrice = oneGoods.openType.standard[0]
                    }

                    if(nameOption == oneGoods.openType.maximus[2]){
                        console.log(oneGoods.openType.maximus[0])
                         productPrice = oneGoods.openType.maximus[0]
                    }

                    if(nameOption == oneGoods.closedType.uniFlat[2]){
                        console.log(oneGoods.closedType.uniFlat[0])
                         productPrice = oneGoods.closedType.uniFlat[0]
                    }

                    if(nameOption == oneGoods.closedType.uniFullTurn[2]){
                        console.log(oneGoods.closedType.uniFullTurn[0])
                         productPrice = oneGoods.closedType.uniFullTurn[0]
                    }
                    
                    // return productPrice


                }      
            }

            fakeClick(allProducts)
                
            
               
            
               
            //функция которая создает теги select добавляет в них деги option и все это добаляет в нужное местро в разметке
            // главное что нужно помнить так это что в функцию createOption() попадают уже готовые данные а не команды
            // функция eval() текст в команды и эти команды сразу же исполняются и отдают данные. в этом легко запутаться
            function createSelect(data, nameID, oneCommand, commandObject ){
                let select = document.createElement('select')
                select.id = nameID

                if (commandObject) {
                    commandObject.forEach(function(command){
                        // console.log(eval(command))
                        let option = createOption(eval(command))
                        select.append(option)
                        productSelect.append(select)

                    })
                    
                }else{
                    data.forEach(function(product){
                        let option = createOption(eval(oneCommand))
                        select.append(option)
                        productSelect.append(select) 
                    })
                }                  

                return select
            }


            function createOption(name){
                let op = document.createElement('option')
                op.innerHTML = name
                return op
            }
            
        


              
       
