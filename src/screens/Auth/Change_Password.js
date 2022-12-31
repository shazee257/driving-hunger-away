import { View, Text, TextInput, Image, StatusBar, TouchableOpacity } from '../../components';
import { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native';

const ChangePassword = () => {
    const initialPasswordObj = {
        password: "",
        confirmPassword: "",
    };

    const [passwords, setPasswords] = useState(initialPasswordObj);
    const [password1Visibility, setPassword1Visibility] = useState(true);
    const [password2Visibility, setPassword2Visibility] = useState(false);
    const [error, setError] = useState("");

    const onChange = (text) => {
        setError("");
        setPasswords({ ...passwords, confirmPassword: text });

        if (text !== passwords.password) {
            setError("Passwords do not match");
        }
    };

    return (
        <View className='flex-1 bg-white'>
            <StatusBar backgroundColor="#056721" />
            <TouchableOpacity onPress={() => navigation.goBack()} className='ml-4 mt-4'>
                <Ionicons name="arrow-back" size={24} color="#4E4B66" />
            </TouchableOpacity>
            <View className='flex-1 w-full px-10 items-center mt-10'>
                <View className='w-full space-y-2'>
                    <Text className='text-4xl font-regular text-[#056721]'>Change Password</Text>
                    <Text className='text-lg font-regular text-left text-[#646179]'>
                        Success! You can now create a new password.
                    </Text>
                </View>

                <View className='flex flex-col justify-center items-center space-y-4 mt-14 w-full'>
                    <View className='w-full'>
                        <TextInput placeholder='Password'
                            secureTextEntry={!password1Visibility}
                            className='w-full h-12 border border-[#4E4B66]/25 text-[#539766] text-sm rounded-md pl-4 focus:border-[#056721]/50'
                            placeholderTextColor='#4E4B66'
                            maxLength={20}
                            value={passwords.password}
                            onChangeText={(text) => setPasswords({ ...passwords, password: text })}
                        />
                        <TouchableOpacity className='absolute right-0 top-0' onPress={() => setPassword1Visibility(!password1Visibility)}>
                            {password1Visibility ?
                                <Ionicons name="eye" size={20} color='#539766' style={{ position: 'absolute', right: 14, top: 14 }}
                                /> :
                                <Ionicons name="eye-off" size={20} color="#c8c7cf" style={{ position: 'absolute', right: 14, top: 14 }} />
                            }
                        </TouchableOpacity>
                    </View>

                    <View className='w-full mb-6'>
                        <TextInput placeholder='Password'
                            secureTextEntry={!password2Visibility}
                            className='w-full h-12 border border-[#4E4B66]/25 text-[#539766] text-sm rounded-md pl-4 focus:border-[#056721]/50'
                            placeholderTextColor='#4E4B66'
                            maxLength={20}
                            value={passwords.confirmPassword}
                            onChangeText={(text) => onChange(text)}
                        />
                        <TouchableOpacity className='absolute right-0 top-0' onPress={() => setPassword2Visibility(!password2Visibility)}>
                            {password2Visibility ?
                                <Ionicons name="eye" size={20} color='#539766' style={{ position: 'absolute', right: 14, top: 14 }} /> :
                                <Ionicons name="eye-off" size={20} color="#c8c7cf" style={{ position: 'absolute', right: 14, top: 14 }} />
                            }
                        </TouchableOpacity>
                        {error && <Text className='text-red-500 text-xs'>{error}</Text>}
                    </View>

                    <TouchableOpacity className='w-full h-12 bg-[#056721] rounded-md justify-center items-center'>
                        <Text className='text-base font-regular text-white'>Change Password</Text>
                    </TouchableOpacity>

                </View>
            </View >
        </View>
    )
}

export default ChangePassword