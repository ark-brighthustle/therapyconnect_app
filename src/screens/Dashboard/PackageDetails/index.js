import { View, ScrollView, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { ImagesContent } from '../../../constants/images'
import { Colors } from '../../../constants/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { getHeight, getWidth } from '../../../components/Dimensions'
import axios from 'axios'
import config from '../../../config'
import TextComponent from '../../../components/TextComponent'
import AnimatedLoader from 'react-native-animated-loader'

export default class PackageDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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
          isLoading: false
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
            price_amount: this.state.package_price[i].amount,
            isLoading: false,
          })
        }
      }
    }
    return (
      <View>
        {
          this.state.isLoading ?
            <View style={styles.container}>
              <AnimatedLoader
                visible={this.state.isLoading}
                overlayColor="rgba(255,255,255,0.75)"
                animationStyle={styles.lottie}
                source={ImagesContent.Loader1}
                speed={1}
              />
            </View>
            :
            <ScrollView>
              <View className="flex w-full h-full bg-white">
                <StatusBar barStyle="light-content" />
                <View>
                  <View className="w-full h-56 bg-red-500">
                    <Image source={ImagesContent.package_img} className="w-full h-60" resizeMode="cover" />
                  </View>
                  <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} className="items-center justify-center">
                    <TextComponent className1="text-3xl text-[#5aa272]" isSemiBold={true}>{this.state.package_details.packageName}</TextComponent>
                  </View>
                </View>
                <View className="p-6 mt-3">
                  {/* <Text className="text-2xl font-bold text-black">{this.state.package_details.packageName}</Text> */}
                  <View className="mt-5">
                    <TextComponent className1="text-sm text-justify">{this.state.package_details.packageDescription}</TextComponent>
                  </View>
                </View>
                <View className=" flex flex-row justify-between ml-2 mr-2">
                  {
                    arr.map((data) => {
                      return (
                        <View className="flex flex-row items-center justify-between p-4">
                          <View className="items-center">
                            <Image source={ImagesContent.health_package} className="w-12 h-12" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                            <TextComponent className1="mt-2 text-sm">Available</TextComponent>
                            <TextComponent className1="mt-1 text-sm">24x7</TextComponent>
                          </View>
                          <View className="w-0.5 ml-10 h-12 bg-[#D3D3D3]" />
                        </View>
                      )
                    })
                  }
                </View>
                <View className="pl-6 pr-6 pt-6">
                  <TextComponent className1="text-2xl pb-4 text-black" isSemiBold={true}>Benefits</TextComponent>
                  {
                    this.state.package_benefits.map((data) => {
                      return (
                        <View className="flex flex-row p-2 items-center gap-2">
                          <Image source={ImagesContent.health_package} className="mt-1 w-6 h-6" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                          <TextComponent className1="pl-3 text-sm">{data.title}</TextComponent>
                        </View>
                      )
                    })
                  }
                </View>
                <View className="pl-6 pr-6 pt-6">
                  <TextComponent className1="text-2xl pb-4 text-black" isSemiBold={true}>Terms & Conditions</TextComponent>
                  {
                    this.state.package_terms.map((data) => {
                      return (
                        <View className="flex flex-row p-2 gap-2 items-start">
                          <TextComponent className1="text-5xl">•</TextComponent>
                          <TextComponent className1="pl-3 pr-2 text-justify text-sm">{data.title}</TextComponent>
                        </View>
                      )
                    })
                  }
                </View>
                <View className="p-6">
                  <TextComponent className1="text-2xl text-black" isSemiBold={true}>Select Month</TextComponent>
                  <View className="pt-4 pl-4 pr-4 w-full">
                    <SelectDropdown
                      // ref={this.SelectRef}
                      defaultButtonText={<TextComponent>Select Month</TextComponent>}
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
                        return <TextComponent>{selectedItem}</TextComponent>
                      }}
                      rowTextForSelection={(item, index) => {
                        return <TextComponent>{item}</TextComponent>
                      }}
                    />
                  </View>
                </View>
                <View className="p-6">
                  <TouchableOpacity
                    className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-full p-4"
                  // onPress={() => { this.BottomSheet.show() }}
                  >
                    <TextComponent className1="text-lg text-white" isSemiBold={true}>₹{this.state.price_amount}</TextComponent>
                    <TextComponent className1="text-lg text-white" isSemiBold={true}>Buy Subscription</TextComponent>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: getWidth("100%"),
    height: getHeight("100%"),
    backgroundColor: Colors.white,
  },
  lottie: {
    width: getWidth("50%"),
    height: getHeight("50%"),
    resizeMode: "cover"
  },
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
