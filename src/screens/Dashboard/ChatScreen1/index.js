import { StatusBar, StyleSheet, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import TextComponent from '../../../components/TextComponent'
import { getWidth } from '../../../components/Dimensions'
import { useNavigation } from '@react-navigation/native'

const ChatScreen1 = () => {
    const navigation = useNavigation()
    const [click, setClick] = useState(false);
    return (
        <View className="w-full h-full">
            <StatusBar
                barStyle={'light-content'}
                backgroundColor={Colors.headerColor}
            />
            <View className="h-fit w-full bg-[#5aa272] flex flex-row p-2 pt-4 pb-4 items-center justify-between">
                <Ionicons
                    name='arrow-back'
                    size={25}
                    color={Colors.white}
                />
                <View
                    style={{ marginLeft: getWidth("-3%") }}
                    className="w-10 h-10 rounded-full bg-white"
                />
                <View
                    className="gap-0.5"
                    style={{ marginLeft: getWidth("-1%") }}
                >
                    {/* <View className="flex flex-row"> */}
                    <TextComponent
                        className1="text-lg text-white"
                        isSemiBold={true}
                    >
                        Dr. Mariam Garcia
                    </TextComponent>
                    {/* <TextComponent
                            className1="text-lg text-white"
                            isSemiBold={true}
                        >
                            ...
                        </TextComponent> */}
                    {/* </View> */}
                    <View className="w-20 h-6 rounded-lg bg-green-900 justify-center items-center">
                        <TextComponent
                            className1="text-xs text-white"
                            isMedium={true}
                        >
                            Allopathic
                        </TextComponent>
                    </View>
                </View>
                <TouchableOpacity
                    // onPress={() => navigation.navigate('VideoScreen')}
                >
                    <FontAwesome5
                        name="video"
                        size={22}
                        color={'white'}
                    />
                </TouchableOpacity>
                <MaterialIcons
                    name="call"
                    size={22}
                    color={'white'}
                />
                <MaterialCommunityIcons
                    name="dots-vertical"
                    size={22}
                    color={'white'}
                />
            </View>
        </View>
    )
}

export default ChatScreen1

const styles = StyleSheet.create({})