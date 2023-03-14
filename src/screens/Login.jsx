import React from 'react'

import { useSafeAreaInsets }
    from 'react-native-safe-area-context'

import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import themes from '../themes'
export default function Login() {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets()

    return (
        <View style={{
            paddingTop: insets.top,
            backgroundColor: themes.colors.brand.verdeEscuro,
            flex: 1
        }}>
            <View style={styles.container}>
                <Text style={styles.titulo}>Login</Text>
    <Image source={require('../../assets/icon.png')}
    style={styles.logo} />
    
    <Text>Email</Text>
    <TextInput
        placeholder="Digite seu email"
        style={styles.input}
        autoCompleteType="email" />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}>
                    <Text>
                        Ainda não é usuário? Registre-se
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: themes.colors.brand.verdeClaro,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 16,
        borderRadius: 16
    },
    titulo: {
        fontSize: 24,
        color: themes.colors.brand.verdeEscuro,
        marginVertical: 8
    },
    logo: {
        width: 200,
        height: 200,
        marginVertical: 16
    },
    input: {
        borderWidth: 1,
        borderColor: themes.colors.brand.verdeEscuro,
        backgroundColor: themes.colors.neutral.foreground,
        borderRadius: 8,
        padding: 8,
        marginBottom:8
    }
})