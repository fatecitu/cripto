import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, 
         Pressable, Alert } from 'react-native'
import EmojiPicker, { pt } from 'rn-emoji-keyboard'
import themes from '../themes'

import { database, auth } from '../../config/firebase'
import { doc, updateDoc } from 'firebase/firestore'
import moment from 'moment'
const hoje = moment()
import {useNavigation} from '@react-navigation/native'

export default function EditCripto({ route }) {
    const navigation = useNavigation()
    const [isOpen, setIsOpen] = useState(false)
    const [editarCripto, setEditarCripto] = 
          useState(route.params)

    const handleTeclado = (emojiObject) => {
        setEditarCripto({
            ...editarCripto,
            emoji: emojiObject.emoji
        })
    }
    const validaCripto = async () => {
        //Efetuando as validações dos formulários
        if(editarCripto.nome === ''){
            Alert.alert('⚠ Atenção',
            'O campo nome da criptomoeda é obrigatório')
            alert('O campo nome da criptomoeda é obrigatório')
            return
        }
        if(editarCripto.simbolo.length !== 3){
            Alert.alert('⚠ Atenção',
            'O símbolo deve ter 3 caracteres')
            return
        }
        if(parseFloat(editarCripto.valor) <= 0){
            Alert.alert('⚠ Atenção',
            'O valor da compra deve ser um número positivo')
            return
        }
        if(parseFloat(editarCripto.quantidade) <= 0){
            Alert.alert('⚠ Atenção',
    'A quantidade da compra deve ser um número positivo')
            return
        }
        //Lógica para alterar no Firebase
        const docRef = doc(database, 'criptos',
        editarCripto.id)

        updateDoc(docRef, {
          emoji: editarCripto.emoji,
          nome: editarCripto.nome,
          quantidade: editarCripto.quantidade,
          simbolo: editarCripto.simbolo,
          valor: editarCripto.valor,          
          updateAt: hoje.format()  
        })
            navigation.goBack()
    } 
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Alterar criptomoeda 
            </Text>
            <Text style={styles.emoji}
                onPress={() => setIsOpen(true)}>
                {editarCripto.emoji}
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
                value={editarCripto.simbolo}
                keyboardType='default'
                autoCapitalize={'characters'}
                onChangeText={(text) => setEditarCripto(
                    { ...editarCripto, simbolo: text })}
            />
             <TextInput
                style={styles.input}
                placeholder='Nome da Moeda. Ex: Bitcoin'
                maxLength={50}
                value={editarCripto.nome}
                keyboardType='default'                
                onChangeText={(text) => setEditarCripto(
                    { ...editarCripto, nome: text })}
            />
               <TextInput
                style={styles.input}
                placeholder='Quantidade Adquirida'                
                keyboardType='numeric' 
                value={editarCripto.quantidade}               
                onChangeText={(text) => setEditarCripto(
                    { ...editarCripto, quantidade: text })}
            />
             <TextInput
                style={styles.input}
                placeholder='Valor de Compra em R$'                
                keyboardType='numeric'  
                value={editarCripto.valor}              
                onChangeText={(text) => setEditarCripto(
                    { ...editarCripto, valor: text })}
            />
            <Pressable onPress={validaCripto} style={styles.botao}>
                <Text styles={styles.textoBotao}>Alterar</Text>
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
    },
    botao: {
        backgroundColor: themes.colors.utility.info,
        borderRadius: 4,
        padding: 16,
        marginTop: 8
    },
    textoBotao: {
        color: themes.colors.neutral.foreground,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})