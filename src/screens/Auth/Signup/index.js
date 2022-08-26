import { StyleSheet, Text, ImageBackground, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagesContent } from '../../../constants/images'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { TextInput } from 'react-native-gesture-handler'

const Signup = () => {
    return (
        <View className="w-full h-full bg-[#5ba273]">
            <ImageBackground source={ImagesContent.splashBack} resizeMode="cover" className="w-full h-full">
                {/* <Image source={ImagesContent.Logo1} resizeMode="contain" className="w-52 h-52" /> */}
                {/* <Image source={ImagesContent.Logo} resizeMode="contain" className="w-60 h-60" /> */}
                <View className="overflow-hidden ml-3 mt-6 items-end justify-end" style={{ width: getWidth("190%"), height: getHeight("110%") }}>
                    <View style={{ width: getWidth("190%"), height: getHeight("92.333333%"), borderRadius: 950, backgroundColor: "white" }}>
                    </View>
                    {/* className="w-full h-5/6 rounded-full bg-white"  */}
                </View>
                <View style={{ position: "absolute", top: getHeight("9%"), left: "25%", right: 0, bottom: 0 }}>
                    <Image source={ImagesContent.Logo1} resizeMode="contain" className="w-52 h-52" />
                    <View className="items-end mr-5" style={{ marginTop: getHeight("-8%") }}>
                        <Text className="text-2xl font-bold ">Signup</Text>
                    </View>
                    <View className="ml-5 justify-center mr-5" style={{ marginTop: getHeight("8%") }}>
                        <View>
                            <TextInput
                                style={{ borderBottomWidth: 1 }}
                                placeholder='Enter Full Name'
                            />
                        </View>
                        <View className="mt-7">
                            <TextInput
                                style={{ borderBottomWidth: 1 }}
                                placeholder='Enter Mobile Number'
                            />
                        </View>
                        <View className="mt-7">
                            <TextInput
                                style={{ borderBottomWidth: 1 }}
                                placeholder='Enter Email Address'
                            />
                        </View>
                        <View className="mt-7">
                            <TextInput
                                style={{ borderBottomWidth: 1 }}
                                placeholder='Enter Your Password'
                            />
                        </View>
                        <View className="mt-7">
                            <TextInput
                                style={{ borderBottomWidth: 1 }}
                                placeholder='Enter Reference Code (optional)'
                            />
                        </View>
                        <View className="mt-7">
                            <TextInput
                                style={{ borderBottomWidth: 1 }}
                                placeholder='Enter Your Name'
                            />
                        </View>
                        <View className="mt-7 items-end">
                            <Text className="text-md">Agree with Terms & Conditions </Text>
                        </View>
                        <View style={{ alignItems: "flex-end" }}>
                            <TouchableOpacity className="mt-5 items-center h-10 w-20 rounded-3xl bg-[#5ba273] justify-center">
                                <Text className="text-md font-bold text-white">Signup</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({})