import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, createRef } from 'react'
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
        this.SelectRef = createRef(null)
        this.SelectRef1 = createRef(null)

        this.state = {
            selectLocation: [],
            selectTabLocation: "",
            searchLocationValue: "",

            selectTherapy: [],
            selectTabTherapy: -1,
            searchTherapyValue: "",

            consultMode: [],
            selectTabConsult: "",
            searchConsultValue: "",

            healthConcern: [],
            selectTabHealth: "",
            searchHealthValue: "",

            totalCount: "",
            dynamicArray: [],
            searchName: props.route.params.name,
            searchValue: props.route.params.value,
            newValue: [],

            updateTotalFilter: 0,
            selectedFilters: []
        }
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/locations?sort=id:desc&populate=*')
            .then(async (response) => {
                var count = Object.keys(response.data.data).length;
                // let drop_down_data1 = [];
                for (var i = 0; i < count; i++) {
                    // console.log(response.data.data[i].label)
                    // drop_down_data.push(response.data.data[i].label);
                    await this.state.selectLocation.push(response.data.data[i].label);
                    // this.setState({ drop_down_data });
                }
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/therapies?sort=id:asc&populate[icon2]=*')
            .then(async (response) => {
                await this.setState({ selectTherapy: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/delivery-modes')
            .then(async (response) => {
                await this.setState({ consultMode: response.data.data })
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
            })
            .catch(function (error) {
                console.log(error);
            });

        if (this.state.searchValue === "Health Concern") {
            axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[healthConcerns][label][$eq]=" + this.state.searchName)
                .then(async (response) => {
                    var count = Object.keys(response.data.data).length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (this.state.searchValue === "Therapy") {
            axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[therapy][label][$eq]=" + this.state.searchName)
                .then(async (response) => {
                    var count = Object.keys(response.data.data).length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else if (this.state.searchValue === "Location") {
            console.log("in location");
        }
        else if (this.state.searchValue === "simpleText") {
            // console.log("In other")
        }
    }

    render() {

        const fetchData1 = async (url1) => {
            console.log("url", config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true" + url1);
            await axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true" + url1)
                .then((response) => {
                    var count = response.data.data.length;
                    console.log("My Count", count);
                    this.setState({
                        totalCount: "",
                        dynamicArray: [],
                        totalCount: count,
                        dynamicArray: response.data.data,
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

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
                        var tempUrl = "[healthConcerns][label][$eq]=" + this.state.searchHealthValue;
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

        const onSelectLocation = async (value, i) => {
            var filterName = "LOCATION"
            await this.setState({
                totalCount: "",
                dynamicArray: [],
                selectTabLocation: i,
                searchLocationValue: value,
                searchName: value,
                searchValue: "Location",
                // newValue: 1
            })
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

        const onSelectTherapy = async (i, value) => {
            var filterName = "THERAPY"
            console.log("index", i);
            await this.setState({
                totalCount: "",
                dynamicArray: [],
                selectTabTherapy: i,
                searchTherapyValue: value,
                searchName: value,
                searchValue: "Therapy",
                // newValue: 2
            })
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
            console.log("tab", this.state.selectTabTherapy);
            onSelect()
        }

        const onSelectConsult = async (i, value) => {
            var filterName = "CONSULT"
            await this.setState({
                totalCount: "",
                dynamicArray: [],
                selectTabConsult: i,
                searchConsultValue: value,
                searchName: value,
                searchValue: "Consulting Mode",
                // newValue: 3
            })
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

        const onSelectHealth = async (value, i) => {
            var filterName = "HEALTH"
            await this.setState({
                totalCount: "",
                dynamicArray: [],
                selectTabHealth: i,
                searchHealthValue: value,
                searchName: value,
                searchValue: "Health Concern",
            })
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

        const onClear = () => {
            this.SelectRef.current.reset(),
                this.SelectRef1.current.reset(),
                this.setState({
                    totalCount: "",
                    dynamicArray: [],
                    searchName: "",
                    searchValue: "",
                    searchLocationValue: "",
                    searchTherapyValue: "",
                    searchConsultValue: "",
                    searchHealthValue: "",
                    selectTabTherapy: -1,
                    selectTabConsult: ""
                })
        }

        return (
            <ScrollView>
                <View className="flex w-full h-full bg-white">
                    <View className="mt-8 ml-5 items-center justify-center ml-5 mr-5 p-2 bg-[#5aa272]">
                        <Text className="text-lg font-bold text-white">
                            Total {this.state.totalCount} Doctors found.
                        </Text>
                    </View>
                    <View className="mt-8 ml-5">
                        <View className="flex flex-row justify-between mr-5 items-center">
                            <Text className="text-lg font-bold">Select location</Text>
                            <TouchableOpacity onPress={() => onClear()}>
                                <Text className="text-md text-red-500 font-bold">Clear</Text>
                            </TouchableOpacity>
                        </View>
                        <SelectDropdown
                            ref={this.SelectRef}
                            defaultButtonText='Select location'
                            buttonStyle={styles.dropContent}
                            buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                            // data={countries}
                            data={this.state.selectLocation}
                            dropdownStyle={{ borderRadius: 10 }}
                            dropdownIconPosition="right"
                            onSelect={(selectedItem, index) => onSelectLocation(selectedItem, index)}
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
                    <View className="mt-7 ml-5">
                        <Text className="text-lg font-bold">Select therapy</Text>
                        <View style={styles.therapyView}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                {
                                    this.state.selectTherapy.map((data, index) => {
                                        // console.log("select therapy", index);
                                        return (
                                            <View className="gap-1 items-center" style={{ marginRight: getWidth("3%") }}>
                                                <TouchableOpacity
                                                    className="w-16 h-16 items-center justify-center border-2 rounded-full"
                                                    onPress={() => onSelectTherapy(index, data.label)}
                                                    style={{ borderColor: this.state.selectTabTherapy == index ? Colors.headerColor : Colors.white }}
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
                                                onPress={() => onSelectConsult(index, data.label)}
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
                    <View className="mt-7 ml-5">
                        <Text className="text-lg font-bold">Select health concern</Text>
                        <SelectDropdown
                            ref={this.SelectRef1}
                            defaultButtonText='Select health concern'
                            // defaultValue={'Skin Problems'}
                            buttonStyle={styles.dropContent}
                            buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                            data={this.state.healthConcern}
                            dropdownStyle={{ borderRadius: 10 }}
                            dropdownIconPosition="right"
                            onSelect={(selectedItem, index) => onSelectHealth(selectedItem, index)}
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
                                    this.state.dynamicArray.map((data) => {
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
                                                            <Text className="text-xl font-bold">{data.firstName}</Text>
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