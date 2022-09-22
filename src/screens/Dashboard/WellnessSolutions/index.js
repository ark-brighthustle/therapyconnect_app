import { TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { SvgUri } from 'react-native-svg'
import TextComponent from '../../../components/TextComponent';
import AnimatedLoader from 'react-native-animated-loader';
import { getHeight, getWidth } from '../../../components/Dimensions';
import { Colors } from '../../../constants/colors';
import { ImagesContent } from '../../../constants/images';

class WellnessSolutions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    render() {
        return (
            <View>
                {
                    this.state.isLoading ?
                        <View style={styles.container}>
                            <AnimatedLoader
                                visible={this.state.isLoading}
                                overlayColor="rgba(255,255,255,0.75)"
                                animationStyle={styles.lottie}
                                source={ImagesContent.Loader1}
                                speed={1}
                            />
                        </View>
                        :
                        <View className="flex w-full h-full bg-white items-center justify-center" >
                            <View className="p-5 gap-5 items-center justify-center">
                                <View className="w-80 h-80 items-center justify-center">
                                    <SvgUri
                                        width="100%"
                                        height="100%"
                                        uri="https://therapyconnect.in/static/media/solutions.993defe2e965c88962f96cbcab09acc2.svg"
                                    />
                                </View>
                                <View className="flex flex-row items-center">
                                    <TextComponent className1={"text-3xl text-black mr-2"} isBold={true}>
                                        Wellness
                                    </TextComponent>
                                    <TextComponent className1={"text-3xl text-[#5aa272]"} isBold={true}>
                                        Solutions
                                    </TextComponent>
                                </View>
                                <TextComponent className1={"text-lg text-center text-black"} isMedium={true}>
                                    Explore our a holistic package of wellness and care
                                </TextComponent>
                                <TouchableOpacity className="pl-10 pr-10 pt-3 pb-3 rounded-lg items-center justify-center bg-red-500">
                                    <TextComponent className1={"text-lg text-white"} isBold={true}>
                                        Coming Soon
                                    </TextComponent>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        )
    }
}

export default WellnessSolutions

const styles = StyleSheet.create({
    container: {
        width: getWidth("100%"),
        height: getHeight("100%"),
        backgroundColor: Colors.white
    },
    lottie: {
        width: getWidth("50%"),
        height: getHeight("50%"),
        resizeMode: "cover"
    }
})