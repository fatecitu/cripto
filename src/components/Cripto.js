import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import themes from '../themes'

export default function Cripto({...cripto}){
    return (
        <View style={styles.criptoContainer}>
            <Text style={styles.nome}>{cripto.nome}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    criptoContainer: {
        padding: 8,
        backgroundColor: themes.colors.neutral.foreground,
        margin: 16,
        borderRadius: 8
    },
    nome: {
        fontSize: 24, marginRight: 8, fontWeight: 'bold'
    }

})