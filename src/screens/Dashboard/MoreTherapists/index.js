import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import axios from 'axios'
import config from '../../../config'
import { SvgUri } from 'react-native-svg'
import TextComponent from '../../../components/TextComponent'
import AnimatedLoader from 'react-native-animated-loader'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { ImagesContent } from '../../../constants/images'

export default class MoreTherapists extends Component {
    constructor(props) {
        super(props)
        this.state = {
            healthConcern: [],
            isLoading: true
        }
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/health-concerns?sort=id:asc&populate[icon]=*')
            .then((response) => {
                this.setState({
                    healthConcern: response.data.data,
                    isLoading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const { navigation } = this.props

        const onSelectTherapists = async (i, value) => {
            await this.setState({
                searchTherapistsIndex: i,
                searchTherapists: value,
            })
            navigation.navigate('Search Therapist', {
                name: this.state.searchTherapists,
                index: this.state.searchTherapistsIndex,
                value: "Health Concern",
                filter: "&filters[healthConcerns][label][$eq]=" + this.state.searchTherapists
            });
        }

        return (
            <View>
                {
                    this.state.isLoading ?
                        <View className="w-full h-full bg-white">
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
                                <View className="p-3 mt-2">
                                    <View className="flex flex-row items-center">
                                        <TextComponent className1="text-2xl" isSemiBold={true}>Consult top</TextComponent>
                                        <TextComponent className1="text-2xl text-[#5aa272]" isSemiBold={true}> therapists</TextComponent>
                                    </View>
                                    <View className="mt-2 mb-4 items-start w-full">
                                        <TextComponent className1="text-sm text-gray-400">Private online consultations with verified doctors.</TextComponent>
                                    </View>
                                </View>
                                <View className="flex flex-row w-full justify-center gap-2" style={{ flexWrap: 'wrap' }}>
                                    {
                                        this.state.healthConcern.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    className="items-center"
                                                    onPress={() => onSelectTherapists(index, data.label)}
                                                >
                                                    <View className="w-20 h-20 items-center justify-center">
                                                        <SvgUri
                                                            width="50%"
                                                            height="50%"
                                                            uri={config.IMAGE_URL + data.icon.url}
                                                        />
                                                    </View>
                                                    <View style={{ width: 79 }} className="flex items-center">
                                                        <TextComponent className1="text-black text-center text-sm">{data.label}</TextComponent>
                                                    </View>
                                                </TouchableOpacity>
                                            );
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
    lottie: {
        width: getWidth("50%"),
        height: getHeight("50%"),
        resizeMode: "cover"
    }
})