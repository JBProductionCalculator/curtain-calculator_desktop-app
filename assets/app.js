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

                    let selectProduct = createSelect(data, 'productName', 'product.name')
                    selectProduct.addEventListener('change', function(){
                        console.log(this.value)
                    })

                  
                }



                function createSelect(data,nameID,command){
                    let select = document.createElement('select')
                    select.id = nameID

                    data.forEach(function(product){
                      let option = createOption(eval(command))
                      select.append(option)
                      productSelect.append(select) 
                    })

                    return select
                }



                function createOption(name){
                    let op = document.createElement('option')
                    op.innerHTML = name
                    return op
                }
            
            }


              
       
