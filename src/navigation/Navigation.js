import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './Auth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="AuthStack"
                    component={Auth}
                    options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Navigation