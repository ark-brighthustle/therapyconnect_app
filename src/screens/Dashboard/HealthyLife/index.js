import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ImagesContent } from '../../../constants/images'

const HealthyLife = () => {
  const arr = [0, 1]
  return (
    <ScrollView>
      <View className="flex bg-white">
        <View className="bg-red-500 h-60" />
        <View className="pl-6 mt-5 pr-6">
          <View className="flex flex-row justify-between pr-8 items-end gap-2">
            <View>
              <Text className="text-3xl font-bold">A holistic and natural healthcare healing body</Text>
            </View>
            <Text>icon</Text>
          </View>
          <View className="mt-5">
            <View style={styles.firstView}>
              <View className="flex flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-full bg-red-500" />
                <View>
                  <Text className="text-lg font-bold">By Sudhir Kiran</Text>
                  <Text className="text-sm">Naturopathic medicine</Text>
                </View>
              </View>
              <Text className="text-sm mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
            </View>
          </View>
          <View className="mt-5">
            <Text className="text-2xl font-bold text-black">How it works</Text>
            {
              arr.map((data) => {
                return (
                  <View className="flex flex-row p-2 gap-2 items-center mt-2">
                    <Image source={ImagesContent.health_package} className="w-12 h-12" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                    <Text className="pl-3 pr-5 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default HealthyLife

const styles = StyleSheet.create({
  firstView: {
    borderWidth: 1,
    padding: 20,
    borderColor: "#EBF4F3",
    backgroundColor: "#F6FAF8",
    borderRadius: 5
  }
})