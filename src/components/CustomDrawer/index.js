import React from 'react'
import { View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { ImagesContent } from '../../constants/images'
import TextComponent from '../../components/TextComponent'

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <View className="flex w-full h-full bg-white">
            <View className="w-full h-60 bg-[#5aa272] items-center justify-center">
                <Image source={ImagesContent.Logo1} className="w-44 h-36" resizeMode='contain' />
                <TextComponent className1={"text-lg mt-4 text-white"} isSemiBold={true}>John Luis</TextComponent>
            </View>
            {/* <View className="w-full h-2 bg-[#5aa272]" /> */}
            {/* <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}> */}
            <View className="mt-3">
                <DrawerItemList {...props} />
            </View>
            {/* </DrawerContentScrollView> */}
            <View className="h-48 items-center justify-end">
                <TextComponent className1={"text-sm text-gray-500"}>@TherapyConnect V 1.6</TextComponent>
            </View>
        </View>
    )
}

export default CustomDrawer
