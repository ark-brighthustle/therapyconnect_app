import { StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import BottomSheet from "react-native-gesture-bottom-sheet";
import TextComponent from '../../../components/TextComponent'
import { ImagesContent } from '../../../constants/images'
import axios from 'axios'
import config from '../../../config'
import AnimatedLoader from 'react-native-animated-loader';
import { getHeight, getWidth } from '../../../components/Dimensions';

export default class ConsultantPhysician extends Component {

    constructor(props) {
        super(props)
        this.state = {
            totalCount: 0,
            isLoading: true,
            value: props.route.params.name,
            valueType: props.route.params.key,
            dynamicArray: []
        }
        console.log("my prop", this.state.value);
    }

    componentDidMount() {
        axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[deliveryModes][label][$eq]=" + this.state.value)
            .then((response) => {
                // console.log("response", response.data.data);
                var count = response.data.data.length;
                console.log("My Count", count);
                this.setState({
                    totalCount: count,
                    dynamicArray: response.data.data,
                    isLoading: false,
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { navigation } = this.props;

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
                        <View className="h-full w-full">
                            <View className="h-full pt-2 bg-[#E5E7E9]">
                                <View className="p-4">
                                    <View className="flex flex-row items-center gap-2">
                                        <TextComponent
                                            className1="text-xl mr-1 text-[#5aa272]"
                                            isSemiBold={true}
                                        >
                                            {this.state.totalCount} doctor(s)
                                        </TextComponent>
                                        <TextComponent
                                            className1="text-xl text-black"
                                            isSemiBold={true}
                                        >
                                            found
                                        </TextComponent>
                                    </View>
                                    <TextComponent
                                        className1="text-sm mt-0.5 text-[#99A3A4]"
                                        isSemiBold={true}
                                    >
                                        {this.state.totalCount}+ doctors available for {this.state.valueType}
                                    </TextComponent>
                                </View>
                                <ScrollView>
                                    <View className="flex w-full h-full">
                                        {
                                            this.state.dynamicArray.map((data) => {
                                                return (
                                                    <View>
                                                        <View className="flex bg-white p-5">
                                                            <View className="flex flex-row items-center gap-10">
                                                                <View className="items-center">
                                                                    <View className="w-24 h-24 rounded-full">
                                                                        <Image
                                                                            source={ImagesContent.Logo2}
                                                                            className="w-24 h-24 rounded-full"
                                                                            resizeMode="contain"
                                                                        />
                                                                    </View>
                                                                    <TouchableOpacity
                                                                        onPress={() => navigation.navigate('Doctor Info', { key: data.id })}
                                                                    >
                                                                        <TextComponent
                                                                            className1="mt-2 text-md text-red-500"
                                                                            isSemiBold={true}
                                                                        >
                                                                            View Profile
                                                                        </TextComponent>
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <View className="w-2/4">
                                                                    <TextComponent
                                                                        className1="text-xl"
                                                                        isSemiBold={true}
                                                                    >
                                                                        {data.firstName}
                                                                    </TextComponent>
                                                                    <TouchableOpacity
                                                                        className="mt-1 rounded-lg p-1 items-center justify-center bg-[#5aa272]"
                                                                    >
                                                                        <TextComponent
                                                                            className1="text-sm text-white"
                                                                            isMedium={true}
                                                                        >
                                                                            {data.therapy.label}
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
                                                                            {data.city}, {data.state}
                                                                        </TextComponent>
                                                                    </View>
                                                                    <TextComponent
                                                                        className1="mt-1 text-md"
                                                                    >
                                                                        {data.degree.label}
                                                                    </TextComponent>
                                                                </View>
                                                            </View>
                                                            <View className="flex flex-row ml-1.5 items-center justify-between mt-8">
                                                                <View>
                                                                    <TextComponent
                                                                        className1="text-sm"
                                                                    >
                                                                        Starting from
                                                                    </TextComponent>
                                                                    <TextComponent
                                                                        className1="text-lg"
                                                                        isSemiBold={true}
                                                                    >
                                                                        ₹{data.deliveryModesFee[2]}
                                                                    </TextComponent>
                                                                </View>
                                                                <TouchableOpacity
                                                                    className="flex justify-center items-center rounded-lg bg-red-500 w-48 mr-4 h-12 p-3"
                                                                    // onPress={() => { this.BottomSheet.show() }}
                                                                    onPress={() => navigation.navigate("Slot Patient", { key: data.id, type: this.state.valueType, health: "", mode: this.state.value })}
                                                                >
                                                                    <TextComponent
                                                                        className1="text-md text-white"
                                                                        isBold={true}
                                                                    >
                                                                        CONSULT NOW
                                                                    </TextComponent>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                        <View className="h-3" />
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                }
                {/* <BottomSheet
                draggable={false}
                // hasDraggableIcon
                radius={20}
                ref={ref => this.BottomSheet = ref}
                height={getHeight('47%')}>
                <View className="w-full p-5 bg-white">
                    <View className="items-center mt-5 mb-8">
                        <Text className="text-xl font-bold">Online consultation with a doctor</Text>
                    </View>
                    <View className="gap-2">
                        <View className="flex flex-row items-center gap-2">
                            <Octicons name="person" size={30} />
                            <View className="flex flex-row items-center gap-1">
                                <Text className="text-md">Include follow up consulatation in</Text>
                                <Text className="text-md font-bold">7 days.</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center gap-2">
                            <Octicons name="person" size={30} />
                            <View>
                                <Text className="text-md">Secure and private platform.</Text>
                            </View>
                        </View>
                        <View className="flex flex-row items-center gap-2">
                            <Octicons name="person" size={30} />
                            <View>
                                <Text className="text-md">Easy upload and access of reports.</Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity className="flex flex-row justify-between items-center mt-8 w-full rounded-lg bg-red-500 h-18 p-5">
                        <Text className="text-md font-bold text-white">GOT IT, CONTINUE</Text>
                        <Text className="text-md font-bold text-white">Pay ₹400</Text>
                    </TouchableOpacity>
                </View>
            </BottomSheet> */}
            </View >
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
})
