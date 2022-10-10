import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import TextComponent from '../../../components/TextComponent'
import { ImagesContent } from '../../../constants/images'
import AnimatedLoader from 'react-native-animated-loader'

export default class OfflineConsult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            arr: [
                {
                    img: ImagesContent.Clinic,
                    title: "At Clinic",
                    disc: "Connect with health specialist one to one",
                    value: "At Clinic"
                },
                {
                    img: ImagesContent.Home,
                    title: "Home Visit",
                    disc: "Consult with doctors on call or audio note",
                    value: "Home Visit"
                }
            ]
        }
    }
    render() {
        const { navigation } = this.props;
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
                        <ScrollView showsVerticalScrollIndicator={false} >
                            <View className="flex items-center justify-center">
                                {
                                    this.state.arr.map((data) => {
                                        return (
                                            <View style={styles.cardView}>
                                                <Image
                                                    className="w-40 h-40"
                                                    source={data.img}
                                                />
                                                <TextComponent
                                                    className1="text-2xl text-center"
                                                    isSemiBold={true}
                                                >
                                                    {data.title}
                                                </TextComponent>
                                                <TextComponent
                                                    className1="text-md text-center mt-4"
                                                >
                                                    {data.disc}
                                                </TextComponent>
                                                <TouchableOpacity
                                                    className="p-3 bg-red-500 rounded-xl mt-4"
                                                    onPress={() => navigation.navigate('Consultant Physician', { name: data.value, key: data.title })}
                                                >
                                                    <TextComponent
                                                        className1="text-md text-white"
                                                        isSemiBold={true}
                                                    >
                                                        Find Doctor
                                                    </TextComponent>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
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
    },
    cardView: {
        height: getHeight("44%"),
        marginTop: getHeight("3%"),
        marginBottom: getHeight("2%"),
        width: getWidth("86%"),
        padding: getHeight("4%"),
        backgroundColor: Colors.white,
        borderRadius: 15,
        // shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
})