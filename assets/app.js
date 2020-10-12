        let width, height, area, productSelect, productPrice
        width = document.querySelector('.priceСalculation input#width')
        height = document.querySelector('.priceСalculation input#height')
        area = document.querySelector('.priceСalculation input#area')
        productSelect = document.querySelector('.productSelect')

       


        let allProducts =  rollerBlinds

        let rollerBlindsCommand ="['oneProduct.name', 'oneProduct.openType.copact', 'oneProduct.openType.mini', 'oneProduct.openType.standard', 'oneProduct.openType.maximus', 'oneProduct.closedType.uniFlat', 'oneProduct.closedType.uniFullTurn']" 
        creatingGoodsTables(allProducts, 7, eval(rollerBlindsCommand))

        let commandCreate = [ 'data[0].openType.copact[2]', 'data[0].openType.mini[2]', 
                              'data[0].openType.standard[2]', 'data[0].openType.maximus[2]', 
                              'data[0].closedType.uniFlat[2]', 'data[0].closedType.uniFullTurn[2]', ]

        let commandSearch = ['oneGoods.openType.copact',
                             'oneGoods.openType.mini',
                             'oneGoods.openType.standard' ,
                             'oneGoods.openType.maximus',
                             'oneGoods.closedType.uniFlat',
                             'oneGoods.closedType.uniFullTurn',]

        oneSelect(allProducts, 'productName', 'product.name', false)
        oneSelect(allProducts, 'productType', false,  commandCreate, commandSearch)




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        //ФУНКЦИЯ ВЫЧИСЛЕНИЯ ЦЕНЫ
        function priceСalculation(){

            document.querySelector('.priceСalculation input#count').addEventListener('click', function (){
                let productArea = areaCalculation()
                let price = productArea * productPrice
                document.querySelector('#price').innerHTML = price



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



        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
           


                
        // создание тегов select с option и вывод в них информации из базы данных 
        // а также функция возвращает данные о ценнах из БД которые будут учавствовать в подсчете стоимости
        function oneSelect(data, id, oneCommand, commandCreateObject, commandSearchObject){
            //созданный выпадающий список
            let newSelect = createSelect(data, id, oneCommand, commandCreateObject)


            //нахождение цены при выборе товара и его типа
            newSelect.addEventListener('change', function(element){
                priceSearch(element,this.value  ,data, commandSearchObject)
            })
        }


        // фальшивый клик по элементу option для первого запуска всех элементо
        function fakeClick(data, id, commandCreateObject,commandSearchObject ){
            let fakeSelect = document.querySelector(id)
            fakeSelect.addEventListener('change', function(element){
                priceSearch(element,this.value  ,data, commandSearchObject)
            })

            let event = new Event('change')                
            fakeSelect.dispatchEvent(event)
        }
        

           
        //функция которая создает теги select добавляет в них деги option и все это добаляет в нужное местро в разметке
        // главное что нужно помнить так это что в функцию createOption() попадают уже готовые данные а не команды
        // функция eval() текст в команды и эти команды сразу же исполняются и отдают данные. в этом легко запутаться
        function createSelect(data, nameID, oneCommand, commandCreateObject ){
            let select = document.createElement('select')
            select.id = nameID

            if (commandCreateObject) {
                commandCreateObject.forEach(function(command){
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
        



        //функция которая выдает число(цену) при выборе одного из товаров и одной из категорий товаро
        // параметры функции: 1. весь тег select, 2. текст который в нажатом теге option, 3. весь масив информации
        //последний параметр передается чтобы сделать так чтобы функция сработала первый раз без события onchange
        let oneGoods  
        function priceSearch(select,nameOption,data,commandSearchObject) {

            if (select.target.id === 'productName') {
                data.forEach(function(product){
                    if (nameOption === product.name) {
                        oneGoods = product
                        fakeClick(data, '#productType ', commandCreate, commandSearch)

                    }                        
                })      
            }

            if(select.target.id === 'productType'){

                console.log(commandSearchObject);
                commandSearchObject.forEach(function(comm){
                    if(nameOption == eval(comm)[2]){
                        productPrice = eval(comm)[0]
                    }
                })
                               
                // if(nameOption == eval('oneGoods.openType.copact')[2]){
                //      productPrice = eval('oneGoods.openType.copact')[0]
                // }

                // if(nameOption == eval('oneGoods.openType.mini')[2]){
                //     console.log(nameOption)
                //     productPrice = eval('oneGoods.openType.mini')[0]
                // } 

                // if(nameOption == oneGoods.openType.standard[2]){
                //      productPrice = oneGoods.openType.standard[0]
                // }

                // if(nameOption == oneGoods.openType.maximus[2]){
                //      productPrice = oneGoods.openType.maximus[0]
                // }

                // if(nameOption == oneGoods.closedType.uniFlat[2]){
                //      productPrice = oneGoods.closedType.uniFlat[0]
                // }

                // if(nameOption == oneGoods.closedType.uniFullTurn[2]){
                //      productPrice = oneGoods.closedType.uniFullTurn[0]
                // }
                
                // return productPrice


            }      
        }

        fakeClick(allProducts, '#productName ' , commandCreate, commandSearch)
        fakeClick(allProducts, '#productType ' , commandCreate, commandSearch)
            
    


              
       
