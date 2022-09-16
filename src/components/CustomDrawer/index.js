import React from 'react'
import { View, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import { ImagesContent } from '../../constants/images'

const CustomDrawer = (props) => {
    const navigation = useNavigation();
    return (
        <View className="flex w-full h-full bg-white">
            <View className="w-full h-60 bg-green-200 items-center justify-center">
                <Image source={ImagesContent.Logo1} className="w-44 h-36" resizeMode='contain' />
            </View>
            {/* <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}> */}
            <View className="mt-3">
                <DrawerItemList {...props} />
            </View>
            {/* </DrawerContentScrollView> */}
            <View>

            </View>
        </View>
    )
}

export default CustomDrawer
