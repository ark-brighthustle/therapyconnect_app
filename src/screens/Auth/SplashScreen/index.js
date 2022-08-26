import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ImagesContent } from '../../../constants/images'
import { getHeight } from '../../../components/Dimensions'

const SplashScreen = ({ navigation }) => {

    const [timePassed, setTimePassed] = useState(false);

    setTimeout(function () {
        setTimePassed(true);
    }, 5000);

    if (!timePassed) {
        return (
            <View className="w-full h-full bg-[#5ba273]">
                <ImageBackground source={ImagesContent.splashBack} resizeMode="cover" className="w-full h-full items-center justify-center">
                    <Image source={ImagesContent.Logo1} resizeMode="contain" className="w-52 h-52" />
                    {/* <Image source={ImagesContent.Logo} resizeMode="contain" className="w-60 h-60" /> */}
                </ImageBackground>
                <View style={{ position: "absolute", bottom: getHeight("2%"), left: 0, right: 0, alignItems: 'center', justifyContent: 'center' }}>
                    <Text className="text-md font-bold text-end text-white">Hand Crafted by @Therapy Connect</Text>
                </View>
            </View>
        );
    }
    navigation.navigate('Signup');
    return null;
}

export default SplashScreen

const styles = StyleSheet.create({})