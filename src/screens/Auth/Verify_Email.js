import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import googleIcon from '../../assets/images/google_icon.png';
import facebookIcon from '../../assets/images/facebook_icon.png';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

const VerifyEmail = () => {
    const [otp, setOtp] = useState([]);
    const [elementRef, setElementRef] = useState([]);

    const submitHandler = () => {
        const otpValue = Object.values(otp).join("");
        console.log("otpValue: ", otpValue);
    };

    const onChange = (text, index) => {
        setOtp({ ...otp, [index]: text });
        if (text.length === 1) {
            if (index < 4 && elementRef[index + 1] !== undefined) {
                elementRef[index + 1].focus();
            }
        }
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#ffffff' }}>
            <StatusBar backgroundColor="#056721" />
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-4 mt-4'>
                <AntDesign name="arrowleft" size={24} color="#4E4B66" />
            </TouchableOpacity>
            <View className='px-10 mt-20'>
                <Text className='text-4xl font-semiBold text-[#056721]'>Verify Email</Text>
                <Text className='text-lg font-light text-[#4E4B66] mt-2'>Please enter the code we sent to your email address</Text>
            </View>

            <View className='flex-row justify-center my-10'>
                {[1, 2, 3, 4].map((item, index) => (
                    <TextInput
                        key={index}
                        className={`${index === 0 && 'rounded-l'} ${index === 3 && 'rounded-r'} w-20 h-12 border border-gray-300 text-center text-lg font-bold text-[#056721]`}
                        placeholderTextColor={'#4E4B66'}
                        placeholder='*'
                        keyboardType='number-pad'
                        maxLength={1}
                        ref={(ref) => elementRef[index] = ref}
                        value={otp[index]}
                        onChangeText={(text) => onChange(text, index)}
                    />
                ))}
            </View>

            <View className='flex w-full px-8 justify-center items-center'>
                <TouchableOpacity
                    onPress={submitHandler}
                    className='w-full h-12 bg-[#056721] rounded-md justify-center items-center'>
                    <Text className='text-base font-regular text-white'>Continue</Text>
                </TouchableOpacity>

                <TouchableOpacity className='mt-4'>
                    <Text className='text-base font-bold text-[#b6a596]'>resend code</Text>
                </TouchableOpacity>

            </View >
        </ScrollView >
    )
}

export default VerifyEmail