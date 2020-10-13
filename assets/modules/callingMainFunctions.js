    // функция в которой вызываются все основные функции 
    function callingMainFunctions(data, tableCreationCommands, selectsCreateCommands, selectsSearchCommands){

        creatingGoodsTables(allProducts, 7, eval(tableCreationCommands))

        oneSelect(allProducts, 'productName', 'product.name', false)
        oneSelect(allProducts, 'productType', false,  selectsCreateCommands, selectsSearchCommands)

        setTimeout(function(){
             callFakeClicks(allProducts, selectsCreateCommands, selectsSearchCommands)



         } , 0)

    }