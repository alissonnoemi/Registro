import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../src/screens/SingUp';

const Stack = createStackNavigator();

export const navegacion =()=> {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Registro" component={RegisterScreen} />
        </Stack.Navigator>
    );
}