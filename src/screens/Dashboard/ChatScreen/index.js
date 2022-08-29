import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatScreen = () => {
    return (
        <View className="w-full h-full">
            <StatusBar />
            <View className="h-1/4 w-full bg-[#5aa272] flex flex-row p-6 justify-between">
                <Text className="text-md font-bold text-white">Back</Text>
                <View className="items-center gap-2">
                    <View className="w-20 h-20 rounded-full bg-white" />
                    <Text className="text-xl font-bold text-white">Dr. Mariam Garcia</Text>
                    <View className="w-24 h-8 rounded-lg bg-red-500 justify-center items-center">
                        <Text className="text-sm font-bold text-white">Allopathic</Text>
                    </View>
                </View>
                <Text className="text-md font-bold text-white">menu</Text>
            </View>
            <View className="h-4/6 w-full bg-red-500">
                <View></View>
            </View>
            <View className="h-20 w-full bg-blue-500"></View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})