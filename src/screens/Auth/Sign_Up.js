import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from '../../components';

const Sign_Up = () => {
    return (
        <View className='flex-1 bg-white justify-center items-center'>
            <View className='w-full px-8 justify-center items-center'>

                <Text className='text-3xl font-regular text-[#056721]'>Sign Up</Text>
                {/* <Text className='text-lg font-regular text-left mx-10 text-[#646179]'>
                Please choose which category you will like to create an account for.
            </Text> */}

                <View className='flex flex-col justify-center items-center space-y-4 mt-16 w-full'>
                    <TextInput placeholder='Full Name'
                        className=' w-full h-12 border border-[#4d504e] text-[#539766] text-sm rounded-md pl-4' />

                    <TextInput placeholder='Email Address'
                        className=' w-full h-12 border border-[#4d504e] text-[#539766] text-sm rounded-md pl-4' />

                    <TextInput placeholder='Password'
                        secureTextEntry={true}
                        className=' w-full h-12 border border-[#4d504e] text-[#539766] text-sm rounded-md pl-4' />

                    <View className='flex flex-row space-x-1 justify-end'>
                        <Text className='text-md font-regular text-center text-[#4e4b66 ]'>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Sign_In_Options')}>
                            <Text className='font-semibold text-[#a5907e]'>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className='w-full h-12 bg-[#539766] rounded-md justify-center items-center'>
                        <Text className='text-lg font-semibold text-white'>Sign Up</Text>
                    </TouchableOpacity>

                </View>
            </View >
        </View>
    )
}

export default Sign_Up