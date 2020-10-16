
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


    callingMainFunctions(data, 7, commandsTable , '.curtain_prices', createSelect, searchPrice , objectID,idCalculate, parentSelect)
}


rollerBlindsDayNight()
function rollerBlindsDayNight(){
    let data =  allGoods.rollerBlindsDayNight
    let commandsTable ="['oneProduct.name', 'oneProduct.openType.copact', 'oneProduct.openType.mini', 'oneProduct.openType.standard', 'oneProduct.openType.maximus', 'oneProduct.closedType.uniFlat', 'oneProduct.closedType.uniFullTurn']" 
    let createSelect = [   'data[0].openType.copact[2]', 'data[0].openType.mini[2]','data[0].openType.standard[2]', 'data[0].openType.maximus[2]','data[0].closedType.uniFlat[2]', 'data[0].closedType.uniFullTurn[2]', ]
    let searchPrice = ['oneGoods.openType.copact',  'oneGoods.openType.mini',   'oneGoods.openType.standard' , 'oneGoods.openType.maximus', 'oneGoods.closedType.uniFlat', 'oneGoods.closedType.uniFullTurn',]

    let objectID = ['productNameDayNight', 'productTypeDayNight']
    let idCalculate = '#priceСalculationDayNight'
    let parentSelect = '#productSelectDayNight'


    callingMainFunctions(data, 7 ,commandsTable , '.roller_curtains_day_night', createSelect, searchPrice, objectID, idCalculate, parentSelect)

}


horizontalHouverVenus()
function horizontalHouverVenus(){
    let data =  allGoods.horizontalHouverVenus
    let commandsTable ="['oneProduct.name', 'oneProduct.standard25mm', 'oneProduct.fullDimmer25mm', 'oneProduct.standard16mm']" 
    let createSelect = ['data[0].standard25mm[2]', 'data[0].fullDimmer25mm[2]','data[0].standard16mm[2]' ]
    let searchPrice = ['oneGoods.standard25mm',  'oneGoods.fullDimmer25mm',   'oneGoods.standard16mm' ]

    let objectID = ['productNameHorizontalVenus', 'productTypeHorizontalVenus']
    let idCalculate = '#priceСalculationHorizontalLouverVenus'
    let parentSelect = '#productSelectHorizontalLouverVenus'


    callingMainFunctions(data, 4 ,commandsTable , '.horizontal_louver_venus', createSelect, searchPrice, objectID, idCalculate, parentSelect)

}



verticalHouver127mm()
function verticalHouver127mm(){
    let data =  allGoods.verticalHouver127mm
    let commandsTable ="['oneProduct.name', 'oneProduct.colorСode', 'oneProduct.price']" 
    let createSelect = ['data[0].colorСode[2]', 'data[0].price[2]' ]
    let searchPrice = ['oneGoods.colorСode',  'oneGoods.price' ]

    let objectID = ['productNameVerticalHouver127mm', 'productTypeVerticalHouver127mm']
    let idCalculate = '#priceСalculationVerticalHouver127mm'
    let parentSelect = '#productSelectVerticalHouver127mm'


    callingMainFunctions(data, 3 ,commandsTable , '.horizontal_vertical_127mm', createSelect, searchPrice, objectID, idCalculate, parentSelect)

}


