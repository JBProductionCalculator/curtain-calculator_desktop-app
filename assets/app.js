
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


    callingMainFunctions(data, 7, commandsTable , '.roller_curtains', createSelect, searchPrice , objectID,idCalculate, parentSelect)
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


rollerBlindsReady()
function rollerBlindsReady(){
    let data =  allGoods.rollerBlindsReady
    let commandsTable ="['oneProduct.name', 'oneProduct.width.w35', 'oneProduct.width.w40', 'oneProduct.width.w45','oneProduct.width.w50','oneProduct.width.w55','oneProduct.width.w60','oneProduct.width.w65','oneProduct.width.w70', 'oneProduct.width.w75','oneProduct.width.w80','oneProduct.width.w85','oneProduct.width.w90','oneProduct.width.w95','oneProduct.width.w100', 'oneProduct.width.w105','oneProduct.width.w110','oneProduct.width.w115','oneProduct.width.w120', 'oneProduct.width.w125','oneProduct.width.w130']" 
    let createSelect = [ 'data[0].width.w35[2]', 'data[0].width.w40[2]', 'data[0].width.w45[2]','data[0].width.w50[2]','data[0].width.w55[2]','data[0].width.w60[2]','data[0].width.w65[2]','data[0].width.w70[2]', 'data[0].width.w75[2]','data[0].width.w80[2]','data[0].width.w85[2]','data[0].width.w90[2]','data[0].width.w95[2]','data[0].width.w100[2]', 'data[0].width.w105[2]','data[0].width.w110[2]','data[0].width.w115[2]','data[0].width.w120[2]', 'data[0].width.w125[2]','data[0].width.w130[2]' ]
    let searchPrice = [ 'oneGoods.width.w35', 'oneGoods.width.w40', 'oneGoods.width.w45','oneGoods.width.w50','oneGoods.width.w55','oneGoods.width.w60','oneGoods.width.w65','oneGoods.width.w70', 'oneGoods.width.w75','oneGoods.width.w80','oneGoods.width.w85','oneGoods.width.w90','oneGoods.width.w95','oneGoods.width.w100', 'oneGoods.width.w105','oneGoods.width.w110','oneGoods.width.w115','oneGoods.width.w120', 'oneGoods.width.w125','oneGoods.width.w130']

    let objectID = ['productNameReady', 'productTypeReady']
    let idCalculate = '#priceСalculationReady'
    let parentSelect = '#productSelectReady'


    callingMainFunctions(data, 21, commandsTable , '.roller_curtains_ready', createSelect, searchPrice , objectID,idCalculate, parentSelect)
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

horizontalHouverStandard()
function horizontalHouverStandard(){
    let data =  allGoods.horizontalHouverStandard
    let commandsTable ="['oneProduct.name', 'oneProduct.standard25mm', 'oneProduct.standard16mm']" 
    let createSelect = ['data[0].standard25mm[2]','data[0].standard16mm[2]' ]
    let searchPrice = ['oneGoods.standard25mm',   'oneGoods.standard16mm' ]

    let objectID = ['productNameHorizontalStandard', 'productTypeHorizontalStandard']
    let idCalculate = '#priceСalculationHorizontalLouverStandard'
    let parentSelect = '#productSelectHorizontalLouverStandard'


    callingMainFunctions(data, 4 ,commandsTable , '.horizontal_louver_standard', createSelect, searchPrice, objectID, idCalculate, parentSelect)
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



verticalHouver89mm()
function verticalHouver89mm(){
    let data =  allGoods.verticalHouver89mm
    let commandsTable ="['oneProduct.name', 'oneProduct.colorСode', 'oneProduct.price']" 
    let createSelect = ['data[0].colorСode[2]', 'data[0].price[2]' ]
    let searchPrice = ['oneGoods.colorСode',  'oneGoods.price' ]

    let objectID = ['productNameVerticalHouver89mm', 'productTypeVerticalHouver89mm']
    let idCalculate = '#priceСalculationVerticalHouver89mm'
    let parentSelect = '#productSelectVerticalHouver89mm'


    callingMainFunctions(data, 3 ,commandsTable , '.horizontal_vertical_89mm', createSelect, searchPrice, objectID, idCalculate, parentSelect)

}



mosquitoNet()
function mosquitoNet(){
    let data =  allGoods.mosquitoNet
    let commandsTable ="['oneProduct.name', 'oneProduct.BK37', 'oneProduct.BK41', 'oneProduct.DA37', 'oneProduct.DA41']" 
    let createSelect = ['data[0].BK37[2]','data[0].BK41[2]','data[0].DA37[2]','data[0].DA41[2]' ]
    let searchPrice = [  'oneGoods.BK37', 'oneGoods.BK41', 'oneGoods.DA37', 'oneGoods.DA41']


    let objectID = ['productNameMosquitoNet', 'productTypeMosquitoNet']
    let idCalculate = '#priceСalculationMosquitoNet'
    let parentSelect = '#productSelectMosquitoNet'


    callingMainFunctions(data, 5 ,commandsTable , '.mosquito_net', createSelect, searchPrice, objectID, idCalculate, parentSelect)
}




