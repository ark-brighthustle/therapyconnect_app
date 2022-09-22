import { StyleSheet, Text, ImageBackground, Image, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ImagesContent } from '../../../constants/images'
import { getHeight, getWidth } from '../../../components/Dimensions'
import { Colors } from '../../../constants/colors'
import Entypo from 'react-native-vector-icons/Entypo'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextComponent from '../../../components/TextComponent'
import { useNavigation } from '@react-navigation/native'

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import axios from 'axios'
import config from '../../../config'

const Login = () => {
  const navigation = useNavigation();
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
      axios.post(config.BASE_URL + '/auth/local', {
        identifier: email,
        password: password,
      })
        .then(function (response) {
          console.log("email", response.data.user.email);
          console.log("password", response.data.user.password);
          alert("Login Successful.");
          navigation.navigate('Root');
        })
        .catch(function (error) {
          console.log("error2", error.response.data);
          console.log("error3", error.response.data.error.message);
          alert(error.response.data.error.message)
        });
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
                <TextComponent className1={"text-2xl"} isBold={true}>Login</TextComponent>
              </View>
              <View className="h-2/3 w-full justify-center gap-10" style={styles.common}>
                <View>
                  <TextInput
                    style={{ borderBottomWidth: 1, width: getWidth("70%"), fontFamily: "Poppins_400Regular" }}
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
                <View className="mt-7 items-end">
                  <TextComponent className1={"text-md text-[#5ba273]"} isBold={true} style={{ textDecorationLine: "underline" }}>
                    Forgot Password?
                  </TextComponent>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                  <TouchableOpacity
                    className="mt-5 items-center h-10 w-20 rounded-3xl bg-[#5ba273] justify-center"
                    onPress={() => onClick()}>
                    <TextComponent className1={"text-md text-white"} isBold={true}>Login</TextComponent>
                  </TouchableOpacity>
                </View>
                <View className="flex flex-row items-center justify-end gap-2">
                  <TextComponent className1={"text-sm"}>
                    Create an account?
                  </TextComponent>
                  <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <TextComponent
                      className1={"ml-1 text-sm underline text-[#5ba273]"}
                      isBold={true}
                    >
                      Signup
                    </TextComponent>
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