import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImagesContent } from '../../../constants/images'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const HealthPackage = () => {
  const navigation = useNavigation()
  const arr = [0, 1, 2]
  const arr1 = [0, 1, 2, 3, 4]
  return (
    <ScrollView>
      <View className="flex w-full h-full bg-white">
        <StatusBar barStyle="light-content" />
        <View>
          <View className="w-full h-56 bg-red-500" />
        </View>
        <View className="p-6 mt-3">
          <Text className="text-2xl font-bold text-black">24x7 Family Caring System</Text>
          <View className="mt-5">
            <Text className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
          </View>
        </View>
        <View className=" flex flex-row justify-between ml-5 mr-5">
          {
            arr.map((data) => {
              return (
                <View className="flex flex-row items-center justify-between p-5 mt-2">
                  <View className="items-center">
                    <Image source={ImagesContent.health_package} className="w-12 h-12" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                    <Text className="mt-2 text-sm">Available</Text>
                    <Text className="mt-1 text-sm">24x7</Text>
                  </View>
                  <View className="w-0.5 ml-10 h-12 bg-[#D3D3D3]" />
                </View>
              )
            })
          }
        </View>
        <View className="p-6 mt-3">
          <Text className="text-2xl font-bold text-black">How it works</Text>
          {
            arr1.map((data) => {
              return (
                <View className="flex flex-row p-2 gap-2 items-center mt-2">
                  <Image source={ImagesContent.health_package} className="w-12 h-12" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                  <Text className="pl-5 pr-5 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
              )
            })
          }
        </View>
        <View className="p-6">
          <Text className="text-2xl font-bold text-black">Testimonials</Text>
          <View className="p-6">
            <View className="w-full h-56 bg-red-500" />
          </View>
        </View>
        <View className="p-6">
          <Text className="text-2xl font-bold text-black">Frequently Asked Questions</Text>
          <View className="pt-2">
            {
              arr1.map((data) => {
                return (
                  <View>
                    <View className="flex flex-row items-center justify-between pt-5">
                      <Text className="text-lg">Who are Therapy connect Doctors? </Text>
                      <AntDesign name="right" size={20} color={"#696969"} />
                    </View>
                    <View className="w-full h-0.5 mt-5 bg-[#D3D3D3]" />
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className="p-5">
          <TouchableOpacity className="bg-[#FF4500] w-full h-20 rounded-xl items-center justify-center" onPress={() => navigation.navigate('Consultant Physician')}>
            <Text className="text-lg font-bold text-white">GET UNLIMITED CONSULTATIONS</Text>
            <Text className="text-sm font-semibold text-white">Packages start at ₹399</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default HealthPackage

const styles = StyleSheet.create({})