import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import googleIcon from '../../assets/images/google_icon.png';
import facebookIcon from '../../assets/images/facebook_icon.png';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

const Sign_Up = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const onChange = (text) => {
        setError("");
        setEmail(text);

        if (text.trim() !== "") {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(text)) {
                setError("Please enter a valid email address");
            } else {
                setError("");
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#ffffff' }}>
            <View className='flex bg-white'>
                <StatusBar backgroundColor="#056721" />
                <TouchableOpacity onPress={() => navigation.goBack()} className='ml-4 mt-4'>
                    <AntDesign name="arrowleft" size={24} color="#4E4B66" />
                </TouchableOpacity>

                <View className='px-10 mt-20'>
                    <Text className='text-4xl font-semiBold text-[#056721]'>Forgot Password?</Text>
                    <Text className='text-lg font-light text-[#4E4B66] mt-2'>Enter your account email address below to get started.</Text>
                </View>

                <View className='px-10 flex flex-col justify-center items-center space-y-4 mt-12 w-full'>
                    <View className='w-full mb-4'>
                        <TextInput placeholder='Email Address'
                            className=' w-full h-12 border border-[#4E4B66] text-[#539766] text-sm rounded-md pl-4'
                            placeholderTextColor='#aaaaaa'
                            value={email}
                            onChangeText={(text) => onChange(text)}
                        />
                        {error && <Text className='text-red-500 text-xs'>{error}</Text>}
                    </View>

                    <TouchableOpacity className='w-full h-12 bg-[#056721] rounded-md justify-center items-center'>
                        <Text className='text-base font-regular text-white'>Reset Password</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </ScrollView>
    )
}

export default Sign_Up