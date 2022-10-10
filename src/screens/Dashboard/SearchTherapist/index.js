'use strict';
import { ScrollView, StyleSheet, StatusBar, TouchableOpacity, View, Image } from 'react-native'
import React, { Component, createRef } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import config from '../../../config'
import { SvgUri } from 'react-native-svg'
import { ImagesContent } from '../../../constants/images';
import TextComponent from '../../../components/TextComponent';
import AnimatedLoader from 'react-native-animated-loader'

export default class SearchTherapist extends Component {

    constructor(props) {
        super(props)
        this.scrollView = createRef()
        this.SelectRef = createRef(null)
        this.SelectRef1 = createRef(null)

        this.state = {
            isLoading: true,
            valueType: "",
            selectLocation: [],
            selectTabLocation: "",
            searchLocationValue: "Select an option.",

            selectTherapy: [],
            selectTabTherapy: -1,
            searchTherapyValue: "",

            consultMode: [],
            selectTabConsult: "",
            searchConsultValue: "",

            healthConcern: [],
            selectTabHealth: "",
            searchHealthValue: "Select an Option.",

            totalCount: 0,
            dynamicArray: [],
            searchIndex: props.route.params.index,
            searchName: props.route.params.name,
            searchValue: props.route.params.value,
            newValue: [],
            searchFilter: props.route.params.filter,

            updateTotalFilter: 0,
            selectedFilters: []
        }
    }

