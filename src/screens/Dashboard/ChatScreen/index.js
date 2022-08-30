import { StatusBar, StyleSheet, Text, TouchableOpacity, View, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChatScreen = () => {
    const [click, setClick] = useState(false);
    return (
        <View className="w-full h-full">
            <StatusBar />
            <View className="h-fit w-full bg-[#5aa272] flex flex-row p-6 justify-between">
                <Ionicons name='arrow-back' size={25} color={Colors.white} />
                <View className="items-center gap-2">
                    <View className="w-20 h-20 rounded-full bg-white" />
                    <Text className="text-xl font-bold text-white">Dr. Mariam Garcia</Text>
                    <View className="w-24 h-8 rounded-lg bg-green-900 justify-center items-center">
                        <Text className="text-sm font-bold text-white">Allopathic</Text>
                    </View>
                </View>
                <Entypo name='dots-three-horizontal' size={24} color={Colors.white} />
            </View>
            <View className="h-4/6 w-full bg-white p-4">
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View className="mt-2">
                        <View className="flex flex-row gap-2 w-full h-20 items-center">
                            <View className="w-8 h-8 rounded-full bg-green-500" />
                            <View>
                                <Text className="text-sm mb-1">Dr.Mariam, 8:30</Text>
                                <View className="flex flex-row items-center gap-5">
                                    <View className="bg-[#F6FAF8] rounded-tr-lg rounded-br-lg rounded-bl-lg w-52 p-3">
                                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setClick(!click)}>
                                        <AntDesign name={click ? 'hearto' : 'heart'} size={15} color={click ? Colors.black : Colors.red} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="mt-5">
                        <View className="w-full h-20 items-end">
                            <Text className="text-sm mb-1">Sumeet, 8:30</Text>
                            <View className="bg-[#F6FAF8] rounded-tl-lg rounded-br-lg rounded-bl-lg w-64 p-3">
                                <Text>Sed do eiusmod tempor incididunt.</Text>
                            </View>
                        </View>
                    </View>
                    <View className="mt-2">
                        <View className="flex flex-row gap-2 w-full h-20 items-center">
                            <View className="w-8 h-8 rounded-full bg-green-500" />
                            <View>
                                <Text className="text-sm mb-1">Dr.Mariam, 8:30</Text>
                                <View className="flex flex-row items-center gap-5">
                                    <View className="bg-[#F6FAF8] rounded-tr-lg rounded-br-lg rounded-bl-lg w-52 p-3">
                                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setClick(!click)}>
                                        <AntDesign name={click ? 'hearto' : 'heart'} size={15} color={click ? Colors.black : Colors.red} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="mt-5">
                        <View className="w-full h-20 items-end">
                            <Text className="text-sm mb-1">Sumeet, 8:30</Text>
                            <View className="bg-[#F6FAF8] rounded-tl-lg rounded-br-lg rounded-bl-lg w-64 p-3">
                                <Text>Sed do eiusmod tempor incididunt.</Text>
                            </View>
                        </View>
                    </View>
                    <View className="mt-2">
                        <View className="flex flex-row gap-2 w-full h-20 items-center">
                            <View className="w-8 h-8 rounded-full bg-green-500" />
                            <View>
                                <Text className="text-sm mb-1">Dr.Mariam, 8:30</Text>
                                <View className="flex flex-row items-center gap-5">
                                    <View className="bg-[#F6FAF8] rounded-tr-lg rounded-br-lg rounded-bl-lg w-52 p-3">
                                        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing.</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setClick(!click)}>
                                        <AntDesign name={click ? 'hearto' : 'heart'} size={15} color={click ? Colors.black : Colors.red} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className="mt-5">
                        <View className="w-full h-20 items-end">
                            <Text className="text-sm mb-1">Sumeet, 8:30</Text>
                            <View className="bg-[#F6FAF8] rounded-tl-lg rounded-br-lg rounded-bl-lg w-64 p-3">
                                <Text>Sed do eiusmod tempor incididunt.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View className="h-20 w-full bg-[#F6FAF8] border-t border-[#EBF4F3]">
                <View className="flex flex-row justify-between items-center p-5">
                    <Entypo name='attachment' size={20} />
                    <View className="bg-white p-2 pl-3 w-56">
                        <TextInput
                            placeholder='Message ...'
                        />
                    </View>
                    <SimpleLineIcons name='emotsmile' size={20} />
                    <MaterialIcons name='keyboard-voice' size={20} />
                </View>
            </View>
        </View>
    )
}

export default ChatScreen

const styles = StyleSheet.create({})