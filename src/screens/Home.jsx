import React, {useState, useEffect, useLayoutEffect} 
       from 'react'
import {View, Text, Alert, ActivityIndicator, ScrollView, StyleSheet} from 'react-native'
import BotaoFlutuante from '../components/BotaoFlutuante'
import themes from '../themes'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {auth, database} from '../../config/firebase'
import {signOut} from 'firebase/auth'
import {collection, onSnapshot, orderBy, query, where} 
       from 'firebase/firestore'
import Cripto from '../components/Cripto'       

export default function Home({navigation}){
    const [busca, setBusca] = useState('')
    const [criptos, setCriptos] = useState([])
    const [carregaCriptos, setCarregaCriptos] = useState(false)
   
   useLayoutEffect(()=> {
    navigation.setOptions({
        headerLeft: () => <></>, //remove o voltar
        headerRight: () => <MaterialCommunityIcons.Button
        name="logout"
        backgroundColor={themes.colors.brand.verdeEscuro}
        onPress={handleLogout}>
            Logout
        </MaterialCommunityIcons.Button>
    })
   },[navigation])

   function handleLogout(){
    signOut(auth)
    .then(() => {navigation.navigate('Login')})
   }

   useEffect(() => {
    setCarregaCriptos(true)
    const collectionRef = collection(database, 'criptos')
    const q = query(collectionRef)
    const getCriptos = onSnapshot(q, querySnapshot => {
        setCriptos(
            querySnapshot.docs.map(doc => ({
                id: doc.id, emoji: doc.data().emoji,
                nome: doc.data().nome
            }))
        )
    })
    setCarregaCriptos(false)
    return getCriptos
   }, [])

    return (
        <View style={styles.container}>
         <ScrollView contentContainerStyle={{
                paddingBottom: 64
            }}>
            <Text>Menu Principal</Text>            
            {carregaCriptos && 
            <ActivityIndicator size="large"
            color={themes.colors.brand.verdeEscuro}/>}
            
            {/*<Text>{JSON.stringify(criptos)}</Text>*/} 
            {
            criptos.map(dadocripto => 
            <Cripto key={dadocripto.id} {...dadocripto} />)           
            }
            
            <BotaoFlutuante 
                     onPress={() => navigation.navigate('Nova Cripto')}
                     icon="cash-plus" />
         </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        backgroundColor: themes.colors.brand.verdeClaro
    }
})