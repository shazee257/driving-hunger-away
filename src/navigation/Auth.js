import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WalkThrough from '../screens/Auth/Walk_Through';
import GetStarted from '../screens/Auth/Get_Started';
import SignUp from '../screens/Auth/Sign_Up';
import VerifyEmail from '../screens/Auth/Verify_Email';
import ForgotPassword from '../screens/Auth/Forgot_Password';
import ChangePassword from '../screens/Auth/Change_Password';

import SignIn from '../screens/Auth/Sign_In';

const Stack = createNativeStackNavigator();

const Auth = () => {
    return (
        <Stack.Navigator initialRouteName="Walk_Through">

            <Stack.Screen name="Walk_Through" component={WalkThrough} options={{ headerShown: false }} />
            <Stack.Screen name="Get_Started" component={GetStarted} options={{ headerShown: false }} />
            <Stack.Screen name="Sign_Up" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Sign_In" component={SignIn} options={{ headerShown: false }} />
            <Stack.Screen name="Verify_Email" component={VerifyEmail} options={{ headerShown: false }} />
            <Stack.Screen name="Forgot_Password" component={ForgotPassword} options={{ headerShown: false }} />
            <Stack.Screen name="Change_Password" component={ChangePassword} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}

export default Auth;