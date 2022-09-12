import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import { useNavigation } from '@react-navigation/native'

const OnlineConsult = () => {
    const navigation = useNavigation()
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex items-center justify-center">
                <View style={styles.cardView} className="gap-4">
                    <Text className="text-2xl text-center font-500">Video Consultation</Text>
                    <Text className="text-md text-center">Connect with health specialist one to one</Text>
                    <TouchableOpacity
                        className="p-4 bg-red-500 rounded-xl"
                        onPress={() => navigation.navigate('Consultant Physician')}
                    >
                        <Text className="text-md font-bold text-white">Find Doctor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView} className="gap-4">
                    <Text className="text-2xl text-center font-500">Audio Consultation</Text>
                    <Text className="text-md text-center">Consult with doctors on call or audio note</Text>
                    <TouchableOpacity
                        className="p-4 bg-red-500 rounded-xl"
                        onPress={() => navigation.navigate('Consultant Physician')}
                    >
                        <Text className="text-md font-bold text-white">Find Doctor</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView} className="gap-4">
                    <Text className="text-2xl text-center font-500">Chat Consultation</Text>
                    <Text className="text-md text-center">Experience the ease of textual conversation</Text>
                    <TouchableOpacity
                        className="p-4 bg-red-500 rounded-xl"
                        onPress={() => navigation.navigate('Consultant Physician')}
                    >
                        <Text className="text-md font-bold text-white">Find Doctor</Text>
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