    apiCall = async (url) => {
        console.log("url", config.BASE_URL + "/doctor-registerations?populate=*" + url);
        await axios.get(config.BASE_URL + "/doctor-registerations?populate=*" + url)
            .then((response) => {
                var count = response.data.data.length;
                console.log("My Count", count);
                this.setState({
                    totalCount: "",
                    dynamicArray: [],
                    totalCount: count,
                    dynamicArray: response.data.data,
                    isLoading: false,
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/locations?sort=id:desc&populate=*')
            .then(async (response) => {
                var count = Object.keys(response.data.data).length;
                for (var i = 0; i < count; i++) {
                    await this.state.selectLocation.push(response.data.data[i].label);
                }
                this.setState({
                    isLoading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/therapies?sort=id:asc&populate[icon2]=*')
            .then(async (response) => {
                await this.setState({
                    selectTherapy: response.data.data,
                    isLoading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/delivery-modes')
            .then(async (response) => {
                await this.setState({
                    consultMode: response.data.data,
                    isLoading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/health-concerns?sort=id:asc&populate[icon]=*&pagination[pageSize]=12')
            .then(async (response) => {
                var count = Object.keys(response.data.data).length;
                for (var i = 0; i < count; i++) {
                    await this.state.healthConcern.push(response.data.data[i].label);
                }
                this.setState({
                    isLoading: false
                })
            })
            .catch(function (error) {
                console.log(error);
            });

        if (this.state.searchValue === "Location") {
            this.setState({
                searchLocationValue: this.state.searchName,
                selectTabLocation: this.state.searchIndex,
            })
        }
        else if (this.state.searchValue === "Health Concern") {
            this.setState({
                searchHealthValue: this.state.searchName,
                selectTabHealth: this.state.searchIndex,
            })
        }
        else if (this.state.searchValue === "Therapy") {
            this.setState({
                searchTherapyValue: this.state.searchName,
                selectTabTherapy: this.state.searchIndex,
            })
        }
        this.apiCall(this.state.searchFilter)
    }

    render() {
        const { navigation } = this.props;

        const fetchData = async (url) => {
            console.log("url", config.BASE_URL + "/doctor-registerations?populate=*" + url);
            await axios.get(config.BASE_URL + "/doctor-registerations?populate=*" + url)
                .then((response) => {
                    var count = response.data.data.length;
                    console.log("My Count", count);
                    this.setState({
                        totalCount: "",
                        dynamicArray: [],
                        totalCount: count,
                        dynamicArray: response.data.data,
                        isLoading: false
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const onSelect = () => {
            var url = "";
            var totalFilter = this.state.selectedFilters
            var filters = []
            if (totalFilter.length > 0) {
                totalFilter.forEach(value => {
                    if (value == "THERAPY") {
                        var tempUrl = "&filters[therapy][label][$eq]=" + this.state.searchTherapyValue;
                        filters.push(tempUrl)
                    }
                    if (value == 'LOCATION') {
                        var tempUrl = "&filters[city][$eq]=" + this.state.searchLocationValue;
                        filters.push(tempUrl)
                    }
                    if (value == 'CONSULT') {
                        var tempUrl = "&filters[deliveryModes][label][$eq]=" + this.state.searchConsultValue;
                        filters.push(tempUrl)
                    }
                    if (value == 'HEALTH') {
                        var tempUrl = "&filters[healthConcerns][label][$eq]=" + this.state.searchHealthValue;
                        filters.push(tempUrl)
                    }
                })
            }
            if (filters.length > 0) {
                var newItem = ""
                filters.forEach((item) => {
                    newItem = newItem + item
                    url = newItem
                })
            }
            fetchData(url)
        }

        const onSelectCommon = async (value, i, filterName) => {
            console.log("My F", filterName);

            if (filterName === "LOCATION") {
                await this.setState({
                    selectTabLocation: i,
                    searchLocationValue: value,
                })
            }
            else if (filterName === "THERAPY") {
                await this.setState({
                    selectTabTherapy: i,
                    searchTherapyValue: value,
                })
            }
            else if (filterName === "CONSULT") {
                await this.setState({
                    selectTabConsult: i,
                    searchConsultValue: value,

                })
                console.log("my b", value);
                if (value === "Video") {
                    this.setState({
                        valueType: "Video Consultation"
                    })
                }
                else if (value === "Audio") {
                    this.setState({
                        valueType: "Audio Consultation"
                    })
                }
                else if (value === "Chat") {
                    this.setState({
                        valueType: "Chat Consultation"
                    })
                }
                else if (value === "At Clinic") {
                    this.setState({
                        valueType: "At Clinic"
                    })
                }
                else if (value === "Home Visit") {
                    this.setState({
                        valueType: "Home Visit"
                    })
                }
            }
            else if (filterName === "HEALTH") {
                await this.setState({
                    selectTabHealth: i,
                    searchHealthValue: value,
                })
            }
            if (this.state.selectedFilters.length > 0) {
                var selectedF = this.state.selectedFilters;
                var isAvailable = 0
                selectedF.forEach((item) => {
                    if (item === filterName) {
                        isAvailable++
                    }
                })
                if (isAvailable !== 1) {
                    this.state.selectedFilters.push(filterName)
                }
            } else {
                this.state.selectedFilters.push(filterName)
            }
            onSelect()
        }

        const onClear = async () => {
            this.SelectRef.current.reset(),
                this.SelectRef1.current.reset(),
                await this.setState({
                    selectedFilters: [],
                    searchLocationValue: "",
                    searchTherapyValue: "",
                    searchConsultValue: "",
                    searchHealthValue: "",
                    selectTabTherapy: -1,
                    selectTabConsult: "",
                })

            await axios.get(config.BASE_URL + '/doctor-registerations?populate=*&filters[verified]=true&_sort[0]=review:desc')
                .then(async (response) => {
                    var count = response.data.data.length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        return (
            <View>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={Colors.headerColor}
                />
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
                        <ScrollView ref={this.scrollView}
                            onContentSizeChange={() => this.scrollView.current.scrollTo({ x: 0, y: 650, animated: true })
                                // this.scrollView.current.scrollToEnd({ animated: true })
                            }
                        >
                            <View className="flex w-full h-full bg-white">
                                <View className="mt-8 ml-5 items-center justify-center ml-5 mr-5 p-2 bg-[#5aa272]">
                                    <TextComponent className1="text-lg text-white" isBold={true}>
                                        Total {this.state.totalCount} Doctors found.
                                    </TextComponent>
                                </View>
                                <View className="mt-8 ml-5">
                                    <View className="flex flex-row justify-between mr-5 items-center">
                                        <TextComponent className1="text-lg" isSemiBold={true}>Select location</TextComponent>
                                        <TouchableOpacity onPress={() => onClear()}>
                                            <TextComponent className1="text-md text-red-500" isBold={true}>Clear</TextComponent>
                                        </TouchableOpacity>
                                    </View>
                                    <SelectDropdown
                                        ref={this.SelectRef}
                                        defaultButtonText={this.state.searchLocationValue != "" && <TextComponent className1={"text-left text-md text-black"}>{this.state.searchLocationValue}</TextComponent>}
                                        buttonStyle={styles.dropContent}
                                        buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                                        // data={countries}
                                        data={this.state.selectLocation}
                                        dropdownStyle={{ borderRadius: 10 }}
                                        dropdownIconPosition="right"
                                        onSelect={(selectedItem, index) => onSelectCommon(selectedItem, index, "LOCATION")}
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
                                <View className="mt-7 ml-5">
                                    <TextComponent className1="text-lg" isSemiBold={true}>Select therapy</TextComponent>
                                    <View style={styles.therapyView}>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            {
                                                this.state.selectTherapy.map((data, index) => {
                                                    // console.log("select therapy", index);
                                                    return (
                                                        <View className="gap-1 items-center" style={{ marginRight: getWidth("3%") }}>
                                                            <TouchableOpacity
                                                                className="w-16 h-16 items-center justify-center border-2 rounded-full"
                                                                onPress={() => onSelectCommon(data.label, index, "THERAPY")}
                                                                style={{ borderColor: this.state.selectTabTherapy == index ? Colors.headerColor : Colors.white }}
                                                            >
                                                                <SvgUri
                                                                    width="90%"
                                                                    height="90%"
                                                                    uri={config.IMAGE_URL + data.icon2.url}
                                                                />
                                                            </TouchableOpacity>
                                                            <View style={{ width: getWidth("26%") }} className="flex items-center">
                                                                <TextComponent className1="text-black text-center text-sm">{data.label}</TextComponent>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                                <View className="mt-5 ml-5">
                                    <TextComponent className1="text-lg" isSemiBold={true}>Consulting mode</TextComponent>
                                    <View style={styles.therapyView}>
                                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                            {
                                                this.state.consultMode.map((data, index) => {
                                                    return (
                                                        <TouchableOpacity
                                                            style={[styles.body, { backgroundColor: this.state.selectTabConsult === index ? Colors.headerColor : Colors.cardColor }]}
                                                            onPress={() => onSelectCommon(data.label, index, "CONSULT")}
                                                        >
                                                            {this.state.selectTabConsult === index ?
                                                                <TextComponent
                                                                    isSemiBold={true}
                                                                    className1="text-md text-white"
                                                                // style={{ color: this.state.selectTabConsult === index ? Colors.white : Colors.black }}
                                                                >
                                                                    {data.label}
                                                                </TextComponent>
                                                                : <TextComponent
                                                                    isSemiBold={true}
                                                                    className1="text-md text-black"
                                                                // style={{ color: this.state.selectTabConsult === index ? Colors.white : Colors.black }}
                                                                >
                                                                    {data.label}
                                                                </TextComponent>
                                                            }
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                        </ScrollView>
                                    </View>
                                </View>
                                <View className="mt-7 ml-5">
                                    <TextComponent className1="text-lg" isSemiBold={true}>Select health concern</TextComponent>
                                    <SelectDropdown
                                        ref={this.SelectRef1}
                                        defaultButtonText={this.state.searchHealthValue != "" && <TextComponent>{this.state.searchHealthValue}</TextComponent>}
                                        // defaultValue={'Skin Problems'}
                                        buttonStyle={styles.dropContent}
                                        buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                                        data={this.state.healthConcern}
                                        dropdownStyle={{ borderRadius: 10 }}
                                        dropdownIconPosition="right"
                                        onSelect={(selectedItem, index) => onSelectCommon(selectedItem, index, "HEALTH")}
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
                                <View className="mt-8 bg-[#F6FAF8]">
                                    <View className="p-5">
                                        <View className="flex flex-row items-center gap-2">
                                            <TextComponent className1="text-xl text-[#5aa272]" isSemiBold={true}>Recent </TextComponent>
                                            <TextComponent className1="text-xl text-black" isSemiBold={true}>Therapists</TextComponent>
                                        </View>
                                        <TextComponent className1="text-sm mt-1 text-[#99A3A4]">{this.state.totalCount} doctors available for {this.state.searchValue}</TextComponent>
                                    </View>
                                    <ScrollView>
                                        <View className="flex w-full h-full">
                                            {
                                                this.state.dynamicArray.map((data) => {
                                                    return (
                                                        <View>
                                                            <View className="flex bg-white p-5 h-62" style={styles.borderContent}>
                                                                <View className="flex flex-row items-center gap-10">
                                                                    <View className="items-center">
                                                                        <View className="w-24 h-24 rounded-full">
                                                                            <Image source={ImagesContent.Logo2} className="w-24 h-24 rounded-full" resizeMode="contain" />
                                                                        </View>
                                                                        <TouchableOpacity onPress={() => navigation.navigate('Doctor Info', { key: data.id })}>
                                                                            <TextComponent className1="mt-2 text-md text-red-500" isSemiBold={true}>View Profile</TextComponent>
                                                                        </TouchableOpacity>
                                                                    </View>
                                                                    <View className="w-2/4">
                                                                        <TextComponent className1="text-xl" isSemiBold={true}>{data.firstName}</TextComponent>
                                                                        <TouchableOpacity className="mt-1 rounded-lg p-1 items-center justify-center bg-[#5aa272]">
                                                                            <TextComponent className1="text-sm text-white" isSemiBold={true}>{data.therapy.label}</TextComponent>
                                                                        </TouchableOpacity>
                                                                        <View className="flex flex-row items-center gap-1 mt-1">
                                                                            <Entypo name="location-pin" size={25} color={Colors.headerColor} />
                                                                            <TextComponent className1="text-md" isSemiBold={true}>{data.city}, {data.state}</TextComponent>
                                                                        </View>
                                                                        <TextComponent className1="mt-2 text-md">{data.degree.label}</TextComponent>
                                                                    </View>
                                                                </View>
                                                                <View className="flex flex-row items-center ml-1.5 justify-between mt-8">
                                                                    <View>
                                                                        <TextComponent className1="text-sm">Starting from</TextComponent>
                                                                        <TextComponent className1="text-lg" isSemiBold={true}>₹{data.deliveryModesFee[2]}</TextComponent>
                                                                    </View>
                                                                    <TouchableOpacity
                                                                        className="flex justify-center items-center rounded-lg bg-red-500 w-48 mr-4 h-12 p-3"
                                                                        onPress={() => navigation.navigate('Slot Patient',
                                                                            {
                                                                                key: data.id,
                                                                                type: this.state.valueType,
                                                                                health: this.state.searchHealthValue,
                                                                                mode: this.state.searchConsultValue
                                                                            }
                                                                        )}
                                                                    >
                                                                        <TextComponent className1="text-md text-white" isSemiBold={true}>CONSULT NOW</TextComponent>
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
        paddingVertical: getHeight("1%"),
        borderRadius: 20,
        marginRight: getWidth("1.5%"),
        alignItems: 'center',
        justifyContent: 'center'
    },
    borderContent: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderTopColor: Colors.borderColor,
        borderBottomColor: Colors.borderColor
    }
})