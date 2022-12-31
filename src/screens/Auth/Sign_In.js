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
import Ionicons from 'react-native-vector-icons/Ionicons';


const SignIn = ({ navigation }) => {
    const userObj = {
        email: "",
        password: ""
    };

    const [user, setUser] = useState(userObj);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
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
            switch (name) {
                case "password":
                    if (value.length < 6) {
                        setErrors({ ...errors, [name]: "Password must be at least 6 characters long" });
                    } else {
                        setErrors({ ...errors, [name]: null });
                    }
                    break;

                case "email":
                    // regex for email
                    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!emailRegex.test(value)) {
                        setErrors({ ...errors, [name]: "Please enter a valid email address" });
                    } else {
                        setErrors({ ...errors, [name]: null });
                    }
                    break;

                default:
                    break;
            }
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#ffffff' }}>
            <View className='flex-1 flex-col justify-center items-center'>
                <StatusBar backgroundColor="#056721" />
                <View className='flex items-center my-4'>
                    <Image source={icon} />
                </View>
                <Text className={`mb-8 text-[#595670] text-xl font-[${FONTS.regular}]`}>Login</Text>
                <View className='mb-4'>
                    <TextInput
                        placeholderTextColor='#c8c7cf'
                        className="pl-5 w-80 h-15 border border-[#c3b1a2] focus:border-[#539766] text-[#539766] text-lg rounded-md"
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
                        className="pl-5 w-80 h-15 border border-[#c3b1a2] text-[#539766] text-lg rounded-md focus:border-[#539766]"
                        maxLength={20}
                        placeholder="Password"
                        secureTextEntry={!passwordVisibility}
                        value={user.password}
                        onChangeText={(text) => onChange({ name: "password", value: text })}
                    />
                    <TouchableOpacity className='absolute right-0 top-0' onPress={() => setPasswordVisibility(!passwordVisibility)}>
                        {passwordVisibility ?
                            <Ionicons name="eye" size={20} color="#539766" style={{ position: 'absolute', right: 14, top: 14 }} /> :
                            <Ionicons name="eye-off" size={20} color="#c8c7cf" style={{ position: 'absolute', right: 14, top: 14 }} />
                        }
                    </TouchableOpacity>
                    {errors.password && <Text className='text-red-500 text-xs'>{errors.password}</Text>}
                    <TouchableOpacity onPress={() => navigation.navigate('Forgot_Password')}>
                        <Text className={`mt-2 text-[#9c8c7f] text-base font-[${FONTS.bold}]`} >Forgot password?</Text>
                    </TouchableOpacity>
                </View>

                <View className='flex flex-row items-center justify-center mt-10'>
                    <Text className={`text-lg font-[${FONTS.bold}] pr-2`}>Don't have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Sign_Up')}>
                        <Text className='text-[#bbac9e] text-lg font-[${FONTS.regular}]'>Sign up</Text>
                    </TouchableOpacity>
                </View>

                <Text className={`text-lg text-[#9b9aa9] font-[${FONTS.bold}] p-5`}>Or</Text>

                <TouchableOpacity className='flex flex-row w-80 h-14 rounded-lg items-center justify-center space-x-4 border border-[#bcbbc5] mb-4'>
                    <Image source={googleIcon} className='w-5 h-5' />
                    <Text className='font-normal text-sm opacity-70'>Sign in with Google</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row w-80 h-14 rounded-lg items-center justify-center space-x-4 border border-[#bcbbc5]'>
                    <Image source={facebookIcon} className='w-5 h-5' />
                    <Text className='font-normal text-sm opacity-70'>Sign in with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity className='flex flex-row w-80 h-14 rounded-lg items-center justify-center mt-10 bg-[#056721]'>
                    <Text className={`text-white font-[${FONTS.regular}] font-bold text-xl`}>Sign in</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}

export default SignIn