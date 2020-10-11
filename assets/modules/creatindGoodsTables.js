    


  // ФУНКЦИЯ КОТОРАЯ ПОЛУЧЕТ ДАННЫЕ И КОМАНДЫ , И ПОСЛЕ СОЗДАЕТ ТАБЛИЦУ ПРАЙСА ТОВАРОВ
    function creatingGoodsTables(data,amountElements, parameters){
        let allProducts =  data
        
        allProducts.forEach(function(oneProduct){
            creatLibs(oneProduct, amountElements, parameters)   
        })
    }

    // создание ряда с ценами ОДНОГО ТОВАРАааа
    function creatLibs(oneProduct, amountElements, parr){
        let ul = document.createElement('ul')
        ul.classList.add('one-row')
        ul.classList.add('create-row')

        let li = createLi(oneProduct, amountElements,parr)
        li.forEach(function(elem){
            ul.append(elem)
         })

        document.querySelector('.curtain_prices').append(ul)
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
              if( Array.isArray(eval(parr[i]))){
                items[i].innerHTML = eval(parr[i]+'[0]') +' '+eval(parr[i]+'[1]')
              }else{
                items[i].innerHTML = eval(parr[i])
              }                          
            }

        } 

        return items               
    }
