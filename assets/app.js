
   // let a = fetch('https://eldarlebedev.github.io/zaruba/css/database.json')       
   //      .then(respronse => respronse.json())
   //      .then(com => console.log(com))


// новые рулонные шторы
newRollerBlinds()
function newRollerBlinds(){
    let data =  allGoods.newRollerBlinds
    
    let parentSection = '#roller_curtains'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'copact','fakeCurtains','mini','standard','maximus','uniFlat','uniFullTurn']
   


    newCreatindGoodsTables(data, 8 ,  '.roller_curtains', commands)
    rollerCurtainsCalculate(data, parentSection, productSelectID , commands)

}



newRollerBlindsDayNight()
function newRollerBlindsDayNight(){
    let data =  allGoods.newRollerBlindsDayNight
    
    let parentSection = '#roller_curtains_day_night'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'copact','fakeCurtains','mini','standard','maximus','uniFlat','uniFullTurn']
   


    newCreatindGoodsTables(data, 8 ,  '.roller_curtains_day_night', commands)
    rollerCurtainsCalculate(data, parentSection, productSelectID , commands)

}



newRollerBlindsReady()
function newRollerBlindsReady(){
    let data =  allGoods.newRollerBlindsReady
    
    let parentSection = '#roller_curtains_ready'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'w35','w40','w45','w50','w55','w60','w65','w70','w75','w80','w85','w90','w95','w100','w105','w110','w115','w120','w125','w130']
   
    newCreatindGoodsTables(data, 21 ,  '.roller_curtains_ready', commands)
    rollerCurtainsCalculateReady(data, parentSection, productSelectID , commands)
}




newHorizontalHouverVenus()
function newHorizontalHouverVenus(){
    let data =  allGoods.newHorizontalHouverVenus
    
    let parentSection = '#horizontal_louver_venus'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name','standard25mm','fullDimmer25mm','standard16mm' ]
   
    newCreatindGoodsTables(data, 4 ,  '.horizontal_louver_venus', commands)
    horizontalCalculate(data, parentSection, productSelectID , commands)
}




newHorizontalHouverStandard()
function newHorizontalHouverStandard(){
    let data =  allGoods.newHorizontalHouverStandard
    
    let parentSection = '#horizontal_louver_standard'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'standard25mm', 'standard16mm']
   

    newCreatindGoodsTables(data, 3 ,  '.horizontal_louver_standard', commands)
    horizontalCalculate(data, parentSection, productSelectID , commands)

}





newVertical89()
function newVertical89(){
    let data = allGoods.newVertical89 

    verticalCreateTable(data,".new_vertical_89mm")

    let parentSelect = "#productSelectNewVertical89mm"
    let selectedID = ['productNameNewVertical89mm', 'productTypeNewVertical89mm']
    let parentSection = '#new_vertical_89mm'


    veticalCalculation(data, parentSection, parentSelect , selectedID )

}


newVertical127()
function newVertical127(){
    let data = allGoods.newVertical127

    verticalCreateTable(data, ".new_vertical_127mm")

    let parentSelect = "#productSelectNewVertical127mm"
    let selectedID = ['productNameNewVertical127mm', 'productTypeNewVertical127mm']
    let parentSection = '#new_vertical_127mm'


    veticalCalculation(data, parentSection , parentSelect , selectedID, parentSection )

}



newMosquitoNet()
function newMosquitoNet(){
    let data =  allGoods.mosquitoNet
    
    let parentSection = '#mosquito_net'
    let productSelectID = ['selectName', 'selectType']
    let commands = ['name', 'BK37', 'BK41', 'DA37', 'DA41']
   


    newCreatindGoodsTables(data, 5 ,  '.mosquito_net', commands)
    mosquitoNetCalculate(data, parentSection, productSelectID , commands)

}




// mosquitoNet()
// function mosquitoNet(){
//     let data =  allGoods.mosquitoNet
//     let commandsTable ="['oneProduct.name', 'oneProduct.BK37', 'oneProduct.BK41', 'oneProduct.DA37', 'oneProduct.DA41']" 
//     let createSelect = ['data[0].BK37[2]','data[0].BK41[2]','data[0].DA37[2]','data[0].DA41[2]' ]
//     let searchPrice = [  'oneGoods.BK37', 'oneGoods.BK41', 'oneGoods.DA37', 'oneGoods.DA41']


//     let objectID = ['productNameMosquitoNet', 'productTypeMosquitoNet']
//     let idCalculate = '#priceСalculationMosquitoNet'
//     let parentSelect = '#productSelectMosquitoNet'


//     callingMainFunctions(data, 5 ,commandsTable , '.mosquito_net', createSelect, searchPrice, objectID, idCalculate, parentSelect)
// }


