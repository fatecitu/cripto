import { createNativeStackNavigator }
    from '@react-navigation/native-stack'
import { NavigationContainer, StackActions }
    from '@react-navigation/native'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import AddCripto from '../screens/AddCripto'

const Stack = createNativeStackNavigator()
function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options ={{ headerTitle: 'Fatec Cripto'}} />
            <Stack.Screen 
                name="Nova Cripto" 
                component={AddCripto} 
                options ={{ presentation: 'modal'}} />    
            <Stack.Screen
                name="Login"
                options={{ headerShown: false }}
                component={Login} />
            <Stack.Screen
                name="Signup"
                options={{ headerShown: false }}
                component={Signup} />
            
        </Stack.Navigator>
    )
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}