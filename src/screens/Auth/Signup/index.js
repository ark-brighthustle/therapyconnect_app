import { StyleSheet, ImageBackground, Image, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ImagesContent } from '../../../constants/images'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import SelectDropdown from 'react-native-select-dropdown'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Checkbox from 'expo-checkbox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextComponent from '../../../components/TextComponent'

import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const Signup = ({ navigation }) => {
    const [isChecked, setChecked] = useState(false);
    const countries = ["Yes", "No"]
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [visible, setVisible] = useState(true);

    const [nameError, setNameError] = useState(false);
    const [mobileError1, setMobileError1] = useState(false);
    const [mobileError2, setMobileError2] = useState(false);
    const [emailError1, setEmailError1] = useState(false);
    const [emailError2, setEmailError2] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onClick = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        console.log("In onClick");
        if (name == "" || mobile == "" || email == "" || password == "") {
            if (name == "") {
                console.log("Please Enter Your Full Name.");
                setNameError(true);
            }
            else if (mobile == "") {
                console.log("Please Enter Mobile Number.");
                setMobileError1(true);
            }
            else if (email == "") {
                console.log("Please Enter Email Address.");
                setEmailError1(true);
            }
            else if (password == "") {
                console.log("Please Enter Password.");
                setPasswordError(true);
            }
        }
        else if (mobile.length != 10) {
            console.log("Please Enter 10 Digits of Mobile Number.");
            setMobileError2(true);
        }
        else if (reg.test(email) === false) {
            console.log("Please Enter Valid Email Address.");
            setEmailError2(true);
        }
        else {
            console.log("Successfully Registered.");
            alert("Successfully Registered.");
            navigation.navigate('Login');
        }
    };

    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_600SemiBold,
        Poppins_700Bold,
    });
    if (fontsLoaded) {

        return (
            <KeyboardAwareScrollView
                style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                // contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <View className="w-full h-full bg-[#5ba273]">
                    <ImageBackground source={ImagesContent.splashBack} resizeMode="cover" className="w-full h-full">
                        <View className="overflow-hidden ml-3 mt-6 items-end justify-end" style={styles.container}>
                            <View style={styles.layoutView} />
                        </View>
                        <View style={styles.mainView}>
                            <Image source={ImagesContent.Logo1} resizeMode="contain" className="w-52 h-52" />
                            <View className="items-end mr-5" style={{ marginTop: getHeight("-8%") }}>
                                <TextComponent className1={"text-2xl"} isBold={true}>Signup</TextComponent>
                            </View>
                            <View className="h-2/3 w-full justify-center gap-5" style={styles.common}>
                                <View>
                                    <TextInput
                                        style={{ borderBottomWidth: 1, fontFamily: "Poppins_400Regular" }}
                                        placeholder='Enter Full Name'
                                        onChangeText={text => { setName(text), setNameError(false) }}
                                        value={name}
                                    />
                                    {nameError === true &&
                                        <TextComponent className1={"text-left text-red-500"}>
                                            Please Enter Your Full Name.
                                        </TextComponent>
                                    }
                                </View>
                                <View>
                                    <TextInput
                                        style={{ borderBottomWidth: 1, fontFamily: "Poppins_400Regular" }}
                                        keyboardType="number-pad"
                                        maxLength={10}
                                        placeholder='Enter Mobile Number'
                                        onChangeText={text => { setMobile(text), setMobileError1(false), setMobileError2(false) }}
                                        value={mobile}
                                    />
                                    {mobileError1 === true &&
                                        <TextComponent className1={"text-left text-red-500"}>
                                            Please Enter Phone Number.
                                        </TextComponent>
                                    }
                                    {mobileError2 === true &&
                                        <TextComponent className1={"text-left text-red-500"}>
                                            Please Enter 10 Digit of Phone Number.
                                        </TextComponent>
                                    }
                                </View>
                                <View>
                                    <TextInput
                                        style={{ borderBottomWidth: 1, fontFamily: "Poppins_400Regular" }}
                                        placeholder='Enter Email Address'
                                        keyboardType='email-address'
                                        onChangeText={text => { setEmail(text), setEmailError1(false), setEmailError2(false) }}
                                        value={email}
                                    />
                                    {emailError1 === true &&
                                        <TextComponent className1={"text-left text-red-500"}>
                                            Please Enter Email Address.
                                        </TextComponent>
                                    }
                                    {emailError2 === true &&
                                        <TextComponent className1={"text-left text-red-500"}>
                                            Please Enter Valid Email Address.
                                        </TextComponent>
                                    }
                                </View>
                                <View>
                                    <View className="flex flex-row justify-between items-center">
                                        <TextInput
                                            style={{ borderBottomWidth: 1, width: getWidth("70%"), fontFamily: "Poppins_400Regular" }}
                                            secureTextEntry={visible}
                                            placeholder='Enter Your Password'
                                            onChangeText={text => { setPassword(text), setPasswordError(false) }}
                                            value={password}
                                        />
                                        <TouchableOpacity style={{ marginLeft: getWidth("-15%") }} onPress={() => setVisible(!visible)}>
                                            <Entypo name={visible === false ? 'eye-with-line' : 'eye'} size={15} />
                                        </TouchableOpacity>
                                    </View>
                                    {passwordError === true &&
                                        <TextComponent className1={"text-left text-red-500"}>
                                            Please Enter Valid Password.
                                        </TextComponent>
                                    }
                                </View>
                                <View>
                                    <TextInput
                                        style={{ borderBottomWidth: 1, fontFamily: "Poppins_400Regular" }}
                                        keyboardType="numeric"
                                        maxLength={6}
                                        placeholder='Enter Reference Code (optional)'
                                        onChangeText={text => { setCode(text) }}
                                        value={code}
                                    />
                                </View>
                                <View>
                                    <TextComponent className1={"text-sm"}>
                                        Would you like to nominate yourself for economically weaker section benefit scheme (optional)
                                    </TextComponent>
                                    <SelectDropdown
                                        // defaultValue={'Select'}
                                        buttonStyle={styles.dropContent}
                                        buttonTextStyle={{ textAlign: 'left', marginLeft: getWidth("-2%"), fontSize: 14, fontFamily: "Poppins_400Regular" }}
                                        data={countries}
                                        dropdownStyle={{ marginTop: getHeight("-3%"), borderRadius: 10 }}
                                        dropdownIconPosition="right"
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index)
                                        }}
                                        renderDropdownIcon={isOpened => {
                                            return (
                                                <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={13} />
                                            );
                                        }}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            return (
                                                <TextComponent className1={"text-left text-md text-black"} isBold={true}>{selectedItem}</TextComponent>
                                            )
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            return (
                                                <TextComponent>{item}</TextComponent>
                                            );
                                        }}
                                    />
                                </View>
                                <View className="flex flex-row gap-2 justify-end mt-7 items-center">
                                    <Checkbox
                                        style={styles.checkbox}
                                        value={isChecked}
                                        onValueChange={setChecked}
                                        color={isChecked ? '#5ba273' : undefined}
                                    />
                                    <TextComponent className1={"text-md"}>
                                        Agree with Terms & Conditions
                                    </TextComponent>
                                </View>
                                <View style={{ alignItems: "flex-end" }}>
                                    <TouchableOpacity
                                        className="items-center h-10 w-20 rounded-3xl bg-[#5ba273] justify-center"
                                        onPress={() => onClick()}>
                                        <TextComponent className1={"text-md text-white"} isBold={true}>Signup</TextComponent>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

export default Signup

const styles = StyleSheet.create({
    container: {
        width: getWidth("190%"),
        height: getHeight("110%")
    },
    layoutView: {
        width: getWidth("190%"),
        height: getHeight("92.333333%"),
        borderRadius: 950,
        backgroundColor: Colors.white
    },
    mainView: {
        position: "absolute",
        top: getHeight("10%"),
        left: "25%",
        right: 0,
        bottom: 0
    },
    common: {
        marginTop: getHeight("5%"),
        marginRight: getWidth("5%")
    },
    error: {
        color: Colors.red,
        textAlign: 'left'
    },
    dropContent: {
        // marginTop: getHeight("1%"),
        width: getWidth("70%"),
        height: getHeight("5%"),
        backgroundColor: Colors.white,
        borderBottomWidth: 1,
        borderBottomColor: Colors.black,
        // padding: 5
    },
})