import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'
import TextComponent from '../../../components/TextComponent'

const BookDiagnostics = () => {
    return (
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
    )
}

export default BookDiagnostics