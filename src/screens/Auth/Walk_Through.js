import { View, Text, Image, StatusBar, TouchableOpacity } from '../../components';
import AppIntroSlider from 'react-native-app-intro-slider';
import image1 from '../../assets/images/sliderImage1.png';
import image2 from '../../assets/images/sliderImage2.png';
import image3 from '../../assets/images/sliderImage3.png';
import { connect } from 'react-redux';

const WalkThrough = ({ navigation, user }) => {
    console.log("user ===>", user);

    const slides = [
        {
            key: 1,
            title: 'Who We Are',
            text: 'DrivingHungerAway offers a free, fast, and easy way to for restaurants to donate food to organizations.',
            image: image1,
            backgroundColor: '#59b2ab',
        },
        {
            key: 2,
            title: 'Earn Volunteer Hours',
            text: 'Earn volunteer hours by delivering left over food to nearby food pantries.',
            image: image2,
            backgroundColor: '#febe29',
        },
        {
            key: 3,
            title: 'Request Food',
            text: 'Have any need for left over food from restaurants? You can sign up and start sending in your requests.',
            image: image3,
            backgroundColor: '#22bcb5',
        }
    ];

    const _renderItem = ({ item }) => {
        return (
            <View className='flex-1 bg-white'>
                <StatusBar backgroundColor="#056721" />
                <Image source={item.image} className='w-full h-2/3' />
                <View className='mx-8 mt-6 text-[#056721] space-y-1'>
                    <Text className=' text-[#056721] text-2xl font-bold'>{item.title}</Text>
                    <Text className=' text-[#646179] text-lg text-jus tify'>{item.text}</Text>
                </View>
            </View>
        );
    }

    return (
        <View className='flex-1 bg-white'>
            <AppIntroSlider data={slides} renderItem={_renderItem}
                activeDotStyle={{
                    backgroundColor: '#056721',
                    width: 16,
                    height: 5,
                    borderTopRightRadius: 5,
                    borderBottomLeftRadius: 5,
                }}
                dotStyle={{
                    backgroundColor: '#cccccc',
                    width: 16,
                    height: 5,
                }}
            />

            <View className='flex flex-row justify-between mx-8 space-x-4 mb-6'>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Get_Started')}
                    className='bg-[#056721] justify-center items-center rounded-lg w-40 py-2'>
                    <Text className='text-white text-lg font-medium'>Get Started</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Sign_In')}
                    className='bg-white justify-center items-center rounded-lg w-40 py-2 border border-[#056721]'>
                    <Text className='text-[#056721] text-lg font-medium'>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const mapStateToProps = (state, props) => {
    const { id, name, email } = state.user;

    return {
        id,
        name,
        email
    };
};

export default connect(mapStateToProps)(WalkThrough);

