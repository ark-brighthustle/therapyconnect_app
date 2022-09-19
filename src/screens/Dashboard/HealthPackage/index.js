import { StyleSheet, Text, View, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Slideshow from "react-native-image-slider-show";
import { ImagesContent } from '../../../constants/images';
import { Colors } from '../../../constants/colors'
import config from '../../../config';
import axios from 'axios';
import { SvgUri } from 'react-native-svg'
import TextComponent from '../../../components/TextComponent';

export default class HealthPackage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            health_package: [],
            dataSource: [
                {
                    url: ImagesContent.order_medicine1,
                }, {
                    // title: 'Title 2',
                    // caption: 'Caption 2',
                    url: ImagesContent.wellness_sol1,
                }, {
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

        axios.get(config.BASE_URL + '/health-packages?sort=id:asc&populate[packageImage]=*')
            .then((response) => {
                this.setState({ health_package: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        const { navigation } = this.props;
        return (
            <ScrollView>
                <View className="flex w-full h-full bg-white">
                    <StatusBar barStyle="light-content" />
                    <View className="bg-white">
                        <View style={{ padding: 15 }}>
                            <Slideshow
                                containerStyle={styles.sliderContainer}
                                dataSource={this.state.dataSource}
                                position={this.state.position}
                                onPositionChanged={position => this.setState({ position })}
                            />
                        </View>
                        <View className="mt-3 pl-5 items-start w-full">
                            <View className="flex flex-row">
                                <TextComponent className1="text-2xl" isSemiBold={true}>Popular</TextComponent>
                                <TextComponent className1="text-2xl text-[#5aa272]" isSemiBold={true}> packages</TextComponent>
                            </View>
                            <View className="mt-1">
                                <TextComponent className1="text-sm text-gray-400">Private online consultations with verified Doctors</TextComponent>
                            </View>
                        </View>
                        <View className="p-5 gap-3">
                            {
                                this.state.health_package.map((data) => {
                                    return (
                                        <View className="p-5 items-start  bg-[#F6FAF8] rounded-lg">
                                            <View className="flex flex-row justify-center items-center gap-7">
                                                <SvgUri
                                                    width="25%"
                                                    height="50%"
                                                    uri={config.IMAGE_URL + data.packageImage.url}
                                                />
                                                <View className="w-3/5 gap-1">
                                                    <TextComponent className1="text-xl" isSemiBold={true}>{data.packageName}</TextComponent>
                                                    <TextComponent className1="text-sm text-gray-500">{data.packageTitle}</TextComponent>
                                                </View>
                                            </View>
                                            <View className="flex flex-row items-center mt-6 w-full justify-between p-2">
                                                <View className="gap-0.5">
                                                    <TextComponent className1="text-xl" isSemiBold={true}>₹ 850</TextComponent>
                                                    <TextComponent className1="text-sm text-gray-500">per month</TextComponent>
                                                </View>
                                                <TouchableOpacity
                                                    className="bg-[#FF4500] w-32 h-10 rounded-xl items-center justify-center"
                                                    onPress={() => navigation.navigate('Package Details', { id: data.id })}
                                                >
                                                    <TextComponent className1="text-md text-white" isSemiBold={true}>Explore</TextComponent>
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
    buttonText: {
        textAlign: 'left',
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white
    },
    dropStyle: {
        borderRadius: 10,
        width: "50%",
    }
})