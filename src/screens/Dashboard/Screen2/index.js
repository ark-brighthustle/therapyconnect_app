import { StyleSheet, Text, View, ScrollView, StatusBar, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Slideshow from "react-native-image-slider-show";
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { ImagesContent } from '../../../constants/images';
import { useNavigation } from '@react-navigation/native';

export default class Screen2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    // title: 'Title 1',
                    // caption: 'Caption 1',
                    url: ImagesContent.order_medicine1,
                }, {
                    // title: 'Title 2',
                    // caption: 'Caption 2',
                    url: ImagesContent.wellness_sol1,
                }, {
                    // title: 'Title 3',
                    // caption: 'Caption 3',
                    url: ImagesContent.order_medicine1,
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {

        const { navigation } = this.props;
        const arr = [0, 1, 2, 3]

        return (
            <ScrollView>
                <View className="flex w-full h-full bg-white">
                    <StatusBar barStyle="light-content" />
                    <View className="w-full h-2/2 items-center bg-[#5aa272] rounded-b-3xl p-4">
                        <View className="flex flex-row items-center w-full justify-between">
                            <Feather name="menu" size={35} color={"white"} onPress={() => toggleDrawer()} />
                            <View className="flex flex-row items-center justify-around gap-2">
                                <Text className="text-xl font-bold text-white">Ahmedabad</Text>
                                <Ionicons name="notifications-outline" size={35} color={"white"} />
                            </View>
                        </View>
                        <View className="mt-5 mb-3 w-full flex flex-row rounded-lg">
                            <TextInput
                                className="w-full bg-white rounded-lg p-4"
                                underlineColorAndroid="transparent"
                                placeholder="Search health isuue, doctor..."
                                placeholderTextColor="grey"
                                autoCapitalize="none"
                            />
                            {/* <Image source={ImagesContent.link} className="w-4 h-4" style={styles.searchView} resizeMode='contain' /> */}
                        </View>
                    </View>
                    <View className="bg-white">
                        <View style={{ padding: 15, }}>
                            <Slideshow
                                containerStyle={styles.sliderContainer}
                                dataSource={this.state.dataSource}
                                position={this.state.position}
                                onPositionChanged={position => this.setState({ position })}
                            />
                        </View>
                        <View className="mt-3 pl-5 items-start w-full">
                            <View className="flex flex-row">
                                <Text className="text-2xl font-bold">Popular</Text>
                                <Text className="text-2xl font-bold text-[#5aa272]"> packages</Text>
                            </View>
                            <View className="mt-1">
                                <Text className="text-sm text-grey-50">Private online consultations with verified Doctors</Text>
                            </View>
                        </View>
                        <View className="p-5 gap-3">
                            {
                                arr.map((data) => {
                                    return (
                                        <View className="p-5 items-start  bg-[#F6FAF8] rounded-lg">
                                            <View className="flex flex-row justify-center items-center gap-10">
                                                <Image source={ImagesContent.health_package} className="w-12 h-12" style={{ tintColor: "#5aa272" }} resizeMode='contain' />
                                                <View className="gap-1">
                                                    <Text className="text-xl font-bold">Holistic health package</Text>
                                                    <Text className="text-sm text-grey-100">A care package for all</Text>
                                                </View>
                                            </View>
                                            <View className="flex flex-row items-start mt-6 w-full justify-between">
                                                <View className="gap-1">
                                                    <Text className="text-xl font-bold">₹ 850</Text>
                                                    <Text className="text-sm text-grey-100">At Clinic • Home visit</Text>
                                                </View>
                                                <TouchableOpacity className="bg-[#FF4500] w-32 h-10 rounded-xl items-center justify-center" onPress={() => navigation.navigate('Health Package')}>
                                                    <Text className="text-md font-bold text-white">Explore</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    );
                                })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    scroll: {
        width: getWidth("20%"),
        height: getHeight("")
    }
})