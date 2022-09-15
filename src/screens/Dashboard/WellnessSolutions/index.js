import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SvgUri } from 'react-native-svg'

const WellnessSolutions = () => {
    return (
        <View className="flex w-full h-full bg-white items-center justify-center">
            <View className="p-5 gap-5 items-center justify-center">
                <View className="w-80 h-80 items-center justify-center">
                    <SvgUri
                        width="100%"
                        height="100%"
                        uri="https://therapyconnect.in/static/media/solutions.993defe2e965c88962f96cbcab09acc2.svg"
                    />
                </View>
                <View className="flex flex-row items-center gap-1">
                    <Text className="text-3xl font-bold text-black">Wellness</Text>
                    <Text className="text-3xl font-bold text-[#5aa272]">Solutions</Text>
                </View>
                <Text className="text-lg text-center font-500 text-black">
                    Explore our a holistic package of wellness and care
                </Text>
                <TouchableOpacity className="pl-10 pr-10 pt-3 pb-3 rounded-lg items-center justify-center bg-red-500">
                    <Text className="text-lg font-bold text-white">Coming Soon</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WellnessSolutions