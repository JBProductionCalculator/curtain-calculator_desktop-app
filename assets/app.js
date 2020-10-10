
          // ,Object.keys(oneProduct) - список ключей обЪекта





            let horizontalBlindsCommand ="['oneProduct.name', 'oneProduct.standard.s25mm','oneProduct.standard.s16mm', 'oneProduct.venus.v25mm.standard', 'oneProduct.venus.v25mm.fullDimmer', 'oneProduct.venus.v16mm']" 
            priceTableVisualization(horizontalBlinds, 6, eval(horizontalBlindsCommand))



            // ФУНКЦИЯ КОТОРАЯ ПОЛУЧЕТ ДАННЫЕ И КОМАНДЫ , И ПОСЛЕ СОЗДАЕТ ТАБЛИЦУ ПРАЙСА ТОВАРОВ
            function priceTableVisualization(data,amountElements, parameters){
                let allProducts =  data
                
                allProducts.forEach(function(oneProduct){
                    creatLibs(oneProduct, amountElements, parameters)   
                })
            }
 

               // создание ряда с ценами ОДНОГО ТОВАРАааа
                function creatLibs(oneProduct, amountElements, parr){
                    let ul = document.createElement('ul')
                    ul.classList.add('one-item')

                    let li = createLi(oneProduct, amountElements,parr)
                    li.forEach(function(elem){
                        ul.append(elem)
                     })

                    document.body.append(ul)
                }

                // создание каждой отдельной колонки с ценой в ряду с ценами
                function createLi(oneProduct, amountElements, parr){
                    let items = [] 

                    for(let i = 0; i < amountElements;i++){
                        items.push(document.createElement('li'))

                        if(parr[i] === undefined){
                            items[i].innerHTML = ""
                        }
                        else{
                          // items[i].innerHTML = parr[i]
                          items[i].innerHTML = eval(parr[i])
                        }

                    } 

                    return items               
                }


              
       
