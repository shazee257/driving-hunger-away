import { View, Text, Image, StatusBar, TouchableOpacity } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';


const Walk_Through = () => {
    return (
        <View className='flex-1 bg-white'>
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-4 mt-4'>
                <AntDesign name="arrowleft" size={24} color="#4E4B66" />
            </TouchableOpacity>

            <Text className='text-3xl font-regular ml-10 mt-10 text-[#056721]'>Get Started</Text>
            <Text className='text-lg font-regular text-left mx-10 text-[#646179]'>
                Please choose which category you will like to create an account for.
            </Text>

            <View className='flex flex-col justify-center items-center space-y-4 mt-16 mx-10'>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Sign_Up', { role: 'volunteer' })}
                    className='bg-[#056721] h-12 justify-center items-center py-2 w-full rounded-lg'>
                    <Text className='text-white text-md font-regular'>Volunteer Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Sign_Up', { role: 'donor' })}
                    className='bg-[#056721] h-12 justify-center items-center py-2 w-full rounded-lg'>
                    <Text className='text-white text-md font-regular'>Donor Signup</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Sign_Up', { role: 'donee' })}
                    className='bg-[#056721] h-12 justify-center items-center py-2 w-full rounded-lg'>
                    <Text className='text-white text-md font-regular'>Donee Signup</Text>
                </TouchableOpacity>

                <View className='flex flex-row justify-center space-x-1'>
                    <Text className='text-md font-regular text-center text-[#4e4b66 ]'>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign_In_Options')}>
                        <Text className='font-semibold text-[#a5907e]'>Sign In</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View >
    )
}

export default Walk_Through