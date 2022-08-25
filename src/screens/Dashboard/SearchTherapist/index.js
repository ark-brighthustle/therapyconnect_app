import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const SearchTherapist = () => {

    return (
        <ScrollView>
            <View className="flex w-full h-full bg-white">
                <View className="mt-8 ml-5">
                    <View>
                        <Text className="text-lg font-bold">Select location</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default SearchTherapist

const styles = StyleSheet.create({})