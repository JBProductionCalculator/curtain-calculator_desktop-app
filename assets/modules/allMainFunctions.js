

function allMainFunction(data, selectsCreateCommands, selectsSearchCommands, objectID, idCalculate, parentSelect){
 
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

                // console.log(parentBlock, objectID[0], objectID[1])
                addToBlankFun(parentBlock, objectID[0], objectID[1])

                // showBlank()

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




            oneSelect(data, objectID[0], 'product.name', false, false )
            oneSelect(data, objectID[1], false,  selectsCreateCommands, selectsSearchCommands)

            // console.log(objectID)


            setTimeout(function(){
                 callFakeClicks(data, selectsCreateCommands, selectsSearchCommands)
             } , 0)
        // }




        // -------------------------------------------------------------------------
        // -------------------------------------------------------------------------
        

    // function allMainFunction(){

        // создание тегов select с option и вывод в них информации из базы данных 
        // а также функция возвращает данные о ценнах из БД которые будут учавствовать в подсчете стоимости
        function oneSelect(data, id, oneCommand, commandCreateObject, commandSearchObject){
            //созданный выпадающий список
            let newSelect = createSelect(data, id, oneCommand, commandCreateObject)


            //нахождение цены при выборе товара и его типа
            newSelect.addEventListener('change', function(element){
                priceSearch(element,this.value  ,data, commandSearchObject)
                addToBlank.style.visibility = 'hidden'
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

                if (select.target.id === objectID[0]) {
                data.forEach(function(product){
                    if (nameOption === product.name) {
                        oneGoods = product
                        fakeClick(data, '#'+objectID[1], commandSearchObject , [] )

                    }                        
                })      
            }

            if(select.target.id === objectID[1]){
                commandSearchObject.forEach(function(comm){
                    if(nameOption == eval(comm)[2]){
                        productPrice = eval(comm)[0]                        
                    }
                })
                            
            }   
            




        }


        function callFakeClicks(data, commandCreateObject, commandSearchObject){
            fakeClick(data, '#'+objectID[0] , commandCreateObject, commandSearchObject)
            fakeClick(data, '#'+objectID[1] , commandCreateObject, commandSearchObject)
        }


}
        
            
    


              
       
