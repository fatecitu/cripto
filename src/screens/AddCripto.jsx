import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, 
         Pressable, Alert } from 'react-native'
import EmojiPicker, { pt } from 'rn-emoji-keyboard'

export default function AddCripto({ navigation }) {
    const [isOpen, setIsOpen] = useState(false)
    const [novaCripto, setNovaCripto] = useState({
        emoji: '💵',
        nome: '',
        simbolo: '',
        quantidade: 0,
        valor: 0,
        vendido: false,
        valorVenda: 0
    })

    const handleTeclado = (emojiObject) => {
        setNovaCripto({
            ...novaCripto,
            emoji: emojiObject.emoji
        })
    }
    const validaCripto = async () => {
        //Efetuando as validações dos formulários
        if(novaCripto.nome === ''){
            Alert.alert('⚠ Atenção',
            'O campo nome da criptomoeda é obrigatório')
            return
        }
        if(novaCripto.simbolo.length !== 3){
            Alert.alert('⚠ Atenção',
            'O símbolo deve ter 3 caracteres')
            return
        }
        if(parseFloat(novaCripto.valor) <= 0){
            Alert.alert('⚠ Atenção',
            'O valor da compra deve ser um número positivo')
            return
        }
        if(parseFloat(novaCripto.quantidade) <= 0){
            Alert.alert('⚠ Atenção',
    'A quantidade da compra deve ser um número positivo')
            return
        }
        //Lógica para salvar no Firebase
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Nova criptomoeda
            </Text>
            <Text style={styles.emoji}
                onPress={() => setIsOpen(true)}>
                {novaCripto.emoji}
            </Text>
            <EmojiPicker
                onEmojiSelected={handleTeclado}
                open={isOpen}
                onClose={() => setIsOpen(false)}
                translation={pt}
                enableRecentlyUsed
                enableSearchBar
            />
            <Text onPress={() => setIsOpen(true)}>
                Abrir Teclado Emoji
            </Text>

            <TextInput
                style={styles.input}
                placeholder='Símbolo. Ex: BTC'
                maxLength={3}
                keyboardType='default'
                autoCapitalize={'characters'}
                onChangeText={(text) => setNovaCripto(
                    { ...novaCripto, simbolo: text })}
            />
             <TextInput
                style={styles.input}
                placeholder='Nome da Moeda. Ex: Bitcoin'
                maxLength={50}
                keyboardType='default'                
                onChangeText={(text) => setNovaCripto(
                    { ...novaCripto, nome: text })}
            />
               <TextInput
                style={styles.input}
                placeholder='Quantidade Adquirida'                
                keyboardType='numeric'                
                onChangeText={(text) => setNovaCripto(
                    { ...novaCripto, quantidade: text })}
            />
             <TextInput
                style={styles.input}
                placeholder='Valor de Compra em R$'                
                keyboardType='numeric'                
                onChangeText={(text) => setNovaCripto(
                    { ...novaCripto, valor: text })}
            />
            <Pressable onPress={validaCripto}>
                <Text>Salvar</Text>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FFF',
        alignItems: 'center'
    },
    title: {
        fontSize: 32, fontWeight: '700'
    },
    emoji: {
        fontSize: 100, borderWidth: 1, borderRadius: 8,
        padding: 8, borderColor: '#DDD'
    },
    input: {
        width: '90%', padding: 8, marginVertical: 4,
        borderWidth: 1, borderColor: '#DDD', borderRadius: 8
    }
})