import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'

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
                        <Text className="text-3xl font-bold text-black">Book Diagnostics</Text>
                        <Text className="text-3xl font-bold text-[#5aa272]">at</Text>
                    </View>
                    <Text className="text-4xl font-bold text-[#5aa272]">laboratory near you</Text>
                </View>
                <Text className="text-lg text-center font-500 text-black">Drop your sample to lab, or let the lab pick up the sample</Text>
                <TouchableOpacity className="pl-10 pr-10 pt-3 pb-3 rounded-lg items-center justify-center bg-red-500">
                    <Text className="text-lg font-bold text-white">Coming Soon</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BookDiagnostics