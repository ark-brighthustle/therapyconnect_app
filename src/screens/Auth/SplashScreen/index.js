import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ImagesContent } from '../../../constants/images'
import { getHeight } from '../../../components/Dimensions'
import TextComponent from '../../../components/TextComponent'

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
                </ImageBackground>
                <View style={styles.container}>
                    <TextComponent className1={"text-md text-end text-white"} isBold={true}>
                        Hand Crafted by @Therapy Connect
                    </TextComponent>
                </View>
            </View>
        );
    }
    navigation.navigate('Root');
    return null;
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: getHeight("2%"),
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})