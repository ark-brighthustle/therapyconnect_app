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
            newValue: []
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
        // else if (this.state.searchValue === "location") {
        //     console.log("in location");
        // }
        else if (this.state.searchValue === "simpleText") {
            // console.log("In other")
        }

        if (this.state.searchValue == "Location" && this.state.searchValue == "Therapy") {
            console.log("you are select location and therapy");
        }
    }

    render() {

        const onSelect = () => {

            var checkArr12 = [1, 2]
            var contain12 = checkArr12.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain12) {
                console.log("you are select location and therapy");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[city]=" + this.state.searchLocationValue + "&filters[therapy][label][$eq]=" + this.state.searchTherapyValue)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            totalCount: count,
                            dynamicArray: response.data.data,
                            searchName: this.state.searchLocationValue + " and " + this.state.searchTherapyValue,
                            searchValue: "Location and Therapy"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr13 = [1, 3]
            var contain13 = checkArr13.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain13) {
                console.log("you are select location and consulting mode");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[city][$eq]=" + this.state.searchLocationValue + "&filters[deliveryModes][label][$eq]=" + this.state.searchConsultValue)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            totalCount: count,
                            dynamicArray: response.data.data,
                            searchName: this.state.searchLocationValue + " and " + this.state.searchConsultValue,
                            searchValue: "Location and Consulting Mode"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr14 = [1, 4]
            var contain14 = checkArr14.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain14) {
                console.log("you are select location and health concern");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[city][$eq]=" + this.state.searchLocationValue + "&filters[healthConcerns][label][$eq]=" + this.state.searchHealthValue)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            totalCount: count,
                            dynamicArray: response.data.data,
                            searchName: this.state.searchLocationValue + " and " + this.state.searchHealthValue,
                            searchValue: "Location and Health Concern"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr23 = [2, 3]
            var contain23 = checkArr23.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain23) {
                console.log("you are select therapy and consulting mode");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[therapy][label][$eq]=" + this.state.searchTherapyValue + "&filters[deliveryModes][label][$eq]=" + this.state.searchConsultValue)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            dynamicArray: response.data.data,
                            totalCount: count,
                            searchName: this.state.searchTherapyValue + " and " + this.state.searchConsultValue,
                            searchValue: "Therapy and Consulting Mode"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr24 = [2, 4]
            var contain24 = checkArr24.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain24) {
                console.log("you are select therapy and health concern");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[therapy][label][$eq]=" + this.state.searchTherapyValue + "&filters[healthConcerns][label][$eq]=" + this.state.healthConcern)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            dynamicArray: response.data.data,
                            totalCount: count,
                            searchName: this.state.searchTherapyValue + " and " + this.state.searchHealthValue,
                            searchValue: "Therapy and Health Concern"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr34 = [3, 4]
            var contain34 = checkArr34.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain34) {
                console.log("you are select consulting mode and health concern");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[deliveryModes][label][$eq]=" + this.state.searchConsultValue + "&filters[healthConcerns][label][$eq]=" + this.state.searchHealthValue)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            dynamicArray: response.data.data,
                            totalCount: count,
                            searchName: this.state.searchConsultValue + " and " + this.state.searchHealthValue,
                            searchValue: "Consulting Mode and Health Concern"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr123 = [1, 2, 3]
            var contain123 = checkArr123.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain123) {
                console.log("you are select location, therapy and consulting mode");
                axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[city][$eq]=" + this.state.searchLocationValue + "&filters[therapy][label][$eq]=" + this.state.searchTherapyValue + "&filters[deliveryModes][label][$eq]=" + this.state.searchConsultValue)
                    .then(async (response) => {
                        var count = Object.keys(response.data.data).length;
                        await this.setState({
                            totalCount: "",
                            dynamicArray: "",
                            dynamicArray: response.data.data,
                            totalCount: count,
                            searchName: this.state.searchLocationValue + " , " + this.state.searchTherapyValue + " and " + this.state.searchConsultValue,
                            searchValue: "Location, Therapy and Consulting Mode"
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

            var checkArr234 = [2, 3, 4]
            var contain234 = checkArr234.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain234) {
                console.log("you are select therapy, consulting mode and health concern");
            }

            var checkArr124 = [1, 2, 4]
            var contain124 = checkArr124.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain124) {
                console.log("you are select location, therapy and health concern");
            }

            var checkArr134 = [1, 3, 4]
            var contain134 = checkArr134.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain134) {
                console.log("you are select location, consulting mode and health concern");
            }

            var checkArr1234 = [1, 2, 3, 4]
            var contain1234 = checkArr1234.every(value => {
                return this.state.newValue.includes(value)
            })
            if (contain1234) {
                console.log("you are select location, therapy, consulting mode and health concern");
            }
        }

        const onSelectLocation = async (value, i) => {
            await this.setState({
                selectTabLocation: i,
                searchLocationValue: value,
                searchName: value,
                searchValue: "Location",
                // newValue: 1
            })

            axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[city][$eq]=" + this.state.searchLocationValue)
                .then(async (response) => {
                    var count = Object.keys(response.data.data).length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.state.newValue.push(1);
            console.log("new Value", this.state.newValue);
            onSelect()
        }

        const onSelectTherapy = async (i, value) => {
            await this.setState({
                selectTabTherapy: i,
                searchTherapyValue: value,
                searchName: value,
                searchValue: "Therapy",
                // newValue: 2
            })

            axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[therapy][label][$eq]=" + this.state.searchTherapyValue)
                .then(async (response) => {
                    var count = Object.keys(response.data.data).length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.state.newValue.push(2);
            console.log("new Value", this.state.newValue);
            onSelect()
        }

        const onSelectConsult = async (i, value) => {
            await this.setState({
                selectTabConsult: i,
                searchConsultValue: value,
                searchName: value,
                searchValue: "Consulting Mode",
                // newValue: 3
            })
            axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[deliveryModes][label][$eq]=" + this.state.searchConsultValue)
                .then(async (response) => {
                    var count = Object.keys(response.data.data).length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.state.newValue.push(3);
            console.log("new Value", this.state.newValue);
            onSelect()
        }

        const onSelectHealth = async (value, i) => {
            await this.setState({
                selectTabHealth: i,
                searchHealthValue: value,
                searchName: value,
                searchValue: "Health Concern",
                // newValue: 4
            })

            axios.get(config.BASE_URL + "/doctor-registerations?populate=*&filters[verified]=true&filters[healthConcerns][label][$eq]=" + this.state.searchHealthValue)
                .then(async (response) => {
                    var count = Object.keys(response.data.data).length;
                    await this.setState({ totalCount: count, dynamicArray: response.data.data })
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.state.newValue.push(4);
            console.log("new Value", this.state.newValue);
            onSelect()
        }

        return (
            <ScrollView>
                <View className="flex w-full h-full bg-white">
                    <View className="mt-8 ml-5 items-center justify-center ml-5 mr-5 p-2 bg-[#5aa272]">
                        <Text className="text-lg font-bold text-white">
                            Total {this.state.totalCount} Doctors found for {this.state.searchName} of {this.state.searchValue}
                        </Text>
                    </View>
                    <View className="mt-8 ml-5">
                        <Text className="text-lg font-bold">Select location</Text>
                        <SelectDropdown
                            // defaultValue={'Ahmedabad'}
                            buttonStyle={styles.dropContent}
                            buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("5%"), fontSize: 16 }}
                            // data={countries}
                            data={this.state.selectLocation}
                            dropdownStyle={{ borderRadius: 10 }}
                            dropdownIconPosition="right"
                            // onSelect={(selectedItem, index) => {
                            //     console.log(selectedItem, index)
                            // }}
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