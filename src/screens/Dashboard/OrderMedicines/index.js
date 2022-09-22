import { ScrollView, StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React, { Component } from 'react'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import TextComponent from '../../../components/TextComponent'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AnimatedLoader from 'react-native-animated-loader'
import { ImagesContent } from '../../../constants/images'

class OrderMedicines extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            isLoading: false
        }
    }

    render() {
        const { navigation } = this.props;
        const arr = [
            "https://latice.therapyconnect.in//uploads/dr_reckeweg_r89_lipocol_drops_30_ml_0_1_c61b4deda6.jpeg",
            "https://latice.therapyconnect.in//uploads/dr_reckeweg_r16_cimisan_drops_22_ml_0_6c6fe1209e.jpeg",
            "https://latice.therapyconnect.in//uploads/new_life_nl_2_blood_urea_creatinin_drops_30_ml_0_05d925ce5d.jpeg",
            "https://latice.therapyconnect.in//uploads/dr_reckeweg_r89_lipocol_drops_30_ml_0_1_c61b4deda6.jpeg",
            "https://latice.therapyconnect.in//uploads/dr_reckeweg_r16_cimisan_drops_22_ml_0_6c6fe1209e.jpeg",
            "https://latice.therapyconnect.in//uploads/new_life_nl_2_blood_urea_creatinin_drops_30_ml_0_05d925ce5d.jpeg",
            "https://latice.therapyconnect.in//uploads/dr_reckeweg_r89_lipocol_drops_30_ml_0_1_c61b4deda6.jpeg",
            "https://latice.therapyconnect.in//uploads/dr_reckeweg_r16_cimisan_drops_22_ml_0_6c6fe1209e.jpeg",
            "https://latice.therapyconnect.in//uploads/new_life_nl_2_blood_urea_creatinin_drops_30_ml_0_05d925ce5d.jpeg",
        ]

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
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View className="flex w-full h-full p-5 items-center justify-center">
                                {
                                    arr.map((data, index) => {
                                        return (
                                            <View style={styles.cardView}>
                                                <Image
                                                    className="w-42 h-52 rounded-2xl"
                                                    source={{
                                                        uri: data,
                                                    }}
                                                    resizeMode="contain"
                                                />
                                                <View className="gap-2 p-2 w-full">
                                                    <View>
                                                        <TextComponent className1="text-lg" isMedium={true}>DR. RECKEWEG RECKEWEG R89 LIPOCOL...</TextComponent>
                                                    </View>
                                                    <View>
                                                        <TextComponent className1="text-sm">DR. RECKEWEG RECKEWEG LIPOCOL R89 LIPOCOL...</TextComponent>
                                                    </View>
                                                    <View className="flex flex-row items-center">
                                                        <View className="w-1/2">
                                                            <TouchableOpacity className="rounded-lg p-1 items-center justify-center bg-[#5aa272]">
                                                                <TextComponent className1="text-xs text-white">HOMEOPATHY</TextComponent>
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View className="w-1/2 items-end">
                                                            <TextComponent className1="text-xl" isSemiBold={true}>₹ 285</TextComponent>
                                                        </View>
                                                    </View>
                                                    <View className="flex flex-row w-full items-center justify-between gap-2">
                                                        <View className="flex flex-row items-center">
                                                            <TouchableOpacity
                                                                className="bg-red-500 p-2 items-center justify-center rounded-md"
                                                                onPress={() => { if (this.state.count > 0) { this.setState({ count: this.state.count - 1 }) } }}
                                                            >
                                                                <AntDesign name="minus" size={15} color={"white"} />
                                                            </TouchableOpacity>
                                                            <TextComponent className1="pl-3 pr-3 pt-0.5 pb-0.5 text-xl" isSemiBold={true}> {this.state.count} </TextComponent>
                                                            <TouchableOpacity
                                                                className="bg-red-500 p-2 items-center justify-center rounded-md"
                                                                onPress={() => this.setState({ count: this.state.count + 1 })}
                                                            >
                                                                <AntDesign name="plus" size={15} color={"white"} />
                                                            </TouchableOpacity>
                                                        </View>
                                                        <TouchableOpacity
                                                            className="bg-red-500 p-2 items-center justify-center rounded-xl"
                                                            onPress={() => navigation.navigate('Signup')}
                                                        >
                                                            <TextComponent className1="text-md text-center text-white" isSemiBold={true}>
                                                                Add to Cart
                                                            </TextComponent>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
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

export default OrderMedicines

const styles = StyleSheet.create({
    lottie: {
        width: getWidth("50%"),
        height: getHeight("50%"),
        resizeMode: "cover"
    },
    cardView: {
        height: getHeight("55%"),
        // marginTop: getHeight("1%"),
        marginBottom: getHeight("2%"),
        width: getWidth("90%"),
        padding: getHeight("2%"),
        backgroundColor: Colors.white,
        borderRadius: 15,
        // shadowColor: Colors.shadow,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
})