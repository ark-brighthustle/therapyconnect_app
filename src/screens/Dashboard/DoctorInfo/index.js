import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import React from 'react'
import { Colors } from '../../../constants/colors'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { ScrollView } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

const DoctorInfo = () => {
  const navigation = useNavigation()

  const arr = [0, 1, 2, 3, 4]
  return (
    <ScrollView>
      <View className="w-full h-full bg-[#F6FAF8]">
        <View className="flex bg-white p-5 h-62" style={{ borderBottomWidth: 2, borderBottomColor: "#EBF4F3" }}>
          <View className="flex flex-row gap-10">
            <TouchableOpacity className="w-24 h-24 rounded-full bg-red-500" onPress={() => navigation.navigate('Chat Screen')} />
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
              className="justify-center items-center rounded-lg ml-2 bg-red-500 w-48 h-12 p-3"
              onPress={() => navigation.navigate('Slot Patient')}
            >
              <Text className="text-md font-bold text-white">CONSULT NOW</Text>
              {/* <Text className="text-md font-bold text-white">₹400</Text> */}
            </TouchableOpacity>
          </View>
        </View>
        <View className="p-10">
          <View className="flex flex-row justify-center items-center">
            <View style={[styles.tabView, { backgroundColor: Colors.white }]}>
              <Text className="text-sm text-black">Information</Text>
            </View>
            <View style={[styles.tabView, { backgroundColor: Colors.headerColor }]}>
              <Text className="text-sm font-bold text-white">   Reviews   </Text>
            </View>
            <View style={[styles.tabView, { backgroundColor: Colors.white }]}>
              <Text className="text-sm text-black">Consult(Q/A)</Text>
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
                        <Text className="text-lg font-bold">Visited For Back Pain</Text>
                        <Text className="text-sm">Khushi Patel | 15 hrs ago</Text>
                      </View>
                    </View>
                    <View className="flex flex-row items-center gap-2 pt-5 pb-5">
                      <Text className="text-lg font-bold">Excellent</Text>
                      <View className="w-14 items-center justify-center h-8 bg-[#5aa272] rounded-lg">
                        <Text className="text-lg font-bold text-white">5.0</Text>
                      </View>
                    </View>
                    <Text className="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
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
    paddingHorizontal: getWidth("5%"),
    paddingVertical: getHeight("2%")
  },
  main: {
    borderWidth: 2,
    borderColor: "#EBF4F3",
  }
})