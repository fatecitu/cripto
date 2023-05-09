import React from 'react'
import { View, Text, StyleSheet, Platform, Alert } from 'react-native'
import themes from '../themes'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { deleteDoc, doc } from 'firebase/firestore'
import { database } from '../../config/firebase'
import { useNavigation } from '@react-navigation/native'

export default function Cripto({ ...cripto }) {
    const navigation = useNavigation()
    const onDelete = () => {
        if (Platform.OS !== 'web') {
            Alert.alert('Confirma a exclusão?',
                'Confirma a exclusão deste registro?\nA operação não poderá ser desfeita',
                [
                    { text: 'Não', style: 'cancel' },
                    {
                        text: 'Sim', onPress: () => {
                            const docRef = doc(database, 'criptos', cripto.id)
                            deleteDoc(docRef)
                        }
                    }
                ]
            )
        } else {
            let confirma = confirm('Confirma a exclusão?')
            if (confirma) {
                const docRef = doc(database, 'criptos', cripto.id)
                deleteDoc(docRef)
            }
        }

    }

    return (
        <View style={styles.criptoContainer}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Text style={{ fontSize: 32 }}>{cripto.emoji}</Text>
                <Text style={styles.nome}>{cripto.simbolo}</Text>
                <MaterialCommunityIcons name="circle-edit-outline" size={32}
                    onPress={() =>
                        navigation.navigate('Editar Cripto', cripto)}
                    color={themes.colors.utility.success} />
                <MaterialCommunityIcons name="trash-can" size={32}
                    onPress={onDelete}
                    color={themes.colors.utility.danger} />
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start'
            }}>
                <Text style={{ fontSize: 24, marginRight: 8 }}>
                    {cripto.quantidade}</Text>
                <Text style={styles.nome}>{cripto.nome}</Text>
            </View>
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