import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import TextComponent from '../../../components/TextComponent'

export default class ConnectAdvisor extends Component {
    render() {
        return (
            <View className="flex w-full h-full bg-white">
                <View className="p-3 mt-2">
                    <View className="flex flex-row items-center">
                        <TextComponent className1="text-2xl" isSemiBold={true}>Connect to</TextComponent>
                        <TextComponent className1="text-2xl text-[#5aa272]" isSemiBold={true}> Advisor</TextComponent>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({})