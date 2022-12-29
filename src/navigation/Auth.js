import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Walk_Through from '../screens/Auth/Walk_Through';
import Get_Start from '../screens/Auth/Get_Start';
import Sign_Up from '../screens/Auth/Sign_Up';

import Login from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="Sign_Up">

            <Stack.Screen name="Walk_Through" component={Walk_Through} options={{ headerShown: false }} />

            <Stack.Screen name="Get_Start" component={Get_Start} options={{ headerShown: false }} />

            <Stack.Screen name="Sign_Up" component={Sign_Up} options={{ headerShown: false }} />

            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

export default Auth;