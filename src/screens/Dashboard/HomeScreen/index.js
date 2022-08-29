import { Text, View, StatusBar, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { ImagesContent } from '../../../constants/images'
import axios from 'axios'
import config from '../../../config'
import SelectDropdown from 'react-native-select-dropdown'
import { getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            healthConcern: []
        }
        this.setHealthConcern = this.setHealthConcern.bind(this)
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/health-concerns?populate[icon]=*')
            .then((response) => {
                this.setState({ healthConcern: response.data.data })
                // console.log("success", response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    setHealthConcern = (healthConcern) => {
        console.log(healthConcern)
        this.setState({ healthConcern })
    }

    render() {
        const { navigation } = this.props;
        console.log("nav", navigation);
        // let navigation = useNavigation()
        const toggleDrawer = () => {
            navigation.navigate('Screen2');
            console.log("toggleDrawer", navigation);
        };

        const arr = [
            { fn: "Health", ln: "Package", img: ImagesContent.health_package },
            { fn: "Book", ln: "Diagnostics", img: ImagesContent.bookDiagonistics },
            { fn: "Order", ln: "Medicine", img: ImagesContent.order_medicine },
            { fn: "Wellness", ln: "Solution", img: ImagesContent.wellness_sol },
        ]

        const countries = ["Ahmedabad", "Surat", "Goa", "Delhi", "Rajkot"]

        const arr1 = [
            { img: ImagesContent.online_consul, fn: "Online", ln: "Consultation", disc: "Video Audio Chat" },
            { img: ImagesContent.offline_consul, fn: "Offline", ln: "Consultation", disc: "At Clinic Home Visit" },
            { img: ImagesContent.order_medicine1, fn: "Order", ln: "Medicines", disc: "Delivery at doorstep" },
            { img: ImagesContent.book_diag, fn: "Book", ln: "Diagnostics", disc: "Laboratory near you" },
            { img: ImagesContent.wellness_sol1, fn: "Wellness", ln: "Solutions", disc: "History of consistent results" }
        ]
        // bg - [#1da1f2] bg - midnight

        return (
            <ScrollView>
                <View className="flex w-full bg-white h-full items-center">
                    <StatusBar barStyle="light-content" />
                    <View className="w-full h-2/2 items-center bg-[#5aa272] rounded-b-3xl p-4">
                        <View className="flex flex-row items-center w-full justify-between">
                            <Feather name="menu" size={35} color={"white"} />
                            <View className="flex flex-row items-center justify-around gap-2">
                                <SelectDropdown
                                    defaultValue={'Ahmedabad'}
                                    buttonStyle={{ backgroundColor: "" }}
                                    buttonTextStyle={styles.buttonText}
                                    data={countries}
                                    dropdownStyle={styles.dropStyle}
                                    dropdownIconPosition="right"
                                    renderDropdownIcon={isOpened => {
                                        return (
                                            <View>
                                                <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={Colors.white} size={18} />
                                            </View>
                                        );
                                    }}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item
                                    }}
                                />
                                <Ionicons name="notifications-outline" size={35} color={"white"} />
                            </View>
                        </View>
                        <View className="mt-5 w-full flex flex-row items-center rounded-lg bg-white p-4">
                            <Image source={ImagesContent.search} className="w-4 h-4 ml-2 mr-5" style={{ tintColor: "black" }} resizeMode='contain' />
                            <TextInput
                                onPressIn={() => navigation.navigate('Search Therapist')}
                                underlineColorAndroid="transparent"
                                placeholder="Search health isuue, doctor..."
                                placeholderTextColor="grey"
                                autoCapitalize="none"
                            />
                        </View>
                        <View className="flex flex-row pt-5 gap-1">
                            <Text className="text-md font-bold text-white"> Need professional help? </Text>
                            <Text className="text-md font-bold underline decoration-solid text-white"> Connect to our Consultant</Text>
                            <Image source={ImagesContent.link} className="w-4 h-4" resizeMode='contain' />
                        </View>
                        <View className="flex flex-row w-full mt-3 justify-center">
                            {
                                arr.map((data) => {
                                    return (
                                        <TouchableOpacity className="p-3 items-center justify-center" onPress={() => toggleDrawer()}>
                                            <View className="w-16 h-16 rounded-full bg-[#2b4d36] items-center justify-center">
                                                <Image source={data.img} className="w-8 h-8" resizeMode='contain' />
                                            </View>
                                            <Text className="text-white"> {data.fn} </Text>
                                            <Text className="text-white"> {data.ln} </Text>
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </View>
                    </View>
                    <View className="flex w-full items-center bg-white rounded-b-3xl p-4">
                        <View className="flex flex-row items-center w-full justify-between">
                            <View className="flex flex-row">
                                <Text className="text-2xl font-bold">Our</Text>
                                <Text className="text-2xl font-bold text-[#5aa272]"> true services</Text>
                            </View>
                            <Text>SEE ALL</Text>
                        </View>
                        <View className="w-full h-60">
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row' }} className="gap-3 mt-3">
                                    {
                                        arr1.map((data) => {
                                            return (
                                                <View style={[styles.main, { alignItems: 'center' }]}>
                                                    <View>
                                                        <View style={styles.firstView}>
                                                            <Image source={data.img} style={styles.firstView} resizeMode='contain' />
                                                        </View>
                                                        <View style={styles.textView}>
                                                            <Text className="text-sm font-bold text-white">{data.fn}</Text>
                                                            <Text className="text-sm font-bold text-white">{data.ln}</Text>
                                                        </View>
                                                    </View>
                                                    <View className=" items-center w-28 mt-1 justify-center">
                                                        <Text className="text-sm">{data.disc}</Text>
                                                    </View>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View className="flex mt-3 flex-row items-center w-full justify-between">
                            <View className="flex flex-row">
                                <Text className="text-2xl font-bold">Consult top</Text>
                                <Text className="text-2xl font-bold text-[#5aa272]"> therapists</Text>
                            </View>
                            <Text>SEE ALL</Text>
                        </View>
                        <View className="mt-2 mb-4 items-start w-full">
                            <Text className="text-sm text-grey-300">Private online consultations with verified doctors. </Text>
                        </View>
                        <View className="flex flex-row w-full justify-center gap-3" style={{ flexWrap: 'wrap' }}>
                            {
                                this.state.healthConcern.map((data, index) => {
                                    // console.log("my data", data.label);
                                    console.log("my icons", data.icon.url);
                                    return (
                                        <View className="items-center">
                                            <View className="w-20 h-20 rounded-2xl bg-[#2b4d36]">
                                                <Image source={{ uri: config.IMAGE_URL + data.icon.url }} />
                                            </View>
                                            <View style={{ width: 60 }} className="flex items-center">
                                                <Text className="text-black pt-1">{data.label}</Text>
                                            </View>
                                        </View>
                                    );
                                })
                            }
                        </View>
                        <View className="flex mt-5 flex-row items-center w-full justify-between">
                            <View className="flex flex-row">
                                <Text className="text-2xl font-bold">Know Your</Text>
                                <Text className="text-2xl font-bold text-[#5aa272]"> therapy</Text>
                            </View>
                            <Text>SEE ALL</Text>
                        </View>
                        <View className="mt-2 mb-4 items-start w-full">
                            <Text className="text-sm text-grey-300">Choose what suits you </Text>
                        </View>
                        <View className="mt-3 w-full h-54">
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row' }} className="gap-3">
                                    {
                                        arr.map((data) => {
                                            return (
                                                <View style={styles.main}>
                                                    <View style={styles.secondView}>
                                                        <View className="w-20 h-20 rounded-full bg-[#2b4d36]" />
                                                        <Text className="text-lg font-bold text-white mt-4 p-1">Ayurved </Text>
                                                        <Text className="text-md text-white p-1">A holistic healthcare heaing body </Text>
                                                    </View>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                        <View className="flex mt-5 flex-row items-center w-full justify-between">
                            <View className="flex flex-row">
                                <Text className="text-2xl font-bold">Health</Text>
                                <Text className="text-2xl font-bold text-[#5aa272]"> articles</Text>
                            </View>
                            <Text>SEE ALL</Text>
                        </View>
                        <View className="mt-3 w-full h-54">
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row' }} className="gap-3">
                                    {
                                        arr.map((data) => {
                                            return (
                                                <View style={styles.main}>
                                                    <View className="w-56 h-44 bg-red-100" />
                                                    <Text className="w-56 jutify-center p-3">How to choose the right pediatrician: 7 steps</Text>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View >
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        marginTop: "3%",
        padddingHorizontal: "1.2%"
    },
    textView: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        height: "30%",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: "70%",
        left: 0,
        right: 0,
        bottom: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    firstView: {
        width: 120,
        height: 150,
        borderRadius: 20,
        // backgroundColor: 'red'
    },
    secondView: {
        width: 184,
        height: 200,
        borderRadius: 20,
        backgroundColor: '#5aa272',
        padding: 10
    },
    buttonText: {
        textAlign: 'left',
        marginLeft: getWidth("15%"),
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white
    },
    dropStyle: {
        borderRadius: 10,
        width: "40%",
        marginLeft: getWidth("10%")
    }
})