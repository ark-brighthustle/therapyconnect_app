import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component } from 'react'
import TextComponent from '../../../components/TextComponent'
import { Colors } from '../../../constants/colors'
import { getHeight, getWidth } from '../../../components/Dimensions'
import Checkbox from 'expo-checkbox';
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class ConnectAdvisor extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
            name: "",
            address: "",
            contact: "",
            email: "",
            message: "",
            genderValue: "",
            healthConcernValue: "",
            therapyValue: "",
        }
    }

    render() {
        const onCheck = () => {
            this.setState({
                isChecked: !this.state.isChecked
            })
        }

        const onClick = () => {
            console.log("In Click");
            console.log("name ", this.state.name);
            console.log("gender ", this.state.genderValue);
            console.log("address ", this.state.address);
            console.log("contact ", this.state.contact);
            console.log("email ", this.state.email);
            console.log("health concern ", this.state.healthConcernValue);
            console.log("therapy ", this.state.therapyValue);
            console.log("message ", this.state.message);
            console.log("check ", this.state.isChecked);
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
                                <TextInput
                                    style={styles.inputContent}
                                    placeholder='Enter your name'
                                    onChangeText={text => this.setState({ name: text })}
                                    value={this.state.name}
                                />
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
                                                genderValue: selectedItem
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
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Address</TextComponent>
                                <TextInput
                                    style={styles.inputContent}
                                    placeholder='Enter full address'
                                    onChangeText={text => { this.setState({ address: text }) }}
                                    value={this.state.address}
                                />
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Contact Number</TextComponent>
                                <TextInput
                                    style={styles.inputContent}
                                    keyboardType="numeric"
                                    maxLength={10}
                                    placeholder='Enter your contact number'
                                    onChangeText={text => this.setState({ contact: text })}
                                    value={this.state.contact}
                                />
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Email</TextComponent>
                                <TextInput
                                    style={styles.inputContent}
                                    placeholder='Enter your email id'
                                    onChangeText={text => this.setState({ email: text })}
                                    value={this.state.email}
                                />
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
                                                healthConcernValue: selectedItem
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
                                                therapyValue: selectedItem
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
                                </View>
                            </View>
                            <View className="gap-2">
                                <TextComponent className1={"ml-2"}>Message</TextComponent>
                                <TextInput
                                    style={styles.inputContent}
                                    placeholder='Write something...'
                                    onChangeText={text => this.setState({ message: text })}
                                    value={this.state.message}
                                />
                            </View>
                            <View className="flex flex-row gap-5 items-center">
                                <Checkbox
                                    style={styles.checkbox}
                                    value={this.state.isChecked}
                                    onValueChange={() => onCheck()}
                                    color={this.state.isChecked ? '#5ba273' : undefined}
                                />
                                <TextComponent className1={"text-md"}>
                                    I agreed to this terms & conditions
                                </TextComponent>
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
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 10,
        paddingHorizontal: getWidth("5%"),
        paddingVertical: getHeight("1.5%")
    },
    dropContent: {
        marginTop: getHeight("1%"),
        borderWidth: 1,
        borderColor: Colors.black,
        borderRadius: 10,
        width: getWidth("86%"),
        height: getHeight("7%"),
        backgroundColor: Colors.white,
        // padding: 5
    },
})