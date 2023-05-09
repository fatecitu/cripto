import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import themes from '../themes'

const BotaoFlutuante = ({ onPress, icon }) => (
    <TouchableOpacity style={styles.button}
        onPress={onPress} icon={icon}>
        <MaterialCommunityIcons name={icon} size={40}
            color={themes.colors.neutral.background} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    button: {
        position: 'absolute',   top: 8,
        right: 16,
        backgroundColor: themes.colors.utility.warning,
        borderRadius: 32,     width: 64,
        height: 64,
        justifyContent: 'center',    alignItems: 'center'
    }
})

export default BotaoFlutuante