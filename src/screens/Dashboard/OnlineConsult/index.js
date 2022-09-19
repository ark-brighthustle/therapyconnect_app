import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import TextComponent from '../../../components/TextComponent'

const OnlineConsult = () => {
    const navigation = useNavigation()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex items-center justify-center">
                <View style={styles.cardView} className="gap-4">
                    <TextComponent className1="text-2xl text-center" isMedium={true}>Video Consultation</TextComponent>
                    <TextComponent className1="text-md mt-4 text-center">Connect with health specialist one to one</TextComponent>
                    <TouchableOpacity
                        className="p-4 bg-red-500 rounded-xl mt-4"
                        onPress={() => navigation.navigate('Consultant Physician')}
                    >
                        <TextComponent className1="text-md text-white" isSemiBold={true}>Find Doctor</TextComponent>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView} className="gap-4">
                    <TextComponent className1="text-2xl text-center" isMedium={true}>Audio Consultation</TextComponent>
                    <TextComponent className1="text-md mt-4 text-center">Consult with doctors on call or audio note</TextComponent>
                    <TouchableOpacity
                        className="p-4 bg-red-500 rounded-xl mt-4"
                        onPress={() => navigation.navigate('Consultant Physician')}
                    >
                        <TextComponent className1="text-md text-white" isSemiBold={true}>Find Doctor</TextComponent>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView} className="gap-4">
                    <TextComponent className1="text-2xl text-center" isMedium={true}>Chat Consultation</TextComponent>
                    <TextComponent className1="text-md mt-4 text-center">Experience the ease of textual conversation</TextComponent>
                    <TouchableOpacity
                        className="p-4 bg-red-500 rounded-xl mt-4"
                        onPress={() => navigation.navigate('Consultant Physician')}
                    >
                        <TextComponent className1="text-md text-white" isSemiBold={true}>Find Doctor</TextComponent>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default OnlineConsult

const styles = StyleSheet.create({
    cardView: {
        height: getHeight("30%"),
        marginTop: getHeight("3%"),
        marginBottom: getHeight("2%"),
        width: getWidth("86%"),
        padding: getHeight("4%"),
        backgroundColor: Colors.white,
        borderRadius: 15,
        // shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
})