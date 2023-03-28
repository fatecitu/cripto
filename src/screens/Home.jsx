import React from 'react'
import {View, Text, Alert} from 'react-native'
import BotaoFlutuante from '../components/BotaoFlutuante'

export default function Home({navigation}){
    return (
        <View>
            <Text>Menu Principal</Text>
            <BotaoFlutuante 
                     onPress={() => navigation.navigate('Nova Cripto')}
                     icon="cash-plus" />
        </View>
    )
}
