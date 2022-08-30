import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import config from '../../../config'
import { SvgUri } from 'react-native-svg'

export default class SearchTherapist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectTherapy: [],
            consultMode: [],
            healthConcern: [],
            selectTabTherapy: "",
            selectTabConsult: "",
        }
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/therapies?sort=id:asc&populate[icon2]=*')
            .then((response) => {
                this.setState({ selectTherapy: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/delivery-modes')
            .then((response) => {
                this.setState({ consultMode: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/health-concerns?sort=id:asc&populate[icon]=*&pagination[pageSize]=12')
            .then((response) => {
                this.setState({ healthConcern: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        const countries = ["Ahmedabad", "Surat", "Goa", "Delhi", "Rajkot"]
        // const healthProblem = ["Skin Problems", "Face Problems"]
        const arr1 = [0, 1, 2, 3, 4, 5]

        return (
            <ScrollView>
                <View className="flex w-full h-full bg-white">
                    <View className="mt-8 ml-5">
                        <Text className="text-lg font-bold">Select location</Text>
                        <SelectDropdown
                            defaultValue={'Ahmedabad'}
                            buttonStyle={styles.dropContent}
                            buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                            data={countries}
                            dropdownStyle={{ borderRadius: 10 }}
                            dropdownIconPosition="right"
                            onSelect={(selectedItem, index) => {
                                console.log(selectedItem, index)
                            }}
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
                    <View className="mt-5 ml-5">
                        <Text className="text-lg font-bold">Select therapy</Text>
                        <View style={styles.therapyView}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    this.state.selectTherapy.map((data, index) => {
                                        // console.log("select therapy", data.label);
                                        return (
                                            <View className="gap-1 items-center" style={{ marginRight: getWidth("3%") }}>
                                                <TouchableOpacity
                                                    className="w-16 h-16 items-center justify-center border-2 rounded-full"
                                                    style={{ borderColor: this.state.selectTabTherapy === index ? Colors.headerColor : Colors.white }}
                                                    onPress={() => this.setState({ selectTabTherapy: index })}
                                                >
                                                    <SvgUri
                                                        width="90%"
                                                        height="90%"
                                                        uri={config.IMAGE_URL + data.icon2.url}
                                                    />
                                                </TouchableOpacity>
                                                <View style={{ width: getWidth("22%") }} className="flex items-center">
                                                    <Text className="text-black text-center text-sm">{data.label}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View className="mt-5 ml-5">
                        <Text className="text-lg font-bold">Consulting mode</Text>
                        <View style={styles.therapyView}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    this.state.consultMode.map((data, index) => {
                                        return (
                                            <TouchableOpacity
                                                style={[styles.body, { backgroundColor: this.state.selectTabConsult === index ? Colors.headerColor : Colors.cardColor }]}
                                                onPress={() => this.setState({ selectTabConsult: index })}
                                            >
                                                <Text
                                                    className="text-md font-bold"
                                                    style={{ color: this.state.selectTabConsult === index ? Colors.white : Colors.black }}
                                                >
                                                    {data.label}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                }
                            </ScrollView>
                        </View>
                    </View>
                    <View className="mt-5 ml-5">
                        <Text className="text-lg font-bold">Select health concern</Text>
                        <SelectDropdown
                            defaultValue={'Skin Problems'}
                            buttonStyle={styles.dropContent}
                            buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                            data={this.state.healthConcern.label}
                            dropdownStyle={{ borderRadius: 10 }}
                            dropdownIconPosition="right"
                            onSelect={(selectedItem, index) => {
                                // console.log(selectedItem, index)
                            }}
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
                    <View className="mt-8 bg-[#F6FAF8]">
                        <View className="p-5">
                            <View className="flex flex-row items-center gap-2">
                                <Text className="text-xl font-bold text-[#5aa272]">Recent</Text>
                                <Text className="text-xl font-bold text-black">Therapists</Text>
                            </View>
                            <Text className="text-sm mt-1 font-semibold text-[#99A3A4]">109+ doctors available for online consulatation</Text>
                        </View>
                        <ScrollView>
                            <View className="flex w-full h-full">
                                {
                                    arr1.map((data) => {
                                        return (
                                            <View>
                                                <View className="flex bg-white p-5 h-62" style={styles.borderContent}>
                                                    <View className="flex flex-row items-center gap-10">
                                                        <View className="items-center">
                                                            <View className="w-24 h-24 rounded-full bg-red-500" />
                                                            <TouchableOpacity onPress={() => navigation.navigate('Doctor Info')}>
                                                                <Text className="mt-2 text-md font-bold text-red-500">View Profile</Text>
                                                            </TouchableOpacity>
                                                        </View>
                                                        <View className="w-2/4">
                                                            <Text className="text-xl font-bold">Dr. Mariam Garcia</Text>
                                                            <TouchableOpacity className="mt-1 w-24 rounded-lg h-7 items-center justify-center bg-[#5aa272]">
                                                                <Text className="text-sm font-bold text-white">Allopathic</Text>
                                                            </TouchableOpacity>
                                                            <View className="flex flex-row items-center gap-1 mt-1">
                                                                <Entypo name="location-pin" size={25} color={Colors.headerColor} />
                                                                <Text className="text-md font-bold">4A, SSG Vadodara, Guj.</Text>
                                                            </View>
                                                            <Text className="mt-1 text-md">Allopathic BHMS (Hons), DHMS(Hons), MBBS, MD</Text>
                                                        </View>
                                                    </View>
                                                    <View className="flex flex-row items-center justify-between mt-8">
                                                        <View>
                                                            <Text className="text-sm">Next Available</Text>
                                                            <Text className="text-lg font-bold">10:00 PM, Today</Text>
                                                        </View>
                                                        <TouchableOpacity
                                                            className="flex flex-row justify-between items-center rounded-lg bg-red-500 w-52 ml-2 h-12 p-3"
                                                            onPress={() => { this.BottomSheet.show() }}
                                                        >
                                                            <Text className="text-md font-bold text-white">CONSULT NOW</Text>
                                                            <Text className="text-md font-bold text-white">₹400</Text>
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
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    dropContent: {
        marginTop: getHeight("1%"),
        width: getWidth("90%"),
        height: getHeight("7.5%"),
        borderRadius: 10,
        backgroundColor: Colors.cardColor,
        borderWidth: 1,
        borderColor: Colors.borderColor,
        padding: 5
    },
    therapyView: {
        width: getWidth("92%"),
        flexDirection: "row",
        marginTop: getHeight("2%"),
        alignItems: 'center',
        marginRight: getWidth("10%")
    },
    body: {
        paddingHorizontal: getWidth("7%"),
        paddingVertical: getHeight("1.3%"),
        borderRadius: 20,
        marginRight: getWidth("1.5%")
    },
    borderContent: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderTopColor: Colors.borderColor,
        borderBottomColor: Colors.borderColor
    }
})