import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../../../constants/colors'
import { getHeight, getWidth } from '../../../components/Dimensions'
import TextComponent from '../../../components/TextComponent'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import config from '../../../config'
import { ImagesContent } from '../../../constants/images'
import AnimatedLoader from 'react-native-animated-loader'

export default class DoctorInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      valueId: props.route.params.key,
      name: "",
      therapy: "",
      city: "",
      state: "",
      degree: "",
      deliveryFee: "",
    }
    console.log("my key", this.state.valueId);
  }

  componentDidMount() {
    axios.get(config.BASE_URL + "/doctor-registerations/" + this.state.valueId + "?populate=*")
      .then(async (response) => {
        await this.setState({
          name: response.data.data.firstName,
          therapy: response.data.data.therapy.label,
          city: response.data.data.city,
          state: response.data.data.state,
          degree: response.data.data.degree.label,
          deliveryFee: response.data.data.deliveryModesFee[2],
          isLoading: false,
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { navigation } = this.props
    const arr = [0, 1, 2, 3, 4]
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
              <View className="w-full h-full bg-[#F6FAF8]">
                <View
                  className="flex bg-white p-5 h-62"
                  style={{ borderBottomWidth: 2, borderBottomColor: "#EBF4F3" }}
                >
                  <View className="flex flex-row items-center gap-10">
                    <View className="w-24 h-24 rounded-full">
                      <Image
                        source={ImagesContent.Logo2}
                        className="w-24 h-24 rounded-full"
                        resizeMode="contain"
                      />
                    </View>
                    <View className="w-2/4">
                      <TextComponent
                        className1="text-xl"
                        isSemiBold={true}
                      >
                        {this.state.name}
                      </TextComponent>
                      <TouchableOpacity
                        className="mt-1 rounded-lg p-1 items-center justify-center bg-[#5aa272]"
                      >
                        <TextComponent
                          className1="text-sm text-white"
                          isSemiBold={true}
                        >
                          {this.state.therapy}
                        </TextComponent>
                      </TouchableOpacity>
                      <View className="flex flex-row items-center gap-1 mt-1">
                        <Entypo
                          name="location-pin"
                          size={25}
                          color={Colors.headerColor}
                        />
                        <TextComponent
                          className1="text-md"
                          isSemiBold={true}
                        >
                          {this.state.city}, {this.state.state}
                        </TextComponent>
                      </View>
                      <TextComponent className1="mt-1 text-md">
                        {this.state.degree}
                      </TextComponent>
                    </View>
                  </View>
                  <View className="flex flex-row items-center ml-2 justify-between mt-8">
                    <View>
                      <TextComponent className1="text-sm">
                        Starting from
                      </TextComponent>
                      <TextComponent
                        className1="text-lg"
                        isSemiBold={true}
                      >
                        ₹{this.state.deliveryFee}
                      </TextComponent>
                    </View>
                    <TouchableOpacity
                      className="justify-center items-center rounded-lg mr-4 bg-red-500 w-48 h-12 p-3"
                      onPress={() => navigation.navigate('Slot Patient')}
                    >
                      <TextComponent
                        className1="text-md text-white"
                        isSemiBold={true}
                      >
                        CONSULT NOW
                      </TextComponent>
                      {/* <Text className="text-md font-bold text-white">₹400</Text> */}
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="p-10">
                  <View className="flex flex-row justify-center items-center">
                    <View style={[styles.tabView, { backgroundColor: Colors.white }]}>
                      <TextComponent className1="text-sm text-black">
                        Information
                      </TextComponent>
                    </View>
                    <View style={[styles.tabView, { backgroundColor: Colors.headerColor }]}>
                      <TextComponent className1=" ml-2 mr-2 text-sm text-white">
                        Reviews
                      </TextComponent>
                    </View>
                    <View style={[styles.tabView, { backgroundColor: Colors.white }]}>
                      <TextComponent className1="text-sm text-black">
                        Consult(Q/A)
                      </TextComponent>
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
                                <TextComponent
                                  className1="text-lg"
                                  isBold={true}
                                >
                                  Visited For Back Pain
                                </TextComponent>
                                <TextComponent className1="text-sm">
                                  Khushi Patel | 15 hrs ago
                                </TextComponent>
                              </View>
                            </View>
                            <View className="flex flex-row items-center gap-2 pt-5 pb-5">
                              <TextComponent
                                className1="text-lg"
                                isSemiBold={true}
                              >
                                Excellent
                              </TextComponent>
                              <View className="w-14 items-center justify-center h-8 bg-[#5aa272] rounded-lg">
                                <TextComponent
                                  className1="text-lg text-white"
                                  isSemiBold={true}
                                >
                                  5.0
                                </TextComponent>
                              </View>
                            </View>
                            <TextComponent className1="text-sm">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </TextComponent>
                          </View>
                        </View>
                      )
                    })
                  }
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
    backgroundColor: Colors.white,
    width: getWidth("100%"),
    height: getHeight("100%"),
  },
  lottie: {
    width: getWidth("50%"),
    height: getHeight("50%"),
    resizeMode: "cover",
  },
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