import { StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import TextComponent from '../../../components/TextComponent'
import { Colors } from '../../../constants/colors'
import { getHeight, getWidth } from '../../../components/Dimensions'
import Checkbox from 'expo-checkbox';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import config from '../../../config'
import Axios from '../../../components/Axios'

export default class ConnectAdvisor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
            checkError: false,
            name: "",
            nameError: false,
            address: "",
            addressError: false,
            contact: "",
            contactError: false,
            contactError2: false,
            email: "",
            emailError: false,
            emailError2: false,
            message: "",
            messageError: false,
            genderValue: "",
            genderError: false,
            healthConcernValue: "",
            healthError: false,
            therapyValue: "",
            therapyError: false,
        }
    }

    render() {
        const onCheck = () => {
            this.setState({
                isChecked: !this.state.isChecked
            })
        }

        const onClick = () => {
            // console.log("In Click");
            // console.log("name ", this.state.name);
            // console.log("gender ", this.state.genderValue);
            // console.log("address ", this.state.address);
            // console.log("contact ", this.state.contact);
            // console.log("email ", this.state.email);
            // console.log("health concern ", this.state.healthConcernValue);
            // console.log("therapy ", this.state.therapyValue);
            // console.log("message ", this.state.message);
            // console.log("check ", this.state.isChecked);

            let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
            if (
                this.state.name == "" ||
                this.state.genderValue == "" ||
                this.state.address == "" ||
                this.state.contact == "" ||
                this.state.email == "" ||
                this.state.healthConcernValue == "" ||
                this.state.therapyValue == "" ||
                this.state.message == "" ||
                this.state.isChecked == false
            ) {
                if (this.state.name == "") {
                    this.setState({
                        nameError: true
                    })
                }
                else if (this.state.genderValue == "") {
                    this.setState({
                        genderError: true
                    })
                }
                else if (this.state.address == "") {
                    this.setState({
                        addressError: true
                    })
                }
                else if (this.state.contact == "") {
                    this.setState({
                        contactError: true
                    })
                }
                else if (this.state.contact.length != 10) {
                    this.setState({
                        contactError2: true
                    })
                }
                else if (this.state.email == "") {
                    this.setState({
                        emailError: true
                    })
                }
                else if (reg.test(this.state.email) === false) {
                    this.setState({
                        emailError2: true
                    })
                }
                else if (this.state.healthConcernValue == "") {
                    this.setState({
                        healthError: true
                    })
                }
                else if (this.state.therapyValue == "") {
                    this.setState({
                        therapyError: true
                    })
                }
                else if (this.state.message == "") {
                    this.setState({
                        messageError: true
                    })
                }
                else if (this.state.isChecked == false) {
                    this.setState({
                        checkError: true
                    })
                }
            }
            else {
                // Axios.post(config.BASE_URL + '/advisor-connects', {
                //     fullname: this.state.name,
                //     gender: this.state.genderValue,
                //     address: this.state.address,
                //     contact: this.state.contact,
                //     email: this.state.email,
                //     healthConcern: this.state.healthConcernValue,
                //     therapy: this.state.therapyValue,
                //     message: this.state.message
                // })
                //     .then(function (response) {
                //         console.log("response", response);
                //         alert("Successfully Registered.")
                //         // navigation.navigate('Login');
                //     })
                //     .catch(function (error) {
                //         console.log("error3", error.response.data);
                //         alert(error.response.data.error.message)
                //     });
            }
        }

        const gender = ["Female", "Male"]
        const health = ["skin problem", "Fever"]
        const therapy = ["Ayurved", "Homeopathy"]

        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="flex w-full h-full bg-white">
                    <View className="p-3 mt-2">
                        <View className="flex flex-row items-center">
                            <TextComponent className1="text-2xl" isSemiBold={true}>Connect to</TextComponent>
                            <TextComponent className1="text-2xl text-[#5aa272]" isSemiBold={true}> Advisor</TextComponent>
                        </View>
                        <View className="p-3 gap-3">
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Full Name</TextComponent>
                                <View>
                                    <TextInput
                                        style={styles.inputContent}
                                        placeholder='Enter your name'
                                        onChangeText={text => this.setState({ name: text, nameError: false })}
                                        value={this.state.name}
                                    />
                                    {this.state.nameError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter Your Full Name.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Gender</TextComponent>
                                <View>
                                    <SelectDropdown
                                        defaultValue={'Select'}
                                        buttonStyle={styles.dropContent}
                                        buttonTextStyle={{ textAlign: "left", color: "grey", fontSize: 14, fontFamily: "Poppins_400Regular" }}
                                        data={gender}
                                        dropdownStyle={{ borderRadius: 10 }}
                                        dropdownIconPosition="right"
                                        onSelect={(selectedItem, index) => {
                                            this.setState({
                                                genderValue: selectedItem,
                                                genderError: false
                                            })
                                        }}
                                        renderDropdownIcon={isOpened => {
                                            return (
                                                <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={13} />
                                            );
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return (
                                                <TextComponent className1={"text-left text-md text-black"}>{selectedItem}</TextComponent>
                                            )
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return (
                                                <TextComponent>{item}</TextComponent>
                                            );
                                        }}
                                    />
                                    {this.state.genderError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please select Gender.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Address</TextComponent>
                                <View>
                                    <TextInput
                                        style={styles.inputContent}
                                        placeholder='Enter full address'
                                        onChangeText={text => { this.setState({ address: text, addressError: false }) }}
                                        value={this.state.address}
                                    />
                                    {this.state.addressError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter Your Full Address.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Contact Number</TextComponent>
                                <View>
                                    <TextInput
                                        style={styles.inputContent}
                                        keyboardType="numeric"
                                        maxLength={10}
                                        placeholder='Enter your contact number'
                                        onChangeText={text => this.setState({ contact: text, contactError: false, contactError2: false })}
                                        value={this.state.contact}
                                    />
                                    {this.state.contactError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter Contact Number.
                                        </TextComponent>
                                    }
                                    {this.state.contactError2 === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter 10 Digits of Contact Number.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Email</TextComponent>
                                <View>
                                    <TextInput
                                        style={styles.inputContent}
                                        placeholder='Enter your email id'
                                        onChangeText={text => this.setState({ email: text, emailError: false, emailError2: false })}
                                        value={this.state.email}
                                    />
                                    {this.state.emailError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter Email Address.
                                        </TextComponent>
                                    }
                                    {this.state.emailError2 === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter Valid Email Address.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Health Concern ?</TextComponent>
                                <View>
                                    <SelectDropdown
                                        defaultValue={'Select'}
                                        buttonStyle={styles.dropContent}
                                        buttonTextStyle={{ textAlign: "left", color: "grey", fontSize: 14, fontFamily: "Poppins_400Regular" }}
                                        data={health}
                                        dropdownStyle={{ borderRadius: 10 }}
                                        dropdownIconPosition="right"
                                        onSelect={(selectedItem, index) => {
                                            this.setState({
                                                healthConcernValue: selectedItem,
                                                healthError: false
                                            })
                                        }}
                                        renderDropdownIcon={isOpened => {
                                            return (
                                                <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={13} />
                                            );
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return (
                                                <TextComponent className1={"text-left text-md text-black"}>{selectedItem}</TextComponent>
                                            )
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return (
                                                <TextComponent>{item}</TextComponent>
                                            );
                                        }}
                                    />
                                    {this.state.healthError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please select Health Concern.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Preferred Therapy ?</TextComponent>
                                <View>
                                    <SelectDropdown
                                        defaultValue={'Select'}
                                        buttonStyle={styles.dropContent}
                                        buttonTextStyle={{ textAlign: "left", color: "grey", fontSize: 14, fontFamily: "Poppins_400Regular" }}
                                        data={therapy}
                                        dropdownStyle={{ borderRadius: 10 }}
                                        dropdownIconPosition="right"
                                        onSelect={(selectedItem, index) => {
                                            this.setState({
                                                therapyValue: selectedItem,
                                                therapyError: false
                                            })
                                        }}
                                        renderDropdownIcon={isOpened => {
                                            return (
                                                <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={13} />
                                            );
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return (
                                                <TextComponent className1={"text-left text-md text-black"}>{selectedItem}</TextComponent>
                                            )
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return (
                                                <TextComponent>{item}</TextComponent>
                                            );
                                        }}
                                    />
                                    {this.state.therapyError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please select Therapy.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Message</TextComponent>
                                <View>
                                    <TextInput
                                        style={styles.inputContent}
                                        placeholder='Write something...'
                                        onChangeText={text => this.setState({ message: text, messageError: false })}
                                        value={this.state.message}
                                    />
                                    {this.state.messageError === true &&
                                        <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                            Please Enter Message.
                                        </TextComponent>
                                    }
                                </View>
                            </View>
                            <View>
                                <View className="flex flex-row gap-5 items-center">
                                    <Checkbox
                                        style={styles.checkbox}
                                        value={this.state.isChecked}
                                        onValueChange={() => { onCheck(), this.setState({ checkError: false }) }}
                                        color={this.state.isChecked ? '#5ba273' : undefined}
                                    />
                                    <TextComponent className1={"text-md"}>
                                        I agreed to this terms & conditions
                                    </TextComponent>
                                </View>
                                {this.state.checkError === true &&
                                    <TextComponent className1={"text-left mt-0.5 ml-1 text-red-500"}>
                                        Please select Terms & Conditions.
                                    </TextComponent>
                                }
                            </View>
                            <TouchableOpacity
                                className="p-4 mt-5 bg-red-500 items-center justify-center rounded-lg"
                                onPress={() => onClick()}
                            >
                                <TextComponent className1={"text-lg text-white"} isBold={true}>Submit Request</TextComponent>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    inputContent: {
        fontFamily: "Poppins_400Regular",
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 10,
        paddingHorizontal: getWidth("5%"),
        paddingVertical: getHeight("1.5%")
    },
    dropContent: {
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 10,
        width: getWidth("86%"),
        height: getHeight("7%"),
        backgroundColor: Colors.white,
    },
})