        let width, height, area, productSelect, productPrice
        width = document.querySelector('.priceСalculation input#width')
        height = document.querySelector('.priceСalculation input#height')
        area = document.querySelector('.priceСalculation input#area')
        productSelect = document.querySelector('.productSelect')



       


        let allProducts =  rollerBlinds

        let rollerBlindsCommandsTable ="['oneProduct.name', 'oneProduct.openType.copact', 'oneProduct.openType.mini', 'oneProduct.openType.standard', 'oneProduct.openType.maximus', 'oneProduct.closedType.uniFlat', 'oneProduct.closedType.uniFullTurn']" 
        let rollerBlindCreateSelect = [   'data[0].openType.copact[2]', 'data[0].openType.mini[2]','data[0].openType.standard[2]', 'data[0].openType.maximus[2]','data[0].closedType.uniFlat[2]', 'data[0].closedType.uniFullTurn[2]', ]
        let rollerBlindSearchPrice = ['oneGoods.openType.copact',  'oneGoods.openType.mini',   'oneGoods.openType.standard' , 'oneGoods.openType.maximus', 'oneGoods.closedType.uniFlat', 'oneGoods.closedType.uniFullTurn',]

        callingMainFunctions(allProducts, rollerBlindsCommandsTable , rollerBlindCreateSelect, rollerBlindSearchPrice)





    
