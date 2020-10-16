
   // let a = fetch('https://eldarlebedev.github.io/zaruba/css/database.json')       
   //      .then(respronse => respronse.json())
   //      .then(com => console.log(com))

rollerBlinds()
function rollerBlinds(){
    let data =  allGoods.rollerBlinds
    let commandsTable ="['oneProduct.name', 'oneProduct.openType.copact', 'oneProduct.openType.mini', 'oneProduct.openType.standard', 'oneProduct.openType.maximus', 'oneProduct.closedType.uniFlat', 'oneProduct.closedType.uniFullTurn']" 
    let createSelect = [   'data[0].openType.copact[2]', 'data[0].openType.mini[2]','data[0].openType.standard[2]', 'data[0].openType.maximus[2]','data[0].closedType.uniFlat[2]', 'data[0].closedType.uniFullTurn[2]', ]
    let searchPrice = ['oneGoods.openType.copact',  'oneGoods.openType.mini',   'oneGoods.openType.standard' , 'oneGoods.openType.maximus', 'oneGoods.closedType.uniFlat', 'oneGoods.closedType.uniFullTurn',]

    let objectID = ['productName', 'productType']
    let idCalculate = '#priceСalculation'
    let parentSelect = '#productSelect'


    callingMainFunctions(data, commandsTable , '.curtain_prices', createSelect, searchPrice , objectID,idCalculate, parentSelect)
}


dayNight()
function dayNight(){
    let data =  allGoods.rollerBlindsDayNight
    let commandsTable ="['oneProduct.name', 'oneProduct.openType.copact', 'oneProduct.openType.mini', 'oneProduct.openType.standard', 'oneProduct.openType.maximus', 'oneProduct.closedType.uniFlat', 'oneProduct.closedType.uniFullTurn']" 
    let createSelect = [   'data[0].openType.copact[2]', 'data[0].openType.mini[2]','data[0].openType.standard[2]', 'data[0].openType.maximus[2]','data[0].closedType.uniFlat[2]', 'data[0].closedType.uniFullTurn[2]', ]
    let searchPrice = ['oneGoods.openType.copact',  'oneGoods.openType.mini',   'oneGoods.openType.standard' , 'oneGoods.openType.maximus', 'oneGoods.closedType.uniFlat', 'oneGoods.closedType.uniFullTurn',]

    let objectID = ['productNameDayNight', 'productTypeDayNight']
    let idCalculate = '#priceСalculationDayNight'
    let parentSelect = '#productSelectDayNight'


    callingMainFunctions(data, commandsTable , '.roller_curtains_day_night', createSelect, searchPrice, objectID, idCalculate, parentSelect)

}
