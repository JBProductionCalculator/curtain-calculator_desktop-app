


    // функция в которой вызываются все основные функции 
    function callingMainFunctions(data, numberCells, tableCreationCommands,tableClass, selectsCreateCommands, selectsSearchCommands, objectID, idCalculate, parentSelect){

        creatingGoodsTables(data, numberCells , eval(tableCreationCommands), tableClass)

        allMainFunction(data,selectsCreateCommands, selectsSearchCommands, objectID, idCalculate,parentSelect)


    }


