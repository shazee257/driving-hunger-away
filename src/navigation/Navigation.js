import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './Auth';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AuthStack"
                component={Auth}
                options={{ headerShown: false }} />

        </Stack.Navigator>

    )
}

export default Navigation