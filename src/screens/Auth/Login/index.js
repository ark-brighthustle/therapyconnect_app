import { StyleSheet, Text, ImageBackground, Image, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ImagesContent } from '../../../constants/images'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(true);

  const [emailError1, setEmailError1] = useState(false);
  const [emailError2, setEmailError2] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onClick = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    console.log("In onClick");
    if (email == "" || password == "") {
      if (email == "") {
        console.log("Please Enter Email Address.");
        setEmailError1(true);
      }
      else if (password == "") {
        console.log("Please Enter Password.");
        setPasswordError(true);
      }
    }
    else if (reg.test(email) === false) {
      console.log("Please Enter Valid Email Address.");
      setEmailError2(true);
    }
    else {
      console.log("Login Successful.");
      alert("Login Successful.");
      navigation.navigate('AppStack');
    }
  };

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
              <Text className="text-2xl font-bold ">Login</Text>
            </View>
            <View className="h-2/3 w-full justify-center gap-10" style={styles.common}>
              <View>
                <TextInput
                  style={{ borderBottomWidth: 1, width: getWidth("70%") }}
                  placeholder='Enter Email Address'
                  keyboardType='email-address'
                  onChangeText={text => { setEmail(text), setEmailError1(false), setEmailError2(false) }}
                  value={email}
                />
                {emailError1 === true && <Text style={styles.error}> Please Enter Email Address.</Text>}
                {emailError2 === true && <Text style={styles.error}> Please Enter Valid Email Address.</Text>}
              </View>
              <View>
                <View className="flex flex-row justify-between items-center">
                  <TextInput
                    style={{ borderBottomWidth: 1, width: getWidth("70%") }}
                    secureTextEntry={visible}
                    placeholder='Enter Your Password'
                    onChangeText={text => { setPassword(text), setPasswordError(false) }}
                    value={password}
                  />
                  <TouchableOpacity style={{ marginLeft: getWidth("-15%") }} onPress={() => setVisible(!visible)}>
                    <Entypo name={visible === false ? 'eye-with-line' : 'eye'} size={15} />
                  </TouchableOpacity>
                </View>
                {passwordError === true && <Text style={styles.error}> Please Enter Valid Password.</Text>}
              </View>
              <View className="mt-7 items-end">
                <Text className="text-md font-bold text-[#5ba273]" style={{ textDecorationLine: "underline" }}>
                  Forgot Password?
                </Text>
              </View>
              <View style={{ alignItems: "flex-end" }}>
                <TouchableOpacity
                  className="mt-5 items-center h-10 w-20 rounded-3xl bg-[#5ba273] justify-center"
                  onPress={() => onClick()}>
                  <Text className="text-md font-bold text-white">Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Login

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
    // marginRight: getWidth("5%")
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