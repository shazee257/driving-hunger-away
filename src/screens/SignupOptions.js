import { View, Text, StatusBar } from '../components';

const SignupOptionScreen = () => {
    return (
        <View className='flex-1 bg-white'>
            <StatusBar animated={true} backgroundColor="white" barStyle="dark-content" hidden={true} />
            <Text className='text-black'>SignupOptionScreen</Text>
        </View>
    )
}

export default SignupOptionScreen