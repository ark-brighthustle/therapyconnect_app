import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'
import { Colors } from '../../../constants/colors'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import TextComponent from '../../../components/TextComponent'

const DoctorInfo = () => {
  const navigation = useNavigation()

  const arr = [0, 1, 2, 3, 4]
  return (
    <ScrollView>
      <View className="w-full h-full bg-[#F6FAF8]">
        <View className="flex bg-white p-5 h-62" style={{ borderBottomWidth: 2, borderBottomColor: "#EBF4F3" }}>
          <View className="flex flex-row gap-10">
            <TouchableOpacity className="w-24 h-24 rounded-full bg-red-500" />
            <View className="w-2/4">
              <TextComponent className1="text-xl" isSemiBold={true}>Dr. Mariam Garcia</TextComponent>
              <TouchableOpacity className="mt-1 w-24 rounded-lg h-7 items-center justify-center bg-[#5aa272]">
                <TextComponent className1="text-sm text-white" isSemiBold={true}>Allopathic</TextComponent>
              </TouchableOpacity>
              <View className="flex flex-row items-center gap-1 mt-1">
                <Entypo name="location-pin" size={25} color={Colors.headerColor} />
                <TextComponent className1="text-md" isSemiBold={true}>4A, SSG Vadodara, Guj.</TextComponent>
              </View>
              <TextComponent className1="mt-1 text-md">Allopathic BHMS (Hons), DHMS(Hons), MBBS, MD</TextComponent>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between mt-8">
            <View>
              <TextComponent className1="text-sm">Next Available</TextComponent>
              <TextComponent className1="text-lg" isSemiBold={true}>10:00 PM, Today</TextComponent>
            </View>
            <TouchableOpacity
              className="justify-center items-center rounded-lg ml-2 bg-red-500 w-48 h-12 p-3"
              onPress={() => navigation.navigate('Slot Patient')}
            >
              <TextComponent className1="text-md text-white" isSemiBold={true}>CONSULT NOW</TextComponent>
              {/* <Text className="text-md font-bold text-white">₹400</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-10">
          <View className="flex flex-row justify-center items-center">
            <View style={[styles.tabView, { backgroundColor: Colors.white }]}>
              <TextComponent className1="text-sm text-black">Information</TextComponent>
            </View>
            <View style={[styles.tabView, { backgroundColor: Colors.headerColor }]}>
              <TextComponent className1="text-sm text-white">   Reviews   </TextComponent>
            </View>
            <View style={[styles.tabView, { backgroundColor: Colors.white }]}>
              <TextComponent className1="text-sm text-black">Consult(Q/A)</TextComponent>
            </View>
          </View>
        </View>
        <View className="gap-3 ml-6 mr-6 mb-6">
          {
            arr.map((data) => {
              return (
                <View className="p-1 h-58 bg-white" style={styles.main}>
                  <View className="p-5">
                    <View className="flex flex-row items-center gap-4">
                      <View className="w-14 h-14 rounded-full bg-red-500" />
                      <View>
                        <TextComponent className1="text-lg" isBold={true}>Visited For Back Pain</TextComponent>
                        <TextComponent className1="text-sm">Khushi Patel | 15 hrs ago</TextComponent>
                      </View>
                    </View>
                    <View className="flex flex-row items-center gap-2 pt-5 pb-5">
                      <TextComponent className1="text-lg" isSemiBold={true}>Excellent</TextComponent>
                      <View className="w-14 items-center justify-center h-8 bg-[#5aa272] rounded-lg">
                        <TextComponent className1="text-lg text-white" isSemiBold={true}>5.0</TextComponent>
                      </View>
                    </View>
                    <TextComponent className1="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextComponent>
                  </View>
                </View>
              )
            })
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default DoctorInfo

const styles = StyleSheet.create({
  tabView: {
    borderWidth: 2,
    borderColor: "#EBF4F3",
    borderRadius: 6,
    paddingHorizontal: getWidth("2.6%"),
    paddingVertical: getHeight("2%")
  },
  main: {
    borderWidth: 2,
    borderColor: "#EBF4F3",
  }
})