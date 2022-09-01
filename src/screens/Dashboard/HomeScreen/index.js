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
import { SvgUri } from 'react-native-svg'

export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            searchService: "",
            healthConcern: [],
            searchTherapists: "",
            knowTherapy: [],
            searchTherapy: "",
            healthArticle: [],
            selectLocation: [],
        }
    }

    componentDidMount = () => {
        axios.get(config.BASE_URL + '/locations?sort=id:desc&populate=*')
            .then((response) => {
                var count = Object.keys(response.data.data).length;
                // let drop_down_data1 = [];
                for (var i = 0; i < count; i++) {
                    // console.log(response.data.data[i].label)
                    // drop_down_data.push(response.data.data[i].label);
                    this.state.selectLocation.push(response.data.data[i].label);
                    // this.setState({ drop_down_data });
                }
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

        axios.get(config.BASE_URL + '/therapies?sort=id:asc&populate[icon2]=*')
            .then((response) => {
                this.setState({ knowTherapy: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });

        axios.get(config.BASE_URL + '/blogs?sort=id:asc&populate[thumbnail]=*')
            .then((response) => {
                this.setState({ healthArticle: response.data.data })
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    render() {
        const { navigation } = this.props;
        const toggleDrawer = () => {
            navigation.navigate('Screen2');
        };

        const onSearchSubmit = () => {
            // console.log("My Value", this.state.searchText);
            navigation.navigate('Search Therapist', { name: this.state.searchText, value: "simpleText" });
        }

        // const onSelectService = async (i, value) => {
        //     // console.log("service index", i);
        //     // console.log("service value1", value1);
        //     // console.log("service value2", value2);

        //     // var value = value1 + " " + value2
        //     // console.log("service value", value);

        //     await this.setState({
        //         searchService: value,
        //     })
        //     console.log("search service value", this.state.searchService);
        //     navigation.navigate('Search Therapist', { name: this.state.searchService, value: "consultation" });
        //     // navigation.navigate('Search Therapist', this.state.searchService);

        //     // await this.setState({
        //     //     searchText: this.state.searchService
        //     // })
        //     // console.log("search Text value", this.state.searchText);

        // }

        const onSelectTherapists = async (i, value) => {
            await this.setState({
                searchTherapists: value,
            })
            // console.log("search therapists value", this.state.searchTherapists);
            navigation.navigate('Search Therapist', { name: this.state.searchTherapists, value: "Health Concern" });
        }

        const onSelectTherapy = async (i, value) => {
            await this.setState({
                searchTherapy: value,
            })
            // console.log("search therapy value", this.state.searchTherapy);
            navigation.navigate('Search Therapist', { name: this.state.searchTherapy, value: "Therapy" });
        }

        const arr = [
            { fn: "Health", ln: "Package", img: ImagesContent.health_package },
            { fn: "Book", ln: "Diagnostics", img: ImagesContent.bookDiagonistics },
            { fn: "Order", ln: "Medicine", img: ImagesContent.order_medicine },
            { fn: "Wellness", ln: "Solution", img: ImagesContent.wellness_sol },
        ]

        const arr1 = [
            { img: ImagesContent.online_consul, fn: "Online", ln: "Consultation", disc: "Video Audio Chat" },
            { img: ImagesContent.offline_consul, fn: "Offline", ln: "Consultation", disc: "At Clinic Home Visit" },
            { img: ImagesContent.order_medicine1, fn: "Order", ln: "Medicines", disc: "Delivery at doorstep" },
            { img: ImagesContent.book_diag, fn: "Book", ln: "Diagnostics", disc: "Laboratory near you" },
            { img: ImagesContent.wellness_sol1, fn: "Wellness", ln: "Solutions", disc: "History of consistent results" }
        ]

        return (
            <ScrollView>
                <View className="flex w-full bg-white h-full items-center">
                    <StatusBar barStyle="light-content" />
                    <View className="w-full h-2/2 items-center bg-[#5aa272] rounded-b-3xl p-4">
                        <View className="flex flex-row items-center w-full justify-between">
                            <Feather name="menu" size={35} color={"white"} />
                            <View className="flex flex-row items-center justify-around gap-2">
                                <SelectDropdown
                                    // placeholder={'Surat'}

                                    // defaultValue={'Surat'}
                                    buttonStyle={{ backgroundColor: "" }}
                                    buttonTextStyle={styles.buttonText}
                                    // data={countries}
                                    data={this.state.selectLocation}
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
                                // onPressIn={() => navigation.navigate('Search Therapist')}
                                underlineColorAndroid="transparent"
                                placeholder="Search health isuue, doctor..."
                                placeholderTextColor="grey"
                                autoCapitalize="none"
                                onChangeText={(text) => this.setState({ searchText: text })}
                                value={this.state.searchText}
                                onSubmitEditing={() => onSearchSubmit()}
                            // defaultValue={text}
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
                                        arr1.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    style={[styles.main, { alignItems: 'center' }]}
                                                // onPress={() => onSelectService(index, data.disc)}
                                                >
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
                                                </TouchableOpacity>
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
                        <View className="flex flex-row w-full justify-center gap-2" style={{ flexWrap: 'wrap' }}>
                            {
                                this.state.healthConcern.map((data, index) => {
                                    // console.log("my data", data.label);
                                    // console.log("my icons", data.icon.url);
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
                                            <View style={{ width: 60 }} className="flex items-center">
                                                <Text className="text-black text-center text-sm">{data.label}</Text>
                                            </View>
                                        </TouchableOpacity>
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
                        <View className="mt-3 w-full h-56">
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row' }} className="gap-3">
                                    {
                                        this.state.knowTherapy.map((data, index) => {
                                            return (
                                                <TouchableOpacity
                                                    style={styles.main}
                                                    onPress={() => onSelectTherapy(index, data.label)}
                                                >
                                                    <View style={styles.secondView}>
                                                        <View className="w-20 h-20 justify-center items-center">
                                                            <SvgUri
                                                                width="80%"
                                                                height="80%"
                                                                uri={config.IMAGE_URL + data.icon2.url}
                                                            />
                                                        </View>
                                                        <Text className="text-lg font-bold text-white mt-3 p-1">{data.label}</Text>
                                                        <Text className="text-md text-white p-1">{data.tagline}</Text>
                                                    </View>
                                                </TouchableOpacity>
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
                                        this.state.healthArticle.map((data) => {
                                            return (
                                                <View style={styles.main}>
                                                    <View className="w-56 h-44">
                                                        <Image className="w-56 h-44" source={{ uri: config.IMAGE_URL + data.thumbnail.formats.small.url }} />
                                                    </View>
                                                    <Text className="w-56 jutify-center p-3">{data.title}</Text>
                                                </View>
                                            );
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View >
            </ScrollView >
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
        height: 224,
        borderRadius: 20,
        backgroundColor: '#5aa272',
        padding: 10
    },
    buttonText: {
        textAlign: 'left',
        // marginLeft: getWidth("10%"),
        fontSize: 18,
        fontWeight: "bold",
        color: Colors.white
    },
    dropStyle: {
        borderRadius: 10,
        width: "55%",
        // marginLeft: getWidth("10%")
    }
})