import { Text, View, ScrollView, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { ImagesContent } from '../../../constants/images'
import { Colors } from '../../../constants/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getWidth } from '../../../components/Dimensions'
import axios from 'axios'
import config from '../../../config'

export default class PackageDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      propId: props.route.params.id,
      package_details: [],
      package_benefits: [],
      package_terms: [],
      package_price: [],
      price_month: [],
      price_amount: 0,
    }
  }

  componentWillMount() {
    axios.get(config.BASE_URL + '/health-packages/' + this.state.propId +
      '?sort=id:asc&populate[packageImage]=*' + '&populate[packageBenifits]=*' +
      '&populate[packageTerms]=*' + '&populate[packagePricing]=*')
      .then((response) => {
        this.setState({
          package_details: response.data.data,
          package_benefits: response.data.data.packageBenifits,
          package_terms: response.data.data.packageTerms,
          package_price: response.data.data.packagePricing,
        })
        var count = response.data.data.packagePricing.length;
        for (var i = 0; i < count; i++) {
          this.state.price_month.push(response.data.data.packagePricing[i].month);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { navigation } = this.props;
    const arr = [0, 1, 2]

    const onSelectCommon = (value, id) => {
      var count = this.state.package_price.length;
      for (var i = 0; i < count; i++) {
        if (this.state.package_price[i].month === value) {
          this.setState({
            price_amount: this.state.package_price[i].amount
          })
        }
      }
    }
    return (
      <ScrollView>
        <View className="flex w-full h-full bg-white">
          <StatusBar barStyle="light-content" />
          <View>
            <View className="w-full h-56 bg-red-500">
              <Image source={ImagesContent.package_img} className="w-full h-60" resizeMode="cover" />
            </View>
          </View>
          <View className="p-6 mt-3">
            <Text className="text-2xl font-bold text-black">{this.state.package_details.packageName}</Text>
            <View className="mt-5">
              <Text className="text-sm text-justify">{this.state.package_details.packageDescription}</Text>
            </View>
          </View>
          <View className=" flex flex-row justify-between ml-5 mr-3">
            {
              arr.map((data) => {
                return (
                  <View className="flex flex-row items-center justify-between p-4">
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
            <Text className="text-2xl font-bold pb-4 text-black">Benefits</Text>
            {
              this.state.package_benefits.map((data) => {
                return (
                  <View className="flex flex-row p-2 items-center gap-2">
                    <Image source={ImagesContent.health_package} className="mt-1 w-6 h-6" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                    <Text className="pl-3 text-sm">{data.title}</Text>
                  </View>
                )
              })
            }
          </View>
          <View className="pl-6 pr-6 pt-6">
            <Text className="text-2xl font-bold pb-4 text-black">Terms & Conditions</Text>
            {
              this.state.package_terms.map((data) => {
                return (
                  <View className="flex flex-row p-2 gap-2 items-start">
                    <Text className="text-5xl">•</Text>
                    <Text className="pl-3 pr-2 text-justify text-sm">{data.title}</Text>
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
                defaultButtonText={'Select Month'}
                buttonStyle={styles.buttonStyle}
                buttonTextStyle={{ fontSize: 16 }}
                data={this.state.price_month}
                dropdownStyle={styles.drop}
                dropdownIconPosition="right"
                onSelect={(selectedItem, index) => onSelectCommon(selectedItem, index)}
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
          <View className="p-6">
            <TouchableOpacity
              className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-full p-4"
            // onPress={() => { this.BottomSheet.show() }}
            >
              <Text className="text-lg font-bold text-white">₹{this.state.price_amount}</Text>
              <Text className="text-lg font-bold text-white">Buy Subscription</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.black,
    width: getWidth("80%")
  },
  drop: {
    width: getWidth("80%"),
    borderRadius: 10
  }
})
