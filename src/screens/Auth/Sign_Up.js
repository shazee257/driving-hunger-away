import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import googleIcon from '../../assets/images/google_icon.png';
import facebookIcon from '../../assets/images/facebook_icon.png';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

const Sign_Up = ({ navigation, route }) => {
    const { role } = route.params;

    const userObj = {
        fullName: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(userObj);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [errors, setErrors] = useState({});

    const onChange = ({ name, value }) => {
        setErrors({});
        setUser({ ...user, [name]: value });

        if (value.trim() !== "") {
            switch (name) {
                case "fullName":
                    if (value.length < 4) {
                        setErrors({ ...errors, [name]: "Full name must be at least 4 characters long" });
                    } else {
                        setErrors({ ...errors, [name]: null });
                    }
                    break;

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
            <View className='flex-1 bg-white'>
                <StatusBar backgroundColor="#056721" />
                <TouchableOpacity onPress={() => navigation.goBack()} className='ml-4 mt-4'>
                    <AntDesign name="arrowleft" size={24} color="#4E4B66" />
                </TouchableOpacity>
                <View className='flex-1 w-full px-10 justify-center items-center mt-4'>

                    <View className='w-full space-y-1'>
                        <Text className='text-4xl text-center gap-6 font-medium text-[#056721]'>
                            {role === 'volunteer' && 'Volunteer '}Sign Up</Text>

                        {role === 'volunteer' ?
                            <Text className='text-lg font-light text-justify text-[#646179]'>
                                Want to register as a volunteer so you can start earning volunteer hours? Please enter your details below.
                            </Text> :
                            <View className='mb-10'></View>
                        }

                    </View>

                    <View className='flex flex-col justify-center items-center space-y-3 mt-4 w-full'>
                        <View className='w-full'>
                            <TextInput placeholder='Full Name'
                                className=' w-full h-12 border border-[#c3b1a2] focus:border-[#539766] text-[#539766] text-sm rounded-md pl-4'
                                placeholderTextColor='#4E4B66'
                                value={user.fullName}
                                onChangeText={(text) => onChange({ name: "fullName", value: text })}
                            />
                            {errors.fullName && <Text className='text-red-500 text-xs'>{errors.fullName}</Text>}
                        </View>
                        <View className='w-full'>
                            <TextInput placeholder='Email Address'
                                className=' w-full h-12 border border-[#c3b1a2] focus:border-[#539766] text-[#539766] text-sm rounded-md pl-4'
                                placeholderTextColor='#4E4B66'
                                value={user.email}
                                onChangeText={(text) => onChange({ name: "email", value: text })}
                            />
                            {errors.email && <Text className='text-red-500 text-xs'>{errors.email}</Text>}
                        </View>

                        <View className='w-full'>
                            <View className='w-full'>
                                <TextInput placeholder='Password'
                                    secureTextEntry={!passwordVisibility}
                                    className=' w-full h-12 border border-[#c3b1a2] focus:border-[#539766] text-[#539766] text-sm rounded-md pl-4'
                                    placeholderTextColor='#4E4B66'
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
                            </View>
                        </View>

                        <View className='flex flex-row space-x-1 justify-end items-end w-full mb-2'>
                            <Text className='text-md font-regular text-center text-[#4e4b66 ]'>Already have an account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Sign_In')}>
                                <Text className='font-semibold text-[#a5907e]'>Sign In</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity className='w-full h-12 bg-[#056721] rounded-md justify-center items-center'>
                            <Text className='text-base font-regular text-white'>Sign Up</Text>
                        </TouchableOpacity>

                        <Text className='py-4 text-base'>Or</Text>

                        <TouchableOpacity className='flex flex-row w-80 h-12 rounded-lg items-center justify-center space-x-4 border border-[#a09eb4] mb-2'>
                            <Image source={googleIcon} className='w-4 h-4' />
                            <Text className='font-normal text-sm opacity-70'>Sign in with Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity className='flex flex-row w-80 h-12 rounded-lg items-center justify-center space-x-4 border border-[#a09eb4]'>
                            <Image source={facebookIcon} className='w-4 h-4' />
                            <Text className='font-normal text-sm opacity-70'>Sign in with Facebook</Text>
                        </TouchableOpacity>

                    </View>
                </View >
            </View>
        </ScrollView>
    )
}

export default Sign_Up