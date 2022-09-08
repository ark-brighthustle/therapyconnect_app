import { StyleSheet, Text, View, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { ImagesContent } from '../../../constants/images'
import { useNavigation } from '@react-navigation/native'
import { Colors } from '../../../constants/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getWidth } from '../../../components/Dimensions'

const PackageDetails = () => {
  const countries = ['Surat', 'Delhi', 'Mumbai']
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
        <View className=" flex flex-row justify-between ml-3 mr-8">
          {
            arr.map((data) => {
              return (
                <View className="flex flex-row items-center justify-between p-5">
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
        <View className="pl-6 pr-6 pt-6">
          <Text className="text-2xl font-bold text-black">Benefits</Text>
          {
            arr1.map((data) => {
              return (
                <View className="flex flex-row p-4 items-center gap-2">
                  <Image source={ImagesContent.health_package} className="mt-1 w-6 h-6" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                  <Text className="pl-3 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
              )
            })
          }
        </View>
        <View className="pl-6 pr-6 pt-6">
          <Text className="text-2xl font-bold text-black">Terms & Conditions</Text>
          {
            arr1.map((data) => {
              return (
                <View className="flex flex-row p-4 gap-2 items-center mt-0.5">
                  <Text className="text-5xl">•</Text>
                  <Text className="pl-3 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Text>
                </View>
              )
            })
          }
        </View>
        <View className="p-6">
          <Text className="text-2xl font-bold text-black">Select Month</Text>
          <View className="pt-4 pl-4 pr-4 w-full">
            <SelectDropdown
              // ref={this.SelectRef}
              // defaultButtonText={this.state.searchLocationValue}
              buttonStyle={{ backgroundColor: Colors.white, borderWidth: 1, borderRadius: 10, borderColor: Colors.black, width: getWidth("80%") }}
              buttonTextStyle={{ fontSize: 16, }}
              data={countries}
              dropdownStyle={{ width: getWidth("80%"), borderRadius: 10 }}
              dropdownIconPosition="right"
              onSelect={(selectedItem, index) => onSelectCommon(selectedItem, index, "LOCATION")}
              renderDropdownIcon={isOpened => {
                return (
                  <View className="mr-5">
                    <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />
                  </View>
                );
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </View>
        </View>
        <View className="p-5">
          <TouchableOpacity
            className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-full p-4"
          // onPress={() => { this.BottomSheet.show() }}
          >
            <Text className="text-lg font-bold text-white">₹399</Text>
            <Text className="text-lg font-bold text-white">Buy Subscription</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default PackageDetails
