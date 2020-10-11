        let width, height, area, productSelect
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
                    console.log(productArea);

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
         // вывод информации в Select с названиями товаров и типами
            selections(horizontalBlinds)

            function selections(data){
                let allProducts = data

                createProductSelection(allProducts)
                function createProductSelection(data){

                    let selectProduct = createSelect(data, 'productName', 'product.name', false)
                    selectProduct.addEventListener('change', function(){
                        console.log(this.value)
                    })

                    // здесь я создаю select Для типов товаров и данные которые я передаю в масиве храняться тольк в первом элементе обьекта
                    // любой таблицы которую я бы не передава. это все делаетсься для того чтобы после можно было легко создать админку
                    let selectType = createSelect(data, 'productType', '', ['data[0].openType.copact[2]', 
                                                                            'data[0].openType.mini[2]', 
                                                                            'data[0].openType.standard[2]', 
                                                                            'data[0].openType.maximus[2]', 
                                                                            'data[0].closedType.uniFlat[2]',
                                                                            'data[0].closedType.uniFullTurn[2]' ] )                  
                }


                //функция которая создает теги select добавляет в них деги option и все это добаляет в нужное местро в разметке
                // главное что нужно помнить так это что в функцию createOption() попадают уже готовые данные а не команды
                // функция eval() текст в команды и эти команды сразу же исполняются и отдают данные. в этом легко запутаться

                function createSelect(data, nameID, commandOne, commandsTwo ){
                    let select = document.createElement('select')
                    select.id = nameID

                    if (commandsTwo) {
                        commandsTwo.forEach(function(command){
                            console.log(eval(command))
                            let option = createOption(eval(command))
                            select.append(option)
                            productSelect.append(select)

                        })
                        
                    }else{
                        data.forEach(function(product){
                            let option = createOption(eval(commandOne))
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
            
            }


              
       
