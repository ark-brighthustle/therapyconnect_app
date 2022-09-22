import { TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { SvgUri } from 'react-native-svg'
import TextComponent from '../../../components/TextComponent'
import AnimatedLoader from 'react-native-animated-loader'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { ImagesContent } from '../../../constants/images'

export default class BookDiagnostics extends Component {
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
                        <View className="w-full h-full bg-white">
                            <AnimatedLoader
                                visible={this.state.isLoading}
                                overlayColor="rgba(255,255,255,0.75)"
                                animationStyle={styles.lottie}
                                source={ImagesContent.Loader1}
                                speed={1}
                            />
                        </View>
                        :
                        <View className="flex w-full h-full bg-white items-center justify-center">
                            <View className="p-5 gap-5 items-center justify-center">
                                <View className="w-80 h-80 items-center justify-center">
                                    <SvgUri
                                        width="100%"
                                        height="100%"
                                        uri="https://therapyconnect.in/static/media/lab.0a640867008bff49a230e7af8bb09427.svg"
                                    />
                                </View>
                                <View className="justify-center items-center gap-1">
                                    <View className="flex flex-row items-center gap-1">
                                        <TextComponent className1="text-2xl text-black" isBold={true}>Book Diagnostics</TextComponent>
                                        <TextComponent className1="text-2xl text-[#5aa272]" isBold={true}> at</TextComponent>
                                    </View>
                                    <TextComponent className1="text-3xl text-[#5aa272]" isBold={true}>laboratory near you</TextComponent>
                                </View>
                                <TextComponent className1="text-lg text-center text-black" isMedium={true}>Drop your sample to lab, or let the lab pick up the sample</TextComponent>
                                <TouchableOpacity className="pl-10 pr-10 pt-3 pb-3 rounded-lg items-center justify-center bg-red-500">
                                    <TextComponent className1="text-lg text-white" isBold={true}>Coming Soon</TextComponent>
                                </TouchableOpacity>
                            </View>
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    lottie: {
        width: getWidth("50%"),
        height: getHeight("50%"),
        resizeMode: "cover"
    }
})