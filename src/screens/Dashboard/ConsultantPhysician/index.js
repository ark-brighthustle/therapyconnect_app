import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import BottomSheet from "react-native-gesture-bottom-sheet";
import { useNavigation } from '@react-navigation/native'

const ConsultantPhysician = () => {

    const navigation = useNavigation()
    const arr = [0, 1, 2, 3]
    const arr1 = [0, 1, 2, 3, 4, 5, 6, 7]

    return (
        <View>
            <View className="h-full w-full">
                <View style={styles.main}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {
                            arr.map((data) => {
                                return (
                                    <View style={styles.body}>
                                        <Text className="text-md font-bold text-white">Next available online</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View className="h-full pt-2 bg-[#E5E7E9]">
                    <View className="p-4">
                        <View className="flex flex-row items-center gap-2">
                            <Text className="text-xl font-bold text-[#5aa272]">53 doctor(s)</Text>
                            <Text className="text-xl font-bold text-black">found</Text>
                        </View>
                        <Text className="text-sm mt-0.5 font-semibold text-[#99A3A4]">109+ doctors available for online consulatation</Text>
                    </View>
                    <ScrollView>
                        <View className="flex w-full h-full mb-36">
                            {
                                arr1.map((data) => {
                                    return (
                                        <View>
                                            <View className="flex bg-white p-5 h-62">
                                                <View className="flex flex-row items-center gap-10">
                                                    <View className="items-center">
                                                        <View className="w-24 h-24 rounded-full bg-red-500" />
                                                        <TouchableOpacity onPress={() => navigation.navigate('Doctor Info')}>
                                                            <Text className="mt-2 text-md font-bold text-red-500">View Profile</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View className="w-2/4">
                                                        <Text className="text-xl font-bold">Dr. Mariam Garcia</Text>
                                                        <TouchableOpacity className="mt-1 w-24 rounded-lg h-7 items-center justify-center bg-[#5aa272]">
                                                            <Text className="text-sm font-bold text-white">Allopathic</Text>
                                                        </TouchableOpacity>
                                                        <View className="flex flex-row items-center gap-1 mt-1">
                                                            <Entypo name="location-pin" size={25} color={Colors.headerColor} />
                                                            <Text className="text-md font-bold">4A, SSG Vadodara, Guj.</Text>
                                                        </View>
                                                        <Text className="mt-1 text-md">Allopathic BHMS (Hons), DHMS(Hons), MBBS, MD</Text>
                                                    </View>
                                                </View>
                                                <View className="flex flex-row items-center justify-between mt-8">
                                                    <View>
                                                        <Text className="text-sm">Next Available</Text>
                                                        <Text className="text-lg font-bold">10:00 PM, Today</Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-52 ml-2 h-12 p-3"
                                                        onPress={() => { this.BottomSheet.show() }}
                                                    >
                                                        <Text className="text-md font-bold text-white">CONSULT NOW</Text>
                                                        <Text className="text-md font-bold text-white">₹400</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View className="h-3" />
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </ScrollView>
                </View>
            </View>
            <BottomSheet
                draggable={false}
                // hasDraggableIcon
                radius={20}
                ref={ref => this.BottomSheet = ref}
                height={getHeight('47%')}>
                <View className="w-full p-5 bg-white">
                    <View className="items-center mt-5 mb-8">
                        <Text className="text-xl font-bold">Online consultation with a doctor</Text>
                    </View>
                    <View className="gap-2">
                        <View className="flex flex-row items-center gap-2">
                            <Octicons name="person" size={30} />
                            <View className="flex flex-row items-center gap-1">
                                <Text className="text-md">Include follow up consulatation in</Text>
                                <Text className="text-md font-bold">7 days.</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center gap-2">
                            <Octicons name="person" size={30} />
                            <View>
                                <Text className="text-md">Secure and private platform.</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center gap-2">
                            <Octicons name="person" size={30} />
                            <View>
                                <Text className="text-md">Easy upload and access of reports.</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity className="flex flex-row justify-between items-center mt-8 w-full rounded-lg bg-red-500 h-18 p-5">
                        <Text className="text-md font-bold text-white">GOT IT, CONTINUE</Text>
                        <Text className="text-md font-bold text-white">Pay ₹400</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet>
        </View>
    )
}

export default ConsultantPhysician

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: 'center',
        marginRight: getWidth("2%"),
        paddingTop: getHeight("3%"),
        padding: 15,
        backgroundColor: Colors.white
    },
    body: {
        backgroundColor: Colors.headerColor,
        paddingHorizontal: getWidth("5%"),
        paddingVertical: getHeight("1.2%"),
        borderRadius: 20,
        marginRight: getWidth("1.5%")
    },
})
