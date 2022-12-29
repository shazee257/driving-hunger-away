import {
    View,
    Text,
    StatusBar,
    ImageBackground,
    TextInput,
    Image,
    TouchableOpacity,
    // ScrollView,
} from '../../components';

import { ScrollView } from 'react-native';
import icon from '../../assets/images/icon.png';
import { FONTS } from '../../assets/fonts';
import googleIcon from '../../assets/images/google_icon.png';
import facebookIcon from '../../assets/images/facebook_icon.png';
import { useEffect, useState } from 'react';
import { fetchAPI } from '../../constant';
// import AntDesign from 'react-native-vector-icons/AntDesign';


const Login = () => {
    const userObj = {
        email: "",
        password: ""
    };

    const [user, setUser] = useState(userObj);
    const [errors, setErrors] = useState({});

    const loginHandler = async () => {
        const { data } = await fetchAPI({
            method: "POST",
            endPoint: "/users/login",
            data: user
        });
        console.log("data: ", data);
    }

    const onChange = ({ name, value }) => {
        setErrors({});
        setUser({ ...user, [name]: value });

        if (value.trim() !== "") {
            if (name === "password") {
                if (value.length < 6) {
                    setErrors({ ...errors, [name]: "Password must be at least 6 characters long" });
                } else {
                    setErrors({ ...errors, [name]: null });
                }
            } if (name === "email") {
                // regex for email
                const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (!emailRegex.test(value)) {
                    setErrors({ ...errors, [name]: "Please enter a valid email address" });
                } else {
                    setErrors({ ...errors, [name]: null });
                }
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#ffffff' }}>
            <View
                // style={{ flex: 1, backgroundColor: 'red' }}
                className='flex-1 flex-col justify-center items-center'>
                <StatusBar animated={true} backgroundColor="white" barStyle="dark-content" hidden={false} />
                <Image source={icon} className='mb-5' />
                <Text className={`mb-8 text-[#595670] text-xl font-[${FONTS.regular}]`}>Login</Text>
                <View className='mb-4'>
                    <TextInput
                        placeholderTextColor='#c8c7cf'
                        className="pl-5 w-80 h-15 border border-[#539766] text-[#539766] text-lg rounded-md"
                        maxLength={25}
                        placeholder="Email"
                        value={user.email}
                        onChangeText={(text) => onChange({ name: "email", value: text })}
                    />
                    {errors.email && <Text className='text-red-500 text-xs'>{errors.email}</Text>}
                </View>

                <View className='mb-4'>
                    <TextInput
                        placeholderTextColor='#c8c7cf'
                        className="pl-5 w-80 h-15 border border-[#539766] text-[#539766] text-lg rounded-md"
                        maxLength={20}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={user.password}
                        onChangeText={(text) => onChange({ name: "password", value: text })}
                    />
                    {errors.password && <Text className='text-red-500 text-xs'>{errors.password}</Text>}
                    <Text className={`mt-4 text-[#b09e8e] text-lg font-[${FONTS.bold}]`} >Forgot password?</Text>
                </View>

                <View className='flex flex-row items-center justify-center mt-10'>
                    <Text className={`text-lg font-[${FONTS.bold}] pr-2`}>Don't have an account?</Text>
                    <Text className='text-[#bbac9e] text-lg font-[${FONTS.regular}]'>Sign up</Text>
                </View>

                <Text className={`text-lg text-[#9b9aa9] font-[${FONTS.bold}] p-5`}>Or</Text>

                <TouchableOpacity className='flex flex-row w-80 h-14 rounded-lg items-center justify-center space-x-4 border border-[#bcbbc5] mb-4'>
                    <Image source={googleIcon} className='w-6 h-6' />
                    <Text className={`font-[${FONTS.bold}] text-lg`}>Sign in with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row w-80 h-14 rounded-lg items-center justify-center space-x-4 border border-[#bcbbc5]'>
                    <Image source={facebookIcon} className='w-6 h-6' />
                    <Text className={`font-[${FONTS.bold}] text-lg`}>Sign in with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row w-80 h-14 rounded-lg items-center justify-center mt-10 bg-[#056721]'>
                    <Text className={`text-white font-[${FONTS.regular}] font-bold text-xl`}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )
}

export default Login