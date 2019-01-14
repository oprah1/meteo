import React from 'react'
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';

export default class About extends React.Component{
    render () {
        return(
            <View style={style.View}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>
                    Vbi curarum abiectis ponderibus aliis tamquam nodum et codicem difficillimum Caesarem convellere nisu valido cogitabat, 
                    eique deliberanti cum proximis clandestinis conloquiis et nocturnis qua vi, quibusve commentis id fieret,
                    antequam effundendis rebus pertinacius incumberet confidentia, 
                    acciri mollioribus scriptis per simulationem tractatus publici nimis urgentis eundem placuerat Gallum, 
                    ut auxilio destitutus sine ullo interiret obstaculo.
                </Text>
                <ActivityIndicator style={style.View}color="#fffff000" size="large" animating={true}/>
            </View>
        )
    }


}

const style = StyleSheet.create ({
    View: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    }
  })